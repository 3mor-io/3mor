import { Sprout, Home, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
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

          {/* Beta Signup Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Join Our Beta</h4>
            <div className="space-y-3">
              <a
                id="signup-root-stem"
                href="#"
                className="block px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition-colors text-center"
              >
                Sign Up for Root & Stem
              </a>
              <a
                id="signup-foundation-frame"
                href="#"
                className="block px-6 py-3 bg-amber-600 hover:bg-amber-500 rounded-lg font-semibold transition-colors text-center"
              >
                Sign Up for Foundation & Frame
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} 3Mór. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Mail className="w-4 h-4" />
            <span>Contact us for more information</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
