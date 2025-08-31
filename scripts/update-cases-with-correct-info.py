#!/usr/bin/env python3
"""
Script para actualizar casos-procesados.json con información correcta extraída de los DOCX
Siguiendo las reglas establecidas:
- NO copiar información entre 【】
- NO copiar "Enlaces y notas (citas)" - usar enlaces actuales
- NO copiar "SEO y anclas (web)"
- NO copiar "Nota de verificación"
- NO modificar URLs actuales
- Usar camelCase para nombres de secciones
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Any, Optional
import shutil
from datetime import datetime

class CasesUpdater:
    def __init__(self):
        self.base_path = Path(__file__).parent.parent
        self.extracted_path = self.base_path / "scripts" / "extracted_cases"
        self.cases_file = self.base_path / "public" / "casos" / "casos-procesados.json"
        
    def create_backup(self):
        """Crea un backup del archivo actual"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        backup_file = self.cases_file.parent / f"casos-procesados-backup-{timestamp}.json"
        
        try:
            shutil.copy2(self.cases_file, backup_file)
            print(f"✅ Backup creado: {backup_file}")
            return backup_file
        except Exception as e:
            print(f"❌ Error creando backup: {e}")
            return None
        
    def clean_text(self, text: str) -> str:
        """Limpia el texto eliminando contenido entre 【】 y otros elementos no deseados"""
        if not text:
            return ""
        
        # Eliminar contenido entre 【】
        text = re.sub(r'【[^】]*】', '', text)
        
        # Eliminar espacios múltiples y saltos de línea extra
        text = re.sub(r'\s+', ' ', text)
        text = text.strip()
        
        return text
    
    def extract_section_content(self, html_content: str, section_name: str) -> str:
        """Extrae el contenido de una sección específica del HTML"""
        # Buscar la sección en el HTML
        pattern = rf'<h[1-6][^>]*>{section_name}</h[1-6]>.*?(?=<h[1-6]|$)'
        match = re.search(pattern, html_content, re.DOTALL | re.IGNORECASE)
        
        if not match:
            return ""
        
        section_html = match.group(0)
        
        # Extraer solo el texto, eliminando tags HTML
        text = re.sub(r'<[^>]+>', '', section_html)
        
        # Eliminar el título de la sección del contenido
        # Buscar y eliminar el título al inicio del texto
        text = re.sub(rf'^{section_name}\s*', '', text, flags=re.IGNORECASE)
        
        # Para la sección "Imágenes (anexos del expediente)", extraer solo el primer párrafo
        if "imágenes" in section_name.lower():
            # Dividir por saltos de línea y tomar solo el primer párrafo no vacío
            paragraphs = [p.strip() for p in text.split('\n') if p.strip()]
            if paragraphs:
                text = paragraphs[0]
        
        # Limpiar el texto
        return self.clean_text(text)
    
    def load_extracted_case(self, case_number: int) -> Optional[Dict]:
        """Carga un caso extraído por número"""
        # Buscar archivo JSON del caso con diferentes patrones
        patterns = [
            f"CASO_{case_number:02d}_*.json",  # CASO_01_, CASO_02_, etc.
            f"CASO {case_number:02d}*.json",   # CASO 05, CASO 06, etc.
            f"CASO {case_number}*.json"        # CASO 5, CASO 6, etc. (sin cero)
        ]
        
        json_files = []
        for pattern in patterns:
            json_files.extend(list(self.extracted_path.glob(pattern)))
        
        if not json_files:
            print(f"⚠️  No se encontró archivo JSON para el caso {case_number}")
            print(f"   Buscados patrones: {patterns}")
            return None
        
        json_file = json_files[0]
        print(f"   📁 Archivo encontrado: {json_file.name}")
        
        try:
            with open(json_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print(f"❌ Error cargando {json_file}: {e}")
            return None
    
    def clean_resolution_type(self, resolution_type: str) -> str:
        """Limpia el tipo de resolución para que sea solo 'Sobreseimiento'"""
        if not resolution_type:
            return resolution_type
        
        # Convertir a minúsculas para comparación
        resolution_lower = resolution_type.lower()
        
        # Si contiene "sobreseimiento", reemplazar con "Sobreseimiento"
        if "sobreseimiento" in resolution_lower:
            # Reemplazar "Sobreseimiento provisional", "Sobreseimiento libre", etc. con solo "Sobreseimiento"
            cleaned = re.sub(r'sobreseimiento\s+(provisional|libre|definitivo)', 'Sobreseimiento', resolution_type, flags=re.IGNORECASE)
            # Si el texto original era solo "Sobreseimiento provisional", devolver solo "Sobreseimiento"
            if cleaned.lower().strip() == "sobreseimiento":
                return "Sobreseimiento"
            return cleaned
        
        # Si no, devolver el original
        return resolution_type

    def update_case_data(self, case_number: int, current_case: Dict) -> Dict:
        """Actualiza los datos de un caso con información extraída"""
        print(f"📝 Procesando caso {case_number}...")
        
        # Cargar caso extraído
        extracted_case = self.load_extracted_case(case_number)
        if not extracted_case:
            print(f"⚠️  No se pudo cargar el caso {case_number} extraído")
            return current_case
        
        # Obtener secciones ya extraídas (NO HTML)
        sections = extracted_case.get('sections', {})
        if not sections:
            print(f"⚠️  No hay secciones extraídas para el caso {case_number}")
            return current_case
        
        # Limpiar campos relacionados con resolución
        fields_to_clean = ['tipo_resolucion', 'resultado', 'nombre']
        for field in fields_to_clean:
            if field in current_case:
                old_value = current_case[field]
                new_value = self.clean_resolution_type(old_value)
                if old_value != new_value:
                    current_case[field] = new_value
                    print(f"  🔄 Campo '{field}' actualizado: '{old_value}' -> '{new_value}'")
        
        # Eliminar información de fase procesal
        if 'fase_procesal' in current_case:
            old_fase = current_case['fase_procesal']
            current_case['fase_procesal'] = ""
            print(f"  🗑️  Fase procesal eliminada: '{old_fase}' -> ''")
        
        # Mapeo de secciones extraídas a campos camelCase del código
        section_mapping = {
            'Resumen': 'resumen',
            'Hechos': 'hechos', 
            'Estrategia de defensa': 'estrategia',
            'Pruebas clave': 'pruebas',
            'Resolución': 'resolucion',
            'Marco legal': 'marco_legal',
            'Imágenes (anexos del expediente)': 'imagenes'
        }
        
        # Inicializar contenido si no existe
        if 'contenido' not in current_case:
            current_case['contenido'] = {}
        
        # Actualizar contenido de cada sección usando las secciones ya extraídas
        updated_sections = 0
        for extracted_section, camel_case_field in section_mapping.items():
            if extracted_section in sections:
                content = sections[extracted_section]
                if content:
                    # Limpiar el contenido
                    cleaned_content = self.clean_text(content)
                    current_case['contenido'][camel_case_field] = cleaned_content
                    print(f"  ✅ Actualizada sección: {extracted_section} -> {camel_case_field}")
                    updated_sections += 1
                else:
                    print(f"  ⚠️  Sección vacía: {extracted_section}")
            else:
                print(f"  ⚠️  No se encontró sección: {extracted_section}")
        
        # Mantener enlaces actuales (NO actualizar "Enlaces y notas")
        print(f"  🔗 Manteniendo enlaces actuales")
        
        print(f"  📊 Secciones actualizadas: {updated_sections}")
        return current_case
    
    def show_case_comparison(self, case_number: int):
        """Muestra una comparación del caso antes y después (solo para el caso 2)"""
        if case_number != 2:
            return
            
        print(f"\n🔍 COMPARACIÓN DEL CASO {case_number}:")
        print("=" * 60)
        
        # Cargar caso actual
        try:
            with open(self.cases_file, 'r', encoding='utf-8') as f:
                cases_data = json.load(f)
        except Exception as e:
            print(f"❌ Error cargando archivo para comparación: {e}")
            return
        
        current_case = next((c for c in cases_data if c.get('id') == case_number), None)
        if not current_case:
            print(f"❌ No se encontró el caso {case_number} para comparación")
            return
        
        # Mostrar resumen actual
        current_resumen = current_case.get('contenido', {}).get('resumen', '')
        print(f"📄 RESUMEN ACTUAL (primeros 200 caracteres):")
        print(f"   {current_resumen[:200]}...")
        
        # Cargar caso extraído
        extracted_case = self.load_extracted_case(case_number)
        if extracted_case:
            sections = extracted_case.get('sections', {})
            new_resumen = sections.get('Resumen', '')
            print(f"\n📄 RESUMEN EXTRAÍDO (primeros 200 caracteres):")
            print(f"   {new_resumen[:200]}...")
            
            # Verificar si hay contenido entre 【】
            if '【' in new_resumen:
                print(f"\n⚠️  ADVERTENCIA: El contenido extraído contiene referencias 【】")
                print(f"   El script las eliminará automáticamente.")
        
        print("=" * 60)
    
    def update_all_cases(self):
        """Actualiza todos los casos en casos-procesados.json"""
        print("🚀 Iniciando actualización de casos...")
        
        # Crear backup
        backup_file = self.create_backup()
        if not backup_file:
            print("❌ No se pudo crear backup. Abortando...")
            return
        
        # Cargar archivo actual
        try:
            with open(self.cases_file, 'r', encoding='utf-8') as f:
                cases_data = json.load(f)
        except Exception as e:
            print(f"❌ Error cargando {self.cases_file}: {e}")
            return
        
        print(f"📊 Casos encontrados: {len(cases_data)}")
        
        # Mostrar comparación del caso 2
        self.show_case_comparison(2)
        
        # Actualizar cada caso
        updated_count = 0
        for case in cases_data:
            case_id = case.get('id')
            if case_id:
                case = self.update_case_data(case_id, case)
                updated_count += 1
        
        # Guardar archivo actualizado
        try:
            with open(self.cases_file, 'w', encoding='utf-8') as f:
                json.dump(cases_data, f, ensure_ascii=False, indent=2)
            print(f"✅ Archivo actualizado: {self.cases_file}")
            print(f"📈 Casos procesados: {updated_count}")
            print(f"💾 Backup disponible en: {backup_file}")
        except Exception as e:
            print(f"❌ Error guardando archivo: {e}")

def main():
    updater = CasesUpdater()
    updater.update_all_cases()

if __name__ == "__main__":
    main()
