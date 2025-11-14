'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Beneficios from './Beneficios';
import Propiedades from './Propiedades';

export default function SelectorContenido() {
  const [vista, setVista] = useState<'beneficios' | 'propiedades'>('beneficios');

  return (
    <section id="contenido" className="py-20 px-4 bg-gradient-to-b from-violet-50/50 to-purple-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Selector de vista */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-violet-200">
            <button
              onClick={() => setVista('beneficios')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                vista === 'beneficios'
                  ? 'bg-gradient-to-r from-violet-400 to-purple-400 text-white shadow-lg'
                  : 'text-gray-600 hover:text-violet-600'
              }`}
            >
              Beneficios
            </button>
            <button
              onClick={() => setVista('propiedades')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                vista === 'propiedades'
                  ? 'bg-gradient-to-r from-violet-400 to-purple-400 text-white shadow-lg'
                  : 'text-gray-600 hover:text-violet-600'
              }`}
            >
              Propiedades
            </button>
          </div>
        </motion.div>

        {/* Contenido según selección */}
        <motion.div
          key={vista}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {vista === 'beneficios' ? <Beneficios /> : <Propiedades />}
        </motion.div>
      </div>
    </section>
  );
}

