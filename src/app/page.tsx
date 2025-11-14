import JabonesHero from '@/components/JabonesHero';
import Procedimiento from '@/components/Procedimiento';
import Beneficios from '@/components/Beneficios';
import Propiedades from '@/components/Propiedades';
import Galeria from '@/components/Galeria';
import JabonesFooter from '@/components/JabonesFooter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <JabonesHero />
      <Procedimiento />
      <Beneficios />
      <Propiedades />
      <Galeria />
      <JabonesFooter />
    </main>
  );
}

