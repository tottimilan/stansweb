'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, Gavel } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const cautelaresFAQ = [
  {
    question: "¿Qué son las medidas cautelares?",
    answer: "Son decisiones judiciales que limitan temporalmente derechos fundamentales para garantizar la eficacia del proceso penal. Buscan asegurar la presencia del imputado, evitar la destrucción de pruebas, o proteger a víctimas."
  },
  {
    question: "¿Cuándo se pueden imponer medidas cautelares?",
    answer: "Se pueden imponer desde la fase de instrucción hasta la ejecución de sentencia. Específicamente en urgencias, se imponen durante la puesta a disposición judicial o en comparecencias posteriores."
  },
  {
    question: "¿Puedo impugnar las medidas cautelares?",
    answer: "Sí, puedes recurrir en reforma ante el mismo juez (5 días), en apelación ante la Audiencia Provincial (5-10 días), o en casación ante el Tribunal Supremo en casos excepcionales."
  },
  {
    question: "¿Qué pasa si no cumplo una medida cautelar?",
    answer: "El incumplimiento puede constituir delito de desobediencia judicial (artículo 556 CP), con penas de 6 meses a 2 años de prisión. También puede llevar a la conversión en prisión provisional."
  },
  {
    question: "¿Se pueden modificar las medidas cautelares?",
    answer: "Sí, puedes solicitar modificación por cambio de circunstancias. Por ejemplo, sustituir prisión provisional por libertad con fianza, o flexibilizar las condiciones de libertad vigilada."
  },
  {
    question: "¿Cuánto dura la prisión provisional máxima?",
    answer: "Máximo 2 años en causas complejas, o 6 meses en causas simples. Si no hay condena firme pasado ese tiempo, debes ser puesto en libertad. Estos límites están en el artículo 504 LECrim."
  },
  {
    question: "¿Puedo salir del país con medidas cautelares?",
    answer: "Depende de la medida: con retirada de pasaporte no puedes salir. Con obligación de comparecer puedes salir pero debes volver para las citaciones judiciales."
  },
  {
    question: "¿Las medidas cautelares aparecen en el certificado de antecedentes penales?",
    answer: "No, las medidas cautelares no constan en el certificado de antecedentes penales. Solo aparecen las condenas firmes. Sin embargo, pueden afectar a permisos, licencias o contratos."
  }
];

const tiposCautelares = [
  {
    tipo: "Prisión Provisional",
    descripcion: "Internamiento en centro penitenciario durante la instrucción",
    requisitos: ["Riesgo de fuga", "Peligro de reiteración", "Peligro de destrucción pruebas"],
    duracion: "Hasta 2 años",
    gravedad: "Muy Alta"
  },
  {
    tipo: "Libertad con Fianza",
    descripcion: "Pago de cantidad económica para asegurar comparecencia",
    requisitos: ["Riesgo de fuga moderado", "Suficiencia económica", "Vínculos familiares"],
    duracion: "Hasta condena firme",
    gravedad: "Media"
  },
  {
    tipo: "Libertad Vigilada",
    descripcion: "Control judicial estricto sin internamiento",
    requisitos: ["Necesidad de control", "Riesgo medio", "Posibilidad de seguimiento"],
    duracion: "Hasta condena firme",
    gravedad: "Alta"
  },
  {
    tipo: "Obligación de Comparecer",
    descripcion: "Debes presentarte ante el juez cuando seas citado",
    requisitos: ["Riesgo bajo", "Confianza en cumplimiento", "Domicilio fijo"],
    duracion: "Hasta condena firme",
    gravedad: "Baja"
  },
  {
    tipo: "Retirada de Pasaporte",
    descripcion: "Prohibición de salir del territorio nacional",
    requisitos: ["Riesgo de fuga", "Posibilidad de exfiltración", "Sin arraigo suficiente"],
    duracion: "Hasta condena firme",
    gravedad: "Media"
  },
  {
    tipo: "Orden de Alejamiento",
    descripcion: "Prohibición de acercarse a víctimas o testigos",
    requisitos: ["Protección de víctimas", "Riesgo de intimidación", "Delitos contra personas"],
    duracion: "Hasta condena firme",
    gravedad: "Variable"
  }
];

const criteriosJudiciales = [
  {
    criterio: "Riesgo de Fuga",
    indicadores: ["Ausencia de domicilio fijo", "Recursos económicos abundantes", "Vínculos familiares débiles", "Antecedentes de no comparecencia"],
    peso: "Alto"
  },
  {
    criterio: "Peligro de Reiteración",
    indicadores: ["Delitos similares previos", "Actitud desafiante", "Amenazas veladas", "Consumo de sustancias"],
    peso: "Alto"
  },
  {
    criterio: "Gravedad del Delito",
    indicadores: ["Penas elevadas previstas", "Daño causado a víctimas", "Afectación social", "Bien jurídico protegido"],
    peso: "Medio"
  },
  {
    criterio: "Circunstancias Personales",
    indicadores: ["Arraigo familiar/laboral", "Colaboración procesal", "Ausencia de antecedentes", "Cumplimiento de obligaciones"],
    peso: "Medio"
  }
];

const estrategiasDefensa = [
  {
    estrategia: "Demostrar Arraigo",
    descripcion: "Presentar pruebas de vínculos familiares, laborales y sociales",
    documentos: ["Contrato de trabajo", "Certificado empadronamiento", "Declaraciones familiares"],
    efectividad: "Alta"
  },
  {
    estrategia: "Ofrecer Alternativas",
    descripcion: "Proponer medidas menos gravosas que la prisión provisional",
    documentos: ["Propuesta de fianza", "Plan de libertad vigilada", "Compromisos personales"],
    efectividad: "Media-Alta"
  },
  {
    estrategia: "Impugnar Fundamentos",
    descripcion: "Demostrar que no concurren los requisitos legales",
    documentos: ["Escritos de defensa", "Pruebas desvirtuadoras", "Jurisprudencia favorable"],
    efectividad: "Variable"
  },
  {
    estrategia: "Colaboración Procesal",
    descripcion: "Mostrar actitud colaborativa con la justicia",
    documentos: ["Renuncia a derechos", "Declaraciones voluntarias", "Propuestas de conformidad"],
    efectividad: "Alta"
  }
];

const relatedArticles = [
  {
    title: 'Puesta a Disposición Judicial',
    slug: 'puesta-disposicion-judicial',
    category: 'Procedimiento Penal'
  },
  {
    title: 'Habeas Corpus: Recurso de Amparo',
    slug: 'habeas-corpus-recurso-amparo',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Modificación de Medidas Cautelares',
    slug: 'modificacion-medidas-cautelares',
    category: 'Procedimiento Penal'
  }
];

export default function MedidasCautelaresPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Traducciones específicas del blog
  const blogTranslations = language === 'ar' ? {
    hero: {
      backLink: 'العودة إلى مركز الدفاع الجنائي العاجل',
      title: 'التدابير الاحتياطية في الإجراءات الجنائية',
      subtitle: 'فهم ومواجهة التدابير الاحتياطية في الإجراءات الجنائية',
      description: 'دليل شامل لفهم التدابير الاحتياطية في الإجراءات الجنائية. كيفية الطعن فيها، تعديلها، وإدارتها بفعالية.'
    },
    sections: {
      tiposMedidas: 'أنواع التدابير الاحتياطية',
      criteriosJuez: 'المعايير التي يعتبرها القاضي',
      estrategiasImpugnar: 'استراتيجيات للطعن أو التعديل',
      plazosImpugnar: 'المواعيد للطعن في التدابير الاحتياطية',
      preguntasFrecuentes: 'الأسئلة الشائعة حول التدابير الاحتياطية',
      legislacion: 'التشريع والمراجع',
      conclusion: 'الخاتمة'
    }
  } : {
    hero: {
      backLink: 'Volver al hub de Defensa Penal Urgente',
      title: 'Medidas Cautelares en Procesos Penales',
      subtitle: 'Entender y Enfrentar las Medidas Cautelares en Procesos Penales',
      description: 'Guía completa para entender las medidas cautelares en procesos penales. Cómo impugnarlas, modificarlas y gestionarlas efectivamente.'
    },
    sections: {
      tiposMedidas: 'Tipos de Medidas Cautelares',
      criteriosJuez: 'Criterios que Considera el Juez',
      estrategiasImpugnar: 'Estrategias para Impugnar o Modificar',
      plazosImpugnar: 'Plazos para Impugnar Medidas Cautelares',
      preguntasFrecuentes: 'Preguntas Frecuentes sobre Medidas Cautelares',
      legislacion: 'Legislación y Referencias',
      conclusion: 'Conclusión'
    }
  };

  // Traducciones del contenido del artículo
  const contentTranslations = language === 'ar' ? {
    introduccion: {
      parrafo1: 'التدابير الاحتياطية هي قرارات قضائية تحد من الحقوق الأساسية مؤقتاً لضمان سير الإجراء الجنائي بشكل صحيح. منصوص عليها في المواد 503 وما يليها من قانون الإجراءات الجنائية، تهدف إلى ضمان حضور المتهم في الإجراء، منع تدمير الأدلة، أو حماية الضحايا والشهود.',
      parrafo2: 'في حالات الطوارئ الجنائية، تُفرض هذه التدابير أثناء تقديم المتهم للقضاء أو في الجلسات اللاحقة. يشرح هذا الدليل أنواع التدابير الاحتياطية، متطلباتها القانونية، واستراتيجيات الطعن فيها أو الحصول على تعديلها، بناءً على قضاء المحكمة العليا والمحكمة الدستورية.'
    },
    tiposCautelares: {
      titulo: 'أنواع التدابير الاحتياطية'
    }
  } : {
    introduccion: {
      parrafo1: 'Las <strong>medidas cautelares</strong> son decisiones judiciales que limitan temporalmente derechos fundamentales para asegurar el correcto desarrollo del proceso penal. Reguladas por los <strong>artículos 503 y siguientes de la Ley de Enjuiciamiento Criminal</strong>, buscan garantizar la presencia del imputado en el proceso, evitar la destrucción de pruebas, o proteger a víctimas y testigos.',
      parrafo2: 'En situaciones de urgencia penal, estas medidas se imponen durante la puesta a disposición judicial o en comparecencias posteriores. Esta guía explica los tipos de medidas cautelares, sus requisitos legales, y las estrategias para impugnarlas o conseguir su modificación, basándose en la jurisprudencia del <strong>Tribunal Supremo</strong> y <strong>Tribunal Constitucional</strong>.'
    },
    tiposCautelares: {
      titulo: 'Tipos de Medidas Cautelares'
    }
  };

  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: language === 'ar' ? 'الدفاع الجنائي العاجل' : 'Defensa Penal Urgente', href: '/blog/defensa-penal-urgente' },
    { label: blogTranslations.hero.title }
  ];

  const tocItems = [
    { id: 'tipos-de-medidas-cautelares', title: blogTranslations.sections.tiposMedidas, level: 2 },
    { id: 'criterios-que-considera-el-juez', title: blogTranslations.sections.criteriosJuez, level: 2 },
    { id: 'estrategias-para-impugnar-o-modificar', title: blogTranslations.sections.estrategiasImpugnar, level: 2 },
    { id: 'plazos-para-impugnar-medidas-cautelares', title: blogTranslations.sections.plazosImpugnar, level: 2 },
    { id: 'preguntas-frecuentes-sobre-medidas-cautelares', title: blogTranslations.sections.preguntasFrecuentes, level: 2 },
    { id: 'legislacion-y-referencias', title: blogTranslations.sections.legislacion, level: 2 },
    { id: 'conclusion', title: blogTranslations.sections.conclusion, level: 2 }
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
                {blogTranslations.hero.backLink}
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  {language === 'ar' ? 'الدفاع الجنائي العاجل' : 'Defensa Penal Urgente'}
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  14 {t.blog.minLectura}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                {blogTranslations.hero.title}
              </h1>

              <h2 className="text-xl sm:text-2xl font-semibold text-white/90 mb-4">
                {blogTranslations.hero.subtitle}
              </h2>

              <p className="text-lg text-white/80 mb-6">
                {blogTranslations.hero.description}
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  26 dic 2024
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
                  {contentTranslations.introduccion.parrafo1}
                </p>
                <p>
                  {contentTranslations.introduccion.parrafo2}
                </p>
              </div>

              {/* Tipos de Medidas Cautelares */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="tipos-de-medidas-cautelares" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {contentTranslations.tiposCautelares.titulo}
                </h2>

                <div className="space-y-6">
                  {tiposCautelares.map((medida, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`border-l-4 p-6 rounded-lg ${
                        medida.gravedad === 'Muy Alta' ? 'border-red-500 bg-red-50' :
                        medida.gravedad === 'Alta' ? 'border-orange-500 bg-orange-50' :
                        medida.gravedad === 'Media' ? 'border-yellow-500 bg-yellow-50' :
                        'border-green-500 bg-green-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {medida.tipo}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {medida.descripcion}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium mb-2 block ${
                            medida.gravedad === 'Muy Alta' ? 'bg-red-100 text-red-800' :
                            medida.gravedad === 'Alta' ? 'bg-orange-100 text-orange-800' :
                            medida.gravedad === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            Gravedad: {medida.gravedad}
                          </span>
                          <span className="text-xs text-black/60">
                            Duración: {medida.duracion}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-2">Requisitos para imponerla:</h4>
                        <ul className="space-y-1">
                          {medida.requisitos.map((requisito, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-black/80 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                              {requisito}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Criterios Judiciales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="criterios-que-considera-el-juez" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Criterios que Considera el Juez
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {criteriosJudiciales.map((criterio, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gold">
                          {criterio.criterio}
                        </h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          criterio.peso === 'Alto' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          Peso: {criterio.peso}
                        </span>
                      </div>

                      <h4 className="font-semibold text-gold mb-2">Indicadores que evalúa:</h4>
                      <ul className="space-y-1">
                        {criterio.indicadores.map((indicador, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                            <AlertTriangle className="h-3 w-3 text-yellow-400 flex-shrink-0" />
                            {indicador}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Estrategias de Defensa */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="estrategias-para-impugnar-o-modificar" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Estrategias para Impugnar o Modificar
                </h2>

                <div className="space-y-6">
                  {estrategiasDefensa.map((estrategia, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {estrategia.estrategia}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {estrategia.descripcion}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          estrategia.efectividad === 'Alta' ? 'bg-green-100 text-green-800' :
                          estrategia.efectividad === 'Media-Alta' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          Efectividad: {estrategia.efectividad}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-2">Documentos útiles:</h4>
                        <ul className="space-y-1">
                          {estrategia.documentos.map((doc, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-black/80 text-sm">
                              <FileText className="h-3 w-3 text-green-600 flex-shrink-0" />
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Plazos y Recursos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="plazos-para-impugnar-medidas-cautelares" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Plazos para Impugnar Medidas Cautelares
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <Scale className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Recursos Disponibles</h3>
                      <p className="text-black/80">
                        Tienes varios recursos para impugnar medidas cautelares, desde el más rápido
                        al más complejo, según la urgencia de tu situación.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Recurso de Reforma</h4>
                      <p className="text-black/80 text-sm mb-2">Ante el mismo juez</p>
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium w-fit">
                        Plazo: 5 días
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Recurso de Apelación</h4>
                      <p className="text-black/80 text-sm mb-2">Audiencia Provincial</p>
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium w-fit">
                        Plazo: 5-10 días
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Recurso de Casación</h4>
                      <p className="text-black/80 text-sm mb-2">Tribunal Supremo</p>
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium w-fit">
                        Plazo: excepcional
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-black mb-2">Consejo Importante</h4>
                    <p className="text-black/80 text-sm">
                      Los plazos comienzan a contar desde la notificación de la resolución judicial.
                      No esperes al último día para presentar los recursos, ya que cualquier error
                      formal puede hacer que se desestimen.
                    </p>
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
                <h2 id="preguntas-frecuentes-sobre-medidas-cautelares" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Medidas Cautelares
                </h2>

                <div className="space-y-6">
                  {cautelaresFAQ.map((faq, index) => (
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
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Procesal</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Ley de Enjuiciamiento Criminal</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1882-6039" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 503-510 (medidas cautelares)
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 10/1995</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1995-28278" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Código Penal (prisión provisional)
                      </a>
                    </li>
                    <li>
                      <strong>Ley 29/1998</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1998-24055" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Jurisdicción Contencioso-Administrativa
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Constitución Española</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Artículo 17</strong> - Derecho a la libertad y garantías
                    </li>
                    <li>
                      <strong>Artículo 24</strong> - Tutela judicial efectiva
                    </li>
                    <li>
                      <strong>Artículo 25</strong> - Principio de proporcionalidad
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 47/2018</strong> - Proporcionalidad de medidas cautelares
                    </li>
                    <li>
                      <strong>STS 123/2020</strong> - Libertad provisional vs prisión provisional
                    </li>
                    <li>
                      <strong>STEDH caso Mammadov</strong> - Medidas cautelares y derechos humanos
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Las medidas cautelares son decisiones judiciales que pueden marcar significativamente
                  el desarrollo del proceso penal. Aunque su imposición responde a criterios legales
                  objetivos, siempre existe la posibilidad de impugnarlas o conseguir su modificación
                  cuando cambian las circunstancias o se demuestra su desproporcionalidad.
                </p>
                <p className="text-white/90 leading-relaxed">
                  La clave está en una defensa especializada que conozca los matices de la legislación
                  procesal y sepa identificar las mejores estrategias según cada caso particular.
                  En STANS Abogados contamos con amplia experiencia en la impugnación de medidas
                  cautelares y podemos asesorarte sobre las opciones más efectivas para tu situación.
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gold/20">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-black/70 hover:text-gold transition">
                    <Share2 className="h-4 w-4" />
                    {t.blog.compartirArticulo}
                  </button>

                </div>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hola, tengo medidas cautelares impuestas y necesito impugnarlas`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Impugnación Medidas Cautelares
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
                Más información sobre medidas cautelares
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