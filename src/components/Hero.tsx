import { motion } from 'motion/react';
import { ChevronDown, Droplets, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-[#004d99]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        {/* Simulating a water-themed background gradient/pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002e5d] via-[#004d99] to-[#00bef3] opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518173946687-a4c8a9833d8e?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30" />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-blue-bright rounded-full blur-[150px] pointer-events-none"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-[-100px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-mono uppercase tracking-[0.2em] mb-12 backdrop-blur-sm"
        >
          National Chapter · World Youth Parliament for Water
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-6xl md:text-[7.5rem] font-display font-black text-white leading-[0.85] tracking-tighter mb-10 text-balance"
        >
          Leading the <br />
          <span className="text-brand-blue-bright italic opacity-90">Blue Wave.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light mb-16 text-balance"
        >
          Connecting youth professionals to advocate, innovate, and implement 
          community-based water solutions across every region of Ghana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="#join"
            className="group relative bg-[#00bef3] hover:bg-white text-brand-blue-deep px-10 py-5 rounded-full font-black text-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue-bright/20 shadow-xl"
          >
            JOIN US TODAY
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 px-10 py-5 rounded-full font-bold text-xl transition-all backdrop-blur-sm"
          >
            OUR MISSION
          </a>
        </motion.div>
      </div>

      {/* Quick Access Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-12 left-0 right-0 z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60"
      >
        <div className="text-center md:text-left">
          <div className="text-2xl font-display font-bold text-white">2022</div>
          <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-mono">Establishment</div>
        </div>
        <div className="text-center md:text-left border-l border-white/10 pl-8">
          <div className="text-2xl font-display font-bold text-white">SDG 6</div>
          <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-mono">Core Mandate</div>
        </div>
        <div className="text-center md:text-left border-l border-white/10 pl-8">
          <div className="text-2xl font-display font-bold text-white">WYPW</div>
          <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-mono">Global Link</div>
        </div>
        <div className="text-center md:text-left border-l border-white/10 pl-8">
          <div className="text-2xl font-display font-bold text-white">Ghana</div>
          <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-mono">National Chapter</div>
        </div>
      </motion.div>
    </section>
  );
}
