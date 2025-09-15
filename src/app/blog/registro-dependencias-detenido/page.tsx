'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Home, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const registroFAQ = [
  {
    question: "¿Pueden registrar mi domicilio sin mi presencia?",
    answer: "No, salvo casos excepcionales de flagrante delito. Normalmente, el registro domiciliario requiere tu presencia o la de un familiar mayor de edad. Si no estás presente, debe estar tu abogado o un familiar."
  },
  {
    question: "¿Necesitan orden judicial para registrar mi casa?",
    answer: "Sí, los registros domiciliarios requieren orden judicial motivada que especifique el lugar, finalidad y objetos a buscar. Sin orden judicial, el registro sería ilegal y las pruebas obtenidas, nulas."
  },
  {
    question: "¿Puedo negarme a que registren mi domicilio?",
    answer: "Sí, puedes negarte, pero la policía puede solicitar autorización judicial para realizar el registro. Si se concede, el registro se realizará igualmente, pero con garantías adicionales."
  },
  {
    question: "¿Qué deben hacer antes de registrar?",
    answer: "Deben identificarse, mostrar la orden judicial, explicarte el motivo del registro, y permitirte designar testigos. Todo debe registrarse en acta y grabarse si lo solicitas."
  },
  {
    question: "¿Pueden romper puertas o ventanas?",
    answer: "Solo en casos de extrema urgencia (flagrante delito) y con autorización judicial expresa. Normalmente deben esperar a que abras voluntariamente o conseguir llaves de un familiar."
  },
  {
    question: "¿Qué objetos pueden llevarse?",
    answer: "Solo aquellos relacionados con el delito investigado y especificados en la orden judicial. Deben elaborar inventario detallado de todo lo intervenido y entregarte copia."
  },
  {
    question: "¿Pueden registrar habitaciones de menores?",
    answer: "Requiere consideraciones especiales. Si hay menores, debe estar presente un familiar o representante legal. Los objetos de menores solo pueden registrarse si están relacionados con el delito."
  },
  {
    question: "¿Qué pasa si rompen algo durante el registro?",
    answer: "Si causan daños, tienes derecho a indemnización. Debes documentar los daños con fotos y comunicar inmediatamente a tu abogado. La indemnización se reclama en vía administrativa."
  }
];

const tiposRegistro = [
  {
    tipo: "Registro Domiciliario",
    descripcion: "Registro de vivienda habitual o secundaria",
    requisitos: ["Orden judicial motivada", "Presencia del titular o familiar", "Acta detallada"],
    derechos: ["Negarte inicialmente", "Presencia de abogado", "Solicitar testigos"]
  },
  {
    tipo: "Registro Personal",
    descripcion: "Cacheo superficial en vía pública o detención",
    requisitos: ["Sospecha fundada", "Proporcionalidad", "Presencia policial"],
    derechos: ["No consentir tocamientos íntimos", "Presencia de abogado", "Recurso administrativo"]
  },
  {
    tipo: "Registro Vehicular",
    descripcion: "Registro de automóviles, motocicletas o barcos",
    requisitos: ["Orden judicial o consentimiento", "Presencia del titular", "Inventario de objetos"],
    derechos: ["Negarte inicialmente", "Solicitar abogado", "Fotografiar el procedimiento"]
  },
  {
    tipo: "Registro de Dispositivos",
    descripcion: "Teléfonos móviles, ordenadores, tablets",
    requisitos: ["Orden judicial específica", "Especialización técnica", "Cadena de custodia"],
    derechos: ["Contraseña no obligatoria", "Presencia de abogado", "Copia de datos intervenidos"]
  }
];

const fasesRegistro = [
  {
    fase: 1,
    titulo: "Llegada al Lugar",
    descripcion: "Policía llega al lugar a registrar",
    derechos: ["Verificar identificación", "Revisar orden judicial", "Pedir explicaciones"],
    acciones: ["Mantener calma", "Pedir abogado", "Tomar nota de datos"]
  },
  {
    fase: 2,
    titulo: "Lectura de Derechos",
    descripcion: "Explicación del motivo y derechos",
    derechos: ["Escuchar atentamente", "Pedir aclaraciones", "Designar testigos"],
    acciones: ["Preguntar dudas", "Solicitar abogado", "Preparar testigos"]
  },
  {
    fase: 3,
    titulo: "Ejecución del Registro",
    descripcion: "Búsqueda de objetos especificados",
    derechos: ["Observar procedimiento", "Tomar notas", "Fotografiar si procede"],
    acciones: ["No interferir", "Apuntar objetos", "Documentar daños"]
  },
  {
    fase: 4,
    titulo: "Levantamiento del Acta",
    descripcion: "Documentación de lo intervenido",
    derechos: ["Revisar inventario", "Firmar o no firmar", "Pedir copia"],
    acciones: ["Comprobar exactitud", "Anotar objeciones", "Guardar copia"]
  }
];

const garantiasRegistro = [
  {
    garantia: "Presencia Obligatoria",
    descripcion: "Titular o familiar mayor de edad debe estar presente",
    excepcion: "Flagrante delito con riesgo de destrucción pruebas",
    importancia: "Muy Alta"
  },
  {
    garantia: "Orden Judicial",
    descripcion: "Motivada y específica sobre lugar y objetos",
    excepcion: "Registro en flagrancia con posterior ratificación",
    importancia: "Fundamental"
  },
  {
    garantia: "Acta Detallada",
    descripcion: "Registro completo de procedimiento y hallazgos",
    excepcion: "Ninguna - siempre obligatoria",
    importancia: "Alta"
  },
  {
    garantia: "Cadena de Custodia",
    descripcion: "Control estricto de pruebas intervenidas",
    excepcion: "Ninguna - esencial para validez",
    importancia: "Fundamental"
  }
];

const documentosRegistro = [
  {
    documento: "Orden Judicial",
    descripcion: "Autorización formal del juez",
    contenido: ["Motivos del registro", "Lugar específico", "Objetos a buscar"],
    importancia: "Crucial"
  },
  {
    documento: "Acta de Registro",
    descripcion: "Relato detallado del procedimiento",
    contenido: ["Hora de llegada/salida", "Personas presentes", "Objetos intervenidos"],
    importancia: "Fundamental"
  },
  {
    documento: "Inventario de Objetos",
    descripcion: "Lista detallada de lo intervenido",
    contenido: ["Descripción precisa", "Estado de conservación", "Número de identificación"],
    importancia: "Alta"
  },
  {
    documento: "Fotografías/Vídeos",
    descripcion: "Registro visual del procedimiento",
    contenido: ["Antes del registro", "Durante el procedimiento", "Después del registro"],
    importancia: "Recomendable"
  }
];

const relatedArticles = [
  {
    title: 'Derechos Inmediatos al Ser Detenido',
    slug: 'derechos-inmediatos-detenido',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Primeros Pasos en Comisaría',
    slug: 'primeros-pasos-comisaria',
    category: 'Procedimiento Policial'
  },
  {
    title: 'Medidas Cautelares en Procesos Penales',
    slug: 'medidas-cautelares-procesos-penales',
    category: 'Procedimiento Penal'
  }
];

export default function RegistroDependenciasPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Traducciones específicas del blog
  const blogTranslations = language === 'ar' ? {
    hero: {
      backLink: 'العودة إلى مركز الدفاع الجنائي العاجل',
      title: 'تفتيش التبعيات أثناء الاعتقال',
      subtitle: 'الحقوق أثناء التفتيش السكني والشخصي',
      description: 'الحقوق أثناء التفتيش السكني والشخصي، الضمانات الإجرائية، كيفية الطعن في المخالفات وحماية ممتلكاتك.'
    },
    sections: {
      tiposRegistros: 'أنواع التفتيش أثناء الاعتقال',
      fasesRegistro: 'مراحل التفتيش السكني',
      garantiasProcesales: 'الضمانات الإجرائية في التفتيش',
      documentacionObligatoria: 'الوثائق الإلزامية',
      protocoloDefensa: 'بروتوكول الدفاع أمام التفتيش',
      preguntasFrecuentes: 'الأسئلة الشائعة حول التفتيش',
      legislacion: 'التشريع والمراجع',
      conclusion: 'الخاتمة'
    }
  } : {
    hero: {
      backLink: 'Volver al hub de Defensa Penal Urgente',
      title: 'Registro de Dependencias durante la Detención',
      subtitle: 'Derechos durante Registros Domiciliarios y Personales',
      description: 'Derechos durante registros domiciliarios y personales, garantías procesales, cómo impugnar irregularidades y proteger tus bienes.'
    },
    sections: {
      tiposRegistros: 'Tipos de Registros durante la Detención',
      fasesRegistro: 'Fases de un Registro Domiciliario',
      garantiasProcesales: 'Garantías Procesales en los Registros',
      documentacionObligatoria: 'Documentación Obligatoria',
      protocoloDefensa: 'Protocolo de Defensa ante un Registro',
      preguntasFrecuentes: 'Preguntas Frecuentes sobre Registros',
      legislacion: 'Legislación y Referencias',
      conclusion: 'Conclusión'
    }
  };

  // Traducciones del contenido del artículo
  const contentTranslations = language === 'ar' ? {
    introduccion: {
      parrafo1: 'تفتيش التبعيات هو إجراءات شرطية غازية تتطلب أقصى الضمانات الإجرائية. منصوص عليها في المواد 545 وما يليها من قانون الإجراءات الجنائية ومحمية بموجب المادة 18 من الدستور الإسباني، تهدف هذه التفتيشات إلى الحصول على أدلة متعلقة بالجريمة المحقق فيها.',
      parrafo2: 'توضح هذه الدليل أنواع التفتيش التي يمكن إجراؤها أثناء الاعتقال، الضمانات التي تساعدك، وكيفية الطعن في أي مخالفة تنتهك حقوقك الدستورية، بناءً على قضاء المحكمة الدستورية والمحكمة العليا.'
    },
    tiposRegistro: {
      titulo: 'أنواع التفتيش أثناء الاعتقال'
    }
  } : {
    introduccion: {
      parrafo1: 'Los <strong>registros de dependencias</strong> son actuaciones policiales invasivas que requieren las máximas garantías procesales. Regulados por los <strong>artículos 545 y siguientes de la Ley de Enjuiciamiento Criminal</strong> y protegidos por el <strong>artículo 18 de la Constitución Española</strong>, estos registros buscan obtener pruebas relacionadas con el delito investigado.',
      parrafo2: 'Esta guía explica los tipos de registros que pueden realizarse durante una detención, las garantías que te asisten, y cómo impugnar cualquier irregularidad que vulnere tus derechos constitucionales, basándose en la jurisprudencia del <strong>Tribunal Constitucional</strong> y <strong>Tribunal Supremo</strong>.'
    },
    tiposRegistro: {
      titulo: 'Tipos de Registros durante la Detención'
    }
  };

  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: language === 'ar' ? 'الدفاع الجنائي العاجل' : 'Defensa Penal Urgente', href: '/blog/defensa-penal-urgente' },
    { label: blogTranslations.hero.title }
  ];

  const tocItems = [
    { id: 'tipos-de-registros-durante-la-detencion', title: blogTranslations.sections.tiposRegistros, level: 2 },
    { id: 'fases-de-un-registro-domiciliario', title: blogTranslations.sections.fasesRegistro, level: 2 },
    { id: 'garantias-procesales-en-los-registros', title: blogTranslations.sections.garantiasProcesales, level: 2 },
    { id: 'documentacion-obligatoria', title: blogTranslations.sections.documentacionObligatoria, level: 2 },
    { id: 'protocolo-de-defensa-ante-un-registro', title: blogTranslations.sections.protocoloDefensa, level: 2 },
    { id: 'preguntas-frecuentes-sobre-registros', title: blogTranslations.sections.preguntasFrecuentes, level: 2 },
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
                  13 {t.blog.minLectura}
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
                  30 dic 2024
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

              {/* Tipos de Registro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="tipos-de-registros-durante-la-detencion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {contentTranslations.tiposRegistro.titulo}
                </h2>

                <div className="space-y-6">
                  {tiposRegistro.map((registro, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Home className="h-6 w-6 text-gold" />
                        <h3 className="text-lg font-semibold text-gold">
                          {registro.tipo}
                        </h3>
                      </div>

                      <p className="text-white/80 mb-4">
                        {registro.descripcion}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gold mb-2">Requisitos:</h4>
                          <ul className="space-y-1">
                            {registro.requisitos.map((requisito, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                                <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                                {requisito}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gold mb-2">Tus derechos:</h4>
                          <ul className="space-y-1">
                            {registro.derechos.map((derecho, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                                <Shield className="h-3 w-3 text-blue-400 flex-shrink-0" />
                                {derecho}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Fases del Registro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="fases-de-un-registro-domiciliario" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Fases de un Registro Domiciliario
                </h2>

                <div className="space-y-8">
                  {fasesRegistro.map((fase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-blue-50 border border-blue-200 rounded-lg p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                          {fase.fase}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {fase.titulo}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {fase.descripcion}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-black mb-2">Derechos que tienes:</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {fase.derechos.map((derecho, idx) => (
                              <li key={idx}>• {derecho}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-2">Acciones recomendadas:</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {fase.acciones.map((accion, idx) => (
                              <li key={idx}>• {accion}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Garantías Procesales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="garantias-procesales-en-los-registros" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Garantías Procesales en los Registros
                </h2>

                <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">Protecciones Constitucionales</h3>
                      <p className="text-black/80 mt-1">
                        Derechos irrenunciables durante cualquier registro
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {garantiasRegistro.map((garantia, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-green-200 rounded-lg p-6"
                      >
                        <h4 className="font-semibold text-black mb-2">{garantia.garantia}</h4>
                        <p className="text-black/80 text-sm mb-3">
                          {garantia.descripcion}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                              Excepción: {garantia.excepcion}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              garantia.importancia === 'Fundamental' ? 'bg-red-100 text-red-800' :
                              garantia.importancia === 'Muy Alta' ? 'bg-orange-100 text-orange-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              Importancia: {garantia.importancia}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Documentación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="documentacion-obligatoria" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Documentación Obligatoria
                </h2>

                <div className="space-y-6">
                  {documentosRegistro.map((documento, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {documento.documento}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {documento.descripcion}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          documento.importancia === 'Crucial' ? 'bg-red-100 text-red-800' :
                          documento.importancia === 'Fundamental' ? 'bg-orange-100 text-orange-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {documento.importancia}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-2">Debe contener:</h4>
                        <ul className="space-y-1">
                          {documento.contenido.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-black/80 text-sm">
                              <FileText className="h-3 w-3 text-yellow-600 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Protocolo de Defensa */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="protocolo-de-defensa-ante-un-registro" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Protocolo de Defensa ante un Registro
                </h2>

                <div className="bg-red-50 border-l-4 border-red-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Mantén la Calma y Documenta Todo</h3>
                      <p className="text-black/80">
                        Los registros son momentos de alta tensión. Tu comportamiento y documentación
                        pueden ser cruciales para impugnar cualquier irregularidad posterior.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">✅ Antes del registro:</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Verifica la orden judicial</li>
                        <li>• Llama inmediatamente a tu abogado</li>
                        <li>• Designa testigos si es posible</li>
                        <li>• Prepara documentación personal</li>
                        <li>• Mantén la calma y coopera</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">📝 Durante el registro:</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Observa sin interferir</li>
                        <li>• Toma notas detalladas</li>
                        <li>• Fotografía si está permitido</li>
                        <li>• Pregunta dudas razonables</li>
                        <li>• No firmes nada sin leer</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-black mb-2">Después del registro:</h4>
                    <ul className="text-sm text-black/80 space-y-1">
                      <li>• Revisa el acta detenidamente</li>
                      <li>• Apunta cualquier objeción</li>
                      <li>• Guarda copia de toda la documentación</li>
                      <li>• Consulta inmediatamente con tu abogado</li>
                      <li>• Prepara recursos si detectas irregularidades</li>
                    </ul>
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
                <h2 id="preguntas-frecuentes-sobre-registros" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Registros
                </h2>

                <div className="space-y-6">
                  {registroFAQ.map((faq, index) => (
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
                        Artículos 545-566 (registros y entradas)
                      </a>
                    </li>
                    <li>
                      <strong>Constitución Española (1978)</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículo 18 (inviolabilidad del domicilio)
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 4/2015</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-3443" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Seguridad Ciudadana (registros)
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convenio Europeo de Derechos Humanos</strong> -
                      <a href="https://www.echr.coe.int/Documents/Convention_SPA.pdf" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículo 8 (derecho a la vida privada)
                      </a>
                    </li>
                    <li>
                      <strong>Pacto Internacional de Derechos Civiles y Políticos</strong> -
                      <a href="https://www.ohchr.org/sp/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículo 17 (inviolabilidad del hogar)
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Destacada</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 114/2017</strong> - Límites de los registros domiciliarios
                    </li>
                    <li>
                      <strong>STS 47/2018</strong> - Requisitos de la orden judicial
                    </li>
                    <li>
                      <strong>STEDH caso Funke vs Francia</strong> - Registros y cadena de custodia
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Los registros de dependencias son actuaciones policiales que requieren el máximo respeto
                  a las garantías constitucionales. Una orden judicial motivada, presencia de abogado,
                  acta detallada y cadena de custodia adecuada son requisitos indispensables para que
                  las pruebas obtenidas tengan validez procesal.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Cualquier irregularidad en el procedimiento puede dar lugar a la nulidad de las pruebas
                  obtenidas, por lo que es fundamental documentar todo el proceso y contar con asistencia
                  jurídica especializada desde el primer momento. En STANS Abogados tenemos amplia experiencia
                  en la impugnación de registros irregulares y podemos asesorarte sobre tus derechos
                  y opciones de defensa.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, están registrando mi domicilio y necesito asistencia inmediata`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Asistencia en Registro
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
                Más información sobre procedimiento policial
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