import { stackConfig } from '@/config';

export function Stack() {
  return (
    <section id="stack" className="border-t border-line py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <span className="label">03 / Stack</span>
          <span className="label">Boîte à outils</span>
        </div>

        <div className="reveal mt-6 grid gap-6 lg:grid-cols-12" data-reveal>
          <h2 className="headline col-span-full max-w-2xl text-4xl sm:text-5xl lg:col-span-7">
            Les outils que je pratique, du navigateur au serveur.
          </h2>
          <p className="max-w-md self-end text-[15px] leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
            Pas de liste décorative : chaque famille correspond à un projet livré, du CRUD WinForms à l’API Next.js.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {stackConfig.groups.map((group, i) => (
            <div key={group.title} className="border-t border-ink pt-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl">{group.title}</h3>
                <span className="font-mono text-[10px] tracking-widest text-muted">0{i + 1}</span>
              </div>
              <ul className="mt-4 space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-2 text-[15px] text-ink-soft transition-colors hover:text-accent"
                  >
                    <span className="h-1 w-1 shrink-0 translate-y-[-2px] bg-line" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
