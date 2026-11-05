import { ArrowUpRight, Mail } from 'lucide-react';
import { contactConfig, siteConfig } from '@/config';

const [before, after] = contactConfig.heading.split('prochain');

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="container-page py-20 sm:py-28">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">04 / Contact</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">{siteConfig.location}</span>
        </div>

        <h2 className="reveal display mt-8 max-w-5xl text-[clamp(2.6rem,7.4vw,7rem)] text-paper" data-reveal>
          {before}
          <em className="italic text-accent">prochain</em>
          {after}
        </h2>

        <div className="mt-14 grid gap-10 border-t border-paper/15 pt-8 lg:grid-cols-12">
          <p className="max-w-md leading-relaxed text-paper/70 lg:col-span-4">{contactConfig.text}</p>

          <div className="lg:col-span-4 lg:col-start-6">
            <a
              href={'mailto:' + siteConfig.email}
              className="group flex w-full items-center justify-between gap-4 border border-paper/25 px-5 py-4 transition-colors hover:border-accent hover:bg-accent"
            >
              <span className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4" aria-hidden />
                {siteConfig.email}
              </span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50">
              {contactConfig.availability}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-paper/25 py-3 text-sm transition-colors hover:text-accent"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={siteConfig.github + '?tab=repositories'}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-paper/25 py-3 text-sm transition-colors hover:text-accent"
            >
              Tous les dépôts
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <p className="mt-6 font-display text-lg italic text-paper/50">
              Freelance · open source · Java & .NET
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
