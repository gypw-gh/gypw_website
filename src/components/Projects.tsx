import { motion } from 'motion/react';
import { Calendar, Tag, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-brand-blue-mid font-mono text-sm uppercase tracking-widest font-bold">
              Activities & News
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-blue-deep">
              Current <span className="italic text-brand-blue-bright">Projects</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 font-light text-lg">
            Keeping track of our initiatives, advocacy campaigns, and community interventions across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col bg-brand-paper rounded-3xl overflow-hidden border border-brand-blue-deep/5 transition-all hover:shadow-2xl hover:-translate-y-2 h-full"
            >
              {/* Fake Image Placeholder with Category Gradient */}
              <div className="h-48 bg-gradient-to-br from-brand-blue-deep to-brand-blue-mid p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
                <span className="text-white font-display text-2xl font-bold opacity-30 select-none">
                  {project.category}
                </span>
                <div className="absolute bottom-4 left-4">
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${
                    project.status === 'Completed' ? 'bg-brand-green text-white' : 'bg-brand-blue-bright text-brand-blue-deep'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider font-bold">
                    <Calendar size={14} /> {project.date}
                  </span>
                  <span className="flex items-center gap-1.5 uppercase tracking-wider font-bold">
                    <Tag size={14} /> {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-brand-blue-deep mb-4 group-hover:text-brand-blue-mid transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-500 font-light leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-sm font-bold text-brand-blue-deep hover:text-brand-gold transition-colors">
                    READ FULL STORY <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 border-2 border-brand-blue-deep rounded-xl font-bold hover:bg-brand-blue-deep hover:text-white transition-all">
            LOAD ALL ARCHIVES
          </button>
        </div>
      </div>
    </section>
  );
}
