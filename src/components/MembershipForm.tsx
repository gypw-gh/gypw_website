import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { WORKING_GROUPS } from '../constants';
import { useState, FormEvent } from 'react';

export default function MembershipForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-24 px-6 bg-[#f4f8fc]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-blue-mid font-mono text-sm uppercase tracking-widest font-bold">
              Become a Youth MP
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-blue-deep mt-4 mb-8">
              Join the <span className="italic text-brand-blue-bright">Movement</span>
            </h2>
            
            <div className="space-y-12">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Membership is open to all Ghanaian youth and young professionals between the ages of 18 and 35
                who demonstrate a commitment to volunteering for water and environmental causes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Ordinary Members (Youth MPs)",
                  "Honorary Members",
                  "Alumni Members",
                  "Working Group Participation"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="bg-brand-blue-bright/20 p-1 rounded-full">
                      <CheckCircle2 className="text-brand-blue-mid w-5 h-5" />
                    </div>
                    <span className="font-medium text-brand-blue-deep">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-brand-blue-deep rounded-3xl text-white">
                <h4 className="font-bold mb-4">Secretariat Location</h4>
                <p className="text-brand-blue-light/70 font-light text-sm">
                  Regional Water and Environmental Sanitation Centre Kumasi (RWESCK), 
                  Kwame Nkrumah University of Science and Technology (KNUST).
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-blue-deep uppercase tracking-wider">Full Name</label>
                    <input
                      required
                      placeholder="e.g. Ama Mensah"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue-mid outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-blue-deep uppercase tracking-wider">Date of Birth</label>
                    <input
                      required
                      type="date"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue-mid outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-blue-deep uppercase tracking-wider">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="ama.mensah@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue-mid outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-blue-deep uppercase tracking-wider">Working Group Preference</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue-mid outline-none transition-all">
                    {WORKING_GROUPS.map((group) => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-blue-deep uppercase tracking-wider">Present Occupation</label>
                  <input
                    placeholder="e.g. Environmental Engineer"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue-mid outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-blue-deep uppercase tracking-wider">Expectations from GYPW</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you hope to achieve..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue-mid outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-blue-deep hover:bg-brand-blue-mid text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg"
                >
                  SUBMIT APPLICATION <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-[10px] text-center text-slate-400">
                  By submitting, you agree to adhere to the GYPW Code of Conduct and non-partisanship principles.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-blue-deep">Akwaaba!</h3>
                <p className="text-slate-600">
                  Thank you for applying to become a member of the Ghana Youth Parliament for Water. 
                  Our Secretariat will review your details and contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-blue-mid font-bold hover:underline"
                >
                  Submit another application
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
