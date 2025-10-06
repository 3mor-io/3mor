import { Sprout, Home, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 md:w-1/2">
            <div className="flex items-center gap-3">
              <Sprout className="w-8 h-8 text-green-400" />
              <Home className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold">3Mór</h3>
            <p className="text-slate-400 leading-relaxed">
              Named after the Mórrigan, Celtic goddess of sovereignty. Building climate resilience through empowered choices for your home and garden.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <div className="space-y-3">
              <a href="#root-stem" className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors">
                <Sprout className="w-4 h-4" />
                Root & Stem
              </a>
              <a href="#foundation-frame" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors">
                <Home className="w-4 h-4" />
                Foundation & Frame
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} 3Mór. All rights reserved.
          </p>
          <a href="mailto:info@3mor.io" className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            <span>info@3mor.io</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
