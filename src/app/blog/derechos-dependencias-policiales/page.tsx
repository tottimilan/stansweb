'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, Gavel, MapPin } from 'lucide-react';
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
    question: "¿Cuánto tiempo puedo estar detenido en comisaría sin ver a un juez?",
    answer: "El tiempo máximo es de 72 horas desde la detención. Después de ese plazo, debes ser puesto a disposición judicial o puesto en libertad. Solo el juez puede prorrogar este tiempo por causa justificada."
  },
  {
    question: "¿Puedo ducharme y cambiarme de ropa en comisaría?",
    answer: "Sí, tienes derecho a higiene personal adecuada. Puedes ducharte, cambiarte de ropa, y recibir ropa limpia si es necesaria. La policía debe proporcionarte condiciones dignas de higiene."
  },
  {
    question: "¿Qué alimentos me darán en comisaría?",
    answer: "Tienes derecho a alimentación suficiente y adecuada. Si tienes restricciones dietéticas (religiosas, médicas), debes informar inmediatamente para que se respeten. La comida debe ser de calidad aceptable."
  },
  {
    question: "¿Puedo recibir visitas en comisaría?",
    answer: "Sí, tienes derecho a visitas familiares en condiciones adecuadas. Las visitas son supervisadas pero respetuosas de la intimidad. Familiares pueden traerte ropa, comida y objetos personales permitidos."
  },
  {
    question: "¿Qué ocurre si me pongo enfermo en comisaría?",
    answer: "Tienes derecho a atención médica inmediata. Si te encuentras mal, informa a los agentes y solicita asistencia médica. Tienes derecho a médico de urgencias y, si es necesario, traslado a hospital."
  },
  {
    question: "¿Puedo usar mi teléfono móvil en comisaría?",
    answer: "No puedes usar tu teléfono móvil por motivos de seguridad, pero tienes derecho a hacer llamadas telefónicas. Los agentes te facilitarán un teléfono para comunicar con tu abogado y familiares."
  },
  {
    question: "¿Qué objetos personales puedo tener en comisaría?",
    answer: "Puedes tener objetos personales no peligrosos: ropa, libros, medicinas recetadas, etc. Los objetos peligrosos y electrónicos quedan custodiados. Tienes derecho a inventario detallado de tus pertenencias."
  },
  {
    question: "¿Puedo dormir en comisaría?",
    answer: "Sí, tienes derecho a descanso nocturno adecuado. Las celdas deben tener litera, colchón, sábanas limpias y mantas. El descanso no puede ser inferior a 8 horas diarias."
  }
];

const derechosBasicos = [
  {
    derecho: "Información de Derechos",
    descripcion: "Derecho a conocer tus derechos por escrito",
    procedimiento: "Lectura verbal + entrega documento escrito",
    momento: "Inmediatamente tras detención"
  },
  {
    derecho: "Asistencia Letrada",
    descripcion: "Presencia de abogado desde el primer momento",
    procedimiento: "Designación automática + presencia en interrogatorios",
    momento: "Desde el inicio del procedimiento"
  },
  {
    derecho: "Comunicación Familiar",
    descripcion: "Derecho a informar a familiares de tu detención",
    procedimiento: "Llamada telefónica privada + visita familiar",
    momento: "Máximo 24 horas"
  },
  {
    derecho: "Atención Médica",
    descripcion: "Asistencia sanitaria cuando sea necesaria",
    procedimiento: "Evaluación médica + tratamiento si procede",
    momento: "A petición del detenido"
  },
  {
    derecho: "Condiciones Dignas",
    descripcion: "Trato respetuoso y condiciones adecuadas",
    procedimiento: "Celda limpia + alimentación + higiene",
    momento: "Durante toda la detención"
  },
  {
    derecho: "Registro de Pertenencias",
    descripcion: "Inventario detallado de objetos personales",
    procedimiento: "Lista firmada + custodia de objetos",
    momento: "Al ingreso en comisaría"
  }
];

const fasesDetencion = [
  {
    fase: "Entrada en Comisaría",
    tiempo: "0-2 horas",
    derechos: ["Información de derechos", "Registro de pertenencias", "Primer contacto abogado", "Evaluación médica inicial"],
    acciones: ["Permanece tranquilo", "Facilita identificación", "Solicita abogado", "Informa de medicación"]
  },
  {
    fase: "Interrogatorio Policial",
    tiempo: "2-24 horas",
    derechos: ["Presencia letrada obligatoria", "Derecho al silencio", "No autoincriminación", "Descanso adecuado"],
    acciones: ["No declares sin abogado", "Ejecuta derechos constitucionales", "Solicita pausas", "Documenta irregularidades"]
  },
  {
    fase: "Espera Judicial",
    tiempo: "24-72 horas",
    derechos: ["Visitas familiares", "Correspondencia", "Lectura", "Ejercicio físico limitado"],
    acciones: ["Mantén contacto familiar", "Prepara defensa", "Solicita información", "Ejecuta derechos diarios"]
  },
  {
    fase: "Puesta a Disposición Judicial",
    tiempo: "Máximo 72 horas",
    derechos: ["Comparecencia ante juez", "Audiencia con garantías", "Posible libertad", "Derechos procesales"],
    acciones: ["Prepara declaración judicial", "Coordina con abogado", "Revisa estrategia", "Ejecuta último derechos"]
  }
];

const condicionesMinimas = [
  {
    aspecto: "Espacio Personal",
    minimoLegal: "4-6 m² por persona",
    descripcion: "Espacio suficiente para movimiento básico",
    evidencia: "Reglamento Penitenciario art. 34"
  },
  {
    aspecto: "Iluminación",
    minimoLegal: "Iluminación natural o artificial adecuada",
    descripcion: "Luz suficiente para lectura y descanso",
    evidencia: "Normativa seguridad instalaciones"
  },
  {
    aspecto: "Ventilación",
    minimoLegal: "Renovación aire cada 2 horas",
    descripcion: "Aire fresco y temperatura adecuada",
    evidencia: "Normativa salud pública"
  },
  {
    aspecto: "Higiene",
    minimoLegal: "Baño y ducha diarios",
    descripcion: "Instalaciones higiénicas funcionales",
    evidencia: "Reglamento sanitario"
  },
  {
    aspecto: "Alimentación",
    minimoLegal: "3 comidas diarias + tentempiés",
    descripcion: "Comida suficiente y de calidad aceptable",
    evidencia: "Normativa alimentación colectiva"
  },
  {
    aspecto: "Descanso",
    minimoLegal: "8 horas ininterrumpidas",
    descripcion: "Periodo de descanso nocturno",
    evidencia: "Convenio 29 OIT"
  },
  {
    aspecto: "Atención Médica",
    minimoLegal: "Acceso médico 24 horas",
    descripcion: "Asistencia sanitaria inmediata",
    evidencia: "Ley 14/1986 sanidad"
  },
  {
    aspecto: "Comunicación",
    minimoLegal: "Llamadas telefónicas diarias",
    descripcion: "Contacto con familiares y abogado",
    evidencia: "Artículo 520 LECrim"
  }
];

const derechosDiarios = [
  {
    derecho: "Alimentación Adecuada",
    frecuencia: "3 comidas diarias",
    descripcion: "Derecho a comida suficiente y respetando restricciones",
    ejercicio: "Solicitar menú especial si procede"
  },
  {
    derecho: "Higiene Personal",
    frecuencia: "Diaria",
    descripcion: "Ducha, cambio de ropa, cuidado personal",
    ejercicio: "Solicitar productos de higiene"
  },
  {
    derecho: "Ejercicio Físico",
    frecuencia: "Mínimo 1 hora diaria",
    descripcion: "Actividad física en patio o zona habilitada",
    ejercicio: "Solicitar salida al patio"
  },
  {
    derecho: "Lectura y Entretenimiento",
    frecuencia: "Libre acceso",
    descripcion: "Libros, periódicos, televisión si disponible",
    ejercicio: "Solicitar material de lectura"
  },
  {
    derecho: "Correspondencia",
    frecuencia: "Libre",
    descripcion: "Recibir y enviar cartas y postales",
    ejercicio: "Solicitar papel y sobres"
  },
  {
    derecho: "Visitas Familiares",
    frecuencia: "Según normativa",
    descripcion: "Visitas presenciales en condiciones dignas",
    ejercicio: "Solicitar visita familiar"
  },
  {
    derecho: "Atención Religiosa",
    frecuencia: "A petición",
    descripcion: "Asistencia espiritual según creencias",
    ejercicio: "Solicitar contacto con ministro de culto"
  },
  {
    derecho: "Información Procesal",
    frecuencia: "A petición",
    descripcion: "Estado del procedimiento y plazos",
    ejercicio: "Preguntar al abogado sobre avances"
  }
];

const derechosEspeciales = [
  {
    situacion: "Embarazadas",
    derechosAdicionales: ["Atención médica especializada", "Condiciones adaptadas", "Protección especial", "Evaluación riesgo fetal"],
    medidas: ["Celda con baño privado", "Alimentación especial", "Control médico diario", "Protección contra estrés"]
  },
  {
    situacion: "Personas con Discapacidad",
    derechosAdicionales: ["Adaptaciones arquitectónicas", "Apoyo especializado", "Comunicación accesible", "Ayudas técnicas"],
    medidas: ["Rampa de acceso", "Señales en braille", "Intérprete de signos", "Silla de ruedas"]
  },
  {
    situacion: "Extranjeros",
    derechosAdicionales: ["Traducción oficial", "Contacto consular", "Información en idioma nativo", "Apoyo cultural"],
    medidas: ["Intérprete presente", "Documentos traducidos", "Acceso a consulado", "Información cultural"]
  },
  {
    situacion: "Menores de Edad",
    derechosAdicionales: ["Presencia familiar", "Educación continua", "Protección psicológica", "Contacto tutores"],
    medidas: ["Zona especial menores", "Material educativo", "Apoyo psicológico", "Visitas tutores"]
  }
];

const relatedArticles = [
  {
    title: 'Derechos Constitucionales del Detenido',
    slug: 'derechos-constitucionales-detenido',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Primeros Pasos en Comisaría',
    slug: 'primeros-pasos-comisaria',
    category: 'Procedimiento Policial'
  },
  {
    title: 'Derecho a la Asistencia Letrada del Detenido',
    slug: 'derecho-asistencia-letrada-detenido',
    category: 'Asistencia Legal'
  }
];

export default function DerechosDependenciasPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Derechos de Detenidos', href: '/blog/derechos-detenidos' },
    { label: 'Derechos en Dependencias Policiales' }
  ];

  const tocItems = [
    { id: 'derechos-basicos-en-comisaria', title: 'Derechos Básicos en Comisaría', level: 2 },
    { id: 'fases-de-la-detencion-en-comisaria', title: 'Fases de la Detención en Comisaría', level: 2 },
    { id: 'condiciones-minimas-legales', title: 'Condiciones Mínimas Legales', level: 2 },
    { id: 'derechos-diarios-durante-la-detencion', title: 'Derechos Diarios durante la Detención', level: 2 },
    { id: 'derechos-especiales-por-situacion', title: 'Derechos Especiales por Situación', level: 2 },
    { id: 'control-de-legalidad-y-quejas', title: 'Control de Legalidad y Quejas', level: 2 },
    { id: 'preguntas-frecuentes-sobre-derechos-en-comisaria', title: 'Preguntas Frecuentes sobre Derechos en Comisaría', level: 2 },
    { id: 'legislacion-y-referencias', title: 'Legislación y Referencias', level: 2 },
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
                href="/blog/derechos-detenidos"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al hub de Derechos de Detenidos
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  Derechos de Detenidos
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  15 min de lectura
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Derechos en Dependencias Policiales
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Condiciones mínimas, derechos diarios y garantías durante la estancia
                en comisaría. Protocolos y plazos constitucionales.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  11 ene 2025
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
                  Los <strong>derechos en dependencias policiales</strong> están regulados por la
                  <strong>Ley Orgánica 1/1979</strong> y el <strong>Reglamento de Comisarías</strong>,
                  que establecen las condiciones mínimas que deben respetarse durante la detención.
                  Estos derechos garantizan que la privación de libertad se realice de manera
                  digna y respetuosa con los derechos fundamentales.
                </p>
                <p>
                  Esta guía detalla todos los derechos durante la estancia en comisaría, desde
                  las condiciones mínimas de habitabilidad hasta los derechos diarios, pasando
                  por los plazos constitucionales y las garantías procesales. Se basa en la
                  jurisprudencia del <strong>Tribunal Constitucional</strong> y las instrucciones
                  del <strong>Ministerio del Interior</strong> sobre el régimen de detención.
                </p>
              </div>

              {/* Derechos Básicos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos Básicos en Comisaría
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {derechosBasicos.map((derecho, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6"
                    >
                      <h4 className="font-semibold text-black mb-2">{derecho.derecho}</h4>
                      <p className="text-black/80 text-sm mb-3">
                        {derecho.descripcion}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {derecho.procedimiento}
                          </span>
                        </div>
                        <div className="text-xs text-black/60 italic">
                          Momento: {derecho.momento}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Fases de la Detención */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Fases de la Detención en Comisaría
                </h2>

                <div className="space-y-6">
                  {fasesDetencion.map((fase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-blue-50 border border-blue-200 rounded-lg p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {fase.fase}
                          </h3>
                          <p className="text-black/80 text-sm">
                            Tiempo estimado: {fase.tiempo}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-black mb-2">Derechos en esta fase:</h4>
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

              {/* Condiciones Mínimas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Condiciones Mínimas Legales
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-charleston text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Aspecto</th>
                        <th className="px-4 py-3 text-left font-semibold">Mínimo Legal</th>
                        <th className="px-4 py-3 text-left font-semibold">Descripción</th>
                        <th className="px-4 py-3 text-left font-semibold">Evidencia Legal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {condicionesMinimas.map((condicion, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-semibold text-black">
                            {condicion.aspecto}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {condicion.minimoLegal}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {condicion.descripcion}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {condicion.evidencia}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Derechos Diarios */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos Diarios durante la Detención
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {derechosDiarios.map((derecho, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-black mb-1">{derecho.derecho}</h4>
                          <p className="text-black/80 text-sm mb-2">
                            {derecho.descripcion}
                          </p>
                        </div>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          {derecho.frecuencia}
                        </span>
                      </div>

                      <div>
                        <span className="text-xs text-black/60 italic">
                          Cómo ejercerlo: {derecho.ejercicio}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Derechos Especiales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos Especiales por Situación
                </h2>

                <div className="space-y-6">
                  {derechosEspeciales.map((situacion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-purple-50 border border-purple-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {situacion.situacion}
                          </h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-black mb-2">Derechos adicionales:</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {situacion.derechosAdicionales.map((derecho, idx) => (
                              <li key={idx}>• {derecho}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-2">Medidas específicas:</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {situacion.medidas.map((medida, idx) => (
                              <li key={idx}>• {medida}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Control de Legalidad */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Control de Legalidad y Quejas
                </h2>

                <div className="bg-red-50 border-l-4 border-red-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Sistema de Quejas</h3>
                      <p className="text-black/80">
                        Todo detenido tiene derecho a formular quejas y reclamaciones sobre
                        las condiciones o el trato recibido en comisaría. Estas quejas deben
                        ser atendidas y pueden dar lugar a responsabilidades disciplinarias.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Libro de Quejas</h4>
                      <p className="text-black/80 text-sm">
                        Disponible 24h en todas las comisarías
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Defensor del Pueblo</h4>
                      <p className="text-black/80 text-sm">
                        Institución independiente para quejas
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Fiscalía de Derechos Humanos</h4>
                      <p className="text-black/80 text-sm">
                        Investigación de vulneraciones graves
                      </p>
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
                  Preguntas Frecuentes sobre Derechos en Comisaría
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
                  Legislación y Referencias
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Española</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Ley Orgánica 1/1979</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1979-304" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Derechos de los detenidos
                      </a>
                    </li>
                    <li>
                      <strong>Ley de Enjuiciamiento Criminal</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1882-6039" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Régimen de detención (arts. 489-529)
                      </a>
                    </li>
                    <li>
                      <strong>Reglamento de Comisarías</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1994-17159" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Condiciones de detención
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convenio Europeo de Derechos Humanos</strong> -
                      <a href="https://www.echr.coe.int/Documents/Convention_SPA.pdf" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 3, 5, 6 (Tratos inhumanos, libertad, proceso justo)
                      </a>
                    </li>
                    <li>
                      <strong>Reglas Mínimas Naciones Unidas</strong> -
                      <a href="https://www.unodc.org/documents/justice-and-prison-reform/UN_Standard_Minimum_Rules_for_the_Treatment_of_Prisoners.pdf" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Tratamiento de reclusos
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Destacada</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 47/2018</strong> - Condiciones de detención en comisaría
                    </li>
                    <li>
                      <strong>STC 114/2017</strong> - Derechos durante la detención policial
                    </li>
                    <li>
                      <strong>STEDH Caso Mammadov</strong> - Condiciones de detención inhumanas
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Los derechos en dependencias policiales garantizan que la privación de libertad
                  se realice respetando la dignidad humana y los derechos constitucionales. Desde
                  el momento de la detención hasta la puesta a disposición judicial, el detenido
                  mantiene todos sus derechos fundamentales, con protecciones específicas para
                  garantizar condiciones dignas durante la estancia en comisaría.
                </p>
                <p className="text-white/90 leading-relaxed">
                  El conocimiento de estos derechos permite ejercerlos efectivamente y denunciar
                  cualquier vulneración. Las condiciones mínimas legales, los derechos diarios y
                  las garantías procesales aseguran que la detención sea un mecanismo legítimo
                  de la administración de justicia, no una forma de castigo anticipado. En STANS
                  Abogados defendemos activamente estos derechos en todas las fases del procedimiento.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, estoy detenido en comisaría y necesito información sobre mis derechos`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Derechos en Comisaría
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
                Artículos Relacionados
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