import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* En móvil: círculo chico y menor blur (300px + blur-50px). En escritorio: tamaño y blur originales */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[600px] bg-secondary/10 rounded-full blur-[50px] md:blur-[120px] opacity-60 transition-all duration-700"></div>
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-[40px] md:blur-[100px] opacity-40 transition-all duration-700"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col gap-24">
          <Hero />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
