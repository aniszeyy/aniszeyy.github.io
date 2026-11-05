import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { PageOverlay } from '@/components/PageOverlay';
import { Hero } from '@/sections/Hero';
import { Work } from '@/sections/Work';
import { About } from '@/sections/About';
import { Stack } from '@/sections/Stack';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { usePageLoad } from '@/hooks/usePageLoad';

function App() {
  const { showOverlay } = usePageLoad(250);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-paper">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        Aller au contenu
      </a>

      <PageOverlay isVisible={showOverlay} />
      <div className="grain" aria-hidden />
      <Navigation />

      <main>
        <Hero />
        <Work />
        <About />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
