import { ArrowUpRight } from 'lucide-react';
import { footerConfig, siteConfig } from '@/config';

export function Footer() {
  return (
    <footer className="border-t border-paper/15 bg-ink text-paper">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-3" aria-label="Retour en haut">
              <span className="flex h-9 w-9 items-center justify-center bg-paper font-mono text-[11px] tracking-widest text-ink">
                AZ
              </span>
              <span className="text-sm">Anis Zamoum</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">{footerConfig.description}</p>
          </div>

          {footerConfig.columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="lg:col-span-2">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/40">{column.title}</h2>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-sm text-paper/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                      {link.href.startsWith('http') && <ArrowUpRight className="h-3 w-3" aria-hidden />}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-3">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/40">Contact</h2>
            <a
              href={'mailto:' + siteConfig.email}
              className="mt-4 block text-sm text-paper/70 transition-colors hover:text-accent"
            >
              {siteConfig.email}
            </a>
            <p className="mt-2 text-sm text-paper/50">{siteConfig.location}</p>
            <a
              href="#top"
              className="link-line mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/60 hover:text-paper"
            >
              Retour en haut
              <ArrowUpRight className="h-3 w-3" aria-hidden />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-paper/15 pt-6 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/40">{footerConfig.copyright}</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/40">{footerConfig.credit}</p>
        </div>
      </div>
    </footer>
  );
}
