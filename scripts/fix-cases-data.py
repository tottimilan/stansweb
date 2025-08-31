#!/usr/bin/env python3
"""
Script para corregir la información de los casos basándose en los documentos originales
"""

import json
import os
import re
from pathlib import Path
from typing import Dict, List, Any

class CaseDataFixer:
    def __init__(self):
        self.base_path = Path(__file__).parent.parent
        self.cases_path = self.base_path / "public" / "casos"
        
        # Información correcta del caso 2 (Nordin) basada en el documento original
        self.case_2_correct_data = {
            "id": 2,
            "categoria": "Terrorismo y Audiencia Nacional",
            "nombre": "CASO NORDIN WORKOUT",
            "delito_principal": "Terrorismo de índole yihadista (autoadoctrinamiento)",
            "resultado": "Auto de sobreseimiento provisional",
            "tipo_resolucion": "Sobreseimiento provisional",
            "favorabilidad": "Favorable",
            "fase_procesal": "Instrucción",
            "organo": "Juzgado Central de Instrucción nº 2 – Audiencia Nacional",
            "organo_nivel": "Juzgado Central de Instrucción",
            "seccion": "Instrucción",
            "localidad": "Madrid",
            "fecha": "10 de julio de 2025",
            "año": "2025",
            "parte": "Defensa",
            "medidas_cautelares": "Prisión provisional; posterior libertad provisional con retirada de pasaporte y prohibición de salida de España",
            "observaciones": "Investigación por difusión de contenidos yihadistas; insuficiencia probatoria",
            "noticias": "El País | La Razón | El español",
            "links": "https://www.ain.com.ar/news-23156-archivada-la-causa-contra-nordin-el-influencer-espa%C3%B1ol-detenido-por-supuesto-terrorismo-ahora-c%C3%B3mo-se-limpia-esto?\nhttps://www.elespanol.com/espana/20250809/archivan-causa-abierta-terrorismo-influencer-nordin-detenido-madrid-operacion-antiyihadismo/1003743881356_0.html?m",
            "caso_popular": "Sí",
            "imagen": "/images/case_images/CASO NORDIN WORKOUT_1.png",
            "contenido": {
                "ficha_rapida": "Categoría: Terrorismo y Audiencia Nacional\nDelito principal: Terrorismo de índole yihadista (autoadoctrinamiento)\nParte: Defensa\nÓrgano: Juzgado Central de Instrucción nº 2 – Audiencia Nacional\nSección: Instrucción\nLocalidad: Madrid\nFase procesal: Instrucción\nTipo de resolución: Sobreseimiento provisional\nFavorabilidad: Favorable\nFecha: 10 de julio de 2025\nAño: 2025\nMedidas cautelares: Prisión provisional; posterior libertad provisional con retirada de pasaporte y prohibición de salida de España\nPopularidad: Sí",
                "resumen": "La Audiencia Nacional inició diligencias previas en septiembre de 2023 para investigar si el conocido influencer español Nordin Workout (alias de Noureddin El Yemlahy) difundía mensajes yihadistas a través de sus vídeos de calistenia. Tras su detención en enero de 2025 en Leganés (Madrid) por la Guardia Civil y más de tres meses de prisión provisional, el Juzgado Central de Instrucción nº 2 archivó provisionalmente la causa el 10 de julio de 2025 al concluir que las diligencias practicadas no acreditaban los hechos imputados. La resolución ordenó el sobreseimiento provisional y archivo de las actuaciones.",
                "hechos": "Cronología. El 26 de septiembre de 2023 el Juzgado Central de Instrucción nº 2 incoó las diligencias previas nº 67/2023 para investigar un presunto delito de terrorismo de índole yihadista cometido por un influencer de calistenia, conocido en redes como Nordin Workout. El 22 de enero de 2025 agentes del Servicio de Información de la Guardia Civil, en coordinación con la DGST marroquí, irrumpieron en su domicilio en Leganés y detuvieron al joven, que fue enviado a prisión provisional. El instructor autorizó varios registros y analizó sus canales digitales, donde combinaba rutinas deportivas con cánticos religiosos (nasheeds). En mayo de 2025 se acordó su libertad provisional bajo fianza, con retirada de pasaporte y prohibición de abandonar España.\n\nConducta investigada. La Guardia Civil sostenía que el canal de YouTube y perfiles de redes sociales de Nordin servían como vehículo de adoctrinamiento, pues a las rutinas de calistenia añadía nasheeds utilizados por Daesh y consignas como «El futuro sólo Alá lo conoce», interpretadas como elementos de radicalización. También se le atribuyó haber difundido vídeos del suicidio de terroristas y participar en reuniones de calistenia con otros jóvenes musulmanes.\n\nDiligencias clave. Durante la instrucción se practicaron registros domiciliarios, se incautaron dispositivos electrónicos y se analizó el contenido de más de doscientos vídeos y pistas de audio. Según la defensa, de los 205 nasheeds de su lista de reproducción solo cinco podían considerarse sospechosos; el resto eran canciones sin relación con el extremismo. Se tomaron declaraciones al investigado y a testigos y se recabaron informes del Servicio de Información y del Ministerio del Interior.\n\nContexto. La operación se enmarcó en una estrategia internacional para neutralizar células de adoctrinamiento yihadista. El arresto de un creador de contenido con más de medio millón de suscriptores generó un intenso debate sobre los límites de la libertad de expresión y la vigilancia en redes sociales.",
                "estrategia": "La defensa cuestionó la tipicidad de la conducta investigada al entender que los vídeos de calistenia, aun acompañados de canciones religiosas, no constituían un acto de autoadoctrinamiento ni de enaltecimiento del terrorismo. Se alegó que los nasheeds utilizados eran de libre acceso en redes, que su cliente condenaba la violencia y que los mensajes, más allá de frases como «El futuro sólo Alá lo conoce», eran exhortaciones genéricas sin finalidad doctrinaria. Se impugnó la cadena de custodia de los archivos incautados y se subrayó que de las 205 canciones analizadas solo cinco habían sido calificadas como sospechosas. Asimismo, se esgrimió el derecho a la libertad de expresión y se solicitaron diligencias de prueba para contextualizar los cánticos y descartar su carácter delictivo. Finalmente, se instó al instructor a dictar el sobreseimiento por inexistencia de indicios suficientes.",
                "pruebas": "Las principales pruebas fueron los atestados del Servicio de Información de la Guardia Civil, los informes de análisis de sus canales de YouTube e Instagram y los dispositivos electrónicos incautados. Los investigadores aportaron una lista de vídeos y canciones supuestamente empleadas para incitar al yihadismo, así como mensajes enviados a seguidores. La defensa contrarrestó estas pruebas señalando que los vídeos eran rutinas deportivas públicas, que las canciones con mensajes violentos eran una minoría y que no existía interacción orientada a captar personas. Además, peritos de parte acreditaron que el contenido cuestionado era ambiguo y no permitía establecer un nexo causal con un delito de terrorismo.",
                "resolucion": "Mediante auto de fecha 10 de julio de 2025 (diligencias previas n.º 67/2023), el Juzgado Central de Instrucción nº 2 de la Audiencia Nacional acordó el sobreseimiento provisional de las actuaciones. El magistrado Ismael Moreno señaló que «los hechos objeto de investigación, a tenor del resultado de las diversas diligencias practicadas, no han quedado suficientemente acreditados» y ordenó el archivo provisional de la causa, sin perjuicio de su reapertura en caso de aparecer nuevos indicios. De este modo se levantaron las medidas cautelares y se restituyó la situación personal del investigado. La resolución contrasta con la petición inicial de la Guardia Civil y del Ministerio del Interior, que defendían la existencia de un delito de terrorismo de autoadoctrinamiento.",
                "marco_legal": "La investigación se basó en los artículos 575 y 577 del Código Penal, que sancionan el autoadoctrinamiento terrorista y la colaboración con organizaciones yihadistas, así como en la Directiva (UE) 2017/541 relativa a la lucha contra el terrorismo. El sobreseimiento provisional se fundamenta en los artículos 634 y 641.2 de la Ley de Enjuiciamiento Criminal, que permiten archivar provisionalmente una causa cuando las diligencias practicadas no acreditan la perpetración del delito. La defensa también invocó los artículos 18 y 20 de la Constitución Española sobre el derecho al honor y a la libertad de expresión.",
                "imagenes": "Auto de sobreseimiento provisional (10 de julio de 2025). Resolución del Juzgado Central de Instrucción nº 2 que acuerda el sobreseimiento provisional de las diligencias previas 67/2023 y su archivo.",
                "enlaces": "Archivada la causa contra Nordin, el 'influencer' español con 500.000 seguidores detenido por supuesto yihadismo: «Ahora, ¿cómo se limpia esto?» — El País — 09/08/2025 — elpais.com\nArchivan la causa por terrorismo contra el influencer Nordin: pasó tres meses en prisión por contenidos de calistenia con cánticos vinculados a Daesh — La Razón — 09/08/2025 — larazon.es\nArchivan la causa abierta por terrorismo al influencer Nordin, detenido en Madrid en una operación antiyihadismo — El Español — 09/08/2025 — elespanol.com"
            },
            "ficha_detalle": {
                "categoría": "Terrorismo y Audiencia Nacional",
                "delito_principal": "Terrorismo de índole yihadista (autoadoctrinamiento)",
                "parte": "Defensa",
                "órgano": "Juzgado Central de Instrucción nº 2 – Audiencia Nacional",
                "sección": "Instrucción",
                "localidad": "Madrid",
                "fase_procesal": "Instrucción",
                "tipo_de_resolución": "Sobreseimiento provisional",
                "favorabilidad": "Favorable",
                "fecha": "10 de julio de 2025",
                "año": "2025",
                "medidas_cautelares": "Prisión provisional; posterior libertad provisional con retirada de pasaporte y prohibición de salida de España",
                "popularidad": "Sí"
            }
        }
    
    def fix_case_2_data(self):
        """Corrige específicamente los datos del caso 2 (Nordin)"""
        print("🔧 Corrigiendo datos del caso 2 (Nordin)...")
        
        # Cargar casos existentes
        cases_file = self.cases_path / "casos-procesados.json"
        if not cases_file.exists():
            print("❌ No se encontró el archivo de casos")
            return
        
        with open(cases_file, 'r', encoding='utf-8') as f:
            cases = json.load(f)
        
        # Corregir el caso 2
        for i, case in enumerate(cases):
            if case['id'] == 2:
                print(f"📝 Corrigiendo caso 2: {case['nombre']}")
                cases[i] = self.case_2_correct_data
                break
        
        # Guardar casos corregidos
        with open(cases_file, 'w', encoding='utf-8') as f:
            json.dump(cases, f, ensure_ascii=False, indent=2)
        
        print(f"✅ Caso 2 corregido y guardado en: {cases_file}")
    
    def clean_text_content(self, text: str) -> str:
        """Limpia el texto eliminando contenido entre【】 y otras secciones no deseadas"""
        if not text:
            return text
        
        # Eliminar contenido entre【】
        text = re.sub(r'【[^】]*】', '', text)
        
        # Eliminar secciones no deseadas
        sections_to_remove = [
            r'Enlaces y notas \(citas\):.*?(?=\n\n|\n[A-Z]|$)',
            r'SEO y anclas \(web\):.*?(?=\n\n|\n[A-Z]|$)',
            r'Nota de verificación:.*?(?=\n\n|\n[A-Z]|$)',
        ]
        
        for pattern in sections_to_remove:
            text = re.sub(pattern, '', text, flags=re.DOTALL | re.IGNORECASE)
        
        # Limpiar líneas vacías múltiples
        text = re.sub(r'\n\s*\n\s*\n', '\n\n', text)
        
        return text.strip()
    
    def process_all_cases_content(self):
        """Procesa y limpia el contenido de todos los casos"""
        print("🧹 Limpiando contenido de todos los casos...")
        
        # Cargar casos existentes
        cases_file = self.cases_path / "casos-procesados.json"
        if not cases_file.exists():
            print("❌ No se encontró el archivo de casos")
            return
        
        with open(cases_file, 'r', encoding='utf-8') as f:
            cases = json.load(f)
        
        # Limpiar contenido de cada caso
        for i, case in enumerate(cases):
            print(f"📝 Limpiando caso {case['id']}: {case['nombre'][:50]}...")
            
            if 'contenido' in case and case['contenido']:
                for section, content in case['contenido'].items():
                    if isinstance(content, str):
                        case['contenido'][section] = self.clean_text_content(content)
        
        # Guardar casos limpios
        with open(cases_file, 'w', encoding='utf-8') as f:
            json.dump(cases, f, ensure_ascii=False, indent=2)
        
        print(f"✅ Contenido de todos los casos limpiado y guardado en: {cases_file}")
    
    def regenerate_translations(self):
        """Regenera las traducciones con los datos corregidos"""
        print("🔄 Regenerando traducciones...")
        
        # Importar y ejecutar el script de traducción
        import subprocess
        import sys
        
        script_path = self.base_path / "scripts" / "translate-cases-simple.py"
        if script_path.exists():
            result = subprocess.run([sys.executable, str(script_path)], capture_output=True, text=True)
            if result.returncode == 0:
                print("✅ Traducciones regeneradas exitosamente")
            else:
                print(f"❌ Error al regenerar traducciones: {result.stderr}")
        else:
            print("❌ No se encontró el script de traducción")

def main():
    """Función principal"""
    fixer = CaseDataFixer()
    
    try:
        # Corregir caso 2 específicamente
        fixer.fix_case_2_data()
        
        # Limpiar contenido de todos los casos
        fixer.process_all_cases_content()
        
        # Regenerar traducciones
        fixer.regenerate_translations()
        
        print("🎉 Proceso de corrección completado exitosamente!")
    except Exception as e:
        print(f"❌ Error durante la corrección: {e}")

if __name__ == "__main__":
    main()
