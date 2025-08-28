'use client';

import { motion } from 'framer-motion';
import { Users, Award, Clock, Shield } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    number: '1000+',
    label: 'Casos Exitosos',
    description: 'Defensas ganadas en tribunales'
  },
  {
    icon: <Award className="h-8 w-8" />,
    number: '15+',
    label: 'Años de Experiencia',
    description: 'Especialización en derecho penal'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    number: '<15',
    label: 'Minutos de Respuesta',
    description: 'Asistencia inmediata 24/7'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    number: '3',
    label: 'Idiomas',
    description: 'Español, Inglés y Árabe'
  }
];

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-offwhite">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gold mb-4">Nuestros Números</h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Más de una década de experiencia defendiendo los derechos de nuestros clientes. 
          Resultados que hablan por sí mismos.
        </p>
      </motion.div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -2, scale: 1.02 }}
            className="text-center p-6 rounded-xl bg-charleston border border-apricot/20 hover:border-gold/30 transition-all"
          >
            <div className="text-gold mb-4 flex justify-center">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-gold mb-2">{stat.number}</div>
            <div className="text-lg font-semibold mb-2">{stat.label}</div>
            <div className="text-white/70 text-sm">{stat.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
