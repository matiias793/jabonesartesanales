'use client';

import { motion } from 'framer-motion';

const beneficios = [
  {
    titulo: "Mejora el ánimo y reduce el estrés",
    descripcion: "Su aroma cítrico ayuda a elevar el estado de ánimo y disminuir la sensación de fatiga mental.",
    icono: "😊",
    color: "from-violet-300 to-purple-300"
  },
  {
    titulo: "Purifica el aire",
    descripcion: "Elimina malos olores y contribuye a un ambiente fresco y limpio.",
    icono: "🌬️",
    color: "from-purple-300 to-pink-300"
  },
  {
    titulo: "Fortalece el sistema inmunológico",
    descripcion: "Sus compuestos aromáticos estimulan las defensas naturales del organismo en aromaterapia.",
    icono: "🛡️",
    color: "from-pink-300 to-rose-300"
  },
  {
    titulo: "Ayuda a la digestión",
    descripcion: "Aporta alivio a náuseas leves y mejora el bienestar digestivo cuando se usa en difusores.",
    icono: "🌿",
    color: "from-violet-200 to-purple-200"
  },
  {
    titulo: "Embellece la piel",
    descripcion: "En uso tópico y siempre diluido, ayuda a disminuir el exceso de grasa, cerrar poros y aportar claridad al cutis.",
    icono: "✨",
    color: "from-purple-200 to-pink-200"
  },
  {
    titulo: "Apoya la limpieza del hogar",
    descripcion: "Funciona como limpiador natural por sus efectos antimicrobianos y desengrasantes.",
    icono: "🏠",
    color: "from-pink-200 to-rose-200"
  },
  {
    titulo: "Tiene acción antioxidante",
    descripcion: "Protege frente al daño oxidativo, contribuyendo al bienestar general.",
    icono: "🔬",
    color: "from-violet-300 to-purple-300"
  },
  {
    titulo: "Aumenta la concentración",
    descripcion: "Su aroma ayuda a mejorar el enfoque, la memoria y la energía mental.",
    icono: "🧠",
    color: "from-purple-300 to-pink-300"
  },
  {
    titulo: "Refresca y revitaliza",
    descripcion: "Produce una sensación inmediata de frescura en ambientes, tejidos o mezclas aromáticas.",
    icono: "💨",
    color: "from-pink-300 to-rose-300"
  },
  {
    titulo: "Favorece la respiración",
    descripcion: "Su aroma despeja, ayuda a sentir el aire más 'liviano' y contribuye al confort respiratorio.",
    icono: "🫁",
    color: "from-violet-200 to-purple-200"
  }
];

export default function Beneficios() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beneficios.map((beneficio, index) => (
          <motion.div
            key={beneficio.titulo}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100"
          >
            <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${beneficio.color} flex items-center justify-center text-2xl mb-4 mx-auto shadow-md`}>
              {beneficio.icono}
            </div>
            <h3 className="text-lg font-bold mb-2 text-center text-gray-800">{beneficio.titulo}</h3>
            <p className="text-gray-600 text-center leading-relaxed text-sm">{beneficio.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
