'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const comisariaFAQ = [
  {
    question: "¿Qué ocurre en comisaría durante las primeras horas?",
    answer: "Durante las primeras horas en comisaría se realiza tu identificación formal, se te informa de tus derechos por escrito, se te toma huellas y fotografía, y se inicia el procedimiento administrativo de detención. Todo ello debe realizarse con respeto a tu dignidad."
  },
  {
    question: "¿Cuánto tiempo pueden interrogarme sin abogado?",
    answer: "No pueden interrogarte sobre los hechos sin la presencia de tu abogado. Solo pueden hacerte preguntas básicas de identificación. Cualquier declaración sobre el delito requiere asistencia letrada obligatoria."
  },
  {
    question: "¿Puedo comer o beber en comisaría?",
    answer: "Sí, tienes derecho a alimentos y bebidas adecuados durante tu permanencia en comisaría. Si tienes necesidades especiales (medicamentos, dieta especial), debes informarlo inmediatamente al personal policial."
  },
  {
    question: "¿Pueden registrarme más a fondo en comisaría?",
    answer: "Para registros más invasivos se requiere tu consentimiento expreso o una orden judicial específica. Si te niegas, solo pueden realizar un cacheo superficial por razones de seguridad."
  },
  {
    question: "¿Qué hago si me siento mal en comisaría?",
    answer: "Si te encuentras mal, tienes derecho a asistencia médica inmediata. Informa al personal policial de cualquier dolencia, alergia o necesidad médica. Tienes derecho a que un médico independiente valore tu estado de salud."
  },
  {
    question: "¿Pueden revisar mi teléfono móvil?",
    answer: "Para revisar tu teléfono móvil se requiere una orden judicial específica. No pueden acceder a tu dispositivo sin autorización judicial, salvo en casos excepcionales de riesgo inminente."
  },
  {
    question: "¿Cuánto tiempo máximo puedo estar en comisaría?",
    answer: "El tiempo máximo sin poner a disposición judicial es de 72 horas en casos graves, o 24 horas en casos menos graves. Pasado ese tiempo, debes ser puesto en libertad o ante el juez."
  },
  {
    question: "¿Puedo ducharme o asearme en comisaría?",
    answer: "Sí, tienes derecho a mantener unas condiciones mínimas de higiene personal. Las comisarías deben proporcionar acceso a aseos y, en detenciones prolongadas, ducha si es necesario."
  }
];

const procedimientoComisaria = [
  {
    paso: 1,
    titulo: "Recepción e Identificación",
    descripcion: "Registro de tus datos personales y verificación de identidad",
    tiempo: "15-30 minutos",
    derechos: "Derecho a ser tratado con dignidad, derecho a no declarar"
  },
  {
    paso: 2,
    titulo: "Información de Derechos",
    descripcion: "Lectura y entrega por escrito de tus derechos constitucionales",
    tiempo: "10-15 minutos",
    derechos: "Derecho a leer detenidamente, derecho a pedir explicaciones"
  },
  {
    paso: 3,
    titulo: "Registro Personal",
    descripcion: "Cacheo superficial y depósito de objetos personales",
    tiempo: "20-30 minutos",
    derechos: "Derecho a presencia de abogado en registros invasivos"
  },
  {
    paso: 4,
    titulo: "Huellas y Fotografía",
    descripcion: "Toma de huellas dactilares y fotografía policial",
    tiempo: "15-20 minutos",
    derechos: "Derecho a conocer el motivo, derecho a recurso"
  },
  {
    paso: 5,
    titulo: "Declaración Preliminar",
    descripcion: "Posible toma de declaración si llega tu abogado",
    tiempo: "30-60 minutos",
    derechos: "Derecho a no declarar, derecho a asistencia letrada"
  }
];

const condicionesDetencion = [
  {
    aspecto: "Condiciones Físicas",
    requisitos: "Espacio mínimo de 4m², ventilación adecuada, temperatura confortable",
    referencia: "Reglamento Penitenciario (art. 35)"
  },
  {
    aspecto: "Alimentación",
    requisitos: "3 comidas diarias, dieta equilibrada, consideración especial por religión/medicación",
    referencia: "Ley Orgánica 1/1979 (art. 25)"
  },
  {
    aspecto: "Asistencia Médica",
    requisitos: "Acceso a médico 24h, medicamentos necesarios, atención psicológica si procede",
    referencia: "Ley 41/2002 de Autonomía del Paciente"
  },
  {
    aspecto: "Comunicación",
    requisitos: "Derecho a informar familiar, acceso a abogado, comunicación privada con abogado",
    referencia: "LECrim (art. 520)"
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
    title: 'Puesta a Disposición Judicial',
    slug: 'puesta-disposicion-judicial',
    category: 'Procedimiento Penal'
  }
];

export default function ComisariaPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Defensa Penal Urgente', href: '/blog/defensa-penal-urgente' },
    { label: 'Primeros Pasos en Comisaría' }
  ];

  const tocItems = [
    { id: 'procedimiento-en-comisaria-paso-a-paso', title: 'Procedimiento en Comisaría: Paso a Paso', level: 2 },
    { id: 'condiciones-minimas-de-detencion', title: 'Condiciones Mínimas de Detención', level: 2 },
    { id: 'derechos-durante-la-permanencia-en-comisaria', title: 'Derechos durante la Permanencia en Comisaría', level: 2 },
    { id: 'protocolo-de-actuacion-en-comisaria', title: 'Protocolo de Actuación en Comisaría', level: 2 },
    { id: 'preguntas-frecuentes-sobre-comisaria', title: 'Preguntas Frecuentes sobre Comisaría', level: 2 },
    { id: 'legislacion-aplicada', title: 'Legislación Aplicada', level: 2 },
    { id: 'conclusion', title: 'Conclusión', level: 2 }
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
                Primeros Pasos en Comisaría
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Qué esperar y cómo actuar durante tu permanencia en comisaría.
                Guía detallada del procedimiento policial y tus derechos.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  18 dic 2024
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
                  La llegada a comisaría marca el inicio de la fase administrativa del procedimiento penal.
                  Durante tu permanencia en dependencias policiales, que puede durar desde unas horas hasta
                  72 horas máximo, es crucial conocer el procedimiento y ejercer tus derechos de manera efectiva.
                </p>
                <p>
                  Esta guía detalla paso a paso qué ocurre en comisaría, basándose en la
                  <strong>Ley de Enjuiciamiento Criminal</strong>, la <strong>Ley Orgánica 4/2015</strong>
                  y las instrucciones del <strong>Ministerio del Interior</strong> para el tratamiento de detenidos.
                </p>
              </div>

              {/* Procedimiento Paso a Paso */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Procedimiento en Comisaría: Paso a Paso
                </h2>

                <div className="space-y-6">
                  {procedimientoComisaria.map((paso, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gold flex items-center gap-3">
                          <span className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                            {paso.paso}
                          </span>
                          {paso.titulo}
                        </h3>
                        <span className="text-sm bg-gold/20 text-gold px-3 py-1 rounded-full">
                          {paso.tiempo}
                        </span>
                      </div>

                      <p className="text-white/80 mb-4">
                        {paso.descripcion}
                      </p>

                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-semibold text-gold mb-2">Derechos en esta fase:</h4>
                        <p className="text-white/90 text-sm">
                          {paso.derechos}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Condiciones de Detención */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Condiciones Mínimas de Detención
                </h2>

                <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">Derecho a la Dignidad</h3>
                      <p className="text-black/80 mt-1">
                        Las condiciones de detención deben respetar tu dignidad humana
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {condicionesDetencion.map((condicion, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-green-200 rounded-lg p-6"
                      >
                        <h4 className="font-semibold text-black mb-2">{condicion.aspecto}</h4>
                        <p className="text-black/80 text-sm mb-3">
                          {condicion.requisitos}
                        </p>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {condicion.referencia}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Derechos durante la Permanencia */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos durante la Permanencia en Comisaría
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        Derechos Procesales
                      </h3>
                      <ul className="space-y-2 text-black/80">
                        <li>• <strong>No declarar sin abogado</strong></li>
                        <li>• <strong>Información detallada</strong> de cargos</li>
                        <li>• <strong>Asistencia letrada</strong> gratuita si procede</li>
                        <li>• <strong>Recursos administrativos</strong></li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                        <User className="h-5 w-5 text-purple-600" />
                        Derechos Personales
                      </h3>
                      <ul className="space-y-2 text-black/80">
                        <li>• <strong>Comunicación familiar</strong></li>
                        <li>• <strong>Asistencia médica</strong></li>
                        <li>• <strong>Alimentación adecuada</strong></li>
                        <li>• <strong>Higiene personal</strong></li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                        Situaciones Especiales
                      </h3>
                      <ul className="space-y-2 text-black/80">
                        <li>• <strong>Menores de edad</strong>: derechos adicionales</li>
                        <li>• <strong>Extranjeros</strong>: traducción e información consular</li>
                        <li>• <strong>Personas con discapacidad</strong>: adaptaciones especiales</li>
                        <li>• <strong>Embarazadas</strong>: consideraciones especiales</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-red-600" />
                        Documentación
                      </h3>
                      <ul className="space-y-2 text-black/80">
                        <li>• <strong>Diligencias policiales</strong></li>
                        <li>• <strong>Acta de derechos</strong></li>
                        <li>• <strong>Registro de comunicaciones</strong></li>
                        <li>• <strong>Informe médico</strong> si procede</li>
                      </ul>
                    </div>
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
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Protocolo de Actuación en Comisaría
                </h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Mantén la Calma y la Dignidad</h3>
                      <p className="text-black/80">
                        Tu comportamiento en comisaría puede influir en el desarrollo del procedimiento.
                        Mantén siempre una actitud respetuosa pero firme en la defensa de tus derechos.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">✅ Recomendaciones</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Coopera en identificación básica</li>
                        <li>• Anota datos de los agentes</li>
                        <li>• Lee todos los documentos detenidamente</li>
                        <li>• Informa inmediatamente de necesidades médicas</li>
                        <li>• No declares nada sin tu abogado</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">❌ Evita</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Discusiones agresivas con el personal</li>
                        <li>• Conversaciones con otros detenidos</li>
                        <li>• Firmar documentos sin entenderlos</li>
                        <li>• Proporcionar información voluntaria</li>
                        <li>• Realizar llamadas sin autorización</li>
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
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Comisaría
                </h2>

                <div className="space-y-6">
                  {comisariaFAQ.map((faq, index) => (
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
                  Legislación Aplicada
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Principal</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Ley de Enjuiciamiento Criminal</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1882-6039" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 496-520 (detención y derechos)
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 4/2015</strong> - Protección Seguridad Ciudadana -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-3443" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Régimen de detención
                      </a>
                    </li>
                    <li>
                      <strong>Reglamento Penitenciario</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1996-28127" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Condiciones de detención
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Circular del Ministerio del Interior</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Circular 1/2006</strong> - Instrucciones para el tratamiento de detenidos
                    </li>
                    <li>
                      <strong>Circular 2/2007</strong> - Derechos de los detenidos y procedimiento de detención
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STS 114/2017</strong> - Condiciones de detención en comisaría
                    </li>
                    <li>
                      <strong>STC 47/2018</strong> - Derechos durante la permanencia policial
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  La permanencia en comisaría es una fase crítica del procedimiento penal donde
                  se sientan las bases para tu defensa. Conocer el procedimiento paso a paso
                  y ejercer tus derechos de manera efectiva puede marcar la diferencia
                  entre una resolución favorable y complicaciones innecesarias.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Recuerda que tienes derecho a asistencia letrada especializada desde el primer momento.
                  En STANS Abogados contamos con abogados disponibles 24/7 para acompañarte
                  durante toda tu permanencia en comisaría y garantizar que tus derechos sean respetados.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, estoy en comisaría y necesito asistencia letrada inmediata`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Asistencia en Comisaría
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