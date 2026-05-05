import { motion } from 'motion/react';
import { Landmark, Users, Briefcase, ChevronRight } from 'lucide-react';

export default function Governance() {
  const organs = [
    {
      title: "The General Assembly",
      subtitle: "The Parliament",
      desc: "The highest decision-making body comprising all registered Ordinary Members acting as 'Youth Parliamentarians'.",
      icon: <Landmark className="w-8 h-8" />,
      color: "bg-brand-blue-deep",
      points: ["Quarterly Sittings", "Debates Water Policy", "Passes Resolutions", "Shadows Parliament of Ghana"],
    },
    {
      title: "The Executive Council",
      subtitle: "The Board",
      desc: "The legal and strategic governing body managing affairs, funds, and strategic direction.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-brand-blue-mid",
      points: ["President & Vice President", "Secretariat Oversight", "Budget Approval", "Legal Representatives"],
    },
    {
      title: "The Secretariat",
      subtitle: "Technical Arm",
      desc: "Administrative body located at RWESCK-KNUST managing day-to-day operations.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-brand-blue-bright",
      textColor: "text-brand-blue-deep",
      points: ["Project Implementation", "Fundraising Oversight", "Partner Coordination", "Administrative Technical Support"],
    },
  ];

  return (
    <section id="governance" className="py-24 px-6 bg-[#002e5d] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-bright opacity-[0.03] blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue-mid opacity-[0.1] blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-blue-bright font-mono text-sm uppercase tracking-widest font-bold">
            How We Are Run
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">
            Hybrid <span className="italic text-brand-blue-light">Governance Model</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {organs.map((organ, idx) => (
            <motion.div
              key={organ.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col h-full"
            >
              <div className={`w-16 h-16 ${organ.color} ${organ.textColor || 'text-white'} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                {organ.icon}
              </div>
              
              <div className="mb-8">
                <span className="text-brand-blue-bright font-mono text-xs uppercase tracking-widest block mb-2 opacity-80">
                  {organ.subtitle}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{organ.title}</h3>
                <p className="text-brand-blue-light/70 font-light leading-relaxed">
                  {organ.desc}
                </p>
              </div>

              <ul className="mt-auto space-y-3">
                {organ.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-white/80 font-light">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <ChevronRight size={12} className="text-brand-blue-bright" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
