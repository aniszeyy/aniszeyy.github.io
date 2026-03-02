import { } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { aboutConfig } from '@/config';

export function About() {
  if (!aboutConfig.description && aboutConfig.stats.length === 0) return null;

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="w-full py-24 lg:py-32 bg-white">
      <div className="container-large px-6 lg:px-12">
        <div ref={sectionRef} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Profile Image */}
          <div
            className={cn(
              'lg:col-span-4 transition-all duration-800 ease-out-quart',
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="aspect-[3/4] relative group">
                <img
                  src="/images/profile.jpg"
                  alt="Anis Zamoum"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out-quad group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-exvia-black/0 group-hover:bg-exvia-black/10 transition-colors duration-300" />
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Section Label */}
            {aboutConfig.label && (
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
                style={{ transitionDelay: '100ms' }}
              >
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                  {aboutConfig.label}
                </span>
              </div>
            )}

            {/* Main Text */}
            {aboutConfig.description && (
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '200ms' }}
              >
                <p className="text-xl lg:text-2xl text-exvia-black leading-relaxed">
                  {aboutConfig.description}
                </p>
              </div>
            )}

            {/* Stats */}
            {aboutConfig.stats.length > 0 && (
              <div
                className={cn(
                  'grid grid-cols-3 gap-8 pt-8 border-t border-exvia-border transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '300ms' }}
              >
                {aboutConfig.stats.map((stat, index) => (
                  <div key={index}>
                    <span className="block text-3xl font-semibold text-exvia-black">{stat.value}</span>
                    <span className="text-sm text-exvia-black/60">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
