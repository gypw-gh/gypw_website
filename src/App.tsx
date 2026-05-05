import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Objectives from './components/Objectives';
import Governance from './components/Governance';
import Projects from './components/Projects';
import MembershipForm from './components/MembershipForm';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-brand-paper selection:bg-brand-gold/30 selection:text-brand-blue-deep">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold origin-left z-[60]"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Objectives />
        <Governance />
        <Projects />
        <MembershipForm />
      </main>
      <Footer />
    </div>
  );
}
