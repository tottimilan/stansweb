'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface CasoSEOContentProps {
  categoria: string;
  delito_principal: string;
  isOngoingCase?: boolean;
}

export default function CasoSEOContent({ categoria, delito_principal, isOngoingCase }: CasoSEOContentProps) {
  const { language } = useLanguage();

  // Contenido educativo por tipo de delito
  const getEducationalContent = () => {
    const categoriaLower = categoria.toLowerCase();
    const delitoLower = delito_principal.toLowerCase();

    // Terrorismo
    if (categoriaLower.includes('terrorismo')) {
      return {
        titulo: language === 'ar' ? 'فهم جرائم الإرهاب في إسبانيا' : 'Entendiendo los Delitos de Terrorismo en España',
        contenido: language === 'ar' ? (
          <>
            <p className="mb-4">
              تحظى قضايا الإرهاب بأهمية خاصة في النظام القضائي الإسباني، حيث تُحاكم أمام <strong>المحكمة الوطنية</strong> في مدريد. هذه القضايا تتطلب دفاعاً متخصصاً بسبب تعقيدها القانوني والإجرائي.
            </p>
            <h4 className="font-semibold text-lg mt-6 mb-3">أنواع جرائم الإرهاب</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 mr-6">
              <li><strong>التمجيد:</strong> عقوبة من 1-3 سنوات سجن</li>
              <li><strong>التجنيد:</strong> عقوبة من 2-5 سنوات</li>
              <li><strong>الانتماء لمنظمة:</strong> عقوبة من 6-15 سنة</li>
              <li><strong>الأعمال الإرهابية:</strong> عقوبة من 15-30 سنة</li>
            </ul>
          </>
        ) : (
          <>
            <p className="mb-4">
              Los casos de terrorismo tienen especial relevancia en el sistema judicial español, siendo competencia exclusiva de la <strong>Audiencia Nacional</strong> en Madrid. Estos procedimientos requieren una defensa especializada debido a su complejidad jurídica y procesal.
            </p>
            <h4 className="font-semibold text-lg mt-6 mb-3">Tipos de Delitos de Terrorismo</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Enaltecimiento del terrorismo (art. 578 CP):</strong> Pena de 1-3 años de prisión. Requiere incitación real a la violencia, no basta con expresiones polémicas.</li>
              <li><strong>Captación terrorista (art. 575.1 CP):</strong> Pena de 2-5 años. Se sanciona la captación activa para cometer actos terroristas.</li>
              <li><strong>Pertenencia a organización terrorista (art. 572.1 CP):</strong> Pena de 6-15 años. Requiere prueba de integración estable en la estructura.</li>
              <li><strong>Financiación del terrorismo (art. 576 CP):</strong> Pena de 5-15 años. Incluye recaudación, entrega o facilitación de fondos.</li>
              <li><strong>Autoadoctrinamiento (art. 575.2 CP):</strong> Pena de 1-5 años. Acceso habitual a contenidos terroristas con finalidad de capacitación.</li>
            </ul>
            <h4 className="font-semibold text-lg mt-6 mb-3">Derechos Fundamentales en Procedimientos de Terrorismo</h4>
            <p className="mb-4">
              Aunque los delitos de terrorismo son graves, los investigados mantienen todos sus <strong>derechos fundamentales</strong>: derecho a la defensa, presunción de inocencia, asistencia letrada, intérprete si es necesario, y garantías procesales. En STANS ABOGADOS velamos especialmente por el respeto a estos derechos durante todo el procedimiento.
            </p>
          </>
        ),
        faqTitulo: language === 'ar' ? 'أسئلة شائعة' : 'Preguntas Frecuentes sobre Terrorismo',
        faqs: language === 'ar' ? [
          { q: 'من يحكم في قضايا الإرهاب؟', a: 'للمحكمة الوطنية في مدريد الاختصاص الحصري في جميع قضايا الإرهاب في إسبانيا.' },
          { q: 'هل يمكنني الحصول على إفراج مؤقت؟', a: 'نعم، من الممكن لكنه يتطلب إثبات الجذور وعدم وجود خطر هروب. حققنا إفراجات مؤقتة في قضايا إرهاب.' }
        ] : [
          { q: '¿Quién juzga los casos de terrorismo?', a: 'La Audiencia Nacional en Madrid tiene competencia exclusiva sobre todos los delitos de terrorismo en España.' },
          { q: '¿Puedo obtener libertad provisional?', a: 'Sí, es posible aunque difícil. Requiere demostrar arraigo y ausencia de riesgo de fuga. Hemos logrado libertades provisionales en casos de terrorismo.' },
          { q: '¿Cuánto dura un procedimiento de terrorismo?', a: 'La fase de instrucción puede durar 6 meses a 2 años. El juicio oral y sentencia añaden 6-12 meses más. Total: 1-3 años típicamente.' }
        ]
      };
    }

    // Criminalidad Organizada
    if (categoriaLower.includes('criminal') || categoriaLower.includes('organiz')) {
      return {
        titulo: language === 'ar' ? 'الجريمة المنظمة والدفاع القانوني' : 'Criminalidad Organizada y Defensa Legal',
        contenido: language === 'ar' ? (
          <p className="mb-4">
            تتطلب قضايا الجريمة المنظمة دفاعاً متخصصاً بسبب تعقيد التحقيقات ووجود متهمين متعددين. العقوبات يمكن أن تتراوح من 6 إلى 15 سنة سجن.
          </p>
        ) : (
          <>
            <p className="mb-4">
              La <strong>criminalidad organizada</strong> (art. 570 bis CP) requiere una defensa especializada debido a la complejidad de las investigaciones y la existencia de múltiples investigados. La pertenencia a organización criminal se sanciona con penas de 6 a 15 años de prisión.
            </p>
            <h4 className="font-semibold text-lg mt-6 mb-3">Elementos del Delito de Organización Criminal</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Agrupación estable:</strong> Mínimo 3 personas con carácter permanente</li>
              <li><strong>Finalidad delictiva:</strong> Cometer delitos graves (pena superior a 3 años)</li>
              <li><strong>Reparto de funciones:</strong> Estructura jerárquica o división de tareas</li>
              <li><strong>Ánimo de lucro o poder:</strong> Motivación económica o de control territorial</li>
            </ul>
            <p className="mb-4">
              La defensa en estos casos requiere un análisis exhaustivo de las pruebas (intervenciones telefónicas, seguimientos, vigilancias) y una impugnación técnica de la supuesta estructura organizativa.
            </p>
          </>
        ),
        faqTitulo: language === 'ar' ? 'أسئلة شائعة' : 'Preguntas Frecuentes',
        faqs: language === 'ar' ? [] : [
          { q: '¿Qué diferencia hay entre delito en grupo y organización criminal?', a: 'La organización criminal requiere estabilidad y permanencia, mientras que el grupo criminal puede ser ocasional. Las penas son muy diferentes.' }
        ]
      };
    }

    // Delitos Económicos
    if (categoriaLower.includes('económico') || delitoLower.includes('blanqueo') || delitoLower.includes('estafa')) {
      return {
        titulo: language === 'ar' ? 'جرائم اقتصادية ودفاع متخصص' : 'Delitos Económicos y Defensa Especializada',
        contenido: language === 'ar' ? (
          <p className="mb-4">
            تشمل الجرائم الاقتصادية غسيل الأموال والاحتيال وجرائم الشركات. تتطلب هذه القضايا معرفة عميقة بالقانون المالي والإجراءات المعقدة.
          </p>
        ) : (
          <>
            <p className="mb-4">
              Los <strong>delitos económicos</strong> incluyen blanqueo de capitales (arts. 301-304 CP), estafa (art. 248 CP), delitos societarios, administración desleal y fraude fiscal. Estos casos requieren conocimientos profundos tanto del derecho penal como del derecho mercantil y tributario.
            </p>
            <h4 className="font-semibold text-lg mt-6 mb-3">Blanqueo de Capitales: Tipos y Defensas</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Blanqueo doloso (art. 301.1 CP):</strong> Requiere conocimiento del origen ilícito. Pena de 6 meses a 6 años.</li>
              <li><strong>Blanqueo por imprudencia grave (art. 301.3 CP):</strong> Negligencia grave en la comprobación del origen. Pena inferior.</li>
              <li><strong>Defensas principales:</strong> Falta de conocimiento, buena fe, diligencia debida, origen lícito de los fondos.</li>
            </ul>
            <p className="mb-4">
              La jurisprudencia del Tribunal Supremo ha establecido criterios claros sobre qué constituye el elemento subjetivo del blanqueo. Una defensa técnica adecuada puede marcar la diferencia entre una condena y una absolución.
            </p>
          </>
        ),
        faqTitulo: language === 'ar' ? 'أسئلة شائعة' : 'Preguntas Frecuentes',
        faqs: language === 'ar' ? [] : [
          { q: '¿Puedo ser condenado por blanqueo si no sabía que el dinero era ilícito?', a: 'El blanqueo doloso requiere conocimiento del origen ilícito. Sin embargo, existe el blanqueo por imprudencia grave. La clave está en demostrar tu buena fe y diligencia.' }
        ]
      };
    }

    // Robos y Violencia
    if (categoriaLower.includes('robo') || delitoLower.includes('robo')) {
      return {
        titulo: language === 'ar' ? 'السرقة بالعنف: الدفاع والحقوق' : 'Robos con Violencia: Defensa y Derechos',
        contenido: (
          <>
            <p className="mb-4">
              El <strong>robo con violencia o intimidación</strong> (art. 242 CP) es un delito grave que se sanciona con penas de 2 a 5 años de prisión, pudiendo agravarse hasta 9 años si concurren circunstancias específicas. La defensa en estos casos requiere un análisis exhaustivo de las pruebas de identificación y de la supuesta violencia ejercida.
            </p>
            <h4 className="font-semibold text-lg mt-6 mb-3">Estrategias de Defensa Habituales</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Impugnación de identificación:</strong> Cuestionar el reconocimiento fotográfico o en rueda</li>
              <li><strong>Análisis de pruebas:</strong> Examinar cadena de custodia de objetos intervenidos</li>
              <li><strong>Coartada:</strong> Demostrar que no estabas en el lugar del delito</li>
              <li><strong>Ausencia de violencia:</strong> Diferenciar robo con fuerza (menos grave) de robo con violencia</li>
            </ul>
          </>
        ),
        faqTitulo: 'Preguntas Frecuentes',
        faqs: [
          { q: '¿Qué diferencia hay entre robo con fuerza y robo con violencia?', a: 'El robo con fuerza se comete sobre cosas (forzar cerraduras, escalar). El robo con violencia o intimidación se ejerce sobre personas. Las penas del segundo son mucho más graves.' }
        ]
      };
    }

    // Delitos contra las personas
    if (categoriaLower.includes('personas') || delitoLower.includes('lesiones') || delitoLower.includes('agresión')) {
      return {
        titulo: language === 'ar' ? 'الجرائم ضد الأشخاص' : 'Delitos contra las Personas',
        contenido: (
          <>
            <p className="mb-4">
              Los <strong>delitos contra las personas</strong> incluyen homicidio, lesiones, agresiones y violencia. La gravedad de las penas depende del resultado y la intencionalidad. En STANS ABOGADOS analizamos exhaustivamente las circunstancias de cada caso para ofrecer la mejor defensa posible.
            </p>
            <h4 className="font-semibold text-lg mt-6 mb-3">Tipos de Lesiones y Penas</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Lesiones leves (falta):</strong> Multa o trabajos en beneficio de la comunidad</li>
              <li><strong>Lesiones menos graves:</strong> Prisión de 3 meses a 3 años</li>
              <li><strong>Lesiones graves:</strong> Prisión de 2 a 5 años</li>
              <li><strong>Lesiones con instrumento peligroso:</strong> Agravación de la pena</li>
            </ul>
          </>
        ),
        faqTitulo: 'Preguntas Frecuentes',
        faqs: [
          { q: '¿Puedo obtener el sobreseimiento en un caso de lesiones?', a: 'Sí, si no hay pruebas suficientes o si actuaste en legítima defensa. Hemos conseguido múltiples sobreseimientos en casos de lesiones.' }
        ]
      };
    }

    // Delitos contra la Salud Pública (Drogas)
    if (categoriaLower.includes('salud pública') || delitoLower.includes('droga')) {
      return {
        titulo: 'Delitos contra la Salud Pública: Tráfico de Drogas',
        contenido: (
          <>
            <p className="mb-4">
              El <strong>tráfico de drogas</strong> (art. 368 y ss. CP) es un delito grave cuya pena varía según la sustancia, cantidad y circunstancias. Las penas van desde 3 años (delito menos grave) hasta 20 años (sustancias muy peligrosas y gran cantidad).
            </p>
            <h4 className="font-semibold text-lg mt-6 mb-3">Elementos Clave del Delito</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li><strong>Cantidad de droga:</strong> Fundamental para determinar la gravedad</li>
              <li><strong>Tipo de sustancia:</strong> Las "drogas duras" tienen penas más graves</li>
              <li><strong>Finalidad de tráfico:</strong> Debe probarse que no era para consumo propio</li>
              <li><strong>Agravantes:</strong> Organización, menores, centros educativos, funcionarios</li>
            </ul>
          </>
        ),
        faqTitulo: 'Preguntas Frecuentes',
        faqs: [
          { q: '¿Cuánta droga se considera cantidad importante?', a: 'Depende de la sustancia. Para cocaína, más de 750g se considera cantidad de notoria importancia. Para hachís, más de 10kg.' }
        ]
      };
    }

    // Contenido genérico para otros delitos
    return {
      titulo: language === 'ar' ? 'الدفاع الجنائي المتخصص' : 'Defensa Penal Especializada',
      contenido: (
        <>
          <p className="mb-4">
            En STANS ABOGADOS ofrecemos <strong>defensa penal especializada</strong> en todo tipo de procedimientos penales. Nuestro enfoque se basa en un análisis exhaustivo del caso, la preparación meticulosa de la estrategia procesal y la protección de tus derechos fundamentales en cada fase del procedimiento.
          </p>
          <h4 className="font-semibold text-lg mt-6 mb-3">Fases del Procedimiento Penal</h4>
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li><strong>Diligencias Previas:</strong> Investigación inicial por el Juzgado de Instrucción</li>
            <li><strong>Procedimiento Abreviado:</strong> Preparación del juicio oral</li>
            <li><strong>Juicio Oral:</strong> Vista con práctica de pruebas</li>
            <li><strong>Sentencia:</strong> Resolución del tribunal</li>
            <li><strong>Recursos:</strong> Apelación y casación ante instancias superiores</li>
          </ul>
          <p className="mb-4">
            En cada una de estas fases, la intervención de un <strong>abogado penalista especializado</strong> es crucial para garantizar una defensa efectiva y el respeto de todas las garantías procesales.
          </p>
        </>
      ),
      faqTitulo: language === 'ar' ? 'أسئلة شائعة' : 'Preguntas Frecuentes',
      faqs: [
        { q: language === 'ar' ? 'كم تكلفة المحامي الجنائي؟' : '¿Cuánto cuesta un abogado penalista?', 
          a: language === 'ar' ? 'تعتمد الرسوم على تعقيد القضية. اتصل بنا لمناقشة حالتك والحصول على معلومات عن الأتعاب.' : 'Los honorarios dependen de la complejidad del caso. Contacta con nosotros para discutir tu situación y obtener información sobre honorarios.' }
      ]
    };
  };

  const content = getEducationalContent();

  return (
    <div className="bg-white border-t border-gold/20 py-8 mt-8">
      <div className="mx-auto max-w-4xl px-4">
        <h3 className="text-2xl font-bold text-gold mb-6">{content.titulo}</h3>
        <div className="prose prose-sm max-w-none text-black/80">
          {content.contenido}
        </div>

        {content.faqs.length > 0 && (
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gold mb-4">{content.faqTitulo}</h4>
            <div className="space-y-4">
              {content.faqs.map((faq, index) => (
                <div key={index} className="bg-charleston/5 p-4 rounded-lg">
                  <h5 className="font-semibold text-black mb-2">{faq.q}</h5>
                  <p className="text-black/70 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {isOngoingCase && (
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-sm text-yellow-900">
              <strong>{language === 'ar' ? 'قضية قيد التحقيق:' : 'Caso en investigación:'}</strong> {language === 'ar' ? 'بعض المعلومات محمية لحماية سرية الإجراءات الجارية. سيتم تحديث هذه الصفحة عند الانتهاء من القضية.' : 'Parte de la información está protegida para preservar el secreto de las actuaciones en curso. Esta página se actualizará cuando concluya el procedimiento.'}
            </p>
          </div>
        )}

        <div className="mt-8 bg-gold/5 border border-gold/20 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-gold mb-3">
            {language === 'ar' ? 'هل تواجه اتهاماً مشابهاً؟' : '¿Enfrentas una Acusación Similar?'}
          </h4>
          <p className="text-black/80 mb-4">
            {language === 'ar' 
              ? 'فريقنا من المحامين المتخصصين متاح 24/7 لمساعدتك. اتصل بنا الآن.'
              : 'Nuestro equipo de abogados especializados está disponible 24/7 para ayudarte. Contacta ahora.'}
          </p>
          <a 
            href="tel:+34611687226"
            className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            {language === 'ar' ? 'اتصل الآن: 34 611 68 72 26+' : 'Llamar Ahora: +34 611 68 72 26'}
          </a>
        </div>
      </div>
    </div>
  );
}

