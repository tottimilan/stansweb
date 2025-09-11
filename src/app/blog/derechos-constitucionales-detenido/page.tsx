'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, Gavel } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

// Función para generar el índice con traducciones dinámicas
function getTableOfContents(language: string, translations: any) {
  const blogTranslations = language === 'ar' ? {
    sections: {
      introduccion: 'المقدمة',
      derechosFundamentales: 'الحقوق الدستورية الأساسية',
      garantiasProcesales: 'الضمانات الإجرائية العملية',
      vulneracionesComunes: 'الانتهاكات الدستورية الشائعة',
      proteccionEspecial: 'الحماية الخاصة للفئات الضعيفة'
    },
    subsections: {
      menoresEdad: 'القاصرون',
      extranjeros: 'الأجانب',
      personasDiscapacidad: 'ذوي الاحتياجات الخاصة',
      victimasViolencia: 'ضحايا العنف'
    }
  } : {
    sections: {
      introduccion: 'Introducción',
      derechosFundamentales: 'Derechos Constitucionales Fundamentales',
      garantiasProcesales: 'Garantías Procesales Prácticas',
      vulneracionesComunes: 'Vulneraciones Constitucionales Comunes',
      proteccionEspecial: 'Protección Especial para Grupos Vulnerables'
    },
    subsections: {
      menoresEdad: 'Menores de Edad',
      extranjeros: 'Extranjeros',
      personasDiscapacidad: 'Personas con Discapacidad',
      victimasViolencia: 'Víctimas de Violencia'
    }
  };

  return [
    {
      id: 'introduccion',
      title: blogTranslations.sections.introduccion,
      level: 1
    },
    {
      id: 'derechos-fundamentales',
      title: blogTranslations.sections.derechosFundamentales,
      level: 1
    },
    {
      id: 'garantias-procesales',
      title: blogTranslations.sections.garantiasProcesales,
      level: 1
    },
    {
      id: 'vulneraciones-comunes',
      title: blogTranslations.sections.vulneracionesComunes,
      level: 1
    },
    {
      id: 'proteccion-especial',
      title: blogTranslations.sections.proteccionEspecial,
      level: 1,
      children: [
        { id: 'menores-edad', title: blogTranslations.subsections.menoresEdad, level: 2 },
        { id: 'extranjeros', title: blogTranslations.subsections.extranjeros, level: 2 },
        { id: 'personas-discapacidad', title: blogTranslations.subsections.personasDiscapacidad, level: 2 },
        { id: 'victimas-violencia', title: blogTranslations.subsections.victimasViolencia, level: 2 }
      ]
    },
    {
      id: 'preguntas-frecuentes',
      title: language === 'ar' ? 'الأسئلة الشائعة' : 'Preguntas Frecuentes',
      level: 1
    },
    {
      id: 'legislacion-referencias',
      title: language === 'ar' ? 'التشريع والمراجع' : 'Legislación y Referencias',
      level: 1
    },
    {
      id: 'conclusion',
      title: language === 'ar' ? 'الخاتمة' : 'Conclusión',
      level: 1
    }
  ];
}

const derechosFAQ = [
  {
    question: "¿Cuáles son los derechos constitucionales más importantes durante la detención?",
    answer: "Los derechos más importantes son: derecho a la libertad personal (art. 17 CE), derecho a la defensa (art. 24 CE), derecho a no declarar contra sí mismo (art. 24.2 CE), y derecho a la tutela judicial efectiva (art. 24.1 CE). Estos son irrenunciables."
  },
  {
    question: "¿Pueden los agentes policiales vulnerar mis derechos constitucionales?",
    answer: "No pueden vulnerarlos directamente, pero cualquier irregularidad policial puede ser impugnada. Los derechos constitucionales son límites infranqueables para la actuación policial, y cualquier vulneración puede dar lugar a responsabilidad penal y civil."
  },
  {
    question: "¿Qué hacer si un agente vulnera mis derechos constitucionales?",
    answer: "Debe denunciarlo inmediatamente, anotar todos los detalles (hora, lugar, agentes implicados), solicitar asistencia letrada, y formalizar la denuncia ante el juzgado de guardia o fiscalía. Es fundamental documentar todo para acreditar la vulneración."
  },
  {
    question: "¿Los derechos constitucionales se aplican desde el primer momento?",
    answer: "Sí, desde el preciso instante de la detención o privación de libertad. No hay un 'período de gracia'. Cualquier actuación anterior a la información de derechos puede ser impugnada como prueba obtenida ilícitamente."
  },
  {
    question: "¿Puedo renunciar a mis derechos constitucionales?",
    answer: "No, los derechos constitucionales son irrenunciables. Cualquier 'renuncia' obtenida bajo presión, engaño o sin asistencia letrada es nula de pleno derecho. Solo se pueden renunciar derechos procesales específicos."
  },
  {
    question: "¿Qué ocurre si no se me informa de mis derechos constitucionales?",
    answer: "Es una vulneración grave que puede anular todo el procedimiento. Si no se informa por escrito y de forma comprensible, cualquier actuación posterior puede ser declarada nula, incluyendo declaraciones y registros."
  },
  {
    question: "¿Los derechos constitucionales son los mismos para todos?",
    answer: "Los derechos básicos son universales, pero hay protecciones adicionales para grupos vulnerables: menores, extranjeros, personas con discapacidad, víctimas de violencia de género, etc. Estas protecciones especiales están reguladas por leyes específicas."
  },
  {
    question: "¿Dónde están garantizados mis derechos constitucionales?",
    answer: "Están garantizados por la Constitución Española (Capítulo II, arts. 14-29), las leyes procesales (LECrim, LOPJ), y tratados internacionales ratificados por España (CEDH, PIDCP). El Tribunal Constitucional es el máximo garante."
  }
];

const derechosFundamentales = [
  {
    derecho: "Derecho a la Libertad Personal",
    articulo: "Artículo 17 CE",
    descripcion: "Protección contra privaciones arbitrarias de libertad",
    garantias: ["Orden judicial motivada", "Control judicial efectivo", "Duración limitada"],
    importancia: "Fundamental"
  },
  {
    derecho: "Derecho a la Defensa",
    articulo: "Artículo 24.2 CE",
    descripcion: "Derecho a asistencia letrada desde el primer momento",
    garantias: ["Abogado gratuito", "Comunidad autónoma", "Presencia obligatoria"],
    importancia: "Fundamental"
  },
  {
    derecho: "Derecho al Silencio",
    articulo: "Artículo 24.2 CE",
    descripcion: "No declarar contra sí mismo ni autoinculparse",
    garantias: ["Información previa", "Asistencia letrada", "No presunción culpabilidad"],
    importancia: "Fundamental"
  },
  {
    derecho: "Derecho a la Tutela Judicial Efectiva",
    articulo: "Artículo 24.1 CE",
    descripcion: "Control judicial de todas las actuaciones",
    garantias: ["Recursos efectivos", "Plazos razonables", "Decisiones motivadas"],
    importancia: "Fundamental"
  },
  {
    derecho: "Presunción de Inocencia",
    articulo: "Artículo 24.2 CE",
    descripcion: "Considerado inocente hasta prueba en contrario",
    garantias: ["Carga probatoria fiscal", "Duda razonable", "No estigma social"],
    importancia: "Fundamental"
  },
  {
    derecho: "Derecho a un Proceso Justo",
    articulo: "Artículo 24 CE",
    descripcion: "Procedimiento respetuoso con garantías",
    garantias: ["Contradicción", "Igualdad de armas", "Publicidad proceso"],
    importancia: "Fundamental"
  },
  {
    derecho: "Derecho a la Dignidad",
    articulo: "Artículo 10.1 CE",
    descripcion: "Trato respetuoso en todo momento",
    garantias: ["Condiciones dignas", "Respeto intimidad", "No tratos degradantes"],
    importancia: "Fundamental"
  },
  {
    derecho: "Derecho a la Integridad Física",
    articulo: "Artículo 15 CE",
    descripcion: "Protección contra torturas y tratos inhumanos",
    garantias: ["Prohibición absoluta", "Atención médica", "Examen forense"],
    importancia: "Fundamental"
  }
];

const garantiasProcesales = [
  {
    garantia: "Derecho a Ser Informado",
    descripcion: "Información clara y comprensible de derechos",
    procedimiento: "Lectura por escrito, explicación verbal, confirmación entendimiento",
    plazo: "Inmediato"
  },
  {
    garantia: "Derecho a Comunicar",
    descripcion: "Informar a familiar o persona de confianza",
    procedimiento: "Llamada gratuita, comunicación privada, registro de llamadas",
    plazo: "Máximo 24 horas"
  },
  {
    garantia: "Derecho a Asistencia Médica",
    descripcion: "Atención sanitaria inmediata si necesaria",
    procedimiento: "Evaluación médica, medicamentos, informes sanitarios",
    plazo: "Inmediata"
  },
  {
    garantia: "Derecho a Recursos",
    descripcion: "Impugnar actuaciones irregulares",
    procedimiento: "Recursos ordinarios, habeas corpus, amparo constitucional",
    plazo: "Según tipo de recurso"
  },
  {
    garantia: "Derecho a Traducción",
    descripcion: "Traducción si no se entiende el español",
    procedimiento: "Intérprete oficial, documentos traducidos, comunicación efectiva",
    plazo: "Desde el inicio"
  },
  {
    garantia: "Derecho a No Autoincriminarse",
    descripcion: "No obligación de declarar contra sí mismo",
    procedimiento: "Información de derecho al silencio, presencia letrada, no presiones",
    plazo: "Permanente"
  }
];

const vulneracionesComunes = [
  {
    vulneracion: "Falta de Información de Derechos",
    consecuencias: ["Nulidad de actuaciones", "Inadmisión de pruebas", "Responsabilidad policial"],
    prevencion: "Exigir lectura por escrito, confirmar entendimiento"
  },
  {
    vulneracion: "Retraso en Asistencia Letrada",
    consecuencias: ["Nulidad de declaraciones", "Indemnización", "Sanciones disciplinarias"],
    prevencion: "Insistir en abogado inmediato, registrar denegaciones"
  },
  {
    vulneracion: "Tratos Degradantes",
    consecuencias: ["Delito de torturas", "Nulidad procesal", "Responsabilidad patrimonial"],
    prevencion: "Documentar todo, denunciar inmediatamente, solicitar médico"
  },
  {
    vulneracion: "Registro Ilegal",
    consecuencias: ["Nulidad de pruebas", "Indemnización", "Responsabilidad penal"],
    prevencion: "No consentir sin orden judicial, registrar procedimiento"
  },
  {
    vulneracion: "Negación de Comunicación",
    consecuencias: ["Vulneración CEDH", "Nulidad parcial", "Recursos internacionales"],
    prevencion: "Registrar peticiones, insistir en derechos, denunciar omisiones"
  },
  {
    vulneracion: "Coacciones para Declarar",
    consecuencias: ["Nulidad de declaraciones", "Delito de coacciones", "Libertad inmediata"],
    prevencion: "Presencia letrada obligatoria, no declarar sin abogado"
  }
];

const relatedArticles = [
  {
    title: 'Derechos Inmediatos al Ser Detenido',
    slug: 'derechos-inmediatos-detenido',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Asistencia Letrada de Urgencia',
    slug: 'asistencia-letrada-urgencia',
    category: 'Asistencia Legal'
  },
  {
    title: 'Primeros Pasos en Comisaría',
    slug: 'primeros-pasos-comisaria',
    category: 'Procedimiento Policial'
  }
];

export default function DerechosConstitucionalesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Generar índice con traducciones dinámicas
  const tableOfContents = getTableOfContents(language, t);

  // Traducciones específicas del blog
  const blogTranslations = language === 'ar' ? {
    hero: {
      backLink: 'العودة إلى مركز حقوق المعتقلين',
      title: 'الحقوق الدستورية للمعتقل',
      subtitle: 'الحماية الدستورية الكاملة للمعتقلين في إسبانيا',
      description: 'دليل شامل لحقوقك الدستورية عند الاعتقال. من الدستور الإسباني إلى المعاهدات الدولية، conoce tus garantías fundamentales.'
    },
    sections: {
      introduccion: 'المقدمة',
      derechosFundamentales: 'الحقوق الدستورية الأساسية',
      garantiasProcesales: 'الضمانات الإجرائية العملية',
      vulneracionesComunes: 'الانتهاكات الدستورية الشائعة',
      proteccionEspecial: 'الحماية الخاصة للفئات الضعيفة'
    },
    subsections: {
      menoresEdad: 'القاصرون',
      extranjeros: 'الأجانب',
      personasDiscapacidad: 'ذوي الاحتياجات الخاصة',
      victimasViolencia: 'ضحايا العنف'
    },
    content: {
      introduccion: {
        parrafo1: 'الحقوق الدستورية للمعتقل هي الضمانات الأساسية التي تحمي الحرية وكرامة كل شخص محروم من الحرية. منصوص عليها في الباب الأول من الدستور الإسباني (المواد 14-29)، هذه الحقوق غير قابلة للتنازل وغير قابلة للتقادم، وتشكل حدوداً لا يمكن تجاوزها لأي إجراء شرطي أو قضائي.',
        parrafo2: 'يحلل هذا الدليل الشامل كل حق دستوري قابل للتطبيق أثناء الاعتقال، ضماناته العملية، وعواقب انتهاكه، بناءً على قضاء المحكمة الدستورية والمحكمة الأوروبية لحقوق الإنسان، التي طورت هذه الحقوق على مدى عقود من الأحكام.'
      }
    }
  } : {
    hero: {
      backLink: 'Volver al hub de Derechos de Detenidos',
      title: 'Derechos Constitucionales del Detenido',
      subtitle: 'Protección Constitucional Completa para Detenidos en España',
      description: 'Guía completa de tus derechos constitucionales en detención. Desde la Constitución Española hasta tratados internacionales, conoce tus garantías fundamentales.'
    },
    sections: {
      introduccion: 'Introducción',
      derechosFundamentales: 'Derechos Constitucionales Fundamentales',
      garantiasProcesales: 'Garantías Procesales Prácticas',
      vulneracionesComunes: 'Vulneraciones Constitucionales Comunes',
      proteccionEspecial: 'Protección Especial para Grupos Vulnerables'
    },
    subsections: {
      menoresEdad: 'Menores de Edad',
      extranjeros: 'Extranjeros',
      personasDiscapacidad: 'Personas con Discapacidad',
      victimasViolencia: 'Víctimas de Violencia'
    },
    content: {
      introduccion: {
        parrafo1: 'Los <strong>derechos constitucionales del detenido</strong> son las garantías fundamentales que protegen la libertad y dignidad de toda persona privada de libertad. Recogidos en el <strong>Título I de la Constitución Española</strong> (arts. 14-29), estos derechos son <strong>irrenunciables</strong> e imprescribibles, constituyendo límites infranqueables para cualquier actuación policial o judicial.',
        parrafo2: 'Esta guía exhaustiva analiza cada derecho constitucional aplicable durante la detención, sus garantías prácticas, y las consecuencias de su vulneración, basándose en la jurisprudencia del <strong>Tribunal Constitucional</strong> y el <strong>Tribunal Europeo de Derechos Humanos</strong>, que han desarrollado estos derechos a través de décadas de pronunciamientos.'
      }
    }
  };

  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: language === 'ar' ? 'حقوق المعتقلين' : 'Derechos de Detenidos', href: '/blog/derechos-detenidos' },
    { label: blogTranslations.hero.title }
  ];

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      <main className="bg-black">
        {/* Table of Contents */}
        <TableOfContents items={tableOfContents} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-charleston text-offwhite py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog/derechos-detenidos"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                {blogTranslations.hero.backLink}
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  {language === 'ar' ? 'حقوق المعتقلين' : 'Derechos de Detenidos'}
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  15 {t.blog.minLectura}
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
                  07 ene 2025
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <div id="introduccion" className="text-black/80 leading-relaxed mb-12 text-lg">
                <p>
                  {blogTranslations.content.introduccion.parrafo1}
                </p>
                <p>
                  {blogTranslations.content.introduccion.parrafo2}
                </p>
              </div>

              {/* Derechos Fundamentales */}
              <motion.div
                id="derechos-fundamentales"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {blogTranslations.sections.derechosFundamentales}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {derechosFundamentales.map((derecho, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-black">{derecho.derecho}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          derecho.importancia === 'Fundamental' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {derecho.importancia}
                        </span>
                      </div>

                      <div className="mb-3">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {derecho.articulo}
                        </span>
                      </div>

                      <p className="text-black/80 text-sm mb-3">
                        {derecho.descripcion}
                      </p>

                      <div>
                        <h5 className="font-medium text-black mb-2 text-sm">Garantías:</h5>
                        <ul className="text-xs text-black/70 space-y-1">
                          {derecho.garantias.map((garantia, idx) => (
                            <li key={idx}>• {garantia}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Garantías Procesales */}
              <motion.div
                id="garantias-procesales"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {blogTranslations.sections.garantiasProcesales}
                </h2>

                <div className="space-y-6">
                  {garantiasProcesales.map((garantia, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-blue-50 border border-blue-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {garantia.garantia}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {garantia.descripcion}
                          </p>
                        </div>
                        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">
                          {language === 'ar' ? 'المهلة:' : 'Plazo:'} {garantia.plazo}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'الإجراء:' : 'Procedimiento:'}</h4>
                        <p className="text-black/80 text-sm">
                          {garantia.procedimiento}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Vulneraciones Comunes */}
              <motion.div
                id="vulneraciones-comunes"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {blogTranslations.sections.vulneracionesComunes}
                </h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">
                        {language === 'ar' ? 'الوقاية والكشف' : 'Prevención y Detección'}
                      </h3>
                      <p className="text-black/80">
                        Conocer las vulneraciones más comunes permite prevenirlas y actuar
                        rápidamente cuando ocurren. Toda vulneración constitucional debe ser
                        documentada y denunciada inmediatamente.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {vulneracionesComunes.map((vulneracion, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-yellow-200 rounded-lg p-6"
                      >
                        <h4 className="font-semibold text-black mb-2">{vulneracion.vulneracion}</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-red-700 mb-2">
                              {language === 'ar' ? 'العواقب:' : 'Consecuencias:'}
                            </h5>
                            <ul className="text-sm text-black/80 space-y-1">
                              {vulneracion.consecuencias.map((consecuencia, idx) => (
                                <li key={idx}>• {consecuencia}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">
                              {language === 'ar' ? 'الوقاية:' : 'Prevención:'}
                            </h5>
                            <ul className="text-sm text-black/80 space-y-1">
                              {Array.isArray(vulneracion.prevencion)
                                ? vulneracion.prevencion.map((prevencion, idx) => (
                                    <li key={idx}>• {prevencion}</li>
                                  ))
                                : <li>• {vulneracion.prevencion}</li>
                              }
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Protección Especial */}
              <motion.div
                id="proteccion-especial"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {blogTranslations.sections.proteccionEspecial}
                </h2>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">
                        {language === 'ar' ? 'الحقوق المعززة' : 'Derechos Reforzados'}
                      </h3>
                      <p className="text-black/80 mt-1">
                        {language === 'ar' ? 'الفئات الضعيفة لديها حمايات دستورية إضافية' : 'Grupos vulnerables tienen protecciones constitucionales adicionales'}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div id="menores-edad" className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">{blogTranslations.subsections.menoresEdad}</h4>
                        <ul className="text-sm text-black/80 space-y-1">
                          <li>• Derecho a presencia familiar</li>
                          <li>• Abogado especializado en menores</li>
                          <li>• Consideración del interés superior</li>
                          <li>• Prohibición de incomunicación</li>
                        </ul>
                      </div>

                      <div id="extranjeros" className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">{blogTranslations.subsections.extranjeros}</h4>
                        <ul className="text-sm text-black/80 space-y-1">
                          <li>• Derecho a traducción oficial</li>
                          <li>• Comunicación consular</li>
                          <li>• Información en idioma nativo</li>
                          <li>• Protección diplomática</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div id="personas-discapacidad" className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">{blogTranslations.subsections.personasDiscapacidad}</h4>
                        <ul className="text-sm text-black/80 space-y-1">
                          <li>• Adaptaciones razonables</li>
                          <li>• Apoyo especializado</li>
                          <li>• Comunicación accesible</li>
                          <li>• Medidas de apoyo técnico</li>
                        </ul>
                      </div>

                      <div id="victimas-violencia" className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">{blogTranslations.subsections.victimasViolencia}</h4>
                        <ul className="text-sm text-black/80 space-y-1">
                          <li>• Protección especial</li>
                          <li>• Alejamiento de agresores</li>
                          <li>• Apoyo psicológico</li>
                          <li>• Medidas de seguridad</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                id="preguntas-frecuentes"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Derechos Constitucionales
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
                id="legislacion-referencias"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Legislación y Referencias
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Constitucional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Constitución Española (1978)</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Título I, arts. 14-29 (Derechos fundamentales)
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 4/2015</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-3443" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Protección Seguridad Ciudadana
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 1/1979</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1979-304" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Derechos de los detenidos
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convenio Europeo de Derechos Humanos</strong> -
                      <a href="https://www.echr.coe.int/Documents/Convention_SPA.pdf" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Arts. 5, 6, 8 (Libertad, proceso justo, vida privada)
                      </a>
                    </li>
                    <li>
                      <strong>Pacto Internacional de Derechos Civiles y Políticos</strong> -
                      <a href="https://www.ohchr.org/sp/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Arts. 9, 14 (Libertad, proceso justo)
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Destacada</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 47/2018</strong> - Límites constitucionales de la detención
                    </li>
                    <li>
                      <strong>STC 114/2017</strong> - Derechos fundamentales en comisaría
                    </li>
                    <li>
                      <strong>STEDH Caso Mammadov</strong> - Derechos humanos en detención
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div id="conclusion" className="bg-charleston text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Los derechos constitucionales del detenido son la base fundamental del Estado de Derecho
                  y la protección de la dignidad humana. Estos derechos, irrenunciables e imprescriptibles,
                  constituyen límites infranqueables para cualquier actuación policial o judicial, garantizando
                  que la privación de libertad se realice siempre de manera legítima y respetuosa.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Su efectividad práctica depende tanto del conocimiento de estos derechos como de la
                  determinación para ejercerlos. Cualquier vulneración debe ser documentada y denunciada
                  inmediatamente, utilizando todos los recursos procesales disponibles. En STANS Abogados
                  contamos con amplia experiencia en la defensa de derechos constitucionales vulnerados
                  durante la detención.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito información sobre mis derechos constitucionales durante la detención`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Consulta Derechos Constitucionales
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
              className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gold mb-4">
                {t.blog.articulosRelacionados}
              </h2>
              <p className="text-white/80">
                Más información sobre derechos de detenidos
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
