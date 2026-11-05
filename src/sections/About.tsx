import { ArrowUpRight } from 'lucide-react';
import { aboutConfig, siteConfig } from '@/config';

export function About() {
  return (
    <section id="about" className="border-t border-line py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <span className="label">02 / À propos</span>
          <span className="label">{siteConfig.location}</span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="border border-line p-6">
                <span className="display block text-[7rem] leading-[0.8] text-accent">AZ</span>
                <dl className="mt-8 space-y-0 border-t border-line">
                  {aboutConfig.facts.map((fact) => (
                    <div key={fact.label} className="border-b border-line py-3">
                      <dt className="label">{fact.label}</dt>
                      <dd className="mt-1 text-sm">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <h2
              className="reveal font-display text-[clamp(1.8rem,3.4vw,3rem)] font-light leading-[1.15] tracking-tight"
              data-reveal
            >
              {aboutConfig.lead}
            </h2>

            <div className="mt-8 max-w-prose space-y-5 text-[17px] leading-relaxed text-ink-soft">
              {aboutConfig.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-line pt-6">
              <p className="font-display text-xl italic text-muted">— Anis</p>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="link-line ml-auto font-mono text-[11px] uppercase tracking-[0.16em]"
              >
                github.com/aniszeyy
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
