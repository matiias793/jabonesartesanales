'use client';

export default function JabonesFooter() {
  return (
    <footer className="bg-gradient-to-br from-violet-600 to-purple-600 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-violet-100 text-sm">
          © {new Date().getFullYear()} Aceite Esencial de Limón - Muestra de Química
        </p>
      </div>
    </footer>
  );
}
