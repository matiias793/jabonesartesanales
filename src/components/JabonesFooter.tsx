'use client';

export default function JabonesFooter() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Jabones Artesanales</h3>
            <p className="text-amber-100">
              Elaboración artesanal con ingredientes naturales y procesos químicos tradicionales.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-amber-100">
              <li><a href="#procedimiento" className="hover:text-white transition-colors">Procedimiento</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#propiedades" className="hover:text-white transition-colors">Propiedades</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galería</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Información</h4>
            <p className="text-amber-100 text-sm">
              Proyecto de muestra de química<br />
              Elaboración de jabones artesanales<br />
              Proceso de saponificación
            </p>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8 text-center text-amber-200 text-sm">
          <p>© {new Date().getFullYear()} Jabones Artesanales - Muestra de Química</p>
        </div>
      </div>
    </footer>
  );
}

