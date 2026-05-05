import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { OBJECTIVES } from '../constants';

export default function Objectives() {
  return (
    <section id="objectives" className="py-24 px-6 bg-[#f4f8fc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-blue-mid font-mono text-sm uppercase tracking-widest font-bold">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-blue-deep">
            Our Strategic <span className="italic text-brand-blue-bright underline decoration-brand-blue-mid">Actions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 font-light">
            Mirroring the global mandate, we translate advocacy into measurable local results through six key strategic pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl">
          {OBJECTIVES.map((obj, idx) => {
            const IconComponent = (Icons as any)[obj.icon];
            return (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 hover:bg-brand-blue-light/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-blue-mid/5 group-hover:bg-brand-blue-mid group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 transform group-hover:rotate-12">
                  <IconComponent className="text-brand-blue-mid group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display text-brand-blue-deep group-hover:text-brand-blue-mid transition-colors">{obj.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">
                  {obj.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
