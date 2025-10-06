import { Sprout, Home } from 'lucide-react';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

const BASE_URL = import.meta.env.BASE_URL;

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />

      {/* Root & Stem Section */}
      <ProductSection
        id="root-stem"
        icon={<Sprout className="w-12 h-12" />}
        title="Root & Stem"
        subtitle="The Right Garden for Your Space and Climate"
        description="From regenerative gardening, implementing permaculture best practices, or getting you started with garden combinations that are right for your space. We will help you create the climate resilient garden of your dreams one garden space at a time."
        features={[
          "Curated garden combinations for any space",
          "Expert guidance for all skill levels",
          "Climate-adapted plant recommendations",
          "Container to acreage solutions"
        ]}
        ctaText="Try Root & Stem"
        ctaLink="https://rootandstem.app/"
        theme="green"
        imageUrl={BASE_URL + "assets/zoe-richardson-basket.jpg"}
        imageAlt="A basket of fresh vegetables"
        imageAttribution="Photo by Zoe Richardson on Unsplash"
      />

      {/* Foundation & Frame Section */}
      <ProductSection
        id="foundation-frame"
        icon={<Home className="w-12 h-12" />}
        title="Foundation & Frame"
        subtitle="The Right Improvements for Your Home's Future"
        description="Make your home climate-ready without the overwhelm. Foundation & Frame creates a personalized plan for your home's unique needs, from routine maintenance like HVAC filters to major climate resilience upgrades. Track projects, catch expiring incentives, and get smart reminders that adjust to climate shifts so you can budget and plan with confidence."
        features={[
          "Personalized home improvement recommendations",
          "Climate-specific project guidance",
          "Incentive tracking and budget planning",
          "Upgrades based on the year your home was built"
        ]}
        ctaText="Join Foundation & Frame Beta"
        ctaLink="https://tally.so/r/mDjevR"
        theme="amber"
        reverse
        imageUrl={BASE_URL + "assets/tetiana-shyshkina-window.jpg"}
        imageAlt="A cozy room with a window"
        imageAttribution="Photo by Tetiana SHYSHKINA on Unsplash"
      />

      <Footer />
    </div>
  );
}

export default App;
