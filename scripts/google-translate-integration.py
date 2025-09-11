#!/usr/bin/env python3
"""
Integración con Google Translate para traducir el 50% restante de la web.
Usa la librería googletrans para traducción automática gratuita.
"""

import os
import re
import json
import time
from typing import Dict, List, Tuple

# Intentar importar googletrans
try:
    from googletrans import Translator
except ImportError:
    print("📦 Instalando googletrans...")
    os.system("pip install googletrans==4.0.0rc1")
    from googletrans import Translator

class GoogleTranslateIntegration:
    def __init__(self):
        self.translator = Translator()
        self.translations_cache = {}
        self.translations_added = 0
        self.files_processed = 0
        self.errors = []
        
        # Traducciones que ya tenemos (para no duplicar)
        self.existing_translations = set()
        
        # Nuevas traducciones a agregar
        self.new_translations = {
            'es': {},
            'ar': {}
        }
    
    def translate_text(self, text: str, retries: int = 3) -> str:
        """Traduce texto de español a árabe usando Google Translate."""
        if not text or text in self.translations_cache:
            return self.translations_cache.get(text, text)
        
        for attempt in range(retries):
            try:
                # Pequeña pausa para evitar rate limiting
                time.sleep(0.1)
                
                # Traducir
                result = self.translator.translate(text, src='es', dest='ar')
                translated = result.text
                
                # Guardar en caché
                self.translations_cache[text] = translated
                
                # Mostrar progreso cada 10 traducciones
                if len(self.translations_cache) % 10 == 0:
                    print(f"    📊 {len(self.translations_cache)} traducciones realizadas...")
                
                return translated
                
            except Exception as e:
                if attempt < retries - 1:
                    print(f"    ⚠️ Error traduciendo, reintentando... ({attempt + 1}/{retries})")
                    time.sleep(2)  # Esperar más antes de reintentar
                else:
                    print(f"    ❌ Error final: {str(e)[:50]}")
                    self.errors.append(f"{text[:30]}... - {str(e)}")
                    return f"[AR: {text}]"  # Marcador para traducciones fallidas
    
    def generate_key(self, text: str) -> str:
        """Genera una clave única para la traducción."""
        # Limpiar texto para generar clave
        words = re.sub(r'[^a-zA-Z0-9\s]', '', text).split()[:4]
        
        # Tomar las primeras letras de cada palabra
        if len(words) > 2:
            base = ''.join(word[0].lower() for word in words if word)
        else:
            base = ''.join(words).lower()[:20]
        
        if not base:
            base = f"txt{self.translations_added}"
        
        # Asegurar unicidad
        key = base
        counter = 1
        while key in self.new_translations['es'] or key in self.existing_translations:
            key = f"{base}{counter}"
            counter += 1
        
        return key
    
    def load_existing_translations(self):
        """Carga las traducciones existentes para evitar duplicados."""
        trans_file = "src/translations/index.ts"
        
        try:
            with open(trans_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extraer claves existentes
            key_pattern = r'(\w+):\s*["\']'
            for match in re.finditer(key_pattern, content):
                self.existing_translations.add(match.group(1))
            
            print(f"✅ Cargadas {len(self.existing_translations)} claves existentes")
        except Exception as e:
            print(f"⚠️ Error cargando traducciones existentes: {e}")
    
    def process_file(self, file_path: str) -> int:
        """Procesa un archivo y traduce el contenido hardcodeado."""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            print(f"    ❌ Error leyendo {file_path}: {e}")
            return 0
        
        original_content = content
        changes = 0
        texts_to_translate = []
        
        # Encontrar textos para traducir
        patterns = [
            # Texto JSX entre > y <
            (r'>([^<>{}]+)<', 'jsx'),
            # Strings en propiedades importantes
            (r'(title|description|label|placeholder|excerpt|content):\s*["\']([^"\']+)["\']', 'prop'),
            # Arrays de strings
            (r'["\']([^"\']{10,})["\']', 'string')  # Solo strings largos
        ]
        
        for pattern, ptype in patterns:
            for match in re.finditer(pattern, content):
                if ptype == 'prop':
                    text = match.group(2).strip()
                else:
                    text = match.group(1).strip()
                
                if self.should_translate(text):
                    texts_to_translate.append({
                        'text': text,
                        'match': match,
                        'type': ptype
                    })
        
        # Traducir todos los textos encontrados
        if texts_to_translate:
            print(f"\n  📄 {os.path.basename(file_path)}: {len(texts_to_translate)} textos")
            
            # Procesar de atrás hacia adelante para mantener posiciones
            for item in reversed(texts_to_translate):
                text = item['text']
                
                # Verificar si ya tenemos esta traducción
                existing_key = None
                for key, value in self.new_translations['es'].items():
                    if value == text:
                        existing_key = key
                        break
                
                if existing_key:
                    key = existing_key
                else:
                    # Traducir y generar clave
                    translated = self.translate_text(text)
                    key = self.generate_key(text)
                    
                    self.new_translations['es'][key] = text
                    self.new_translations['ar'][key] = translated
                    self.translations_added += 1
                
                # Reemplazar en el contenido
                match = item['match']
                if item['type'] == 'jsx':
                    new_text = f">{{t.common.{key}}}<"
                    content = content[:match.start()] + new_text + content[match.end():]
                elif item['type'] == 'prop':
                    prop_name = match.group(1)
                    new_text = f"{prop_name}: t.common.{key}"
                    content = content[:match.start()] + new_text + content[match.end():]
                
                changes += 1
        
        # Guardar archivo si hubo cambios
        if changes > 0 and content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            self.files_processed += 1
        
        return changes
    
    def should_translate(self, text: str) -> bool:
        """Determina si un texto debe ser traducido."""
        if not text or len(text.strip()) < 3:
            return False
        
        # No traducir si ya es una variable o código
        if any(text.startswith(x) for x in ['t.', '{', '$', '/', 'http', 'www', '#']):
            return False
        
        # No traducir emails, URLs, etc.
        if any(x in text for x in ['@', '.com', '.es', 'localhost', '://']):
            return False
        
        # No traducir si es solo números o símbolos
        if not re.search(r'[a-zA-ZáéíóúñÁÉÍÓÚÑ]', text):
            return False
        
        # No traducir nombres de archivos o clases CSS
        if any(text.endswith(x) for x in ['.tsx', '.ts', '.js', '.css', '.json']):
            return False
        
        # Traducir si tiene caracteres españoles o es una frase
        has_spanish = re.search(r'[áéíóúñÁÉÍÓÚÑ]', text)
        is_phrase = len(text.split()) > 1
        starts_upper = text[0].isupper() if text else False
        
        return has_spanish or (is_phrase and starts_upper)
    
    def update_translations_file(self):
        """Actualiza el archivo de traducciones con las nuevas entradas."""
        if not self.new_translations['es']:
            print("No hay nuevas traducciones que agregar")
            return False
        
        trans_file = "src/translations/index.ts"
        
        try:
            with open(trans_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Buscar donde insertar las traducciones
            # Encontrar el final de common en español
            es_pattern = r'(common:\s*\{[^}]+)(}\s*,)'
            es_match = re.search(es_pattern, content, re.DOTALL)
            
            if not es_match:
                raise Exception("No se encontró la sección common en español")
            
            # Preparar nuevas traducciones para español
            new_es = ""
            for key, value in sorted(self.new_translations['es'].items()):
                value_escaped = value.replace("'", "\\'").replace("\n", "\\n")
                new_es += f",\n      {key}: '{value_escaped}'"
            
            # Insertar
            new_content = es_match.group(1) + new_es + "\n    " + es_match.group(2)
            content = content.replace(es_match.group(0), new_content)
            
            # Hacer lo mismo para árabe
            ar_pattern = r'(ar:\s*\{[^}]+common:\s*\{[^}]+)(}\s*,)'
            ar_match = re.search(ar_pattern, content, re.DOTALL)
            
            if ar_match:
                new_ar = ""
                for key, value in sorted(self.new_translations['ar'].items()):
                    value_escaped = value.replace("'", "\\'").replace("\n", "\\n")
                    new_ar += f",\n      {key}: '{value_escaped}'"
                
                new_content_ar = ar_match.group(1) + new_ar + "\n    " + ar_match.group(2)
                content = content.replace(ar_match.group(0), new_content_ar)
            else:
                raise Exception("No se encontró la sección common en árabe")
            
            # Guardar
            with open(trans_file, 'w', encoding='utf-8') as f:
                f.write(content)
            
            return True
            
        except Exception as e:
            print(f"❌ Error actualizando traducciones: {e}")
            
            # Guardar backup
            backup_file = 'google_translations_backup.json'
            with open(backup_file, 'w', encoding='utf-8') as f:
                json.dump({
                    'translations': self.new_translations,
                    'total': self.translations_added,
                    'errors': self.errors
                }, f, indent=2, ensure_ascii=False)
            
            print(f"📄 Traducciones guardadas en: {backup_file}")
            return False

def main():
    print("🌍 TRADUCCIÓN AUTOMÁTICA CON GOOGLE TRANSLATE")
    print("=" * 50)
    print("📌 Usando Google Translate API (gratuita)")
    print("⏱️  Esto puede tomar varios minutos...")
    
    # Cambiar al directorio del proyecto
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    translator = GoogleTranslateIntegration()
    
    # Cargar traducciones existentes
    translator.load_existing_translations()
    
    # Directorios a procesar
    directories = [
        ('src/app/blog', 'Blogs', 10),  # Procesar solo primeros 10 blogs como prueba
        ('src/app', 'Páginas', None),
        ('src/components', 'Componentes', None)
    ]
    
    total_changes = 0
    
    for directory, name, limit in directories:
        print(f"\n📂 Procesando {name}...")
        dir_changes = 0
        files_count = 0
        
        for root, dirs, files in os.walk(directory):
            dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', 'api']]
            
            for file in files:
                if file.endswith('.tsx') and not 'layout' in file:
                    if limit and files_count >= limit:
                        break
                    
                    file_path = os.path.join(root, file)
                    
                    # Saltar archivos de sistema
                    if any(skip in file_path for skip in ['translations', '_app', '_document']):
                        continue
                    
                    changes = translator.process_file(file_path)
                    if changes > 0:
                        dir_changes += changes
                        files_count += 1
        
        total_changes += dir_changes
        print(f"  ✅ Total {name}: {dir_changes} traducciones")
    
    print(f"\n📊 RESUMEN:")
    print(f"  Archivos procesados: {translator.files_processed}")
    print(f"  Textos traducidos: {translator.translations_added}")
    print(f"  Total de cambios: {total_changes}")
    print(f"  Errores: {len(translator.errors)}")
    
    # Actualizar archivo de traducciones
    if translator.translations_added > 0:
        print("\n📝 Actualizando archivo de traducciones...")
        if translator.update_translations_file():
            print("✅ Archivo de traducciones actualizado exitosamente")
            
            # Guardar caché de traducciones
            with open('translation_cache.json', 'w', encoding='utf-8') as f:
                json.dump(translator.translations_cache, f, indent=2, ensure_ascii=False)
            print("💾 Caché guardado para futuro uso")
        else:
            print("⚠️ Las traducciones se guardaron en el archivo de backup")
    
    if translator.errors:
        print(f"\n⚠️ Se encontraron {len(translator.errors)} errores:")
        for error in translator.errors[:5]:
            print(f"  - {error}")
    
    print("\n🎉 PROCESO COMPLETADO")
    print("💡 Próximos pasos:")
    print("1. Ejecuta 'npm run build' para verificar")
    print("2. Revisa las traducciones en el sitio")
    print("3. Si todo está bien, procesa el resto de archivos")
    
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main())
