'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Home, Phone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import Navigation from '../components/Navigation'
import Footer from '../components/FooterOptimized'
import WhatsAppButton from '../components/WhatsAppButton'

const WHATSAPP = '34611687226';

export default function NotFound() {
  const router = useRouter()
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl font-bold text-gold mb-4">
              404
            </h1>
            <h2 className="text-3xl font-semibold text-white mb-4">
              {t.notFound.title}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {t.notFound.subtitle}
            </p>
            <p className="text-white/60 mb-8">
              {t.notFound.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-charleston text-white rounded-lg hover:bg-white hover:text-charleston transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                {language === 'ar' ? 'العودة للخلف' : 'Volver atrás'}
              </button>
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black rounded-lg hover:bg-white transition-all"
              >
                <Home className="w-5 h-5" />
                {t.notFound.backHome}
              </button>
              <button
                onClick={() => router.push('/blog')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                {t.notFound.backBlog}
              </button>
            </div>

            <div className="bg-charleston/50 rounded-lg p-6 border border-gold/20">
              <p className="text-white/80 mb-4">
                {t.notFound.helpText}
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.hero.holaAyuda)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
                <button
                  onClick={() => router.push('/#contacto')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-black rounded-lg hover:bg-white transition-all"
                >
                  {t.notFound.contactUs}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
