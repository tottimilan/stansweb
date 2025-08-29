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
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const mensaje = (form.elements.namedItem('mensaje') as HTMLInputElement).value;
    const honeypot = (form.elements.namedItem('website') as HTMLInputElement).value; // campo honey

    if (honeypot) return; // bot

    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, mensaje, idioma: language, utm }),
    });

    setLoading(false);
    if (res.ok) {
      setOk(true);
      form.reset();
    } else {
      const data = await res.json().catch(() => ({}));
      setOk(false);
      setError(data?.error || 'ERROR');
    }
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-3 ${className}`} aria-live="polite">
      {/* Honeypot anti-spam */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <input
        name="email"
        type="email"
        required
        placeholder={t.contact.leadForm.email}
        className="bg-charleston text-offwhite placeholder-white/50 rounded-xl px-4 py-3 outline-none ring-1 ring-apricot/20 focus:ring-2 focus:ring-gold focus-ring"
        style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
      />
      <input
        name="mensaje"
        placeholder={t.contact.leadForm.mensaje}
        className="bg-charleston text-offwhite placeholder-white/50 rounded-xl px-4 py-3 outline-none ring-1 ring-apricot/20 focus:ring-2 focus:ring-gold focus-ring"
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
          {t.contact.leadForm.error}
        </motion.p>
      )}
    </form>
  );
}
