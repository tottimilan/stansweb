'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, UserCheck } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const derechosFAQ = [
  {
    question: "¿Qué debo hacer inmediatamente cuando me detienen?",
    answer: "Mantén la calma, no opongas resistencia física, pide ver la orden judicial si existe, e informa inmediatamente que deseas llamar a un abogado. No declares nada hasta su llegada."
  },
  {
    question: "¿Puedo negarme a que me registren?",
    answer: "Para registros preventivos superficiales, no puedes negarte. Sin embargo, para registros más invasivos o domiciliarios, tienes derecho a exigir la presencia de tu abogado y una orden judicial motivada."
  },
  {
    question: "¿Cuánto tiempo pueden retenerme sin orden judicial?",
    answer: "Sin orden judicial puedes ser retenido hasta 24 horas en casos leves, o hasta 72 horas en casos graves. Pasado ese tiempo, debes ser puesto a disposición judicial o quedar en libertad."
  },
  {
    question: "¿Puedo grabar mi detención?",
    answer: "Sí, tienes derecho a grabar con tu teléfono móvil los momentos públicos de la detención, siempre que no interfieras en el procedimiento policial. Las grabaciones pueden ser pruebas importantes."
  },
  {
    question: "¿Qué pasa si soy menor de edad?",
    answer: "Los menores tienen derechos especiales: derecho a ser asistidos por sus padres o tutores, derecho a no declarar sin abogado especializado en menores, y consideraciones especiales en las medidas cautelares."
  },
  {
    question: "¿Pueden cachearme sin mi consentimiento?",
    answer: "Sí, la policía puede realizar un cacheo superficial preventivo por seguridad. Sin embargo, cacheos más invasivos requieren tu consentimiento o una orden judicial específica."
  },
  {
    question: "¿Tengo derecho a asistencia médica inmediata?",
    answer: "Sí, si sufres cualquier dolencia o lesión, tienes derecho a atención médica inmediata. Si te encuentras bajo los efectos de sustancias, debes informar para recibir asistencia adecuada."
  },
  {
    question: "¿Pueden tomarme las huellas sin consentimiento?",
    answer: "Sí, es obligatorio proporcionar huellas dactilares y fotografías para identificación policial. Esta obligación está regulada por la Ley Orgánica 4/2015 de Protección de la Seguridad Ciudadana."
  }
];

const fasesIniciales = [
  {
    fase: "Momento de la detención",
    derechos: ["Derecho a conocer los motivos", "Derecho a asistencia letrada inmediata", "Derecho a no autoinculparse"],
    acciones: ["Mantener calma", "No resistir físicamente", "Pedir abogado inmediatamente"]
  },
  {
    fase: "Traslado a comisaría",
    derechos: ["Derecho a no declarar", "Derecho a comunicación familiar", "Derecho a asistencia médica"],
    acciones: ["Informar de medicamentos", "Pedir ver a tu abogado", "No firmar documentos sin leer"]
  },
  {
    fase: "Llegada a comisaría",
    derechos: ["Derecho a dignidad", "Derecho a información escrita", "Derecho a grabar momentos públicos"],
    acciones: ["Pedir derechos por escrito", "No declarar sin abogado", "Informar de alergias/medicamentos"]
  }
];

const relatedArticles = [
  {
    title: 'Asistencia Letrada de Urgencia',
    slug: 'asistencia-letrada-urgencia',
    category: 'Asistencia Legal'
  },
  {
    title: 'Primeros Pasos en Comisaría',
    slug: 'primeros-pasos-comisaria',
    category: 'Procedimiento Policial'
  },
  {
    title: 'Derechos Constitucionales del Detenido',
    slug: 'derechos-constitucionales-detenido',
    category: 'Derechos Fundamentales'
  }
];

export default function DerechosInmediatosPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Traducciones específicas del blog
  const blogTranslations = language === 'ar' ? {
    introduccion: {
      titulo: 'الحقوق الفورية عند الاعتقال',
      parrafo1: 'معرفة حقوقك من اللحظة الأولى أمر أساسي لحمايتك أثناء عملية الاعتقال. يوفر لك هذا الدليل الكامل معلومات عن جميع الحقوق التي تتمتع بها فور اعتقالك.',
      parrafo2: 'عدم معرفة هذه الحقوق يمكن أن يكون له عواقب خطيرة على دفاعك. لذلك، من المهم الحفاظ على الهدوء وممارسة كل حق بشكل صحيح.',
      infoImportante: {
        titulo: 'معلومات مهمة',
        descripcion: 'الدقائق الأولى بعد الاعتقال حاسمة. حافظ على الهدوء، لا تقاوم واطلب فوراً مساعدة قانونية.'
      }
    },
    fasesProceso: {
      titulo: 'مراحل إجراء الاعتقال',
      descripcion: 'الإجراءات التي تتبع عند الاعتقال تتبع تسلسلاً زمنياً محدداً. من المهم معرفة هذه المراحل لفهم حقوقك في كل لحظة.',
      fases: [
        {
          titulo: 'المرحلة الأولى: الاعتقال الأولي',
          descripcion: 'اللحظة الفعلية للاعتقال. يجب إبلاغك بسبب الاعتقال وحقوقك الأساسية.',
          tiempo: 'حتى 72 ساعة كحد أقصى'
        },
        {
          titulo: 'المرحلة الثانية: الوضع تحت تصرف القضاء',
          descripcion: 'النقل إلى مركز الشرطة وإبلاغ القاضي. لحظة حاسمة لتحديد التدابير الاحترازية.',
          tiempo: 'خلال 24 ساعة من الاعتقال'
        },
        {
          titulo: 'المرحلة الثالثة: الإجراءات القضائية الأولى',
          descripcion: 'الحضور أمام القاضي وتحديد التدابير الاحترازية. هنا se decide sobre libertad o prisión.',
          tiempo: 'خلال 72 ساعة من الاعتقال'
        }
      ]
    },
    derechosEspecificos: {
      titulo: 'الحقوق المحددة في الاعتقال',
      descripcion: 'بالإضافة إلى الحقوق الأساسية، لديك حقوق محددة في cada fase del proceso de detención.',
      derechos: [
        {
          titulo: 'حق في التواصل الفوري',
          descripcion: 'Puedes comunicar tu detención a un familiar o persona de confianza inmediatamente.',
          detalle: 'Llamada telefónica gratuita, sin restricciones de horario.'
        },
        {
          titulo: 'حق في asistencia médica',
          descripcion: 'Si sufres cualquier dolencia, tienes derecho a atención médica inmediata.',
          detalle: 'Reconocimiento médico obligatorio, atención especializada si es necesaria.'
        },
        {
          titulo: 'حق en intérprete',
          descripcion: 'Si no comprendes el español, tienes derecho a un intérprete oficial.',
          detalle: 'Presencia en todas las declaraciones, traducción simultánea.'
        },
        {
          titulo: 'حق a no declarar',
          descripcion: 'Puedes mantener el silencio sin que esto perjudique tu defensa.',
          detalle: 'Derecho a no autoincriminarse, declaración solo con abogado presente.'
        }
      ]
    },
    derechosEspecificosDetencion: {
      titulo: 'الحقوق المحددة في الاعتقال',
      descripcion: 'بالإضافة إلى الحقوق الأساسية، لديك حقوق محددة في كل مرحلة من مراحل الاعتقال.',
      procesales: {
        titulo: 'الحقوق الإجرائية',
        items: [
          { titulo: 'مساعدة قانونية فورية', descripcion: 'حق في محامٍ منذ اللحظة الأولى' },
          { titulo: 'حق في المعلومات', descripcion: 'أسباب الاعتقال كتابة' },
          { titulo: 'حق في عدم الإدلاء بأقوال', descripcion: 'دون حضور محامٍ' },
          { titulo: 'الحق في الحماية القضائية', descripcion: 'رقابة قضائية فعالة' }
        ]
      },
      personales: {
        titulo: 'الحقوق الشخصية',
        items: [
          { titulo: 'حق في الكرامة', descripcion: 'معاملة محترمة في جميع الأوقات' },
          { titulo: 'حق في الخصوصية', descripcion: 'حماية البيانات الشخصية' },
          { titulo: 'حق في التواصل', descripcion: 'الاتصال بقريب أو محامٍ' },
          { titulo: 'حق في الرعاية الطبية', descripcion: 'رعاية صحية فورية' }
        ]
      }
    }
  } : {
    introduccion: {
      titulo: 'Derechos Inmediatos al Ser Detenido',
      parrafo1: 'Conocer tus derechos desde el primer momento es fundamental para protegerte durante el proceso de detención. Esta guía completa te informa sobre todos los derechos que te asisten inmediatamente tras ser detenido.',
      parrafo2: 'La falta de conocimiento de estos derechos puede tener consecuencias graves en tu defensa. Por eso, es crucial mantener la calma y ejercer correctamente cada derecho.',
      infoImportante: {
        titulo: 'Información Importante',
        descripcion: 'Los primeros minutos tras la detención son críticos. Mantén la calma, no opongas resistencia y solicita inmediatamente asistencia letrada.'
      }
    },
    fasesProceso: {
      titulo: 'Fases del Proceso de Detención',
      descripcion: 'Los procedimientos que se siguen tras la detención siguen un orden temporal específico. Es importante conocer estas fases para entender tus derechos en cada momento.',
      fases: [
        {
          titulo: 'Fase 1: Detención Inicial',
          descripcion: 'El momento efectivo del arresto. Deben informarte del motivo de la detención y tus derechos básicos.',
          tiempo: 'Hasta 72 horas como máximo'
        },
        {
          titulo: 'Fase 2: Puesta a Disposición Judicial',
          descripcion: 'El traslado a comisaría y comunicación al juez. Momento crucial para determinar las medidas cautelares.',
          tiempo: 'Dentro de 24 horas desde la detención'
        },
        {
          titulo: 'Fase 3: Tramitación Judicial Inicial',
          descripcion: 'La comparecencia ante el juez y determinación de medidas cautelares. Aquí se decide sobre libertad o prisión.',
          tiempo: 'Dentro de 72 horas desde la detención'
        }
      ]
    },
    derechosEspecificos: {
      titulo: 'Derechos Específicos en la Detención',
      descripcion: 'Además de los derechos básicos, tienes derechos específicos en cada fase del proceso de detención.',
      derechos: [
        {
          titulo: 'Derecho de Comunicación Inmediata',
          descripcion: 'Puedes comunicar tu detención a un familiar o persona de confianza inmediatamente.',
          detalle: 'Llamada telefónica gratuita, sin restricciones de horario.'
        },
        {
          titulo: 'Derecho a Asistencia Médica',
          descripcion: 'Si sufres cualquier dolencia, tienes derecho a atención médica inmediata.',
          detalle: 'Reconocimiento médico obligatorio, atención especializada si es necesaria.'
        },
        {
          titulo: 'Derecho a Intérprete',
          descripcion: 'Si no comprendes el español, tienes derecho a un intérprete oficial.',
          detalle: 'Presencia en todas las declaraciones, traducción simultánea.'
        },
        {
          titulo: 'Derecho a no Declarar',
          descripcion: 'Puedes mantener el silencio sin que esto perjudique tu defensa.',
          detalle: 'Derecho a no autoinculparse, declaración solo con abogado presente.'
        }
      ]
    },
    derechosEspecificosDetencion: {
      titulo: 'Derechos Específicos en la Detención',
      descripcion: 'Además de los derechos básicos, tienes derechos específicos en cada fase del proceso de detención.',
      procesales: {
        titulo: 'Derechos Procesales',
        items: [
          { titulo: 'Asistencia letrada inmediata', descripcion: 'Derecho a abogado desde el primer momento' },
          { titulo: 'Derecho a la información', descripcion: 'Motivos de detención por escrito' },
          { titulo: 'Derecho a no declarar', descripcion: 'Sin presencia de abogado' },
          { titulo: 'Derecho a la tutela judicial', descripcion: 'Control judicial efectivo' }
        ]
      },
      personales: {
        titulo: 'Derechos Personales',
        items: [
          { titulo: 'Derecho a la dignidad', descripcion: 'Trato respetuoso en todo momento' },
          { titulo: 'Derecho a la intimidad', descripcion: 'Protección de datos personales' },
          { titulo: 'Derecho a la comunicación', descripcion: 'Contacto con familiar o abogado' },
          { titulo: 'Derecho a asistencia médica', descripcion: 'Atención sanitaria inmediata' }
        ]
      }
    }
  };
  
  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: 'Defensa Penal Urgente', href: '/blog/defensa-penal-urgente' },
    { label: blogTranslations.introduccion.titulo }
  ];

  const tocItems = [
    { id: 'fases-inmediatas-de-la-detencion', title: language === 'ar' ? 'مراحل الاعتقال الفورية' : 'Fases Inmediatas de la Detención', level: 2 },
    { id: 'derechos-especificos-en-la-detencion', title: language === 'ar' ? 'الحقوق المحددة في الاعتقال' : 'Derechos Específicos en la Detención', level: 2 },
    { id: 'protocolo-de-actuacion-recomendado', title: language === 'ar' ? 'البروتوكول الموصى به للتصرف' : 'Protocolo de Actuación Recomendado', level: 2 },
    { id: 'preguntas-frecuentes-sobre-derechos-inmediatos', title: language === 'ar' ? 'الأسئلة الشائعة حول الحقوق الفورية' : 'Preguntas Frecuentes sobre Derechos Inmediatos', level: 2 },
    { id: 'legislacion-y-referencias', title: language === 'ar' ? 'التشريع والمراجع' : 'Legislación y Referencias', level: 2 },
    { id: 'conclusion', title: language === 'ar' ? 'الخاتمة' : 'Conclusión', level: 2 }
  ];

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
      <main className="bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-charleston text-offwhite py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog/defensa-penal-urgente"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                {language === 'ar' ? 'العودة إلى مركز الدفاع الجنائي العاجل' : 'Volver al hub de Defensa Penal Urgente'}
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  Defensa Penal Urgente
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  10 {t.blog.minLectura}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                {blogTranslations.introduccion.titulo}
              </h1>

              <p className="text-lg text-white/80 mb-6">
                {blogTranslations.introduccion.parrafo1}
                {blogTranslations.introduccion.parrafo2}
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  16 dic 2024
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <div className="text-black/80 leading-relaxed mb-12 text-lg">
                <p>
                  {blogTranslations.introduccion.parrafo1}
                </p>
                <p>
                  {blogTranslations.introduccion.parrafo2}
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mt-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">{blogTranslations.introduccion.infoImportante.titulo}</h3>
                      <p className="text-blue-800">
                        {blogTranslations.introduccion.infoImportante.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fases Iniciales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="fases-inmediatas-de-la-detencion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {blogTranslations.fasesProceso.titulo}
                </h2>

                <div className="space-y-8">
                  {fasesIniciales.map((fase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <h3 className="text-xl font-semibold text-gold mb-4">
                        {fase.fase}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gold mb-2">
                            {language === 'ar' ? 'الحقوق التي تتمتع بها:' : 'Derechos que te asisten:'}
                          </h4>
                          <ul className="space-y-1">
                            {fase.derechos.map((derecho, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                                <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                                {derecho}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gold mb-2">
                            {language === 'ar' ? 'الإجراءات الموصى بها:' : 'Acciones recomendadas:'}
                          </h4>
                          <ul className="space-y-1">
                            {fase.acciones.map((accion, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                                <AlertTriangle className="h-3 w-3 text-yellow-400 flex-shrink-0" />
                                {accion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Derechos Específicos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-especificos-en-la-detencion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {blogTranslations.derechosEspecificosDetencion.titulo}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-black">{blogTranslations.derechosEspecificosDetencion.procesales.titulo}</h3>
                    </div>
                    <ul className="space-y-3 text-black/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{blogTranslations.derechosEspecificosDetencion.procesales.items[0].titulo}</strong> - {blogTranslations.derechosEspecificosDetencion.procesales.items[0].descripcion}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{blogTranslations.derechosEspecificosDetencion.procesales.items[1].titulo}</strong> - {blogTranslations.derechosEspecificosDetencion.procesales.items[1].descripcion}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{blogTranslations.derechosEspecificosDetencion.procesales.items[2].titulo}</strong> - {blogTranslations.derechosEspecificosDetencion.procesales.items[2].descripcion}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{blogTranslations.derechosEspecificosDetencion.procesales.items[3].titulo}</strong> - {blogTranslations.derechosEspecificosDetencion.procesales.items[3].descripcion}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <UserCheck className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-black">{blogTranslations.derechosEspecificosDetencion.personales.titulo}</h3>
                    </div>
                    <ul className="space-y-3 text-black/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{blogTranslations.derechosEspecificosDetencion.personales.items[0].titulo}</strong> - {blogTranslations.derechosEspecificosDetencion.personales.items[0].descripcion}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{blogTranslations.derechosEspecificosDetencion.personales.items[1].titulo}</strong> - {blogTranslations.derechosEspecificosDetencion.personales.items[1].descripcion}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{blogTranslations.derechosEspecificosDetencion.personales.items[2].titulo}</strong> - {blogTranslations.derechosEspecificosDetencion.personales.items[2].descripcion}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>{blogTranslations.derechosEspecificosDetencion.personales.items[3].titulo}</strong> - {blogTranslations.derechosEspecificosDetencion.personales.items[3].descripcion}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Protocolo de Actuación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="protocolo-de-actuacion-recomendado" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Protocolo de Actuación Recomendado
                </h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Primeros 5 minutos</h3>
                      <p className="text-black/80">
                        Mantén la calma, no opongas resistencia física, identifica claramente a los agentes,
                        pide ver su identificación y solicita inmediatamente asistencia letrada.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">✅ Haz:</h4>
                      <ul className="text-sm text-black/80 space-y-1">
                        <li>• Mantén la calma</li>
                        <li>• Identifícate claramente</li>
                        <li>• Pide abogado inmediatamente</li>
                        <li>• Anota datos de los agentes</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">❌ No hagas:</h4>
                      <ul className="text-sm text-black/80 space-y-1">
                        <li>• No resistas físicamente</li>
                        <li>• No declares sin abogado</li>
                        <li>• No firmes nada sin leer</li>
                        <li>• No discutas agresivamente</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">📞 Contactos:</h4>
                      <ul className="text-sm text-black/80 space-y-1">
                        <li>• Llama a familiar cercano</li>
                        <li>• Contacta con tu abogado</li>
                        <li>• Anota números de teléfono</li>
                        <li>• Prepara documentación</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="preguntas-frecuentes-sobre-derechos-inmediatos" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Derechos Inmediatos
                </h2>

                <div className="space-y-6">
                  {derechosFAQ.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-6"
                    >
                      <h3 className="text-lg font-semibold text-black mb-3 flex items-start gap-2">
                        <span className="bg-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          ?
                        </span>
                        {faq.question}
                      </h3>
                      <p className="text-black/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Referencias */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="legislacion-y-referencias" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Legislación y Referencias
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Constitucional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Constitución Española (1978)</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 17, 18 y 24
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 6/1985</strong> del Poder Judicial -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1985-12666" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Regulación de la detención
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Ley de Enjuiciamiento Criminal</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Artículo 496</strong> - Duración máxima de la detención
                    </li>
                    <li>
                      <strong>Artículo 520</strong> - Derechos del detenido
                    </li>
                    <li>
                      <strong>Artículo 118</strong> - Asistencia letrada
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 114/2017</strong> - Derechos de comunicación en detención
                    </li>
                    <li>
                      <strong>STS 47/2018</strong> - Límites de la detención preventiva
                    </li>
                    <li>
                      <strong>Sentencia TEDH de 17 enero 2017</strong> - Caso Mammadov vs Azerbaiyán
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Conocer tus derechos inmediatos al ser detenido es fundamental para afrontar
                  una situación de urgencia penal con garantías. La Constitución Española establece
                  protecciones robustas que deben ser respetadas desde el primer momento.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Recuerda: mantener la calma, ejercer tus derechos constitucionales y contar
                  con asistencia letrada especializada son los pilares de una defensa efectiva.
                  En STANS Abogados estamos disponibles 24/7 para asistirte en situaciones críticas.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-gold/20">
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Derechos Inmediatos al Ser Detenido',
                        text: 'Guía completa sobre tus derechos inmediatos cuando eres detenido.',
                        url: window.location.href,
                      }).catch((err) => console.error('Error sharing:', err));
                    } else {
                      navigator.clipboard.writeText(window.location.href).then(() => {
                        alert('URL copiada al portapapeles');
                      }).catch(() => {
                        const textArea = document.createElement('textarea');
                        textArea.value = window.location.href;
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        alert('URL copiada al portapapeles');
                      });
                    }
                  }}
                  className="flex items-center gap-2 text-black/70 hover:text-gold transition bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                >
                  <Share2 className="h-4 w-4" />
                  {t.blog.compartirArticulo}
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hola, acabo de ser detenido y necesito asistencia inmediata`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:opacity-90 transition text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">
                    <span className="hidden sm:inline">Asistencia Urgente</span>
                    <span className="sm:hidden">Asistencia</span>
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-charleston py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gold mb-4">
                {t.blog.articulosRelacionados}
              </h2>
              <p className="text-white/80">
                Más información sobre defensa penal urgente
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${article.slug}`}>
                    <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gold/20 hover:border-gold/50 h-full">
                      <div className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full w-fit mb-3">
                        {article.category}
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-3 hover:text-gold transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center text-gold">
                        <span className="text-sm font-medium">Leer artículo</span>
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}