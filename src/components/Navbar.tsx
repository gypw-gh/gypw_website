import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Droplets } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105">
            <img 
              src={`${import.meta.env.BASE_URL}logo.svg`} 
              alt="GYPW Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback to component icon if SVG is missing
                (e.target as any).style.display = 'none';
                const next = (e.target as any).nextSibling;
                if (next) next.style.display = 'flex';
              }}
            />
            <div className="hidden bg-brand-blue-mid p-1.5 rounded-lg items-center justify-center">
              <Droplets className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-display font-bold text-lg leading-none tracking-tight transition-colors",
              scrolled ? "text-brand-blue-deep" : "text-white"
            )}>
              GYPW
            </span>
            <span className={cn(
              "text-[10px] uppercase font-mono tracking-widest mt-1 opacity-80",
              scrolled ? "text-brand-blue-mid" : "text-brand-blue-light"
            )}>
              Ghana Youth Parliament
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-bold transition-colors uppercase tracking-wider",
                scrolled ? "text-brand-blue-deep hover:text-brand-blue-bright" : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            className={cn(
              "px-5 py-2 rounded font-bold text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0",
              scrolled 
                ? "bg-brand-blue-mid text-white hover:bg-brand-blue-deep" 
                : "bg-white text-brand-blue-deep hover:bg-brand-blue-light"
            )}
          >
            JOIN US
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-blue-deep border-t border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white/90 hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setIsOpen(false)}
                className="bg-brand-blue-mid text-white px-6 py-3 rounded-lg font-bold text-center"
              >
                JOIN THE PARLIAMENT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
