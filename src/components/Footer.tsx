import { Droplets, Twitter, Linkedin, Facebook, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#051526] text-white pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-brand-blue-mid p-1.5 rounded-lg">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">GYPW</span>
          </div>
          <p className="text-brand-blue-light/50 font-light text-sm leading-relaxed">
            The leading voice of youth in the water and related sectors, 
            driving transformative change and sustainable water security in Ghana.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue-bright hover:text-brand-blue-deep transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue-bright hover:text-brand-blue-deep transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue-bright hover:text-brand-blue-deep transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-8 text-brand-blue-bright uppercase tracking-widest text-[10px]">Quick Links</h4>
          <ul className="space-y-4">
            {['About Us', 'Objectives', 'Programs', 'Membership', 'Blog'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-brand-blue-light/70 hover:text-brand-blue-bright text-sm transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-8 text-brand-blue-bright uppercase tracking-widest text-[10px]">Contact Us</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <MapPin className="text-brand-blue-bright w-5 h-5 shrink-0" />
              <span className="text-brand-blue-light/70 text-sm leading-relaxed">
                Regional Water & Environmental Sanitation Centre (RWESCK), KNUST, Kumasi
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-brand-blue-bright w-5 h-5 shrink-0" />
              <a href="mailto:info@gypw.org" className="text-brand-blue-light/70 text-sm hover:text-white transition-colors">
                info@gypw.org
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-8 text-brand-blue-bright uppercase tracking-widest text-[10px]">Stay Updated</h4>
          <p className="text-brand-blue-light/50 text-sm mb-6">Join our newsletter to receive the latest news on water advocacy in Ghana.</p>
          <div className="flex gap-2">
            <input 
              placeholder="Email address"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-brand-blue-bright shrink w-full"
            />
            <button className="bg-brand-blue-bright text-brand-blue-deep px-4 py-2 rounded-lg font-bold text-sm hover:bg-white transition-all">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] uppercase font-mono tracking-widest text-white/30">
        <p>© 2026 Ghana Youth Parliament for Water. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-blue-bright transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Constitution</a>
          <a href="#" className="hover:text-brand-blue-bright transition-colors">WYPW Global</a>
        </div>
      </div>
    </footer>
  );
}
