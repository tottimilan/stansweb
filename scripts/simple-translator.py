#!/usr/bin/env python3
"""
Traductor simple usando diccionario extenso y patrones.
Solución alternativa que no requiere librerías externas problemáticas.
"""

import os
import re
import json
from typing import Dict, List, Tuple

class SimpleTranslator:
    def __init__(self):
        self.translations_added = 0
        self.files_processed = 0
        
        # Diccionario extenso español -> árabe
        self.dictionary = {
            # === INTERFAZ Y NAVEGACIÓN ===
            "Inicio": "الرئيسية",
            "Contacto": "اتصل بنا",
            "Enviar": "إرسال",
            "Cancelar": "إلغاء",
            "Aceptar": "موافق",
            "Cerrar": "إغلاق",
            "Buscar": "بحث",
            "Siguiente": "التالي",
            "Anterior": "السابق",
            "Volver": "رجوع",
            "Más información": "مزيد من المعلومات",
            "Ver más": "عرض المزيد",
            "Leer más": "اقرأ المزيد",
            "Compartir": "مشاركة",
            "Descargar": "تحميل",
            "Imprimir": "طباعة",
            
            # === CONTENIDO LEGAL PRINCIPAL ===
            "Protección Jurídica Integral": "الحماية القانونية الشاملة",
            "Asistencia Legal Inmediata": "المساعدة القانونية الفورية",
            "Defensa Penal Especializada": "الدفاع الجنائي المتخصص",
            "Garantías Constitucionales": "الضمانات الدستورية",
            "Derechos Procesales": "الحقوق الإجرائية",
            "Recursos Legales": "الموارد القانونية",
            "Asesoría Jurídica": "الاستشارة القانونية",
            "Representación Legal": "التمثيل القانوني",
            
            # === INSTITUCIONES ===
            "Tribunal Supremo": "المحكمة العليا",
            "Tribunal Constitucional": "المحكمة الدستورية",
            "Audiencia Nacional": "المحكمة الوطنية",
            "Audiencia Provincial": "محكمة المقاطعة",
            "Juzgado de Instrucción": "محكمة التحقيق",
            "Juzgado de lo Penal": "المحكمة الجنائية",
            "Ministerio de Justicia": "وزارة العدل",
            "Ministerio del Interior": "وزارة الداخلية",
            "Fiscalía General del Estado": "النيابة العامة للدولة",
            "Colegio de Abogados": "نقابة المحامين",
            "Comisaría de Policía": "مركز الشرطة",
            "Guardia Civil": "الحرس المدني",
            
            # === LEYES Y NORMATIVAS ===
            "Constitución Española": "الدستور الإسباني",
            "Código Penal": "القانون الجنائي",
            "Ley de Enjuiciamiento Criminal": "قانون الإجراءات الجنائية",
            "Ley Orgánica": "القانون الأساسي",
            "Real Decreto": "مرسوم ملكي",
            "Normativa Vigente": "التشريع الساري",
            "Marco Legal": "الإطار القانوني",
            "Legislación Aplicable": "التشريع المعمول به",
            "Jurisprudencia": "السوابق القضائية",
            "Doctrina Legal": "المبادئ القانونية",
            
            # === DERECHOS FUNDAMENTALES ===
            "Derechos Fundamentales": "الحقوق الأساسية",
            "Derecho a la Vida": "الحق في الحياة",
            "Derecho a la Libertad": "الحق في الحرية",
            "Derecho a la Integridad": "الحق في السلامة",
            "Derecho al Honor": "الحق في الشرف",
            "Derecho a la Intimidad": "الحق في الخصوصية",
            "Derecho a la Defensa": "الحق في الدفاع",
            "Derecho a un Juicio Justo": "الحق في محاكمة عادلة",
            "Presunción de Inocencia": "قرينة البراءة",
            "Tutela Judicial Efectiva": "الحماية القضائية الفعالة",
            "No Discriminación": "عدم التمييز",
            
            # === PROCEDIMIENTOS PENALES ===
            "Detención": "الاحتجاز",
            "Arresto": "الاعتقال",
            "Prisión Preventiva": "الحبس الاحتياطي",
            "Libertad Provisional": "الإفراج المؤقت",
            "Libertad con Fianza": "الإفراج بكفالة",
            "Medidas Cautelares": "التدابير الاحترازية",
            "Comparecencia": "المثول",
            "Declaración": "الإفادة",
            "Interrogatorio": "الاستجواب",
            "Instrucción": "التحقيق",
            "Juicio Oral": "المحاكمة الشفوية",
            "Vista": "جلسة المحكمة",
            "Sentencia": "الحكم",
            "Auto": "قرار قضائي",
            "Providencia": "أمر قضائي",
            "Diligencias": "الإجراءات",
            
            # === RECURSOS Y APELACIONES ===
            "Recurso": "طعن",
            "Apelación": "استئناف",
            "Casación": "نقض",
            "Revisión": "مراجعة",
            "Reforma": "إصلاح",
            "Súplica": "التماس",
            "Queja": "شكوى",
            "Amparo": "حماية",
            "Habeas Corpus": "إحضار المحتجز",
            
            # === DELITOS ===
            "Delito": "جريمة",
            "Delito Grave": "جناية",
            "Delito Menos Grave": "جنحة",
            "Falta": "مخالفة",
            "Delitos contra las Personas": "الجرائم ضد الأشخاص",
            "Homicidio": "القتل",
            "Asesinato": "القتل العمد",
            "Lesiones": "الإصابات",
            "Amenazas": "التهديدات",
            "Coacciones": "الإكراه",
            "Delitos contra el Patrimonio": "الجرائم ضد الممتلكات",
            "Robo": "السرقة",
            "Hurto": "السرقة البسيطة",
            "Estafa": "الاحتيال",
            "Apropiación Indebida": "الاختلاس",
            "Blanqueo de Capitales": "غسل الأموال",
            "Delitos contra la Salud Pública": "الجرائم ضد الصحة العامة",
            "Tráfico de Drogas": "الاتجار بالمخدرات",
            "Delitos de Odio": "جرائم الكراهية",
            "Terrorismo": "الإرهاب",
            
            # === PENAS Y MEDIDAS ===
            "Pena": "عقوبة",
            "Condena": "إدانة",
            "Absolución": "براءة",
            "Multa": "غرامة",
            "Inhabilitación": "الحرمان من الحقوق",
            "Trabajos Comunitarios": "الخدمة المجتمعية",
            "Libertad Condicional": "الإفراج المشروط",
            "Suspensión de Condena": "وقف تنفيذ العقوبة",
            "Indulto": "العفو",
            "Prescripción": "التقادم",
            
            # === ACTORES JURÍDICOS ===
            "Abogado": "محامي",
            "Abogado Defensor": "محامي الدفاع",
            "Abogado de Oficio": "محامي عام",
            "Procurador": "وكيل قضائي",
            "Juez": "قاضي",
            "Magistrado": "قاضي محكمة عليا",
            "Fiscal": "المدعي العام",
            "Secretario Judicial": "أمين المحكمة",
            "Policía": "شرطة",
            "Policía Nacional": "الشرطة الوطنية",
            "Policía Local": "الشرطة المحلية",
            "Guardia Civil": "الحرس المدني",
            "Perito": "خبير",
            "Testigo": "شاهد",
            "Víctima": "ضحية",
            "Acusado": "متهم",
            "Imputado": "مشتبه به",
            "Procesado": "محال للمحاكمة",
            "Condenado": "مدان",
            
            # === LUGARES ===
            "Juzgado": "المحكمة",
            "Tribunal": "محكمة",
            "Comisaría": "مركز الشرطة",
            "Calabozo": "زنزانة",
            "Centro Penitenciario": "مركز إصلاحي",
            "Cárcel": "سجن",
            "Prisión": "سجن",
            "Sala de Vistas": "قاعة المحكمة",
            "Despacho": "مكتب",
            
            # === DOCUMENTOS ===
            "Denuncia": "بلاغ",
            "Querella": "شكوى جنائية",
            "Demanda": "دعوى",
            "Escrito de Defensa": "مذكرة دفاع",
            "Escrito de Acusación": "لائحة اتهام",
            "Atestado Policial": "محضر الشرطة",
            "Informe Pericial": "تقرير الخبير",
            "Acta": "محضر",
            "Notificación": "إخطار",
            "Citación": "استدعاء",
            "Emplazamiento": "تبليغ",
            "Requerimiento": "إنذار",
            "Mandamiento": "أمر",
            "Oficio": "مراسلة رسمية",
            "Testimonio": "شهادة",
            "Certificado": "شهادة",
            
            # === TIEMPO Y PLAZOS ===
            "Inmediatamente": "فوراً",
            "Urgente": "عاجل",
            "En el plazo de": "في غضون",
            "Dentro de": "خلال",
            "Plazo": "مهلة",
            "Término": "أجل",
            "Prórroga": "تمديد",
            "Caducidad": "انتهاء الصلاحية",
            "horas": "ساعات",
            "días": "أيام",
            "días hábiles": "أيام عمل",
            "días naturales": "أيام تقويمية",
            "meses": "أشهر",
            "años": "سنوات",
            
            # === FRASES COMUNES ===
            "Es importante": "من المهم",
            "Es fundamental": "من الأساسي",
            "Es necesario": "من الضروري",
            "Es obligatorio": "إلزامي",
            "Es recomendable": "يُنصح",
            "Debe tener en cuenta": "يجب أن تأخذ في الاعتبار",
            "En caso de": "في حالة",
            "Si usted": "إذا كنت",
            "Para más información": "لمزيد من المعلومات",
            "No dude en contactarnos": "لا تتردد في الاتصال بنا",
            
            # === ESTADOS Y SITUACIONES ===
            "Disponible": "متاح",
            "No disponible": "غير متاح",
            "En proceso": "قيد المعالجة",
            "Completado": "مكتمل",
            "Pendiente": "معلق",
            "Aprobado": "موافق عليه",
            "Rechazado": "مرفوض",
            "Favorable": "إيجابي",
            "Desfavorable": "سلبي",
            "En curso": "جاري",
            "Finalizado": "منتهي",
            "Archivado": "مؤرشف",
            "Sobreseído": "مُسقط",
            
            # === SERVICIOS LEGALES ===
            "Consulta Gratuita": "استشارة مجانية",
            "Primera Consulta": "الاستشارة الأولى",
            "Asesoramiento Legal": "المشورة القانونية",
            "Asistencia Jurídica": "المساعدة القضائية",
            "Representación en Juicio": "التمثيل في المحكمة",
            "Defensa Penal": "الدفاع الجنائي",
            "Recurso de Apelación": "طعن بالاستئناف",
            "Tramitación de Expedientes": "معالجة الملفات",
            "Negociación de Acuerdos": "التفاوض على الاتفاقيات",
            "Mediación": "الوساطة",
            
            # === CONTACTO ===
            "Teléfono": "هاتف",
            "Móvil": "جوال",
            "Correo electrónico": "البريد الإلكتروني",
            "Dirección": "العنوان",
            "Horario": "ساعات العمل",
            "Ubicación": "الموقع",
            "Cita previa": "موعد مسبق",
            "Formulario de contacto": "نموذج الاتصال",
            "Mensaje": "رسالة",
            "Asunto": "الموضوع"
        }
        
        # Nuevas traducciones a agregar
        self.new_translations = {
            'es': {},
            'ar': {}
        }
    
    def translate_phrase(self, text: str) -> str:
        """Traduce una frase usando el diccionario."""
        # Primero buscar coincidencia exacta
        if text in self.dictionary:
            return self.dictionary[text]
        
        # Buscar coincidencias parciales (de más largo a más corto)
        translated = text
        for es, ar in sorted(self.dictionary.items(), key=lambda x: -len(x[0])):
            if es in translated:
                translated = translated.replace(es, ar)
        
        # Si no cambió mucho, intentar palabra por palabra
        if translated == text:
            words = text.split()
            translated_words = []
            
            for word in words:
                word_found = False
                # Buscar la palabra en el diccionario
                for es, ar in self.dictionary.items():
                    if word.lower() == es.lower().split()[0] if es.split() else es.lower():
                        translated_words.append(ar.split()[0] if ar.split() else ar)
                        word_found = True
                        break
                
                if not word_found:
                    # Mantener números pero convertir a árabe
                    if word.isdigit():
                        arabic_nums = {'0':'٠','1':'١','2':'٢','3':'٣','4':'٤','5':'٥','6':'٦','7':'٧','8':'٨','9':'٩'}
                        arabic_word = ''
                        for char in word:
                            arabic_word += arabic_nums.get(char, char)
                        translated_words.append(arabic_word)
                    else:
                        translated_words.append(word)
            
            translated = ' '.join(translated_words)
        
        return translated
    
    def generate_key(self, text: str) -> str:
        """Genera una clave única para la traducción."""
        # Limpiar texto
        clean_text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
        words = clean_text.split()[:3]
        
        # Generar clave base
        if len(words) >= 2:
            base = words[0].lower()[:4] + words[1].lower()[:4]
        elif words:
            base = words[0].lower()[:8]
        else:
            base = f"t{self.translations_added}"
        
        # Asegurar unicidad
        key = base
        counter = 1
        while key in self.new_translations['es']:
            key = f"{base}{counter}"
            counter += 1
        
        return key
    
    def process_file(self, file_path: str) -> int:
        """Procesa un archivo y traduce el contenido."""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes = 0
        
        # Encontrar textos para traducir
        patterns = [
            # Texto JSX
            (r'>([^<>{}]+)<', 'jsx'),
            # Propiedades importantes
            (r'(title|description|label|placeholder):\s*["\']([^"\']+)["\']', 'prop')
        ]
        
        replacements = []
        
        for pattern, ptype in patterns:
            for match in re.finditer(pattern, content):
                if ptype == 'prop':
                    text = match.group(2).strip()
                    prop_name = match.group(1)
                else:
                    text = match.group(1).strip()
                    prop_name = None
                
                if self.should_translate(text):
                    replacements.append({
                        'match': match,
                        'text': text,
                        'type': ptype,
                        'prop': prop_name
                    })
        
        # Procesar reemplazos (de atrás hacia adelante)
        for item in reversed(replacements):
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
                # Traducir y guardar
                translated = self.translate_phrase(text)
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
                new_text = f"{item['prop']}: t.common.{key}"
                content = content[:match.start()] + new_text + content[match.end():]
            
            changes += 1
        
        # Guardar si hubo cambios
        if changes > 0:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            self.files_processed += 1
        
        return changes
    
    def should_translate(self, text: str) -> bool:
        """Determina si un texto debe traducirse."""
        if not text or len(text.strip()) < 2:
            return False
        
        # No traducir código o variables
        if any(text.startswith(x) for x in ['t.', '{', '$', '/', 'http', '#', '@']):
            return False
        
        # No traducir si es solo números
        if text.replace(' ', '').replace(',', '').replace('.', '').isdigit():
            return False
        
        # Traducir si tiene letras y es más que una palabra
        has_letters = re.search(r'[a-zA-ZáéíóúñÁÉÍÓÚÑ]', text)
        is_phrase = len(text.split()) > 1 or len(text) > 10
        
        return has_letters and is_phrase
    
    def update_translations_file(self):
        """Actualiza el archivo de traducciones."""
        if not self.new_translations['es']:
            return False
        
        trans_file = "src/translations/index.ts"
        
        with open(trans_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Buscar dónde insertar
        es_pattern = r'(common:\s*\{[^}]+)(}\s*,)'
        es_match = re.search(es_pattern, content, re.DOTALL)
        
        if not es_match:
            print("No se encontró sección common en español")
            return False
        
        # Preparar nuevas traducciones
        new_es = ""
        for key, value in sorted(self.new_translations['es'].items()):
            value_escaped = value.replace("'", "\\'")
            new_es += f",\n      {key}: '{value_escaped}'"
        
        # Insertar español
        new_content = es_match.group(1) + new_es + "\n    " + es_match.group(2)
        content = content.replace(es_match.group(0), new_content)
        
        # Hacer lo mismo para árabe
        ar_pattern = r'(ar:\s*\{[^}]+common:\s*\{[^}]+)(}\s*,)'
        ar_match = re.search(ar_pattern, content, re.DOTALL)
        
        if ar_match:
            new_ar = ""
            for key, value in sorted(self.new_translations['ar'].items()):
                value_escaped = value.replace("'", "\\'")
                new_ar += f",\n      {key}: '{value_escaped}'"
            
            new_content_ar = ar_match.group(1) + new_ar + "\n    " + ar_match.group(2)
            content = content.replace(ar_match.group(0), new_content_ar)
        
        # Guardar
        with open(trans_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True

def main():
    print("🌍 SISTEMA DE TRADUCCIÓN SIMPLE")
    print("=" * 40)
    print("📌 Usando diccionario español-árabe extenso")
    print("✅ Sin dependencias externas problemáticas")
    
    # Cambiar al directorio del proyecto
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    translator = SimpleTranslator()
    
    # Procesar archivos
    directories = [
        ('src/app/blog', 'Blogs', 5),  # Solo 5 blogs primero
        ('src/components', 'Componentes', None),
        ('src/app', 'Páginas', None)
    ]
    
    total_changes = 0
    
    for directory, name, limit in directories:
        print(f"\n📂 Procesando {name}...")
        dir_changes = 0
        count = 0
        
        for root, dirs, files in os.walk(directory):
            dirs[:] = [d for d in dirs if d not in ['node_modules', '.next', 'api']]
            
            for file in files:
                if file.endswith('.tsx') and 'layout' not in file:
                    if limit and count >= limit:
                        break
                    
                    file_path = os.path.join(root, file)
                    
                    # Saltar archivos de sistema
                    if any(skip in file_path for skip in ['translations', 'types']):
                        continue
                    
                    changes = translator.process_file(file_path)
                    if changes > 0:
                        print(f"  ✓ {os.path.basename(file_path)}: {changes} traducciones")
                        dir_changes += changes
                        count += 1
        
        total_changes += dir_changes
        print(f"  Total {name}: {dir_changes} cambios")
    
    print(f"\n📊 RESUMEN:")
    print(f"  Archivos procesados: {translator.files_processed}")
    print(f"  Traducciones añadidas: {translator.translations_added}")
    print(f"  Total de cambios: {total_changes}")
    
    # Actualizar archivo
    if translator.translations_added > 0:
        print("\n📝 Actualizando archivo de traducciones...")
        if translator.update_translations_file():
            print("✅ Traducciones actualizadas exitosamente")
            
            # Guardar resumen
            with open('simple_translation_summary.json', 'w', encoding='utf-8') as f:
                json.dump({
                    'files_processed': translator.files_processed,
                    'translations_added': translator.translations_added,
                    'total_changes': total_changes,
                    'sample': dict(list(translator.new_translations['es'].items())[:10])
                }, f, indent=2, ensure_ascii=False)
        else:
            # Guardar backup
            with open('translations_backup.json', 'w', encoding='utf-8') as f:
                json.dump(translator.new_translations, f, indent=2, ensure_ascii=False)
            print("📄 Traducciones guardadas en backup")
    
    print("\n🎉 PROCESO COMPLETADO")
    print("💡 Ejecuta 'npm run build' para verificar")
    
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main())
