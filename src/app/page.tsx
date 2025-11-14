import JabonesHero from '@/components/JabonesHero';
import SelectorContenido from '@/components/SelectorContenido';
import Galeria from '@/components/Galeria';
import JabonesFooter from '@/components/JabonesFooter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <JabonesHero />
      <SelectorContenido />
      <Galeria />
      <JabonesFooter />
    </main>
  );
}
