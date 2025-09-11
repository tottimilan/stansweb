#!/usr/bin/env python3
"""
Traduce el 50% restante del contenido de la web.
Usa un diccionario ampliado y patrones inteligentes.
"""

import os
import re
import json
from typing import Dict, List, Tuple

class CompleteTranslator:
    def __init__(self):
        self.translations_added = 0
        self.files_processed = 0
        
        # Diccionario ampliado de traducciones
        self.translations = {
            # Términos legales completos
            "Tribunal Supremo": "المحكمة العليا",
            "Tribunal Constitucional": "المحكمة الدستورية",
            "Ministerio de Justicia": "وزارة العدل",
            "Ministerio del Interior": "وزارة الداخلية",
            "Fiscalía General del Estado": "النيابة العامة للدولة",
            "Código Penal": "القانون الجنائي",
            "Ley de Enjuiciamiento Criminal": "قانون الإجراءات الجنائية",
            "Constitución Española": "الدستور الإسباني",
            "Convenio Europeo de Derechos Humanos": "الاتفاقية الأوروبية لحقوق الإنسان",
            "Tribunal Europeo de Derechos Humanos": "المحكمة الأوروبية لحقوق الإنسان",
            "Audiencia Nacional": "المحكمة الوطنية",
            "Juzgado de Instrucción": "محكمة التحقيق",
            "Colegio de Abogados": "نقابة المحامين",
            
            # Derechos y garantías
            "Derechos Fundamentales": "الحقوق الأساسية",
            "Garantías Procesales": "الضمانات الإجرائية",
            "Presunción de Inocencia": "قرينة البراءة",
            "Derecho a la Defensa": "الحق في الدفاع",
            "Derecho a la Tutela Judicial": "الحق في الحماية القضائية",
            "Derecho a la Libertad": "الحق في الحرية",
            "Derecho a la Intimidad": "الحق في الخصوصية",
            "Secreto de las Comunicaciones": "سرية الاتصالات",
            "Inviolabilidad del Domicilio": "حرمة المسكن",
            "Habeas Corpus": "إحضار المحتجز",
            "Recurso de Amparo": "طعن الحماية",
            
            # Procedimientos
            "Detención": "الاحتجاز",
            "Prisión Preventiva": "الحبس الاحتياطي",
            "Libertad Provisional": "الإفراج المؤقت",
            "Fianza": "الكفالة",
            "Medidas Cautelares": "التدابير الاحترازية",
            "Auto de Procesamiento": "قرار الإحالة للمحاكمة",
            "Sentencia": "الحكم",
            "Apelación": "الاستئناف",
            "Casación": "النقض",
            "Revisión": "المراجعة",
            "Indulto": "العفو",
            "Extradición": "تسليم المجرمين",
            "Orden Europea de Detención": "أمر الاعتقال الأوروبي",
            
            # Delitos
            "Delitos contra las Personas": "الجرائم ضد الأشخاص",
            "Delitos contra el Patrimonio": "الجرائم ضد الممتلكات",
            "Delitos contra la Salud Pública": "الجرائم ضد الصحة العامة",
            "Blanqueo de Capitales": "غسل الأموال",
            "Delitos de Odio": "جرائم الكراهية",
            "Terrorismo": "الإرهاب",
            "Tráfico de Drogas": "الاتجار بالمخدرات",
            "Delitos Informáticos": "الجرائم الإلكترونية",
            
            # Frases comunes en blogs
            "Es importante destacar que": "من المهم الإشارة إلى أن",
            "En este sentido": "في هذا السياق",
            "Por lo tanto": "لذلك",
            "Sin embargo": "ومع ذلك",
            "Además": "بالإضافة إلى ذلك",
            "En primer lugar": "أولاً",
            "En segundo lugar": "ثانياً",
            "Por último": "أخيراً",
            "Cabe señalar que": "تجدر الإشارة إلى أن",
            "Es fundamental": "من الأساسي",
            "En caso de": "في حالة",
            "Si usted": "إذا كنت",
            
            # Acciones y verbos
            "Contactar": "اتصل",
            "Consultar": "استشر",
            "Denunciar": "أبلغ",
            "Declarar": "أدلِ بشهادة",
            "Recurrir": "اطعن",
            "Solicitar": "اطلب",
            "Presentar": "قدم",
            "Defender": "دافع",
            "Proteger": "احمِ",
            "Garantizar": "اضمن",
            
            # Tiempo
            "Inmediatamente": "فوراً",
            "En el plazo de": "في غضون",
            "Dentro de": "خلال",
            "horas": "ساعات",
            "días": "أيام",
            "días hábiles": "أيام عمل",
            "meses": "أشهر",
            "años": "سنوات",
            
            # Lugares
            "Comisaría": "مركز الشرطة",
            "Juzgado": "المحكمة",
            "Calabozo": "الزنزانة",
            "Centro de Detención": "مركز الاحتجاز",
            "Sala de Vistas": "قاعة المحكمة",
            
            # Personas
            "Abogado": "محامي",
            "Juez": "قاضي",
            "Fiscal": "المدعي العام",
            "Policía": "شرطة",
            "Detenido": "محتجز",
            "Imputado": "متهم",
            "Acusado": "متهم",
            "Víctima": "ضحية",
            "Testigo": "شاهد",
            "Perito": "خبير",
            
            # Estados y situaciones
            "Urgente": "عاجل",
            "Importante": "مهم",
            "Obligatorio": "إلزامي",
            "Opcional": "اختياري",
            "Favorable": "إيجابي",
            "Desfavorable": "سلبي",
            "En curso": "قيد التنفيذ",
            "Finalizado": "منتهي",
            "Pendiente": "معلق",
            
            # Documentos
            "Denuncia": "بلاغ",
            "Querella": "شكوى",
            "Demanda": "دعوى",
            "Escrito": "مذكرة",
            "Recurso": "طعن",
            "Sentencia": "حكم",
            "Auto": "قرار",
            "Providencia": "أمر",
            "Notificación": "إخطار",
            "Citación": "استدعاء",
            
            # Botones y CTAs
            "Más información": "مزيد من المعلومات",
            "Leer más": "اقرأ المزيد",
            "Ver más": "عرض المزيد",
            "Contacta ahora": "اتصل الآن",
            "Solicita consulta": "اطلب استشارة",
            "Llámanos": "اتصل بنا",
            "Escríbenos": "اكتب لنا",
            "Siguiente": "التالي",
            "Anterior": "السابق",
            "Volver": "رجوع",
            "Compartir": "مشاركة",
            "Descargar": "تحميل",
            "Imprimir": "طباعة"
        }
        
        # Generar claves para traducciones
        self.new_translations = {
            'es': {},
            'ar': {}
        }
    
    def translate_text(self, text: str) -> Tuple[str, str]:
        """Traduce un texto y devuelve la clave y traducción."""
        # Buscar traducción exacta
        if text in self.translations:
            return self.generate_key(text), self.translations[text]
        
        # Traducción parcial para textos largos
        translated = text
        for es, ar in sorted(self.translations.items(), key=lambda x: -len(x[0])):
            if es in translated:
                translated = translated.replace(es, ar)
        
        # Si no cambió mucho, intentar traducción palabra por palabra
        if translated == text:
            words = text.split()
            translated_words = []
            for word in words:
                word_translated = False
                for es, ar in self.translations.items():
                    if word.lower() == es.lower():
                        translated_words.append(ar)
                        word_translated = True
                        break
                if not word_translated:
                    # Convertir números
                    if word.isdigit():
                        arabic_nums = {'0':'٠','1':'١','2':'٢','3':'٣','4':'٤','5':'٥','6':'٦','7':'٧','8':'٨','9':'٩'}
                        translated_word = ''
                        for char in word:
                            translated_word += arabic_nums.get(char, char)
                        translated_words.append(translated_word)
                    else:
                        translated_words.append(word)
            translated = ' '.join(translated_words)
        
        return self.generate_key(text), translated
    
    def generate_key(self, text: str) -> str:
        """Genera una clave única para la traducción."""
        # Crear clave basada en las primeras palabras
        words = re.sub(r'[^a-zA-Z0-9\s]', '', text).split()[:3]
        base = ''.join(word.capitalize() for word in words)
        if not base:
            base = f"text{self.translations_added}"
        
        # Asegurar unicidad
        key = base
        counter = 1
        while key in self.new_translations['es']:
            key = f"{base}{counter}"
            counter += 1
        
        return key
    
    def process_file(self, file_path: str) -> int:
        """Procesa un archivo y actualiza las traducciones."""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes = 0
        
        # Patrón para encontrar texto hardcodeado
        patterns = [
            # Texto JSX entre > y <
            (r'>([^<>{}]+)<', lambda m: f">{{t.common.{self.add_translation(m.group(1).strip())}}}<"),
            # Strings en propiedades (solo ciertos tipos)
            (r'(title|description|label|placeholder):\s*["\']([^"\']+)["\']', 
             lambda m: f"{m.group(1)}: t.common.{self.add_translation(m.group(2).strip())}"),
        ]
        
        for pattern, replacer in patterns:
            matches = list(re.finditer(pattern, content))
            # Procesar de atrás hacia adelante para mantener posiciones
            for match in reversed(matches):
                text = match.group(1) if '>' in pattern else match.group(2)
                text = text.strip()
                
                # Verificar si debe traducirse
                if self.should_translate(text):
                    start = match.start()
                    end = match.end()
                    new_text = replacer(match)
                    content = content[:start] + new_text + content[end:]
                    changes += 1
        
        # Guardar archivo si hubo cambios
        if changes > 0:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
        
        return changes
    
    def should_translate(self, text: str) -> bool:
        """Determina si un texto debe ser traducido."""
        # Criterios para traducir
        if not text or len(text.strip()) < 2:
            return False
        
        # No traducir si ya es una variable
        if text.startswith('t.') or text.startswith('{'):
            return False
        
        # No traducir URLs, emails, etc.
        if any(x in text.lower() for x in ['http', 'www', '@', '.com', '.es', 'mailto:']):
            return False
        
        # No traducir si es solo números o código
        if text.replace(' ', '').replace('.', '').replace(',', '').isdigit():
            return False
        
        # No traducir nombres de archivos o rutas
        if '/' in text or '\\' in text or text.endswith('.tsx') or text.endswith('.ts'):
            return False
        
        # Traducir si contiene letras españolas o palabras comunes
        spanish_indicators = ['a', 'de', 'el', 'la', 'en', 'y', 'que', 'es', 'por', 'para', 'con']
        words = text.lower().split()
        
        # Si tiene caracteres españoles especiales
        if re.search(r'[áéíóúñÁÉÍÓÚÑ]', text):
            return True
        
        # Si tiene palabras españolas comunes
        if any(word in spanish_indicators for word in words):
            return True
        
        # Si es una frase con múltiples palabras y empieza con mayúscula
        if len(words) > 1 and text[0].isupper():
            return True
        
        return False
    
    def add_translation(self, text: str) -> str:
        """Añade una traducción y devuelve la clave."""
        if not text:
            return ""
        
        # Verificar si ya existe
        for key, value in self.new_translations['es'].items():
            if value == text:
                return key
        
        # Generar nueva traducción
        key, arabic = self.translate_text(text)
        
        self.new_translations['es'][key] = text
        self.new_translations['ar'][key] = arabic
        self.translations_added += 1
        
        return key
    
    def update_translations_file(self):
        """Actualiza el archivo de traducciones con las nuevas entradas."""
        trans_file = "src/translations/index.ts"
        
        if not self.new_translations['es']:
            print("No hay nuevas traducciones que agregar")
            return False
        
        with open(trans_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Encontrar donde insertar (después de la última entrada de common)
        # Buscar el patrón de cierre de common en español
        es_insert_pattern = r'(common:\s*\{[^}]+)(}\s*,)'
        es_match = re.search(es_insert_pattern, content, re.DOTALL)
        
        if not es_match:
            print("No se pudo encontrar la sección common en español")
            return False
        
        # Preparar las nuevas traducciones
        new_es = ""
        for key, value in sorted(self.new_translations['es'].items()):
            # Escapar comillas simples
            value_escaped = value.replace("'", "\\'")
            new_es += f",\n      {key}: '{value_escaped}'"
        
        # Insertar en español
        new_content = es_match.group(1) + new_es + "\n    " + es_match.group(2)
        content = content.replace(es_match.group(0), new_content)
        
        # Hacer lo mismo para árabe
        ar_insert_pattern = r'(ar:\s*\{[^}]+common:\s*\{[^}]+)(}\s*,)'
        ar_match = re.search(ar_insert_pattern, content, re.DOTALL)
        
        if ar_match:
            new_ar = ""
            for key, value in sorted(self.new_translations['ar'].items()):
                value_escaped = value.replace("'", "\\'")
                new_ar += f",\n      {key}: '{value_escaped}'"
            
            new_content_ar = ar_match.group(1) + new_ar + "\n    " + ar_match.group(2)
            content = content.replace(ar_match.group(0), new_content_ar)
        
        # Guardar archivo actualizado
        with open(trans_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True

def main():
    print("🌍 TRADUCCIÓN COMPLETA DEL 50% RESTANTE")
    print("=" * 40)
    
    # Cambiar al directorio del proyecto
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    translator = CompleteTranslator()
    
    # Procesar todos los archivos
    directories_to_process = [
        ('src/app/blog', 'Blogs'),
        ('src/app', 'Páginas principales'),
        ('src/components', 'Componentes')
    ]
    
    total_changes = 0
    
    for directory, name in directories_to_process:
        print(f"\n📂 Procesando {name}...")
        dir_changes = 0
        
        for root, dirs, files in os.walk(directory):
            # Saltar directorios no relevantes
            dirs[:] = [d for d in dirs if d not in ['node_modules', '.next']]
            
            for file in files:
                if file.endswith('.tsx') or file.endswith('.ts'):
                    file_path = os.path.join(root, file)
                    
                    # Saltar el archivo de traducciones
                    if 'translations' in file_path:
                        continue
                    
                    changes = translator.process_file(file_path)
                    if changes > 0:
                        translator.files_processed += 1
                        dir_changes += changes
                        print(f"  ✓ {os.path.relpath(file_path, directory)}: {changes} traducciones")
        
        total_changes += dir_changes
        print(f"  Total {name}: {dir_changes} traducciones")
    
    print(f"\n📊 RESUMEN:")
    print(f"  Archivos procesados: {translator.files_processed}")
    print(f"  Total de cambios: {total_changes}")
    print(f"  Traducciones agregadas: {translator.translations_added}")
    
    # Actualizar archivo de traducciones
    if translator.translations_added > 0:
        print("\n📝 Actualizando archivo de traducciones...")
        if translator.update_translations_file():
            print("✅ Archivo de traducciones actualizado")
        else:
            print("❌ Error actualizando traducciones")
            
            # Guardar como backup
            with open('new_translations_backup.json', 'w', encoding='utf-8') as f:
                json.dump(translator.new_translations, f, indent=2, ensure_ascii=False)
            print("📄 Traducciones guardadas en: new_translations_backup.json")
    
    print("\n🎉 TRADUCCIÓN COMPLETADA")
    print("💡 Ejecuta 'npm run build' para verificar")
    
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main())
