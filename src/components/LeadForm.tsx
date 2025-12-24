'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useContact } from '../contexts/ContactContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

type Props = {
  className?: string;
  idioma?: 'es' | 'ar';
  utm?: string;
};

export default function LeadForm({ className = '', utm = '' }: Props) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { contactClicked } = useContact();
  const { language } = useLanguage();
  const t = translations[language];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem('nombre') as HTMLInputElement).value;
    const telefono = (form.elements.namedItem('telefono') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const mensaje = (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value;
    const honeypot = (form.elements.namedItem('website') as HTMLInputElement).value; // campo honey

    if (honeypot) return; // bot

    // Validar mínimo 50 caracteres en el mensaje
    if (mensaje.length < 50) {
      setError(t.contact.leadForm.mensajeCorto);
      setLoading(false);
      return;
    }

    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        nombre,
        telefono,
        email, 
        mensaje, 
        idioma: language, 
        utm
      }),
    });

    setLoading(false);
    if (res.ok) {
      setOk(true);
      form.reset();
    } else {
      const data = await res.json().catch(() => ({}));
      setOk(false);
      // Traducir errores del servidor a mensajes amigables
      const errorMessages: { [key: string]: string } = {
        'NOMBRE_REQUERIDO': t.contact.leadForm.nombreRequerido || 'El nombre es requerido',
        'TELEFONO_REQUERIDO': t.contact.leadForm.telefonoRequerido || 'El teléfono es requerido',
        'EMAIL_INVALIDO': t.contact.leadForm.emailInvalido || 'El email no es válido',
        'MENSAJE_MINIMO_50_CARACTERES': t.contact.leadForm.mensajeCorto,
      };
      setError(errorMessages[data?.error] || t.contact.leadForm.error || 'Ha ocurrido un error');
    }
  }

  return (
    <form onSubmit={onSubmit} className={`flex flex-col gap-3 ${className}`} aria-live="polite">
      {/* Honeypot anti-spam */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Campos en línea horizontal en desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <input
          name="nombre"
          type="text"
          required
          placeholder={t.contact.leadForm.nombre}
          className="bg-charleston text-offwhite placeholder-white/50 rounded-xl px-4 py-3 outline-none ring-1 ring-apricot/20 focus:ring-2 focus:ring-gold focus-ring"
          style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        />
        <input
          name="telefono"
          type="tel"
          required
          placeholder={t.contact.leadForm.telefono}
          className="bg-charleston text-offwhite placeholder-white/50 rounded-xl px-4 py-3 outline-none ring-1 ring-apricot/20 focus:ring-2 focus:ring-gold focus-ring"
          style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        />
        <input
          name="email"
          type="email"
          required
          placeholder={t.contact.leadForm.email}
          className="bg-charleston text-offwhite placeholder-white/50 rounded-xl px-4 py-3 outline-none ring-1 ring-apricot/20 focus:ring-2 focus:ring-gold focus-ring"
          style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        />
      </div>

      <textarea
        name="mensaje"
        required
        minLength={50}
        placeholder={t.contact.leadForm.mensaje}
        className="bg-charleston text-offwhite placeholder-white/50 rounded-xl px-4 py-3 outline-none ring-1 ring-apricot/20 focus:ring-2 focus:ring-gold focus-ring resize-none"
        rows={4}
        style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
      />

      <label className="text-chinese text-sm">
        <input type="checkbox" required className="mr-2 align-middle" />{' '}
        {t.contact.leadForm.privacidad}
      </label>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        disabled={loading}
        animate={contactClicked ? { 
          scale: 1.1,
          transition: { duration: 0.5, ease: "easeInOut" }
        } : {}}
        className="bg-gold text-black rounded-xl py-3 font-medium shadow-lg shadow-black/20 disabled:opacity-60"
      >
        {loading ? t.contact.leadForm.enviando : t.contact.leadForm.enviar}
      </motion.button>

      {ok && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-apricot text-sm">
          {t.contact.leadForm.gracias}
        </motion.p>
      )}
      {error && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm">
          {error}
        </motion.p>
      )}
    </form>
  );
}
