import { Check, ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ProductSectionProps {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  theme: 'green' | 'amber';
  reverse?: boolean;
}

export default function ProductSection({
  id,
  icon,
  title,
  subtitle,
  description,
  features,
  ctaText,
  ctaLink,
  theme,
  reverse = false
}: ProductSectionProps) {
  const themeColors = {
    green: {
      bg: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      accent: 'text-green-600',
      checkBg: 'bg-green-100',
      checkColor: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-500 shadow-green-500/50',
      gradient: 'from-green-500/20 to-transparent'
    },
    amber: {
      bg: 'bg-amber-50',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      accent: 'text-amber-600',
      checkBg: 'bg-amber-100',
      checkColor: 'text-amber-600',
      button: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/50',
      gradient: 'from-amber-500/20 to-transparent'
    }
  };

  const colors = themeColors[theme];

  return (
    <section id={id} className={`py-20 px-6 ${colors.bg} relative overflow-hidden`}>
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-50`}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className={`space-y-8 ${reverse ? 'md:order-2' : ''}`}>
            <div className={`${colors.iconBg} ${colors.iconColor} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg`}>
              {icon}
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {title}
              </h2>
              <p className={`text-2xl font-semibold ${colors.accent} mb-6`}>
                {subtitle}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`${colors.checkBg} ${colors.checkColor} w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                    <Check className="w-5 h-5" />
                  </div>
                  <p className="text-slate-700 text-lg">{feature}</p>
                </div>
              ))}
            </div>

            <a
              href={ctaLink}
              className={`inline-flex items-center gap-3 px-8 py-4 ${colors.button} text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg group`}
            >
              {ctaText}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className={`${reverse ? 'md:order-1' : ''}`}>
            <div className="relative">
              <div className="aspect-square bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center">
                <div className={`text-center space-y-6 ${colors.iconColor}`}>
                  <div className="transform scale-150">
                    {icon}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
                  <p className="text-slate-600 text-lg">Coming Soon</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className={`absolute -z-10 -bottom-8 -right-8 w-64 h-64 ${colors.iconBg} rounded-3xl opacity-50`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
