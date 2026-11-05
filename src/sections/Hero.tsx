import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { heroConfig, projectsConfig } from '@/config';

const marqueeItems = [
  'React',
  'TypeScript',
  'Java',
  'C# / .NET',
  'MySQL',
  'SQL Server',
  'Node.js',
  'Arch Linux',
  'Tailwind',
  'Figma',
];

export function Hero() {
  const index = projectsConfig.slice(0, 3);

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col border-b border-line">
      <div className="page-rules pointer-events-none absolute inset-0 hidden lg:block" aria-hidden />

      <div className="container-page relative flex flex-1 flex-col justify-between pb-10 pt-28 sm:pt-32">
        {/* Top meta */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="label">{heroConfig.kicker}</span>
          <span className="label hidden sm:block">{heroConfig.role}</span>
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            {heroConfig.availability}
          </span>
        </div>

        {/* Name */}
        <div className="py-10">
          <h1 className="display text-[clamp(3.6rem,15.5vw,14rem)]" aria-label="Anis Zamoum">
            <span className="mask-line" aria-hidden>
              <span style={{ animationDelay: '120ms' }}>{heroConfig.name[0]}</span>
            </span>
            <span className="mask-line pr-6 text-right" aria-hidden>
              <span className="outline-type" style={{ animationDelay: '240ms' }}>
                {heroConfig.name[1]}
              </span>
            </span>
          </h1>
        </div>

        {/* Intro + index */}
        <div className="grid gap-10 border-t border-line pt-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-ink-soft sm:text-xl">{heroConfig.intro}</p>
            <a href="#work" className="btn btn-ghost mt-8 group">
              Voir les travaux
              <ArrowDown className="h-4 w-4 scroll-cue" aria-hidden />
            </a>
          </div>

          <div className="lg:col-span-4 lg:col-start-7">
            <ul className="border-t border-line">
              {index.map((project, i) => (
                <li key={project.repo}>
                  <a
                    href="#work"
                    className="group flex items-baseline justify-between gap-4 border-b border-line py-3 transition-colors hover:text-accent"
                  >
                    <span className="font-mono text-[11px] tracking-widest text-muted">0{i + 1}</span>
                    <span className="flex-1 text-sm">{project.name}</span>
                    <span className="font-mono text-[11px] text-muted">{project.year}</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:col-start-11">
            <dl className="space-y-3">
              {heroConfig.meta.map((item) => (
                <div key={item.label}>
                  <dt className="label">{item.label}</dt>
                  <dd className="mt-0.5 text-sm">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee" aria-hidden>
        <div className="marquee-track py-3">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeItems.map((item) => (
                <span key={copy + '-' + item} className="flex items-center">
                  <span className="whitespace-nowrap px-6 font-display text-xl italic text-ink-soft">{item}</span>
                  <span className="h-1 w-1 bg-accent" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
