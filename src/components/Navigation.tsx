import { useEffect, useState } from 'react';
import { navigationConfig, siteConfig } from '@/config';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => desktop.matches && setOpen(false);
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    desktop.addEventListener('change', onResize);
    window.addEventListener('keydown', onKey);
    return () => {
      desktop.removeEventListener('change', onResize);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <>
      <header
        className={
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300 ' +
          (scrolled || open ? 'border-b border-line bg-paper/90 backdrop-blur-md' : 'border-b border-transparent')
        }
      >
        <div className="container-page flex h-[72px] items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-3" aria-label="Retour en haut">
            <span className="flex h-9 w-9 items-center justify-center bg-ink font-mono text-[11px] tracking-widest text-paper transition-colors group-hover:bg-accent">
              {navigationConfig.logo}
            </span>
            <span className="hidden text-sm font-medium sm:block">Anis Zamoum</span>
          </a>

          <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
            {navigationConfig.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-line font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="link-line font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft hover:text-ink"
            >
              GitHub
            </a>
            <a href={navigationConfig.contactHref} className="btn btn-primary h-10 px-5">
              {navigationConfig.contactLabel}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className="relative block h-3 w-6">
              <span
                className={
                  'absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-300 ' +
                  (open ? 'translate-y-[5px] rotate-45' : '')
                }
              />
              <span
                className={
                  'absolute bottom-0 left-0 h-px w-full bg-ink transition-transform duration-300 ' +
                  (open ? '-translate-y-[6px] -rotate-45' : '')
                }
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={
          'fixed inset-0 z-40 flex flex-col justify-between bg-paper px-6 pb-10 pt-28 transition-opacity duration-300 lg:hidden ' +
          (open ? 'visible opacity-100' : 'invisible opacity-0')
        }
      >
        <nav aria-label="Navigation mobile" className="flex flex-col">
          {navigationConfig.links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-line py-5 font-display text-4xl"
            >
              {link.label}
              <span className="font-mono text-[11px] tracking-widest text-muted">0{i + 1}</span>
            </a>
          ))}
        </nav>
        <div className="space-y-4">
          <a href={navigationConfig.contactHref} onClick={() => setOpen(false)} className="btn btn-primary w-full">
            {navigationConfig.contactLabel}
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="block text-center font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
          >
            github.com/aniszeyy
          </a>
        </div>
      </div>
    </>
  );
}
