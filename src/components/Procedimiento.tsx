'use client';

import { motion } from 'framer-motion';

const pasos = [
  {
    numero: 1,
    titulo: "Preparación de Ingredientes",
    descripcion: "Seleccionar aceites base (oliva, coco, palma), sosa cáustica (NaOH) y agua destilada. Medir las cantidades exactas según la receta.",
    icono: "⚗️",
    color: "from-amber-400 to-orange-400"
  },
  {
    numero: 2,
    titulo: "Dilución de la Sosa",
    descripcion: "Disolver cuidadosamente la sosa cáustica en agua destilada. Esta reacción es exotérmica y genera calor. ¡Manejar con precaución!",
    icono: "🔥",
    color: "from-orange-400 to-red-400"
  },
  {
    numero: 3,
    titulo: "Calentamiento de Aceites",
    descripcion: "Calentar los aceites a temperatura controlada (40-50°C) para facilitar la mezcla y la reacción de saponificación.",
    icono: "🌡️",
    color: "from-yellow-400 to-amber-400"
  },
  {
    numero: 4,
    titulo: "Mezcla y Trazado",
    descripcion: "Verter la solución de sosa sobre los aceites y mezclar constantemente hasta alcanzar el 'trace' (consistencia de pudín).",
    icono: "🔄",
    color: "from-amber-500 to-orange-500"
  },
  {
    numero: 5,
    titulo: "Adición de Aditivos",
    descripcion: "Agregar colorantes naturales, aceites esenciales, hierbas o exfoliantes según la receta deseada.",
    icono: "🌸",
    color: "from-rose-400 to-pink-400"
  },
  {
    numero: 6,
    titulo: "Moldeo",
    descripcion: "Verter la mezcla en moldes y golpear suavemente para eliminar burbujas de aire.",
    icono: "📦",
    color: "from-blue-400 to-indigo-400"
  },
  {
    numero: 7,
    titulo: "Curado",
    descripcion: "Dejar reposar 24-48 horas para que complete la reacción química. Luego desmoldar y curar durante 4-6 semanas.",
    icono: "⏳",
    color: "from-purple-400 to-violet-400"
  },
  {
    numero: 8,
    titulo: "Resultado Final",
    descripcion: "Después del curado, los jabones están listos para usar. Son suaves, nutritivos y libres de químicos agresivos.",
    icono: "✨",
    color: "from-green-400 to-emerald-400"
  }
];

export default function Procedimiento() {
  return (
    <section id="procedimiento" className="py-20 px-4 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Procedimiento de Elaboración
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce paso a paso el proceso químico de saponificación para crear jabones artesanales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pasos.map((paso, index) => (
            <motion.div
              key={paso.numero}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-amber-100">
                {/* Número del paso */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r ${paso.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {paso.numero}
                </div>

                {/* Icono */}
                <div className="text-5xl mb-4 text-center">{paso.icono}</div>

                {/* Contenido */}
                <h3 className="text-xl font-bold mb-3 text-gray-800">{paso.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{paso.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Información química adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 border border-amber-200"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Reacción Química: Saponificación</h3>
          <div className="bg-white/80 rounded-xl p-6 mb-4 font-mono text-sm md:text-base">
            <p className="mb-2"><strong>Ecuación general:</strong></p>
            <p className="text-gray-700">
              Grasa/aceite + NaOH → Jabón + Glicerina
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Esta es una reacción de hidrólisis alcalina donde los triglicéridos (grasas) reaccionan con una base fuerte (sosa cáustica) para producir sales de ácidos grasos (jabón) y glicerol.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


