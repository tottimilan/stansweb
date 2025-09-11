'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const relatedArticles = [
  {
    title: 'Derechos Constitucionales del Detenido',
    slug: 'derechos-constitucionales-detenido',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Primeros Pasos en Comisaría',
    slug: 'primeros-pasos-comisaria',
    category: 'Procedimientos'
  },
  {
    title: 'Asistencia Letrada de Urgencia',
    slug: 'asistencia-letrada-urgencia',
    category: 'Representación Legal'
  }
];

export default function DefensaPenalUrgentePage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: 'Defensa Penal Urgente', href: '/blog/defensa-penal-urgente' },
    { label: 'Guía Completa de Defensa Penal Urgente' }
  ];

  const tocItems = [
    { id: 'derechos-inmediatos', title: 'Derechos Inmediatos al Ser Detenido', level: 2 },
    { id: 'proceso-detencion', title: 'Proceso y Plazos de Detención', level: 2 },
    { id: 'fases-proceso', title: 'Fases del Proceso de Detención', level: 2 },
    { id: 'que-hacer-no-hacer', title: 'Qué Hacer y Qué NO Hacer', level: 2 },
    { id: 'medidas-cautelares', title: 'Medidas Cautelares Posibles', level: 2 },
    { id: 'recursos-disponibles', title: 'Recursos Legales Disponibles', level: 2 }
  ];

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      <main className="bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-charleston text-offwhite py-8 sm:py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 text-blue-300 mb-4">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">Defensa Penal Urgente</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
                Defensa Penal Urgente: Guía Completa para Detenidos
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/80 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>15 Dic 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>15 min lectura</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Equipo STANS Abogados</span>
                </div>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-3xl mx-auto px-4">
                Todo lo que necesitas saber cuando eres detenido: derechos, procedimiento y cómo actuar. Guía práctica completa para situaciones de urgencia penal con información actualizada 2024.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="bg-white py-8 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Introduction */}
              <div className="text-black/80 leading-relaxed mb-8 sm:mb-12 text-sm sm:text-base lg:text-lg">
                <p className="mb-6">
                  La <strong>defensa penal urgente</strong> es el conjunto de actuaciones legales inmediatas que se activan cuando una persona es detenida o está bajo investigación criminal. Esta guía te proporciona toda la información esencial para proteger tus derechos desde el primer momento, evitar errores costosos y maximizar las posibilidades de un resultado favorable.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">Información Crítica</h3>
                      <p className="text-blue-800">
                        Los primeros momentos tras una detención son cruciales. Conocer tus derechos y cómo ejercerlos puede determinar el resultado de todo el proceso penal. Una actuación incorrecta en las primeras horas puede comprometer gravemente tu defensa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-12"
              >
                {/* Derechos Inmediatos */}
                <section id="derechos-inmediatos">
                  <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    Derechos Inmediatos al Ser Detenido
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-black/80 leading-relaxed">
                      Desde el momento de la detención, tienes derechos fundamentales que nadie puede vulnerar. Es esencial conocerlos y ejercerlos correctamente:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-green-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          Derecho a la Información
                        </h3>
                        <p className="text-green-800 text-sm mb-3">
                          Deben informarte de los motivos de tu detención, tus derechos y las acusaciones en tu contra.
                        </p>
                        <ul className="text-green-700 text-xs space-y-1">
                          <li>• Motivos específicos de la detención</li>
                          <li>• Derechos que te asisten</li>
                          <li>• Posibles cargos o acusaciones</li>
                          <li>• Duración máxima de la detención</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                          Asistencia Letrada
                        </h3>
                        <p className="text-blue-800 text-sm mb-3">
                          Derecho a un abogado desde el primer momento. Puede ser de oficio o de tu elección.
                        </p>
                        <ul className="text-blue-700 text-xs space-y-1">
                          <li>• Asistencia inmediata 24/7</li>
                          <li>• Abogado de oficio gratuito</li>
                          <li>• Derecho a elegir abogado privado</li>
                          <li>• Presencia en todas las diligencias</li>
                        </ul>
                      </div>
                      
                      <div className="bg-purple-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-purple-600" />
                          Derecho a No Declarar
                        </h3>
                        <p className="text-purple-800 text-sm mb-3">
                          No estás obligado a declarar contra ti mismo. Puedes guardar silencio sin consecuencias.
                        </p>
                        <ul className="text-purple-700 text-xs space-y-1">
                          <li>• Silencio total permitido</li>
                          <li>• No implica culpabilidad</li>
                          <li>• Declarar solo con abogado</li>
                          <li>• Evitar autoincriminación</li>
                        </ul>
                      </div>
                      
                      <div className="bg-orange-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-orange-600" />
                          Comunicación
                        </h3>
                        <p className="text-orange-800 text-sm mb-3">
                          Derecho a comunicar tu detención a un familiar y al consulado si eres extranjero.
                        </p>
                        <ul className="text-orange-700 text-xs space-y-1">
                          <li>• Avisar a un familiar</li>
                          <li>• Contacto consular (extranjeros)</li>
                          <li>• Llamada telefónica</li>
                          <li>• Comunicación inmediata</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Proceso de Detención */}
                <section id="proceso-detencion">
                  <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    Proceso y Plazos de Detención
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-black/80 leading-relaxed">
                      El proceso de detención sigue unos plazos estrictos que debes conocer. Cualquier vulneración de estos puede ser motivo de recurso:
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-4">Plazos Máximos de Detención</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="font-medium text-gray-900">Detención preventiva</span>
                          <span className="text-blue-600 font-semibold">72 horas máximo</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="font-medium text-gray-900">Delitos de terrorismo</span>
                          <span className="text-red-600 font-semibold">5 días máximo</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="font-medium text-gray-900">Organizaciones criminales</span>
                          <span className="text-orange-600 font-semibold">5 días máximo</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="font-medium text-gray-900">Prisión provisional</span>
                          <span className="text-purple-600 font-semibold">Según gravedad del caso</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-yellow-900 mb-2">⏰ Cómputo de Plazos</h4>
                      <p className="text-yellow-800 text-sm">
                        Los plazos se cuentan desde el momento efectivo de la detención, no desde el ingreso en comisaría. 
                        Weekend y festivos no interrumpen el cómputo para la detención preventiva.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Fases del Proceso */}
                <section id="fases-proceso">
                  <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Fases del Proceso de Detención</h2>
                  
                  <div className="space-y-6">
                    <div className="grid gap-6">
                      <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                        <h3 className="font-semibold text-blue-900 mb-3">1. Detención Inicial</h3>
                        <p className="text-blue-800 text-sm mb-3">Momento en que pierdes tu libertad por actuación policial.</p>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Identificación de agentes</li>
                          <li>• Lectura de derechos</li>
                          <li>• Registro personal si procede</li>
                          <li>• Traslado a dependencias</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                        <h3 className="font-semibold text-green-900 mb-3">2. Ingreso en Comisaría</h3>
                        <p className="text-green-800 text-sm mb-3">Formalización del ingreso y apertura del expediente.</p>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Registro de entrada</li>
                          <li>• Inventario de pertenencias</li>
                          <li>• Comunicación de derechos por escrito</li>
                          <li>• Solicitud de abogado y familiar</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                        <h3 className="font-semibold text-purple-900 mb-3">3. Investigación Policial</h3>
                        <p className="text-purple-800 text-sm mb-3">Período de investigación con presencia de abogado obligatoria.</p>
                        <ul className="text-purple-700 text-sm space-y-1">
                          <li>• Declaración con abogado presente</li>
                          <li>• Diligencias de investigación</li>
                          <li>• Recogida de pruebas</li>
                          <li>• Entrevistas con testigos</li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                        <h3 className="font-semibold text-orange-900 mb-3">4. Puesta a Disposición Judicial</h3>
                        <p className="text-orange-800 text-sm mb-3">Decisión judicial sobre tu situación procesal.</p>
                        <ul className="text-orange-700 text-sm space-y-1">
                          <li>• Comparecencia ante el juez</li>
                          <li>• Decisión sobre medidas cautelares</li>
                          <li>• Posible libertad o prisión provisional</li>
                          <li>• Fijación de fianza si procede</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Qué Hacer y Qué NO Hacer */}
                <section id="que-hacer-no-hacer">
                  <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Qué Hacer y Qué NO Hacer</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        QUÉ SÍ HACER
                      </h3>
                      <ul className="space-y-3 text-black/80">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Solicitar inmediatamente un abogado</strong> - Es tu derecho más importante</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Permanecer calmado y cooperativo</strong> - La agresividad empeora tu situación</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Pedir que informen a tu familia</strong> - Derecho básico de comunicación</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Recordar y anotar todos los detalles</strong> - Números de placa, nombres, horas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Solicitar atención médica si la necesitas</strong> - Derecho a la salud</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>Preguntar sobre los motivos de detención</strong> - Derecho a la información</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-red-700 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        QUÉ NO HACER
                      </h3>
                      <ul className="space-y-3 text-black/80">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>No resistirse físicamente</strong> - Puede añadir cargos de resistencia</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>No declarar sin abogado presente</strong> - Puedes autoincriminarte</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>No firmar documentos sin asesoramiento</strong> - Podrían ser confesiones</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>No dar información adicional</strong> - Solo la estrictamente necesaria</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>No mentir a la policía</strong> - Es mejor guardar silencio</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span><strong>No discutir con los agentes</strong> - Guarda tus argumentos para el abogado</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Tipos de Medidas Cautelares */}
                <section id="medidas-cautelares">
                  <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Medidas Cautelares Posibles</h2>
                  
                  <div className="space-y-4">
                    <p className="text-black/80 leading-relaxed">
                      Tras la puesta a disposición judicial, el juez puede adoptar diferentes medidas cautelares según la gravedad del caso:
                    </p>
                    
                    <div className="grid gap-4">
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-semibold text-green-900 mb-2">🟢 Libertad Sin Fianza</h4>
                        <p className="text-green-800 text-sm">La medida más favorable. Quedas en libertad sin condiciones económicas.</p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-semibold text-blue-900 mb-2">🔵 Libertad Con Fianza</h4>
                        <p className="text-blue-800 text-sm">Libertad condicionada al pago de una cantidad económica como garantía.</p>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                        <h4 className="font-semibold text-yellow-900 mb-2">🟡 Libertad Con Condiciones</h4>
                        <p className="text-yellow-800 text-sm">Prohibición de salir del país, comparecencias periódicas, alejamiento de víctimas.</p>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                        <h4 className="font-semibold text-orange-900 mb-2">🟠 Prisión Provisional</h4>
                        <p className="text-orange-800 text-sm">Ingreso en centro penitenciario mientras dura la investigación.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Recursos Disponibles */}
                <section id="recursos-disponibles">
                  <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6">Recursos Legales Disponibles</h2>
                  
                  <div className="space-y-6">
                    <p className="text-black/80 leading-relaxed">
                      Si consideras que se han vulnerado tus derechos durante la detención, dispones de varios recursos legales:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-blue-900 mb-3">Habeas Corpus</h3>
                        <p className="text-blue-800 text-sm mb-3">
                          Procedimiento urgente para revisar la legalidad de la detención.
                        </p>
                        <ul className="text-blue-700 text-xs space-y-1">
                          <li>• Resolución en 24 horas</li>
                          <li>• Puede solicitar el detenido o terceros</li>
                          <li>• Revisa legalidad de la detención</li>
                        </ul>
                      </div>
                      
                      <div className="bg-purple-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-purple-900 mb-3">Recurso de Amparo</h3>
                        <p className="text-purple-800 text-sm mb-3">
                          Recurso ante el Tribunal Constitucional por vulneración de derechos fundamentales.
                        </p>
                        <ul className="text-purple-700 text-xs space-y-1">
                          <li>• Plazo: 30 días</li>
                          <li>• Vulneración derechos fundamentales</li>
                          <li>• Última instancia judicial</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-green-900 mb-3">Recurso de Apelación</h3>
                        <p className="text-green-800 text-sm mb-3">
                          Contra las resoluciones sobre medidas cautelares.
                        </p>
                        <ul className="text-green-700 text-xs space-y-1">
                          <li>• Plazo: 3 días</li>
                          <li>• Contra prisión provisional</li>
                          <li>• Ante Audiencia Provincial</li>
                        </ul>
                      </div>
                      
                      <div className="bg-orange-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-orange-900 mb-3">Denuncia Disciplinaria</h3>
                        <p className="text-orange-800 text-sm mb-3">
                          Contra agentes que vulneren tus derechos durante la detención.
                        </p>
                        <ul className="text-orange-700 text-xs space-y-1">
                          <li>• Ante organismos policiales</li>
                          <li>• Sanciones disciplinarias</li>
                          <li>• Indemnización por daños</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="bg-charleston text-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl mx-2 sm:mx-0">
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gold mb-3 sm:mb-4">
                      ¿Necesitas Defensa Penal Urgente?
                    </h3>
                    <p className="text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                      Nuestro equipo de abogados penalistas está disponible 24/7 para proteger tus derechos desde el primer momento. 
                      No esperes, cada minuto cuenta en tu defensa.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <Link
                        href={`https://wa.me/${WHATSAPP}?text=Hola, necesito defensa penal urgente. Es una emergencia.`}
                        className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-green-700 transition"
                      >
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="hidden sm:inline">WhatsApp 24/7 - URGENTE</span>
                        <span className="sm:hidden">WhatsApp - URGENTE</span>
                      </Link>
                      <Link
                        href="/#contacto"
                        className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gold hover:text-black transition"
                      >
                        Contactar Ahora
                      </Link>
                    </div>
                  </div>
                </section>
              </motion.div>
            </motion.div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-gray-50 py-8 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">{t.blog.articulosRelacionados}</h2>
              <p className="text-black/70 text-sm sm:text-base lg:text-lg px-4">
                Amplía tu conocimiento sobre defensa penal con estos artículos especializados
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gold/20"
                >
                  <div className="text-xs text-gold font-medium mb-2 uppercase tracking-wide">
                    {article.category}
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-4 leading-tight">
                    {article.title}
                  </h3>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center text-black hover:text-gold transition-colors text-sm font-medium"
                  >
                    Leer artículo
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </motion.article>
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