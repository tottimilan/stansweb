'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'
import { getTranslatedCaseField } from '@/translations/cases'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield } from 'lucide-react'
import Navigation from '@/components/Navigation'
import ProtectedCaseOverlay from '@/components/ProtectedCaseOverlay'
import casosData from '../../../../public/casos/casos-procesados.json'
import seoInfo from '../../../../public/casos/seo-info.json'
import Head from 'next/head'

interface Caso {
  id: number
  categoria: string
  nombre: string
  delito_principal: string
  resultado: string
  tipo_resolucion: string
  favorabilidad: string
  organo: string
  localidad: string
  fecha: string
  año: string
  contenido?: {
    resumen?: string
  }
  caso_en_curso?: boolean
}

export default function CasoDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { language } = useLanguage()
  const t = translations[language]
  const [caso, setCaso] = useState<Caso | null>(null)
  const [seoData, setSeoData] = useState<any>(null)

  useEffect(() => {
    const urlParam = params.id as string
    const casoId = parseInt(urlParam)
    let foundCaso = casosData.find((c: any) => c.id === casoId)
    
    if (!foundCaso) {
      const urlToIdMap: { [key: string]: number } = {}
      Object.entries(seoInfo as any).forEach(([id, info]: [string, any]) => {
        if (info.url) {
          const urlPath = info.url.split('/').pop()
          if (urlPath) {
            urlToIdMap[urlPath] = parseInt(id)
          }
        }
      })
      
      const mappedId = urlToIdMap[urlParam]
      if (mappedId) {
        foundCaso = casosData.find((c: any) => c.id === mappedId)
      }
    }
    
    if (foundCaso) {
      setCaso(foundCaso as Caso)
      const casoSeoInfo = (seoInfo as any)[foundCaso.id]
      if (casoSeoInfo) {
        setSeoData(casoSeoInfo)
      }
    }
  }, [params.id])

  if (!caso) {
    return (
      <div className="min-h-screen bg-charleston flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8"
          >
            <Shield className="h-16 w-16 text-gold mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-offwhite mb-4">
              {t.caso.casoNoEncontrado}
            </h1>
            <button
              onClick={() => router.push('/casos')}
              className="inline-flex items-center gap-2 bg-gold text-charleston px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              {t.caso.volverCasos}
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  const pageTitle = seoData?.title || `${caso.nombre} - STANS ABOGADOS`
  const pageDescription = seoData?.description || `Caso ${caso.nombre} resuelto por STANS ABOGADOS. ${caso.resultado}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <div className="min-h-screen bg-charleston">
        <Navigation />
        
        {/* Si el caso está en curso, envolver todo el contenido */}
        {caso.caso_en_curso ? (
          <div className="pt-20">
            <ProtectedCaseOverlay reason="en_curso">
              <CaseDetailContent caso={caso} t={t} language={language} />
            </ProtectedCaseOverlay>
          </div>
        ) : (
          <div className="pt-20">
            <CaseDetailContent caso={caso} t={t} language={language} />
          </div>
        )}
      </div>
    </>
  )
}

// Componente auxiliar para el contenido del caso
function CaseDetailContent({ caso, t, language }: {
  caso: Caso;
  t: any;
  language: string;
}) {
  const router = useRouter()

  return (
    <>
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <button
            onClick={() => router.push('/casos')}
            className="inline-flex items-center gap-2 text-gold hover:text-apricot transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t.caso.volverCasos}</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charleston via-black/50 to-charleston text-offwhite py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-apricot/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gold to-apricot bg-clip-text text-transparent">
              {getTranslatedCaseField(caso.id, 'nombre', language, caso.nombre)}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2">
                <span>{caso.localidad}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2">
                <span>{caso.fecha || caso.año}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-offwhite">
          <div className="bg-white/5 backdrop-blur-sm border border-gold/30 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gold mb-4">Resumen del Caso</h2>
            <p className="text-offwhite/80 leading-relaxed">
              {getTranslatedCaseField(caso.id, 'contenido.resumen', language, caso.contenido?.resumen || 'Información del caso disponible próximamente.')}
            </p>
          </div>
        </div>
      </div>

      {/* Nota de Privacidad */}
      <section className="bg-white/5 backdrop-blur-sm border-t border-gold/20 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-gold mr-2" />
              <h3 className="text-lg font-semibold text-gold">
                Nota de Privacidad
              </h3>
            </div>
            <p className="text-offwhite/80 text-base leading-relaxed max-w-3xl mx-auto">
              Por motivos de confidencialidad y protección de datos, solo se muestran en esta web una selección representativa de nuestros casos. 
              Si necesitas más ejemplos específicos o tienes un caso similar, no dudes en consultarlo directamente con nuestro equipo.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
