'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// Imágenes del proceso
const imagenes = [
  {
    id: 1,
    titulo: "Ingredientes Base",
    descripcion: "Aceites naturales seleccionados para la elaboración",
    categoria: "ingredientes",
    imagen: "/jabones/1.jpg"
  },
  {
    id: 2,
    titulo: "Preparación de la Sosa",
    descripcion: "Disolución cuidadosa de la sosa cáustica",
    categoria: "proceso",
    imagen: "/jabones/2.jpg"
  },
  {
    id: 3,
    titulo: "Mezcla y Trazado",
    descripcion: "Momento crítico donde la mezcla alcanza la consistencia ideal",
    categoria: "proceso",
    imagen: "/jabones/3.jpg"
  },
  {
    id: 4,
    titulo: "Adición de Aditivos",
    descripcion: "Incorporación de aceites esenciales y colorantes",
    categoria: "proceso",
    imagen: "/jabones/4.jpg"
  },
  {
    id: 5,
    titulo: "Moldeo",
    descripcion: "Vertido en moldes para dar forma al jabón",
    categoria: "proceso",
    imagen: "/jabones/5.jpg"
  },
  {
    id: 6,
    titulo: "Proceso de Elaboración",
    descripcion: "Vista del proceso completo de elaboración",
    categoria: "proceso",
    imagen: "/jabones/7.jpg"
  },
  {
    id: 7,
    titulo: "Jabones en Molde",
    descripcion: "Jabones recién moldeados esperando el curado",
    categoria: "proceso",
    imagen: "/jabones/8.jpg"
  },
  {
    id: 8,
    titulo: "Jabones Curados",
    descripcion: "Resultado final después del proceso de curado",
    categoria: "resultado",
    imagen: "/jabones/9.jpg"
  },
  {
    id: 9,
    titulo: "Jabones Finales",
    descripcion: "Jabones artesanales listos para usar",
    categoria: "resultado",
    imagen: "/jabones/10.jpg"
  },
  {
    id: 10,
    titulo: "Detalle del Jabón",
    descripcion: "Vista detallada de la textura y calidad del jabón",
    categoria: "resultado",
    imagen: "/jabones/11.jpg"
  },
  {
    id: 11,
    titulo: "Presentación Final",
    descripcion: "Jabones artesanales con aceite esencial de limón",
    categoria: "resultado",
    imagen: "/jabones/12.jpg"
  },
  {
    id: 12,
    titulo: "Producto Terminado",
    descripcion: "Jabones artesanales completamente curados y listos",
    categoria: "resultado",
    imagen: "/jabones/13.jpg"
  }
];

export default function Galeria() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 px-4 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Galería del Proceso
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Observa cada etapa de la elaboración de nuestros jabones artesanales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagenes.map((imagen, index) => (
            <motion.div
              key={imagen.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setImagenSeleccionada(imagen.id)}
              className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100"
            >
              {/* Imagen */}
              <div className="relative h-64 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={imagen.imagen} 
                  alt={imagen.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{imagen.titulo}</h3>
                <p className="text-gray-600 text-sm">{imagen.descripcion}</p>
                <span className="inline-block mt-3 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                  {imagen.categoria}
                </span>
              </div>
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
              className="bg-white rounded-2xl max-w-4xl w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={imagenes.find(img => img.id === imagenSeleccionada)?.imagen || ''} 
                  alt={imagenes.find(img => img.id === imagenSeleccionada)?.titulo}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {imagenes.find(img => img.id === imagenSeleccionada)?.titulo}
              </h3>
              <p className="text-gray-600 mb-4">
                {imagenes.find(img => img.id === imagenSeleccionada)?.descripcion}
              </p>
              <button
                onClick={() => setImagenSeleccionada(null)}
                className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

