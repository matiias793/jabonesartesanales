'use client';

import { motion } from 'framer-motion';

const propiedades = [
  {
    titulo: "Antimicrobiano",
    descripcion: "Inhibe el crecimiento de bacterias, hongos y algunos virus. Se usa en limpieza natural y purificación del ambiente.",
    icono: "🦠",
    color: "from-red-400 to-pink-500"
  },
  {
    titulo: "Antiséptico",
    descripcion: "Ayuda a desinfectar superficies y pequeñas heridas (siempre muy diluido).",
    icono: "🧴",
    color: "from-blue-400 to-indigo-500"
  },
  {
    titulo: "Antioxidante",
    descripcion: "Contiene compuestos como limoneno que ayudan a combatir radicales libres.",
    icono: "⚡",
    color: "from-yellow-400 to-orange-500"
  },
  {
    titulo: "Estimulante y energizante",
    descripcion: "Su aroma fresco favorece el estado de alerta, mejora el ánimo y reduce la sensación de cansancio mental.",
    icono: "⚡",
    color: "from-amber-400 to-yellow-500"
  },
  {
    titulo: "Digestivo",
    descripcion: "Puede ayudar a aliviar náuseas leves y mejorar la digestión cuando se usa en aromaterapia.",
    icono: "🌿",
    color: "from-green-400 to-emerald-500"
  },
  {
    titulo: "Depurativo",
    descripcion: "Contribuye a la sensación de limpieza interna, utilizado comúnmente en difusores para promover un ambiente 'fresco'.",
    icono: "💧",
    color: "from-cyan-400 to-blue-500"
  },
  {
    titulo: "Antiinflamatorio leve",
    descripcion: "Sus componentes pueden aportar alivio suave en masajes (siempre diluido en aceite portador).",
    icono: "🌡️",
    color: "from-purple-400 to-pink-500"
  },
  {
    titulo: "Astringente",
    descripcion: "Ayuda a equilibrar piel grasa, poros abiertos y exceso de sebo (diluido, nunca puro en la piel).",
    icono: "✨",
    color: "from-rose-400 to-red-500"
  },
  {
    titulo: "Desodorante natural",
    descripcion: "Neutraliza olores en ambientes por su aroma cítrico.",
    icono: "🌸",
    color: "from-pink-400 to-rose-500"
  },
  {
    titulo: "Inmunoestimulante",
    descripcion: "Considerado útil en aromaterapia para apoyar las defensas del organismo.",
    icono: "🛡️",
    color: "from-teal-400 to-green-500"
  }
];

export default function Propiedades() {
  return (
    <section id="propiedades" className="py-20 px-4 bg-gradient-to-b from-white to-yellow-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
            Propiedades del Aceite Esencial de Limón
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce las propiedades químicas y terapéuticas que hacen del aceite de limón un ingrediente valioso
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propiedades.map((propiedad, index) => (
            <motion.div
              key={propiedad.titulo}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-100"
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${propiedad.color} flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg`}>
                {propiedad.icono}
              </div>
              <h3 className="text-lg font-bold mb-3 text-center text-gray-800">{propiedad.titulo}</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm">{propiedad.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

