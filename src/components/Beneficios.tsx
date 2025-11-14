'use client';

import { motion } from 'framer-motion';

const beneficios = [
  {
    titulo: "Mejora el ánimo y reduce el estrés",
    descripcion: "Su aroma cítrico ayuda a elevar el estado de ánimo y disminuir la sensación de fatiga mental.",
    icono: "😊",
    color: "from-yellow-400 to-amber-500"
  },
  {
    titulo: "Purifica el aire",
    descripcion: "Elimina malos olores y contribuye a un ambiente fresco y limpio.",
    icono: "🌬️",
    color: "from-blue-400 to-cyan-500"
  },
  {
    titulo: "Fortalece el sistema inmunológico",
    descripcion: "Sus compuestos aromáticos estimulan las defensas naturales del organismo en aromaterapia.",
    icono: "🛡️",
    color: "from-green-400 to-emerald-500"
  },
  {
    titulo: "Ayuda a la digestión",
    descripcion: "Aporta alivio a náuseas leves y mejora el bienestar digestivo cuando se usa en difusores.",
    icono: "🌿",
    color: "from-teal-400 to-green-500"
  },
  {
    titulo: "Embellece la piel",
    descripcion: "En uso tópico y siempre diluido, ayuda a disminuir el exceso de grasa, cerrar poros y aportar claridad al cutis.",
    icono: "✨",
    color: "from-rose-400 to-pink-500"
  },
  {
    titulo: "Apoya la limpieza del hogar",
    descripcion: "Funciona como limpiador natural por sus efectos antimicrobianos y desengrasantes.",
    icono: "🏠",
    color: "from-purple-400 to-violet-500"
  },
  {
    titulo: "Tiene acción antioxidante",
    descripcion: "Protege frente al daño oxidativo, contribuyendo al bienestar general.",
    icono: "🔬",
    color: "from-orange-400 to-red-500"
  },
  {
    titulo: "Aumenta la concentración",
    descripcion: "Su aroma ayuda a mejorar el enfoque, la memoria y la energía mental.",
    icono: "🧠",
    color: "from-indigo-400 to-blue-500"
  },
  {
    titulo: "Refresca y revitaliza",
    descripcion: "Produce una sensación inmediata de frescura en ambientes, tejidos o mezclas aromáticas.",
    icono: "💨",
    color: "from-cyan-400 to-blue-500"
  },
  {
    titulo: "Favorece la respiración",
    descripcion: "Su aroma despeja, ayuda a sentir el aire más 'liviano' y contribuye al confort respiratorio.",
    icono: "🫁",
    color: "from-sky-400 to-cyan-500"
  }
];

export default function Beneficios() {
  return (
    <section id="beneficios" className="py-20 px-4 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Beneficios del Aceite Esencial de Limón
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre los múltiples beneficios que aporta el aceite esencial de limón a tu bienestar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={beneficio.titulo}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${beneficio.color} flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg`}>
                {beneficio.icono}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{beneficio.titulo}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{beneficio.descripcion}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

