'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Languages, Users, Award, Phone, Mail, MapPin } from 'lucide-react';
import LeadForm from './LeadForm';

type Props = {
  whatsapp?: string; // ej: "34XXXXXXXXX"
  idioma?: 'es' | 'ar';
};

export default function Hero({ whatsapp = '34611687226', idioma = 'es' }: Props) {
  const text =
    idioma === 'ar'
      ? encodeURIComponent('مرحباً، أحتاج مساعدة جنائية عاجلة.')
      : encodeURIComponent('Hola, necesito ayuda penal urgente.');

  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-black text-offwhite pt-16">
      {/* Glow dorado sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-20"
           style={{ background: 'radial-gradient(600px 300px at 80% 20%, #A56B3733, transparent)' }} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#A56B37_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6"
          >
            <Shield className="h-4 w-4 mr-2" />
            {idioma === 'ar' ? 'متخصصون في القانون الجنائي' : 'Especialistas en Defensa Penal'}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-semibold"
          >
            {idioma === 'ar' ? 'دفاع جنائي 24/7 — مدريد وإسبانيا' : 'Defensa Penal 24/7 — Madrid y España'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-white/80"
          >
            {idioma === 'ar'
              ? 'متخصصون في القانون الجنائي. إسباني–عربي. نرد خلال 15 دقيقة.'
              : 'Especialistas en Derecho Penal. Español–Árabe. Respondemos en menos de 15 minutos.'}
          </motion.p>

          {/* Features con iconos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6"
          >
                         <div className="flex items-center text-offwhite/70 p-3 bg-charleston/50 rounded-lg border border-gold/10">
               <Clock className="h-4 w-4 mr-3 text-gold" />
               <span className="text-sm">Respuesta &lt; 15 min</span>
             </div>
            <div className="flex items-center text-offwhite/70 p-3 bg-charleston/50 rounded-lg border border-gold/10">
              <Languages className="h-4 w-4 mr-3 text-gold" />
              <span className="text-sm">Español–Árabe</span>
            </div>
            <div className="flex items-center text-offwhite/70 p-3 bg-charleston/50 rounded-lg border border-gold/10">
              <Users className="h-4 w-4 mr-3 text-gold" />
              <span className="text-sm">Extradición España–Marruecos</span>
            </div>
            <div className="flex items-center text-offwhite/70 p-3 bg-charleston/50 rounded-lg border border-gold/10">
              <Award className="h-4 w-4 mr-3 text-gold" />
              <span className="text-sm">Penal Puro</span>
            </div>
          </motion.div>

          {/* Contacto rápido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            <div className="flex items-center text-offwhite/70 text-sm">
              <Phone className="h-4 w-4 mr-2 text-gold" />
              <span>+34 611 68 72 26</span>
            </div>
            <div className="flex items-center text-offwhite/70 text-sm">
              <Mail className="h-4 w-4 mr-2 text-gold" />
              <span>info@stansabogados.com</span>
            </div>
            <div className="flex items-center text-offwhite/70 text-sm">
              <MapPin className="h-4 w-4 mr-2 text-gold" />
              <span>Madrid, España</span>
            </div>
          </motion.div>

          <div className="mt-8">
            <LeadForm idioma={idioma} />
            <div className="mt-4">
              <a
                href={`https://wa.me/${whatsapp}?text=${text}`}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-gold text-black px-5 py-3 font-medium shadow-lg shadow-black/20 hover:translate-y-[1px] transition"
              >
                {idioma === 'ar' ? 'واتساب للطوارئ 24/7' : 'WhatsApp Urgencias 24/7'}
              </a>
            </div>
            <p className="mt-3 text-xs text-white/60">
              {idioma === 'ar'
                ? 'محامون جنائيون | اللغات: الإسبانية/العربية | أعضاء ICAM'
                : 'Abogados penalistas | Idiomas: Español/Árabe | Colegiados ICAM'}
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="rounded-2xl border border-apricot/20 bg-charleston min-h-[320px] shadow-2xl shadow-black/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#A56B37_20%,_transparent_50%)] opacity-20"></div>
          <div className="h-full w-full grid place-items-center text-white/40 relative z-10">
            <div className="text-center">
              <div className="text-6xl mb-4">⚖️</div>
              <p className="font-medium">STANS ABOGADOS</p>
              <p className="text-gold/60 text-sm mt-1">Equipo de Abogados</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
