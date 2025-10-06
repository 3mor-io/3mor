import { Sprout, Home, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo/Title */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="flex gap-2">
            <Sprout className="w-10 h-10 text-green-400" />
            <Home className="w-10 h-10 text-amber-400" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          3Mór
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        Climate resilience for your home and garden, inspired by the Celtic goddess the Mórrigan, goddess of sovereignty.
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-12 leading-tight">
          Building Climate Resilience,<br />
          <span className="bg-gradient-to-r from-green-400 to-amber-400 bg-clip-text text-transparent">
            One Space at a Time
          </span>
        </h2>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed">
          Our apps help you build confidence in the right home improvements or garden for your dwelling space.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="#root-stem"
            className="group px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 shadow-lg hover:shadow-green-500/50"
          >
            <Sprout className="w-6 h-6" />
            Explore Root & Stem
          </a>
          <a
            href="#foundation-frame"
            className="group px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 shadow-lg hover:shadow-amber-500/50"
          >
            <Home className="w-6 h-6" />
            Explore Foundation & Frame
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}
