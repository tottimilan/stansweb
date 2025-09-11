'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Users, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const comunicacionFAQ = [
  {
    question: "¿Cuándo puedo comunicar con mi familia?",
    answer: "Tienes derecho a comunicar con tu familia desde el momento de la detención. La comunicación debe facilitarse en un plazo máximo de 24 horas, salvo en casos excepcionales de incomunicación judicial."
  },
  {
    question: "¿Pueden negarme la comunicación familiar?",
    answer: "Solo en casos excepcionales: riesgo de destrucción de pruebas, protección de víctimas, o cuando el juez decrete incomunicación por razones de investigación. Esta incomunicación no puede superar 5 días."
  },
  {
    question: "¿Qué información puedo dar a mi familia?",
    answer: "Puedes informar sobre tu situación, solicitar asistencia letrada, pedir que contacten con tu abogado, o comunicar necesidades básicas. No puedes coordinar coartadas o destruir pruebas."
  },
  {
    question: "¿Pueden intervenir mis comunicaciones?",
    answer: "Sí, las comunicaciones pueden ser intervenidas judicialmente si existe orden judicial motivada. Sin embargo, la comunicación con tu abogado está protegida por secreto profesional."
  },
  {
    question: "¿Qué pasa si soy extranjero?",
    answer: "Si eres extranjero, tienes derecho adicional a comunicar con tu consulado o embajada. Los agentes deben informarte de este derecho según la Convención de Viena sobre Relaciones Consulares."
  },
  {
    question: "¿Puedo recibir visitas en comisaría?",
    answer: "Las visitas familiares en comisaría son excepcionales y requieren autorización judicial. Normalmente, la comunicación se realiza por teléfono o a través de tu abogado."
  },
  {
    question: "¿Cuánto cuestan las llamadas desde comisaría?",
    answer: "Las llamadas básicas para comunicar la detención son gratuitas. Sin embargo, llamadas adicionales o a números especiales pueden tener coste, que deberás asumir."
  },
  {
    question: "¿Pueden mis familiares contratar un abogado para mí?",
    answer: "Sí, tus familiares pueden designar un abogado de confianza. Si no pueden costearlo, tienes derecho a abogado de oficio gratuito. La designación debe comunicarse a la policía."
  }
];

const fasesComunicacion = [
  {
    fase: "Momento de la Detención",
    derechos: ["Derecho a informar detención", "Llamada básica gratuita", "Comunicar abogado"],
    restricciones: ["Comunicación supervisada"],
    tiempo: "Inmediata"
  },
  {
    fase: "Traslado a Comisaría",
    derechos: ["Llamada familiar completa", "Informar situación", "Solicitar asistencia"],
    restricciones: ["Presencia policial"],
    tiempo: "Máximo 24 horas"
  },
  {
    fase: "Permanencia en Comisaría",
    derechos: ["Comunicaciones periódicas", "Visitas autorizadas", "Contacto abogado ilimitado"],
    restricciones: ["Horarios establecidos"],
    tiempo: "Según necesidad"
  },
  {
    fase: "Traslado Judicial",
    derechos: ["Última comunicación", "Coordinar abogado", "Informar familiares"],
    restricciones: ["Comunicación supervisada"],
    tiempo: "Antes de traslado"
  }
];

const derechosFamiliares = [
  {
    derecho: "Derecho a Ser Informado",
    descripcion: "Familiares deben ser informados de la detención",
    articulo: "Artículo 520 LECrim",
    importancia: "Alta"
  },
  {
    derecho: "Derecho de Asistencia",
    descripcion: "Ayudar en designación de abogado y apoyo emocional",
    articulo: "Artículo 118 LECrim",
    importancia: "Alta"
  },
  {
    derecho: "Derecho de Visita",
    descripcion: "Visitas en prisión preventiva según régimen",
    articulo: "Reglamento Penitenciario",
    importancia: "Media"
  },
  {
    derecho: "Derecho de Información",
    descripcion: "Recibir información sobre evolución del proceso",
    articulo: "Ley 39/2015",
    importancia: "Media"
  }
];

const situacionesEspeciales = [
  {
    situacion: "Menores de Edad",
    derechosEspeciales: ["Comunicación inmediata con padres/tutores", "Derecho a presencia familiar", "Información adaptada"],
    consideraciones: ["Protección especial", "Apoyo psicológico", "Decisiones compartidas"],
    urgencia: "Muy Alta"
  },
  {
    situacion: "Extranjeros",
    derechosEspeciales: ["Contacto consular inmediato", "Traducción comunicaciones", "Información en idioma nativo"],
    consideraciones: ["Convención Viena", "Derechos diplomáticos", "Traducción oficial"],
    urgencia: "Alta"
  },
  {
    situacion: "Personas con Discapacidad",
    derechosEspeciales: ["Adaptaciones en comunicación", "Apoyo especializado", "Información accesible"],
    consideraciones: ["Convención ONU", "Apoyo técnico", "Comunicación alternativa"],
    urgencia: "Alta"
  },
  {
    situacion: "Víctimas de Violencia",
    derechosEspeciales: ["Comunicación protegida", "Apoyo psicológico", "Medidas de alejamiento"],
    consideraciones: ["Protección integral", "Apoyo emocional", "Recursos especializados"],
    urgencia: "Alta"
  }
];

const protocoloFamiliar = [
  {
    paso: 1,
    titulo: "Recibir la Notificación",
    descripcion: "Familiares reciben información de la detención",
    acciones: ["Mantener calma", "Tomar nota de datos", "Contactar con abogado"]
  },
  {
    paso: 2,
    titulo: "Designar Asistencia Letrada",
    descripcion: "Elegir abogado particular o solicitar de oficio",
    acciones: ["Buscar abogado especializado", "Facilitar datos personales", "Autorizar representación"]
  },
  {
    paso: 3,
    titulo: "Proporcionar Información",
    descripcion: "Dar datos relevantes para la defensa",
    acciones: ["Documentos personales", "Antecedentes relevantes", "Información contextual"]
  },
  {
    paso: 4,
    titulo: "Apoyo Emocional",
    descripcion: "Proporcionar soporte psicológico y moral",
    acciones: ["Visitas permitidas", "Comunicaciones regulares", "Apoyo económico si procede"]
  },
  {
    paso: 5,
    titulo: "Seguimiento del Proceso",
    descripcion: "Acompañar en todas las fases del procedimiento",
    acciones: ["Asistir a vistas", "Mantener contacto", "Apoyo en medidas cautelares"]
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

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ComunicacionFamiliarPage({ params }: Props) {
  return <BlogPostContent />;
}

function BlogPostContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main className="bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-charleston text-offwhite py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
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
                Volver al hub de Defensa Penal Urgente
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  Defensa Penal Urgente
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  12 min de lectura
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Comunicación con Familiares durante la Detención
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Derechos de comunicación familiar, restricciones, situaciones especiales.
                Cómo mantener el contacto durante el proceso penal urgente.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  28 dic 2024
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
              <div className="text-black/80 leading-relaxed mb-12 text-lg">
                <p>
                  El <strong>derecho a la comunicación familiar</strong> es uno de los derechos fundamentales
                  más importantes durante un proceso penal urgente. Regulado por el <strong>artículo 520
                  de la Ley de Enjuiciamiento Criminal</strong> y protegido por el <strong>artículo 8
                  del Convenio Europeo de Derechos Humanos</strong>, este derecho busca mantener el vínculo
                  emocional y facilitar la asistencia jurídica y personal.
                </p>
                <p>
                  Esta guía explica cómo ejercer el derecho de comunicación familiar durante la detención,
                  las restricciones que pueden aplicarse, y las situaciones especiales que requieren
                  consideraciones adicionales, basándose en la jurisprudencia del <strong>Tribunal Europeo
                  de Derechos Humanos</strong> y las instrucciones del <strong>Ministerio del Interior</strong>.
                </p>
              </div>

              {/* Fases de Comunicación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Fases de la Comunicación Familiar
                </h2>

                <div className="space-y-8">
                  {fasesComunicacion.map((fase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gold">
                          {fase.fase}
                        </h3>
                        <span className="text-sm bg-gold/20 text-gold px-3 py-1 rounded-full">
                          {fase.tiempo}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gold mb-2">Derechos que asisten:</h4>
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
                          <h4 className="font-semibold text-gold mb-2">Restricciones aplicables:</h4>
                          <ul className="space-y-1">
                            {fase.restricciones.map((restriccion, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                                <AlertTriangle className="h-3 w-3 text-yellow-400 flex-shrink-0" />
                                {restriccion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Derechos de Familiares */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos de los Familiares
                </h2>

                <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">Apoyo Familiar en la Crisis</h3>
                      <p className="text-black/80 mt-1">
                        Los familiares tienen derechos específicos para apoyar al detenido
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {derechosFamiliares.map((derecho, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-green-200 rounded-lg p-6"
                      >
                        <h4 className="font-semibold text-black mb-2">{derecho.derecho}</h4>
                        <p className="text-black/80 text-sm mb-3">
                          {derecho.descripcion}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {derecho.articulo}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            derecho.importancia === 'Alta' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            Importancia: {derecho.importancia}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Situaciones Especiales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Situaciones Especiales
                </h2>

                <div className="space-y-6">
                  {situacionesEspeciales.map((situacion, index) => (
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
                            {situacion.situacion}
                          </h3>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          situacion.urgencia === 'Muy Alta' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                        }`}>
                          Urgencia: {situacion.urgencia}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-black mb-2">Derechos especiales:</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {situacion.derechosEspeciales.map((derecho, idx) => (
                              <li key={idx}>• {derecho}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-2">Consideraciones:</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {situacion.consideraciones.map((consideracion, idx) => (
                              <li key={idx}>• {consideracion}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Protocolo para Familiares */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Protocolo de Actuación para Familiares
                </h2>

                <div className="space-y-6">
                  {protocoloFamiliar.map((paso, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-purple-50 border border-purple-200 rounded-lg p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                          {paso.paso}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {paso.titulo}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {paso.descripcion}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-2">Acciones recomendadas:</h4>
                        <ul className="space-y-1">
                          {paso.acciones.map((accion, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-black/80 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                              {accion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
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
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Comunicación Familiar
                </h2>

                <div className="space-y-6">
                  {comunicacionFAQ.map((faq, index) => (
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
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Legislación y Referencias
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Española</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Ley de Enjuiciamiento Criminal</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1882-6039" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 118, 520 (comunicación familiar)
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 1/1979</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1979-304" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Derechos de los detenidos
                      </a>
                    </li>
                    <li>
                      <strong>Ley 39/2015</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Procedimiento administrativo común
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
                      <strong>Convención de Viena</strong> -
                      <a href="https://treaties.un.org/doc/Treaties/1963/04/19630424%2004-26%20AM/Ch_III_03p.pdf" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Relaciones consulares (extranjeros)
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Destacada</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 47/2018</strong> - Comunicación familiar en detención
                    </li>
                    <li>
                      <strong>STEDH caso Olsson vs Suecia</strong> - Contacto familiar durante detención
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  La comunicación familiar es un derecho fundamental que no solo proporciona apoyo emocional,
                  sino que también facilita la coordinación de la defensa jurídica. Mantener este vínculo
                  durante la detención es crucial para afrontar la situación con garantías y minimizar
                  el impacto psicológico de la privación de libertad.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Los familiares desempeñan un papel fundamental en el apoyo al detenido, desde la designación
                  de abogado hasta el seguimiento del proceso. Conocer sus derechos y obligaciones les permite
                  ofrecer un apoyo efectivo y coordinado con la defensa jurídica profesional.
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gold/20">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-black/70 hover:text-gold transition">
                    <Share2 className="h-4 w-4" />
                    Compartir artículo
                  </button>
                  <button className="flex items-center gap-2 text-black/70 hover:text-gold transition">
                    <Bookmark className="h-4 w-4" />
                    Guardar artículo
                  </button>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hola, mi familiar ha sido detenido y necesito información sobre derechos de comunicación`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Consulta Comunicación Familiar
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
                Artículos Relacionados
              </h2>
              <p className="text-white/80">
                Más información sobre derechos durante la detención
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
