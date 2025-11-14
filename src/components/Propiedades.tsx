'use client';

import { motion } from 'framer-motion';

const propiedades = [
  {
    titulo: "Antimicrobiano",
    descripcion: "Inhibe el crecimiento de bacterias, hongos y algunos virus. Se usa en limpieza natural y purificación del ambiente.",
    icono: "🦠",
    color: "from-violet-300 to-purple-300"
  },
  {
    titulo: "Antiséptico",
    descripcion: "Ayuda a desinfectar superficies y pequeñas heridas (siempre muy diluido).",
    icono: "🧴",
    color: "from-purple-300 to-pink-300"
  },
  {
    titulo: "Antioxidante",
    descripcion: "Contiene compuestos como limoneno que ayudan a combatir radicales libres.",
    icono: "⚡",
    color: "from-pink-300 to-rose-300"
  },
  {
    titulo: "Estimulante y energizante",
    descripcion: "Su aroma fresco favorece el estado de alerta, mejora el ánimo y reduce la sensación de cansancio mental.",
    icono: "⚡",
    color: "from-violet-200 to-purple-200"
  },
  {
    titulo: "Digestivo",
    descripcion: "Puede ayudar a aliviar náuseas leves y mejorar la digestión cuando se usa en aromaterapia.",
    icono: "🌿",
    color: "from-purple-200 to-pink-200"
  },
  {
    titulo: "Depurativo",
    descripcion: "Contribuye a la sensación de limpieza interna, utilizado comúnmente en difusores para promover un ambiente 'fresco'.",
    icono: "💧",
    color: "from-pink-200 to-rose-200"
  },
  {
    titulo: "Antiinflamatorio leve",
    descripcion: "Sus componentes pueden aportar alivio suave en masajes (siempre diluido en aceite portador).",
    icono: "🌡️",
    color: "from-violet-300 to-purple-300"
  },
  {
    titulo: "Astringente",
    descripcion: "Ayuda a equilibrar piel grasa, poros abiertos y exceso de sebo (diluido, nunca puro en la piel).",
    icono: "✨",
    color: "from-purple-300 to-pink-300"
  },
  {
    titulo: "Desodorante natural",
    descripcion: "Neutraliza olores en ambientes por su aroma cítrico.",
    icono: "🌸",
    color: "from-pink-300 to-rose-300"
  },
  {
    titulo: "Inmunoestimulante",
    descripcion: "Considerado útil en aromaterapia para apoyar las defensas del organismo.",
    icono: "🛡️",
    color: "from-violet-200 to-purple-200"
  }
];

export default function Propiedades() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {propiedades.map((propiedad, index) => (
          <motion.div
            key={propiedad.titulo}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100"
          >
            <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${propiedad.color} flex items-center justify-center text-2xl mb-4 mx-auto shadow-md`}>
              {propiedad.icono}
            </div>
            <h3 className="text-lg font-bold mb-2 text-center text-gray-800">{propiedad.titulo}</h3>
            <p className="text-gray-600 text-center leading-relaxed text-sm">{propiedad.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
