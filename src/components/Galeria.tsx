'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// Imágenes del proceso - solo las rutas, sin textos
const imagenes = [
  "/jabones/1.jpg",
  "/jabones/2.jpg",
  "/jabones/3.jpg",
  "/jabones/4.jpg",
  "/jabones/5.jpg",
  "/jabones/7.jpg",
  "/jabones/8.jpg",
  "/jabones/9.jpg",
  "/jabones/10.jpg",
  "/jabones/11.jpg",
  "/jabones/12.jpg",
  "/jabones/13.jpg"
];

export default function Galeria() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 px-4 bg-gradient-to-b from-purple-50/50 to-pink-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imagenes.map((imagen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setImagenSeleccionada(imagen)}
              className="cursor-pointer aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100 bg-white/50"
            >
              <Image 
                src={imagen} 
                alt={`Imagen ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal para vista ampliada */}
        {imagenSeleccionada && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setImagenSeleccionada(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-5xl w-full h-[90vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={imagenSeleccionada} 
                alt="Vista ampliada"
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={() => setImagenSeleccionada(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 font-bold text-xl shadow-lg transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
