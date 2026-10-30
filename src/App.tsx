import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Experience from '@/components/sections/Experience';
import Operations from '@/components/sections/Operations';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Operations />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
