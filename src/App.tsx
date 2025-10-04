import { Sprout, Home, Play } from 'lucide-react';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />

      {/* Root & Stem Section */}
      <ProductSection
        id="root-stem"
        icon={<Sprout className="w-12 h-12" />}
        title="Root & Stem"
        subtitle="Cultivate Your Perfect Garden Space"
        description="Whether you are new to gardening or a seasoned expert, we have what you need. We provide garden combinations to help folks create a garden space theme. Whether you have a single container or acres, we've got you covered."
        features={[
          "Curated garden combinations for any space",
          "Expert guidance for all skill levels",
          "Climate-adapted plant recommendations",
          "Container to acreage solutions"
        ]}
        ctaText="Join Root & Stem Beta"
        ctaLink="#signup-root-stem"
        theme="green"
      />

      {/* Foundation & Frame Section */}
      <ProductSection
        id="foundation-frame"
        icon={<Home className="w-12 h-12" />}
        title="Foundation & Frame"
        subtitle="Build Climate Resilience Into Your Home"
        description="We have a list of green energy and climate resilient projects specific to the climate shift and the age of your home. We help track when incentives will end, allowing you to budget and plan appropriately."
        features={[
          "Personalized home improvement recommendations",
          "Climate-specific project guidance",
          "Incentive tracking and budget planning",
          "Age-appropriate home upgrades"
        ]}
        ctaText="Join Foundation & Frame Beta"
        ctaLink="#signup-foundation-frame"
        theme="amber"
        reverse
      />

      {/* Video Resources Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Learn & Grow With Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Sprout className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-semibold">Gardening Videos</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Expert tutorials, seasonal guides, and inspiration for creating your perfect garden sanctuary.
              </p>
              <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center group hover:bg-slate-700 transition-colors cursor-pointer">
                <Play className="w-16 h-16 text-green-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Home className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-semibold">Home Improvement Videos</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Step-by-step guides for climate-resilient upgrades, energy efficiency, and sustainable home improvements.
              </p>
              <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center group hover:bg-slate-700 transition-colors cursor-pointer">
                <Play className="w-16 h-16 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
