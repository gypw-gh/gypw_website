import { motion } from 'motion/react';
import { Target, Eye, Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-brand-blue-mid font-mono text-sm uppercase tracking-widest font-bold">
                Our Foundation
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 leading-tight">
                A structured, non-partisan platform for <span className="italic text-brand-blue-mid underline decoration-brand-blue-bright decoration-wavy">transformative change.</span>
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Recognizing that water is a fundamental human right and a critical driver for sustainable development,
              the GYPW is incorporated as a Company Limited by Guarantee (LBG) under the laws of the Republic of Ghana.
              Working as the autonomous National Chapter of the World Youth Parliament for Water (WYPW).
            </p>

            <div className="bg-brand-blue-light/50 p-8 border-l-4 border-brand-blue-mid rounded-r-2xl relative">
              <Quote className="absolute top-4 right-4 text-brand-blue-mid/10 w-12 h-12" />
              <p className="text-xl font-display italic text-brand-blue-mid leading-relaxed">
                "WE, THE MEMBERS of the Ghana Youth Parliament for Water, RECOGNIZING that water is a fundamental human right..."
              </p>
              <cite className="block mt-4 text-sm font-bold text-brand-blue-mid uppercase tracking-wider not-italic">
                — The Preamble of the GYPW Constitution
              </cite>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="group bg-brand-blue-deep p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform">
                <Eye size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="text-brand-blue-bright" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
                <p className="text-brand-blue-light/80 leading-relaxed">
                  To be the leading voice of youth in the water and related sectors, 
                  driving transformative change and sustainable water security in Ghana.
                </p>
              </div>
            </div>

            <div className="group bg-brand-blue-light/30 hover:bg-white p-10 rounded-[2rem] border border-brand-blue-mid/10 shadow-xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform">
                <Target size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-blue-mid/5 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-brand-blue-mid" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-blue-deep mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  Creating a resilient network of young professionals passionate about water to advocate, 
                  raise awareness, and implement community-based projects to ensure a water-secure future for all.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
