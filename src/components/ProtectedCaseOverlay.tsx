'use client';

import { motion } from 'framer-motion';
import { Lock, Shield, ExternalLink, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import Link from 'next/link';

interface ProtectedCaseOverlayProps {
  children: React.ReactNode;
  reason?: 'en_curso' | 'confidencial' | 'legal';
  showContactButton?: boolean;
}

export default function ProtectedCaseOverlay({ 
  children, 
  reason = 'en_curso',
  showContactButton = true 
}: ProtectedCaseOverlayProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const getOverlayContent = () => {
    switch (reason) {
      case 'en_curso':
        return {
          icon: <AlertTriangle className="h-12 w-12 text-amber-400" />,
          title: language === 'ar' ? 'قضية قيد التحقيق' : 'CASO EN CURSO',
          description: language === 'ar' 
            ? 'هذه القضية قيد التحقيق حالياً. لا يمكن عرض المعلومات التفصيلية لأسباب قانونية وحماية سرية التحقيق.'
            : 'Esta investigación está en curso. No podemos mostrar información detallada por razones legales y para proteger la confidencialidad del proceso.',
          bgColor: 'bg-amber-500/10',
          borderColor: 'border-amber-500/30',
          iconBg: 'bg-amber-500/20'
        };
      case 'confidencial':
        return {
          icon: <Lock className="h-12 w-12 text-blue-400" />,
          title: language === 'ar' ? 'معلومات سرية' : 'INFORMACIÓN CONFIDENCIAL',
          description: language === 'ar'
            ? 'هذه المعلومات محمية بسرية المحامي والعميل.'
            : 'Esta información está protegida por el secreto profesional abogado-cliente.',
          bgColor: 'bg-blue-500/10',
          borderColor: 'border-blue-500/30',
          iconBg: 'bg-blue-500/20'
        };
      case 'legal':
        return {
          icon: <Shield className="h-12 w-12 text-red-400" />,
          title: language === 'ar' ? 'مقيد قانونياً' : 'ACCESO RESTRINGIDO',
          description: language === 'ar'
            ? 'الوصول إلى هذه المعلومات مقيد لأسباب قانونية.'
            : 'El acceso a esta información está restringido por motivos legales.',
          bgColor: 'bg-red-500/10',
          borderColor: 'border-red-500/30',
          iconBg: 'bg-red-500/20'
        };
      default:
        return {
          icon: <Lock className="h-12 w-12 text-gold" />,
          title: 'ACCESO RESTRINGIDO',
          description: 'Esta información no está disponible públicamente.',
          bgColor: 'bg-gold/10',
          borderColor: 'border-gold/30',
          iconBg: 'bg-gold/20'
        };
    }
  };

  const overlayContent = getOverlayContent();

  return (
    <div className="relative">
      {/* Contenido difuminado */}
      <div className="filter blur-sm opacity-30 pointer-events-none select-none">
        {children}
      </div>

      {/* Overlay de protección */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute inset-0 ${overlayContent.bgColor} backdrop-blur-sm border ${overlayContent.borderColor} rounded-2xl flex flex-col items-center justify-center p-6 text-center`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className={`${overlayContent.iconBg} rounded-full p-4 mb-6`}
        >
          {overlayContent.icon}
        </motion.div>

        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-xl font-bold text-offwhite mb-4 tracking-wide"
        >
          {overlayContent.title}
        </motion.h3>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-offwhite/80 leading-relaxed max-w-md mb-6 text-sm"
        >
          {overlayContent.description}
        </motion.p>

        {showContactButton && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors font-medium text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              {language === 'ar' ? 'اتصل بفريقنا' : 'Contactar Equipo'}
            </Link>
            <Link
              href="/casos"
              className="inline-flex items-center gap-2 bg-white/10 text-offwhite border border-white/20 px-6 py-3 rounded-lg hover:bg-white/20 transition-colors font-medium text-sm"
            >
              {language === 'ar' ? 'عرض قضايا أخرى' : 'Ver Otros Casos'}
            </Link>
          </motion.div>
        )}

        {/* Mensaje adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-6 pt-4 border-t border-white/20 text-xs text-offwhite/60 max-w-md"
        >
          {language === 'ar' 
            ? 'نحترم سرية العملاء وندافع عن حقوقهم بأقصى درجات الحماية القانونية.'
            : 'Respetamos la confidencialidad de nuestros clientes y defendemos sus derechos con el máximo nivel de protección legal.'
          }
        </motion.div>
      </motion.div>
    </div>
  );
}
