'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

export default function SEOContentSection() {
  const { language } = useLanguage();
  const t = translations[language];

  if (language === 'ar') {
    return (
      <section className="bg-white py-16 sm:py-20" dir="rtl">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <article className="prose prose-lg max-w-none text-right">
            <h2 className="text-3xl font-bold text-gold mb-6">محامو الجنايات في مدريد: دفاع متخصص على مدار 24/7</h2>
            
            <p className="text-black/80 leading-relaxed mb-6">
              ستانس للمحاماة هو مكتب محاماة متخصص حصرياً في <strong>القانون الجنائي</strong> في مدريد، إسبانيا. نحن نقدم خدمات الدفاع الجنائي على مدار الساعة طوال أيام الأسبوع، مع <strong>استجابة في أقل من 15 دقيقة</strong> لحالات الطوارئ. فريقنا من المحامين الجنائيين المسجلين في نقابة المحامين في مدريد (ICAM) لديه خبرة واسعة في المحكمة الوطنية، المحكمة العليا، والمحكمة الدستورية.
            </p>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">لماذا تختار ستانس للمحاماة؟</h3>
            
            <p className="text-black/80 leading-relaxed mb-4">
              نحن متخصصون في <strong>القضايا المعقدة والحساسة</strong> التي تتطلب معرفة عميقة بالقانون الجنائي والإجراءات القضائية. ميزتنا التنافسية تكمن في:
            </p>

            <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 mr-6">
              <li><strong>التوفر الدائم 24/7:</strong> نحن متاحون كل يوم من أيام السنة، بما في ذلك عطلات نهاية الأسبوع والأعياد</li>
              <li><strong>فريق متعدد اللغات:</strong> خدمات بالإسبانية والإنجليزية والعربية والفرنسية والإيطالية</li>
              <li><strong>تخصص حقيقي:</strong> نحن نعمل فقط في القانون الجنائي، مما يضمن خبرة عميقة</li>
              <li><strong>خبرة دولية:</strong> تسليم المطلوبين إسبانيا-المغرب، الأوامر الأوروبية للاعتقال، التعاون القضائي الدولي</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">مجالات التخصص الرئيسية</h3>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">الإرهاب والمحكمة الوطنية</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              لدينا خبرة واسعة في الدفاع عن المتهمين في <strong>قضايا الإرهاب</strong> أمام المحكمة الوطنية في مدريد. نحن ندافع في حالات التمجيد، التجنيد، الانتماء لمنظمات إرهابية، وتمويل الإرهاب. فريقنا يفهم التعقيدات القانونية لهذه القضايا ويعمل على حماية حقوقك الأساسية طوال الإجراءات.
            </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">تسليم المطلوبين الدولي (إسبانيا ⇄ المغرب)</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              نحن متخصصون في <strong>إجراءات تسليم المطلوبين</strong> بين إسبانيا والمغرب. محامينا يجيدون اللغة العربية ولديهم معرفة بالقانون المغربي، مما يمنحنا ميزة فريدة في هذا النوع من القضايا. ندافع عن حقوقك في جميع مراحل الإجراءات ونقدم الموارد اللازمة ضد قرارات التسليم.
            </p>

            <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">اتصل بنا على الفور</h3>
            <p className="text-black/80 leading-relaxed mb-4">
              إذا كنت أنت أو أحد أفراد عائلتك <strong>محتجزاً أو قيد التحقيق</strong>، فلا تتردد في الاتصال بنا. الوقت حاسم في القضايا الجنائية. نحن نقدم <strong>استشارة أولية</strong> لتقييم حالتك وشرح خياراتك القانونية.
            </p>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gold mb-6">Abogados Penalistas en Madrid: Defensa Especializada 24/7</h2>
          
            <p className="text-black/80 leading-relaxed mb-6">
              <strong>STANS ABOGADOS</strong> es un despacho de abogados especializado exclusivamente en <strong>Derecho Penal</strong> con sede en Madrid, España. Ofrecemos servicios de defensa penal las 24 horas del día, los 7 días de la semana, con <strong>respuesta rápida en menos de 1 hora</strong> para casos urgentes. Nuestro equipo de abogados penalistas colegiados en el Ilustre Colegio de Abogados de Madrid (ICAM) cuenta con amplia experiencia en la Audiencia Nacional, Tribunal Supremo y Tribunal Constitucional.
            </p>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">¿Por Qué Elegir a STANS ABOGADOS como tu Abogado Penalista?</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            Somos especialistas en <strong>casos complejos y de alta sensibilidad</strong> que requieren un conocimiento profundo del derecho penal y los procedimientos judiciales. Nuestra ventaja competitiva radica en:
          </p>

            <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
              <li><strong>Disponibilidad real 24/7:</strong> Estamos disponibles todos los días del año, incluidos fines de semana y festivos</li>
              <li><strong>Respuesta rápida:</strong> Contestamos en menos de 1 hora y nos desplazamos de inmediato a comisarías en Madrid</li>
              <li><strong>Equipo multilingüe:</strong> Servicios en español, inglés, árabe, francés e italiano</li>
              <li><strong>Especialización real:</strong> Solo trabajamos derecho penal, lo que garantiza experiencia profunda en cada caso</li>
              <li><strong>Experiencia internacional:</strong> Extradiciones internacionales (con especialización en España-Marruecos), Órdenes Europeas de Detención, cooperación judicial europea</li>
              <li><strong>Resultados comprobables:</strong> Múltiples absoluciones, sobreseimientos y recursos exitosos</li>
            </ul>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Áreas Principales de Especialización en Derecho Penal</h3>

          <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">1. Terrorismo ante la Audiencia Nacional</h4>
          <p className="text-black/80 leading-relaxed mb-4">
            Contamos con experiencia directa en la <strong>defensa de casos de terrorismo</strong> ante la Audiencia Nacional de Madrid. Defendemos en casos de enaltecimiento del terrorismo, captación yihadista, pertenencia a organización terrorista, financiación del terrorismo y autoadoctrinamiento. Nuestro equipo comprende la complejidad jurídica de estos procedimientos y trabaja incansablemente para proteger tus derechos fundamentales durante todo el proceso judicial.
          </p>

            <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">2. Extradiciones Internacionales</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              Somos especialistas en <strong>procedimientos de extradición internacional</strong>, con experiencia destacada en extradiciones entre España y Marruecos. Nuestro equipo incluye un abogado árabe nativo con conocimientos de derecho marroquí. Defendemos en extradiciones activas y pasivas, Órdenes Europeas de Detención y Entrega (OEDE), y recursos contra la extradición ante tribunales españoles y europeos.
            </p>

          <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">3. Derecho Penal Económico</h4>
          <p className="text-black/80 leading-relaxed mb-4">
            Defendemos en <strong>delitos económicos complejos</strong> incluyendo blanqueo de capitales (artículos 301-304 del Código Penal), estafa, delitos societarios, administración desleal, fraude fiscal, insolvencias punibles y alzamiento de bienes. Tenemos experiencia en casos con ramificaciones internacionales y en procedimientos ante tribunales económicos especializados. Nuestro enfoque combina conocimiento técnico financiero con estrategia procesal penal.
          </p>

          <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">4. Criminalidad Organizada</h4>
          <p className="text-black/80 leading-relaxed mb-4">
            Experiencia en defensa de casos de <strong>organización criminal</strong> (artículo 570 bis CP), tráfico de drogas a gran escala, bandas organizadas, robos con violencia en grupo y asociación ilícita. Hemos participado en operaciones policiales de alta complejidad, incluyendo la Operación LUCO (Banda del Rolex) y el caso Dominican Don't Play (DDP).
          </p>

          <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">5. Libertad de Expresión y Delitos de Odio</h4>
          <p className="text-black/80 leading-relaxed mb-4">
            Defendemos en <strong>delitos de odio</strong> (artículo 510 CP) con especial atención al equilibrio entre libertad de expresión y los límites penales. Tenemos experiencia en casos mediáticos donde la libertad de expresión artística, política o humorística entra en conflicto con tipos penales. Nuestro caso más conocido es el sobreseimiento en el caso Queque (Abogados Cristianos), donde conseguimos que la Audiencia Provincial reconociera la protección constitucional del humor político.
          </p>

          <h4 className="text-xl font-semibold text-black/90 mt-6 mb-3">6. Defensa Penal de Urgencia (Asistencia en Comisaría)</h4>
          <p className="text-black/80 leading-relaxed mb-4">
            Ofrecemos <strong>asistencia letrada inmediata</strong> en dependencias policiales y juzgados de guardia conforme al artículo 520 de la Ley de Enjuiciamiento Criminal. Nuestro servicio de urgencias 24/7 garantiza que tendrás un abogado especializado a tu lado desde el primer momento de la detención. Nos desplazamos inmediatamente a cualquier comisaría de Madrid y preparamos la estrategia de defensa desde la primera declaración.
          </p>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Ámbito de Actuación: Madrid, Nacional e Internacional</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            Aunque nuestra sede principal está en <strong>Madrid capital</strong> (Calle de Abtao, 44), actuamos en todo el territorio nacional y en procedimientos internacionales:
          </p>

          <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
            <li><strong>Audiencia Nacional:</strong> Competencia exclusiva en terrorismo, criminalidad organizada y delitos económicos graves</li>
            <li><strong>Tribunal Supremo:</strong> Recursos de casación y procedimientos ante la Sala Segunda (Penal)</li>
            <li><strong>Tribunal Constitucional:</strong> Recursos de amparo por vulneración de derechos fundamentales</li>
            <li><strong>Tribunal Europeo de Derechos Humanos (TEDH):</strong> Casos ante instancias europeas en Estrasburgo</li>
            <li><strong>Toda España:</strong> Desplazamiento a cualquier punto del territorio para asistencia en casos graves</li>
            <li><strong>Extradiciones internacionales:</strong> Especialmente España-Marruecos y cooperación judicial europea</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Nuestro Equipo de Abogados Penalistas Especializados</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            El equipo de STANS ABOGADOS está compuesto por cuatro abogados penalistas colegiados, cada uno con especialidades complementarias que nos permiten ofrecer una <strong>defensa integral</strong> en cualquier tipo de procedimiento penal:
          </p>

          <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
            <h5 className="font-semibold text-black mb-2">Rubén Vaquero Arribas - Socio Director</h5>
            <p className="text-black/70 text-sm">
              Especialista en derecho penal económico, extradiciones, OEDE y derechos fundamentales. Formación en la Universidad Complutense de Madrid y Máster en Derecho Penal Económico por la UNED. Ha litigado ante el Tribunal Constitucional y el TEDH.
            </p>
          </div>

          <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
            <h5 className="font-semibold text-black mb-2">Mounir Elyemlahy Chouati - Socio Abogado</h5>
            <p className="text-black/70 text-sm">
              Abogado árabe nativo especializado en terrorismo, derecho marroquí y extradiciones España-Marruecos. Única ventaja competitiva en Madrid: combina conocimiento del derecho marroquí con experiencia ante la Audiencia Nacional. Trilingüe (español, árabe, inglés).
            </p>
          </div>

          <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
            <h5 className="font-semibold text-black mb-2">Diego Cardona Valero - Socio Abogado</h5>
            <p className="text-black/70 text-sm">
              Especialista en derecho procesal penal, criminalidad organizada y terrorismo. Alta capacidad estratégica en litigación y preparación de recursos ante instancias superiores. Formación especializada en el Centro de Estudios de Investigación Jurídica (CEIJ).
            </p>
          </div>

          <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
            <h5 className="font-semibold text-black mb-2">Ada de Blas Pascual - Abogada</h5>
            <p className="text-black/70 text-sm">
              Formación internacional con LL.M. por la University of Cambridge (Reino Unido). Especialista en derecho penal internacional y derecho penal económico. Cuatrilingüe (español, inglés, francés, italiano) con experiencia en causas complejas de dimensión internacional.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Casos de Éxito Comprobables</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            Nuestra experiencia está respaldada por <strong>resultados reales y verificables</strong>. Entre nuestros casos más destacados se encuentran:
          </p>

          <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
            <li><strong>Sobreseimiento en caso Queque (Abogados Cristianos):</strong> Libertad de expresión vs. delitos de odio - Auto 379/2025 de la Audiencia Provincial de Madrid</li>
            <li><strong>Sobreseimiento en caso Nordin Workout:</strong> Terrorismo yihadista ante Audiencia Nacional</li>
            <li><strong>Libertad provisional en Academia Yihad:</strong> Modificación de medidas cautelares en caso de adoctrinamiento terrorista</li>
            <li><strong>Absolución por blanqueo de capitales por imprudencia:</strong> Sentencia 19/2025 del Juzgado de lo Penal nº 3 de Jaén</li>
            <li><strong>Operación LUCO - Banda del Rolex:</strong> Defensa en procedimiento por organización criminal</li>
            <li><strong>Archivo en caso de estafa y blanqueo:</strong> Auto 642/2024 de la Audiencia Provincial de Jaén estimando recurso</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Procedimiento de Contacto y Primera Consulta</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            Contactar con STANS ABOGADOS es simple y rápido. Si te enfrentas a una <strong>situación penal urgente</strong>, sigue estos pasos:
          </p>

          <ol className="list-decimal list-inside text-black/80 space-y-3 mb-6 ml-4">
            <li>
              <strong>Llama al +34 611 68 72 26</strong> - Disponible 24/7 todos los días del año. Te responderemos en menos de 1 hora.
            </li>
            <li>
              <strong>WhatsApp urgencias:</strong> Envía un mensaje a nuestro WhatsApp para contacto rápido.
            </li>
            <li>
              <strong>Primera valoración:</strong> Evaluamos tu caso y te explicamos las opciones legales disponibles.
            </li>
            <li>
              <strong>Presupuesto transparente:</strong> Antes de iniciar la defensa, te proporcionamos un presupuesto claro de honorarios.
            </li>
            <li>
              <strong>Inicio inmediato:</strong> Una vez contratados, comenzamos a trabajar en tu defensa de inmediato.
            </li>
          </ol>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Honorarios y Formas de Pago</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            Nuestros <strong>honorarios profesionales</strong> se adaptan a la complejidad de cada caso. Ofrecemos diferentes modalidades de pago y trabajamos con transparencia total desde el primer momento. La urgencia penal no debe ser un obstáculo económico - estudiamos cada caso individualmente para encontrar la mejor solución.
          </p>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Derechos del Detenido: Lo que Debes Saber</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            Si has sido <strong>detenido o estás siendo investigado</strong>, es fundamental que conozcas tus derechos desde el primer momento:
          </p>

          <ul className="list-disc list-inside text-black/80 space-y-2 mb-6 ml-4">
            <li><strong>Derecho a guardar silencio:</strong> No estás obligado a declarar contra ti mismo</li>
            <li><strong>Derecho a un abogado:</strong> Puedes elegir tu propio abogado o solicitar uno de oficio</li>
            <li><strong>Derecho a intérprete:</strong> Si no hablas español, tienes derecho a un intérprete gratuito</li>
            <li><strong>Derecho a comunicar la detención:</strong> Puedes avisar a un familiar o persona de tu elección</li>
            <li><strong>Derecho a reconocimiento médico:</strong> Puedes solicitar asistencia médica si lo necesitas</li>
            <li><strong>Derecho a conocer los motivos:</strong> La policía debe informarte de por qué estás detenido</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Preguntas Frecuentes sobre Defensa Penal</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-charleston/5 p-6 rounded-lg">
              <h5 className="font-semibold text-black mb-2">¿Cuánto tiempo tarda un procedimiento penal en España?</h5>
              <p className="text-black/70 text-sm leading-relaxed">
                La duración depende del tipo de delito y la complejidad del caso. Un procedimiento abreviado puede durar entre 12-18 meses, mientras que causas complejas ante la Audiencia Nacional pueden extenderse 2-4 años. Trabajamos para acelerar los tiempos mediante recursos y estrategias procesales.
              </p>
            </div>

            <div className="bg-charleston/5 p-6 rounded-lg">
              <h5 className="font-semibold text-black mb-2">¿Puedo obtener libertad provisional si me acusan de un delito grave?</h5>
              <p className="text-black/70 text-sm leading-relaxed">
                Sí, la libertad provisional es posible incluso en delitos graves. Requiere demostrar arraigo en España, ausencia de riesgo de fuga, falta de peligrosidad y ofrecer garantías procesales. Hemos conseguido libertades provisionales en casos de terrorismo, criminalidad organizada y delitos económicos graves.
              </p>
            </div>

            <div className="bg-charleston/5 p-6 rounded-lg">
              <h5 className="font-semibold text-black mb-2">¿Qué diferencia hay entre un abogado de oficio y un abogado particular?</h5>
              <p className="text-black/70 text-sm leading-relaxed">
                El abogado de oficio es asignado por el turno de oficio y es gratuito si no tienes recursos. Un abogado particular te permite elegir un especialista en tu tipo de delito, garantiza dedicación exclusiva a tu caso y mayor disponibilidad. En casos complejos, la especialización marca la diferencia en el resultado.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gold mt-10 mb-4">Compromiso con la Excelencia Legal</h3>
          
          <p className="text-black/80 leading-relaxed mb-4">
            En STANS ABOGADOS entendemos que enfrentarse a un <strong>procedimiento penal es una de las experiencias más estresantes</strong> que una persona puede vivir. Por eso, nuestro compromiso va más allá de la defensa técnica: te acompañamos, te explicamos cada paso del proceso en un lenguaje que puedas entender y te mantenemos informado en todo momento.
          </p>

          <p className="text-black/80 leading-relaxed mb-4">
            Nuestros valores fundamentales son la <strong>excelencia profesional, la dedicación total al cliente y la defensa inquebrantable de los derechos fundamentales</strong>. Creemos que toda persona merece una defensa de calidad, independientemente de la acusación que enfrente.
          </p>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-8 mt-10">
              <h4 className="text-xl font-semibold text-gold mb-4">¿Necesitas un Abogado Penalista Ahora?</h4>
              <p className="text-black/80 mb-6">
                No esperes. En casos penales, <strong>el tiempo es crucial</strong>. Contacta con nosotros ahora mismo para una valoración de tu caso. Estamos disponibles 24 horas al día, 7 días a la semana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+34611687226"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  Llamar Ahora: +34 611 68 72 26
                </a>
                <a 
                  href={`https://wa.me/34611687226?text=${encodeURIComponent('Hola, necesito ayuda penal urgente.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  WhatsApp Urgencias
                </a>
              </div>
            </div>

          <p className="text-black/60 text-sm mt-8 italic">
            STANS ABOGADOS - Despacho de abogados penalistas en Madrid. Colegiados ICAM. Especialistas en Audiencia Nacional, extradiciones, terrorismo, criminalidad organizada y derecho penal económico. Servicios en español, inglés, árabe, francés e italiano. Oficina: Calle de Abtao, 44, Oficina 7, 28007 Madrid.
          </p>
        </article>
      </div>
    </section>
  );
}

