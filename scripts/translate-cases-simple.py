#!/usr/bin/env python3
"""
Script simplificado para traducir automáticamente los casos de STANS ABOGADOS
Versión que no depende de googletrans para evitar problemas de compatibilidad
"""

import json
import os
import re
from pathlib import Path
from typing import Dict, List, Any

class SimpleCaseTranslator:
    def __init__(self):
        self.base_path = Path(__file__).parent.parent
        self.cases_path = self.base_path / "public" / "casos"
        self.translations_path = self.base_path / "src" / "translations"
        
        # Diccionario de traducciones manuales para términos comunes
        self.translation_dict = {
            # Términos legales comunes
            'Absolución': 'البراءة',
            'Sobreseimiento': 'الإيقاف',
            'Condena': 'الإدانة',
            'Libertad provisional': 'الحرية المؤقتة',
            'Prisión': 'السجن',
            'Multa': 'الغرامة',
            'Delito': 'الجريمة',
            'Caso': 'القضية',
            'Juzgado': 'المحكمة',
            'Tribunal': 'المحكمة',
            'Audiencia Nacional': 'المحكمة الوطنية',
            'Juzgado de lo Penal': 'محكمة الجنح',
            'Juzgado de Instrucción': 'محكمة التحقيق',
            
            # Tipos de delitos
            'Robo': 'السرقة',
            'Estafa': 'الاحتيال',
            'Blanqueo': 'غسيل الأموال',
            'Terrorismo': 'الإرهاب',
            'Delitos de odio': 'جرائم الكراهية',
            'Libertad de expresión': 'حرية التعبير',
            'Resistencia a la autoridad': 'مقاومة السلطة',
            'Delitos contra la salud pública': 'الجرائم ضد الصحة العامة',
            'Delitos contra las personas': 'الجرائم ضد الأشخاص',
            'Delitos económicos': 'الجرائم الاقتصادية',
            'Delitos contra el patrimonio': 'الجرائم ضد الممتلكات',
            
            # Resultados
            'Favorable': 'مواتية',
            'Desfavorable': 'غير مواتية',
            'Archivo': 'الأرشيف',
            'Provisional': 'مؤقت',
            'Definitivo': 'نهائي',
            
            # Ubicaciones
            'Madrid': 'مدريد',
            'Jaén': 'خاين',
            'Móstoles': 'موستوليس',
            'Navalcarnero': 'نافالكارنيرو',
            'Pozuelo': 'بوزويلو',
            
            # Términos procesales
            'Procedimiento abreviado': 'الإجراءات المختصرة',
            'Procedimiento ordinario': 'الإجراءات العادية',
            'Medidas cautelares': 'الإجراءات الاحترازية',
            'Fase procesal': 'المرحلة الإجرائية',
            'Recurso': 'الطعن',
            'Apelación': 'الاستئناف',
            'Casación': 'النقض',
            
            # Términos generales
            'Investigación': 'التحقيق',
            'Denuncia': 'الشكوى',
            'Querella': 'الشكوى',
            'Acusación': 'الادعاء',
            'Defensa': 'الدفاع',
            'Abogado': 'المحامي',
            'Cliente': 'العميل',
            'Víctima': 'الضحية',
            'Imputado': 'المتهم',
            'Testigo': 'الشاهد',
            'Prueba': 'الدليل',
            'Sentencia': 'الحكم',
            'Auto': 'القرار',
            'Providencia': 'الأمر',
            'Diligencia': 'الإجراء',
        }
    
    def simple_translate(self, text: str) -> str:
        """Traducción simple basada en diccionario"""
        if not text or text.strip() == '':
            return text
        
        translated_text = text
        
        # Aplicar traducciones del diccionario
        for spanish, arabic in self.translation_dict.items():
            translated_text = translated_text.replace(spanish, arabic)
        
        # Si no se encontraron traducciones, devolver el texto original
        if translated_text == text:
            # Para textos largos, intentar traducir solo las palabras clave
            words = text.split()
            translated_words = []
            for word in words:
                if word in self.translation_dict:
                    translated_words.append(self.translation_dict[word])
                else:
                    translated_words.append(word)
            translated_text = ' '.join(translated_words)
        
        return translated_text
    
    def translate_case_content(self, case: Dict[str, Any]) -> Dict[str, Any]:
        """Traduce el contenido de un caso individual"""
        translated_case = case.copy()
        
        # Traducir campos principales
        fields_to_translate = [
            'nombre', 'delito_principal', 'resultado', 'tipo_resolucion',
            'organo', 'seccion', 'localidad', 'parte', 'medidas_cautelares',
            'observaciones', 'noticias', 'links'
        ]
        
        for field in fields_to_translate:
            if field in translated_case and translated_case[field]:
                translated_case[f"{field}_ar"] = self.simple_translate(translated_case[field])
        
        # Traducir contenido estructurado
        if 'contenido' in translated_case and translated_case['contenido']:
            translated_content = {}
            for section, content in translated_case['contenido'].items():
                if content:
                    translated_content[f"{section}_ar"] = self.simple_translate(content)
            translated_case['contenido_traducciones'] = translated_content
        
        return translated_case
    
    def generate_seo_translations(self, case: Dict[str, Any]) -> Dict[str, Any]:
        """Genera traducciones SEO para el caso"""
        seo_translations = {
            'es': {
                'title': f"{case['nombre']} - STANS ABOGADOS",
                'description': f"Caso {case['nombre']} resuelto por STANS ABOGADOS. {case['resultado']}",
                'keywords': f"{case['delito_principal']}, {case['categoria']}, abogados penalistas, STANS ABOGADOS"
            },
            'ar': {
                'title': f"{case.get('nombre_ar', case['nombre'])} - ستانس أبودادوس",
                'description': f"قضية {case.get('nombre_ar', case['nombre'])} تم حلها بواسطة ستانس أبودادوس. {case.get('resultado_ar', case['resultado'])}",
                'keywords': f"{case.get('delito_principal_ar', case['delito_principal'])}, {case['categoria']}, محامون جنائيون, ستانس أبودادوس"
            }
        }
        return seo_translations
    
    def process_all_cases(self):
        """Procesa todos los casos y genera traducciones"""
        print("🔄 Iniciando traducción de casos...")
        
        # Cargar casos existentes
        cases_file = self.cases_path / "casos-procesados.json"
        if not cases_file.exists():
            print("❌ No se encontró el archivo de casos")
            return
        
        with open(cases_file, 'r', encoding='utf-8') as f:
            cases = json.load(f)
        
        # Traducir cada caso
        translated_cases = []
        for i, case in enumerate(cases):
            print(f"📝 Traduciendo caso {i+1}/{len(cases)}: {case['nombre'][:50]}...")
            translated_case = self.translate_case_content(case)
            translated_case['seo_translations'] = self.generate_seo_translations(translated_case)
            translated_cases.append(translated_case)
        
        # Guardar casos traducidos
        translated_cases_file = self.cases_path / "casos-traducidos.json"
        with open(translated_cases_file, 'w', encoding='utf-8') as f:
            json.dump(translated_cases, f, ensure_ascii=False, indent=2)
        
        print(f"✅ Traducción completada. Guardado en: {translated_cases_file}")
        
        # Generar archivo de traducciones para React
        self.generate_react_translations(translated_cases)
    
    def generate_react_translations(self, cases: List[Dict[str, Any]]):
        """Genera archivo de traducciones para React"""
        print("🔧 Generando traducciones para React...")
        
        # Crear estructura de traducciones
        case_translations = {
            'es': {},
            'ar': {}
        }
        
        for case in cases:
            case_id = str(case['id'])
            
            # Traducciones en español
            case_translations['es'][case_id] = {
                'nombre': case['nombre'],
                'delito_principal': case['delito_principal'],
                'resultado': case['resultado'],
                'tipo_resolucion': case['tipo_resolucion'],
                'organo': case['organo'],
                'seccion': case['seccion'],
                'localidad': case['localidad'],
                'parte': case['parte'],
                'medidas_cautelares': case.get('medidas_cautelares', ''),
                'observaciones': case.get('observaciones', ''),
                'noticias': case.get('noticias', ''),
                'links': case.get('links', ''),
                'contenido': case.get('contenido', {})
            }
            
            # Traducciones en árabe
            case_translations['ar'][case_id] = {
                'nombre': case.get('nombre_ar', case['nombre']),
                'delito_principal': case.get('delito_principal_ar', case['delito_principal']),
                'resultado': case.get('resultado_ar', case['resultado']),
                'tipo_resolucion': case.get('tipo_resolucion_ar', case['tipo_resolucion']),
                'organo': case.get('organo_ar', case['organo']),
                'seccion': case.get('seccion_ar', case['seccion']),
                'localidad': case.get('localidad_ar', case['localidad']),
                'parte': case.get('parte_ar', case['parte']),
                'medidas_cautelares': case.get('medidas_cautelares_ar', case.get('medidas_cautelares', '')),
                'observaciones': case.get('observaciones_ar', case.get('observaciones', '')),
                'noticias': case.get('noticias_ar', case.get('noticias', '')),
                'links': case.get('links_ar', case.get('links', '')),
                'contenido': case.get('contenido_traducciones', {})
            }
        
        # Guardar archivo de traducciones
        translations_file = self.translations_path / "cases.ts"
        with open(translations_file, 'w', encoding='utf-8') as f:
            f.write("// Traducciones de casos generadas automáticamente\n")
            f.write("export const caseTranslations = ")
            f.write(json.dumps(case_translations, ensure_ascii=False, indent=2))
            f.write(";\n")
        
        print(f"✅ Traducciones de React generadas en: {translations_file}")
    
    def generate_url_translations(self, cases: List[Dict[str, Any]]):
        """Genera URLs traducidas para SEO"""
        print("🔗 Generando URLs traducidas...")
        
        url_translations = {}
        
        for case in cases:
            case_id = str(case['id'])
            
            # URL en español
            spanish_url = f"/casos/{case['id']}"
            
            # URL en árabe (usar nombre traducido si está disponible)
            arabic_name = case.get('nombre_ar', case['nombre'])
            # Crear slug en árabe (simplificado)
            arabic_slug = re.sub(r'[^\w\s-]', '', arabic_name).strip().lower()
            arabic_slug = re.sub(r'[-\s]+', '-', arabic_slug)
            arabic_url = f"/ar/casos/{case_id}-{arabic_slug}"
            
            url_translations[case_id] = {
                'es': spanish_url,
                'ar': arabic_url
            }
        
        # Guardar URLs traducidas
        urls_file = self.cases_path / "url-translations.json"
        with open(urls_file, 'w', encoding='utf-8') as f:
            json.dump(url_translations, f, ensure_ascii=False, indent=2)
        
        print(f"✅ URLs traducidas generadas en: {urls_file}")

def main():
    """Función principal"""
    translator = SimpleCaseTranslator()
    
    try:
        translator.process_all_cases()
        print("🎉 Proceso de traducción completado exitosamente!")
    except Exception as e:
        print(f"❌ Error durante la traducción: {e}")

if __name__ == "__main__":
    main()
