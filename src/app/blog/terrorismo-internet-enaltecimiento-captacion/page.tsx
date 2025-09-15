'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Globe, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const terrorismoFAQ = [
  {
    question: "¿Qué se considera enaltecimiento del terrorismo en Internet?",
    answer: "Se considera enaltecimiento cualquier manifestación que justifique, exalte o incite a la comisión de delitos terroristas, o que ensalce a sus autores. Incluye publicaciones en redes sociales, comentarios en foros, o difusión de material propagandístico, según el artículo 578 del Código Penal."
  },
  {
    question: "¿Puedo ser condenado por compartir un meme o publicación en redes sociales?",
    answer: "Sí, si el contenido justifica o ensalza actos terroristas. La jurisprudencia del Tribunal Supremo ha condenado por compartir memes, publicaciones o incluso emojis relacionados con terrorismo. El contexto y alcance de la difusión son determinantes."
  },
  {
    question: "¿Qué pena tiene el delito de enaltecimiento del terrorismo?",
    answer: "La pena básica es de 1 a 3 años de prisión. Si se comete utilizando Internet, se incrementa en 1/3. Si el autor es periodista o profesional, puede reducirse a multa. En caso de reincidencia, se duplica la pena."
  },
  {
    question: "¿Qué es la captación yihadista online?",
    answer: "Es el delito tipificado en el artículo 579.2 del Código Penal, que consiste en captar, reclutar o adoctrinar a personas para que participen en organizaciones terroristas o cometan delitos de terrorismo, utilizando medios telemáticos."
  },
  {
    question: "¿Las plataformas como Facebook o Twitter son responsables de los contenidos terroristas?",
    answer: "Las plataformas tienen obligación de retirar contenidos terroristas en un plazo de 24 horas según la Ley 4/2015. Si no lo hacen, pueden ser sancionadas administrativamente. Sin embargo, la responsabilidad penal principal recae en el autor del contenido."
  },
  {
    question: "¿Puedo ser investigado por contenido publicado hace años?",
    answer: "Sí, los delitos de terrorismo no prescriben mientras el autor forme parte de una organización terrorista. Para otros casos, el plazo de prescripción es de 5-10 años según la gravedad del delito."
  },
  {
    question: "¿Qué defensas existen contra acusaciones de enaltecimiento?",
    answer: "Posibles defensas incluyen: ejercicio de libertad de expresión, crítica política legítima, falta de intención de enaltecimiento, contexto satírico o humorístico, o error sobre el contenido difundido."
  },
  {
    question: "¿Las VPN o el uso de seudónimos protegen contra investigaciones?",
    answer: "No completamente. Las autoridades pueden rastrear IP reales, y el uso de VPN puede considerarse indicio de ocultación de actividades ilícitas, según la jurisprudencia del Tribunal Supremo."
  }
];

const tiposTerrorismoInternet = [
  {
    tipo: "Enaltecimiento",
    articulo: "578 CP",
    pena: "1-3 años",
    descripcion: "Justificar o ensalzar delitos terroristas o sus autores",
    ejemplos: ["Publicar mensajes de apoyo", "Difundir propaganda", "Ensalzar atentados"]
  },
  {
    tipo: "Captación",
    articulo: "579.2 CP",
    pena: "5-8 años",
    descripcion: "Reclutar o adoctrinar para organizaciones terroristas",
    ejemplos: ["Mensajes de reclutamiento", "Adoctrinamiento online", "Contacto con radicales"]
  },
  {
    tipo: "Financiación",
    articulo: "576 CP",
    pena: "2-5 años",
    descripcion: "Proporcionar fondos para actividades terroristas",
    ejemplos: ["Crowdfunding terrorista", "Donaciones online", "Criptomonedas"]
  },
  {
    tipo: "Instrucciones",
    articulo: "579.1 CP",
    pena: "3-5 años",
    descripcion: "Enseñar métodos para cometer delitos terroristas",
    ejemplos: ["Tutoriales de fabricación", "Guías de ataque", "Instrucciones online"]
  }
];

const casosReales = [
  {
    titulo: "Caso de Diana Quer",
    descripcion: "Condena por enaltecimiento tras publicar mensajes de apoyo al asesino",
    condena: "2 años prisión",
    tribunal: "Audiencia Nacional"
  },
  {
    titulo: "Operación Tándem",
    descripcion: "Desarticulación de red yihadista que usaba Telegram para captación",
    condena: "Hasta 8 años",
    tribunal: "Audiencia Nacional"
  },
  {
    titulo: "Caso de los CDR",
    descripcion: "Condenas por enaltecimiento en redes sociales durante protestas",
    condena: "Hasta 4 años",
    tribunal: "Tribunal Supremo"
  }
];

const plataformasSociales = [
  {
    nombre: "Facebook/Meta",
    medidas: "IA para detectar contenido, colaboración con autoridades",
    responsabilidad: "Alta - retiradas en 24h"
  },
  {
    nombre: "Twitter/X",
    medidas: "Etiquetas de verificación, bloqueo de cuentas",
    responsabilidad: "Media - depende del alcance"
  },
  {
    nombre: "Telegram",
    medidas: "Canalización de reportes, encriptación end-to-end",
    responsabilidad: "Baja - cifrado dificulta control"
  },
  {
    nombre: "TikTok",
    medidas: "Moderación de contenido juvenil, IA predictiva",
    responsabilidad: "Alta - contenido viral"
  }
];

const relatedArticles = [
  {
    title: 'Libertad de Expresión vs Terrorismo',
    slug: 'libertad-expresion-terrorismo',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Investigaciones en la Dark Web',
    slug: 'investigaciones-dark-web',
    category: 'Ciberseguridad'
  },
  {
    title: 'Responsabilidad de Plataformas Digitales',
    slug: 'responsabilidad-plataformas-digitales',
    category: 'Derecho Digital'
  }
];

export default function TerrorismoInternetPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Traducciones específicas del blog
  const blogTranslations = language === 'ar' ? {
    hero: {
      backLink: 'العودة إلى المدونة',
      title: 'الإرهاب على الإنترنت: التمجيد والتجنيد عبر الإنترنت',
      subtitle: 'تحليل شامل لجرائم الإرهاب في المجال الرقمي',
      description: 'التمجيد والتجنيد الجهادي والمسؤولية الجنائية في وسائل التواصل الاجتماعي.'
    },
    sections: {
      marcoLegal: 'الإطار القانوني للإرهاب الرقمي',
      tiposDelitos: 'أنواع جرائم الإرهاب على الإنترنت',
      casosJurisprudencia: 'القضايا الواقعية والقضاء',
      responsabilidadPlataformas: 'مسؤولية المنصات الرقمية',
      preguntasFrecuentes: 'الأسئلة الشائعة حول الإرهاب على الإنترنت',
      legislacion: 'التشريع والمراجع',
      conclusion: 'الخاتمة'
    }
  } : {
    hero: {
      backLink: 'Volver al blog',
      title: 'Terrorismo en Internet: Enaltecimiento y Captación Online',
      subtitle: 'Análisis Exhaustivo de los Delitos de Terrorismo Digital',
      description: 'Enaltecimiento, captación yihadista y responsabilidad penal en redes sociales.'
    },
    sections: {
      marcoLegal: 'Marco Legal del Terrorismo Digital',
      tiposDelitos: 'Tipos de Delitos de Terrorismo en Internet',
      casosJurisprudencia: 'Casos Reales y Jurisprudencia',
      responsabilidadPlataformas: 'Responsabilidad de Plataformas Digitales',
      preguntasFrecuentes: 'Preguntas Frecuentes sobre Terrorismo en Internet',
      legislacion: 'Legislación y Referencias',
      conclusion: 'Conclusión'
    }
  };

  // Traducciones del contenido del artículo
  const contentTranslations = language === 'ar' ? {
    introduccion: {
      parrafo1: 'الإرهاب على الإنترنت يمثل واحدة من أكثر التهديدات تعقيداً للأمن القومي. القانون العضوي 2/2015 قد أدخل تعديلات على القانون الجنائي الإسباني لتكييفه مع هذه الواقع الجديد، حيث يُجرّم سلوكيات مثل التمجيد للإرهاب، التجنيد الجهادي عبر الإنترنت وتمويل الإرهاب من خلال المنصات الرقمية.',
      parrafo2: 'تحلل هذه الدليل أحدث القضاء من المحكمة العليا والمحكمة الوطنية، بما في ذلك القضايا البارزة التي حددت تطور القانون الجنائي الرقمي في إسبانيا.'
    },
    marcoLegal: {
      titulo: 'الإطار القانوني للإرهاب الرقمي'
    }
  } : {
    introduccion: {
      parrafo1: 'El terrorismo en Internet representa una de las amenazas más complejas para la seguridad nacional. La <strong>Ley Orgánica 2/2015</strong> ha adaptado el Código Penal español a esta nueva realidad, tipificando conductas como el enaltecimiento del terrorismo, la captación yihadista online y la financiación terrorista a través de plataformas digitales.',
      parrafo2: 'Esta guía analiza la jurisprudencia más reciente del <strong>Tribunal Supremo</strong> y <strong>Audiencia Nacional</strong>, incluyendo casos paradigmáticos que han marcado la evolución del derecho penal digital en España.'
    },
    marcoLegal: {
      titulo: 'Marco Legal del Terrorismo Digital'
    }
  };

  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: blogTranslations.hero.title }
  ];

  const tocItems = [
    { id: 'marco-legal-del-terrorismo-digital', title: blogTranslations.sections.marcoLegal, level: 2 },
    { id: 'tipos-de-delitos-de-terrorismo-en-internet', title: blogTranslations.sections.tiposDelitos, level: 2 },
    { id: 'casos-reales-y-jurisprudencia', title: blogTranslations.sections.casosJurisprudencia, level: 2 },
    { id: 'responsabilidad-de-plataformas-digitales', title: blogTranslations.sections.responsabilidadPlataformas, level: 2 },
    { id: 'preguntas-frecuentes-sobre-terrorismo-en-internet', title: blogTranslations.sections.preguntasFrecuentes, level: 2 },
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
        <section className="bg-gradient-to-br from-gray-900 to-charleston text-offwhite py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                {blogTranslations.hero.backLink}
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  {language === 'ar' ? 'الأمن السيبراني الجنائي' : 'Ciberseguridad Penal'}
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
                  03 dic 2024
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

              {/* Marco Legal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="marco-legal-del-terrorismo-digital" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {contentTranslations.marcoLegal.titulo}
                </h2>

                <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-red-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">Ley Orgánica 2/2015</h3>
                      <p className="text-black/80 mt-1">
                        Reforma integral del Código Penal para delitos de terrorismo en Internet
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-3">Delitos Tipificados</h4>
                      <ul className="space-y-2 text-black/80">
                        <li>• Enaltecimiento del terrorismo (art. 578)</li>
                        <li>• Captación y reclutamiento (art. 579.2)</li>
                        <li>• Financiación terrorista (art. 576)</li>
                        <li>• Instrucciones para cometer delitos (art. 579.1)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-3">Agravantes Digitales</h4>
                      <ul className="space-y-2 text-black/80">
                        <li>• Uso de Internet o redes sociales</li>
                        <li>• Alcance masivo del contenido</li>
                        <li>• Viralización del mensaje</li>
                        <li>• Uso de plataformas extranjeras</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Evolución Legislativa</h3>
                      <p className="text-black/80">
                        La reforma de 2015 respondió a la proliferación de contenidos terroristas en Internet.
                        Posteriormente, la <strong>Ley 4/2015</strong> estableció obligaciones para plataformas
                        digitales de retirar contenidos en 24 horas.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tipos de Delitos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="tipos-de-delitos-de-terrorismo-en-internet" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Tipos de Delitos de Terrorismo en Internet
                </h2>

                <div className="space-y-6">
                  {tiposTerrorismoInternet.map((delito, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gold">
                          {delito.tipo}
                        </h3>
                        <div className="text-right">
                          <div className="text-gold font-semibold">{delito.articulo}</div>
                          <div className="text-white/70 text-sm">{delito.pena}</div>
                        </div>
                      </div>

                      <p className="text-white/80 mb-4">
                        {delito.descripcion}
                      </p>

                      <div>
                        <h4 className="font-semibold text-gold mb-2">Ejemplos:</h4>
                        <ul className="space-y-1">
                          {delito.ejemplos.map((ejemplo, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                              {ejemplo}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Casos Reales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="casos-reales-y-jurisprudencia" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Casos Reales y Jurisprudencia
                </h2>

                <div className="space-y-6">
                  {casosReales.map((caso, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {caso.titulo}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {caso.descripcion}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-medium mb-1">
                            {caso.condena}
                          </div>
                          <div className="text-black/60 text-xs">
                            {caso.tribunal}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Lecciones de la Jurisprudencia</h3>
                  <ul className="space-y-2 text-black/80">
                    <li>• Los "likes" y retuits pueden constituir enaltecimiento si son masivos</li>
                    <li>• El contexto satírico no siempre exime de responsabilidad</li>
                    <li>• Las plataformas extranjeras no protegen contra la justicia española</li>
                    <li>• La captación online se considera tan grave como la presencial</li>
                  </ul>
                </div>
              </motion.div>

              {/* Plataformas Digitales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="responsabilidad-de-plataformas-digitales" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Responsabilidad de Plataformas Digitales
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-charleston text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Plataforma</th>
                        <th className="px-4 py-3 text-left font-semibold">Medidas Anti-Terrorismo</th>
                        <th className="px-4 py-3 text-left font-semibold">Responsabilidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      {plataformasSociales.map((plataforma, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-semibold text-black">
                            {plataforma.nombre}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {plataforma.medidas}
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              plataforma.responsabilidad === 'Alta' ? 'bg-red-100 text-red-800' :
                              plataforma.responsabilidad === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {plataforma.responsabilidad}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-charleston text-white p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gold mb-4">Obligaciones de las Plataformas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gold mb-2">Según Ley 4/2015</h4>
                      <ul className="space-y-1 text-white/90 text-sm">
                        <li>• Retirar contenido en 24 horas</li>
                        <li>• Colaborar con autoridades</li>
                        <li>• Implementar sistemas de detección</li>
                        <li>• Reportar actividades sospechosas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold mb-2">Sanciones por Incumplimiento</h4>
                      <ul className="space-y-1 text-white/90 text-sm">
                        <li>• Multas de hasta 600.000€</li>
                        <li>• Bloqueo temporal de servicios</li>
                        <li>• Responsabilidad penal subsidiaria</li>
                        <li>• Pérdida de inmunidad</li>
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
                <h2 id="preguntas-frecuentes-sobre-terrorismo-en-internet" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Terrorismo en Internet
                </h2>

                <div className="space-y-6">
                  {terrorismoFAQ.map((faq, index) => (
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
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Española</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Ley Orgánica 2/2015</strong> - Reforma del Código Penal para terrorismo
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-3442" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver ley completa
                      </a>
                    </li>
                    <li>
                      <strong>Ley 4/2015</strong> - Obligaciones de proveedores de servicios de Internet
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-3443" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver ley completa
                      </a>
                    </li>
                    <li>
                      <strong>Código Penal (arts. 571-583)</strong> - Delitos de terrorismo
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver código penal
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Resolución 2178 (2014) del Consejo de Seguridad ONU</strong> - Amenazas terroristas en Internet
                    </li>
                    <li>
                      <strong>Directiva 2017/541/UE</strong> - Lucha contra el terrorismo
                    </li>
                    <li>
                      <strong>Convención de Budapest</strong> - Cibercrimen internacional
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Destacada</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STS 456/2019</strong> - Caso de enaltecimiento en redes sociales
                    </li>
                    <li>
                      <strong>Auto AN 123/2020</strong> - Captación yihadista online
                    </li>
                    <li>
                      <strong>STEDH caso Murphy vs Irlanda</strong> - Libertad de expresión vs terrorismo
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  El terrorismo en Internet representa una evolución delictiva que requiere
                  una respuesta jurídica adaptada a la era digital. La legislación española
                  ha sabido evolucionar para hacer frente a estas nuevas amenazas, equilibrando
                  la necesaria protección de la seguridad con el respeto a las libertades fundamentales.
                </p>
                <p className="text-white/90 leading-relaxed">
                  La jurisprudencia española ha establecido criterios claros sobre la delimitación
                  entre libertad de expresión y enaltecimiento terrorista. En STANS Abogados
                  contamos con especialistas en derecho penal digital que conocen las sutilezas
                  de estos casos y pueden proporcionar una defensa técnica especializada.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito asesoramiento sobre un caso de terrorismo en internet`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Consulta Especializada
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
                Más información sobre ciberseguridad y derecho digital
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