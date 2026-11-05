import { useMemo, useState, type CSSProperties } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { forksConfig, projectsConfig, type Project } from '@/config';

type Filter = 'Tous' | Project['category'];

const filters: Filter[] = ['Tous', 'Web', 'Desktop', 'Java'];

function Plate({ project, n, banner }: { project: Project; n: number; banner?: boolean }) {
  return (
    <div
      className={'plate motif-' + project.motif + (banner ? ' plate-banner' : '')}
      style={{ '--lang': project.langColor } as CSSProperties}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="plate-meta flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft transition-colors">
          <span>P.0{n + 1}</span>
          <span>{project.lang}</span>
        </div>
        <div className="flex items-end justify-between">
          <span className="plate-index">0{n + 1}</span>
          <span className="plate-meta font-mono text-[11px] text-ink-soft transition-colors">{project.year}</span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, n, featured }: { project: Project; n: number; featured: boolean }) {
  if (featured) {
    return (
      <a
        href={'https://github.com/aniszeyy/' + project.repo}
        target="_blank"
        rel="noreferrer"
        className="project-card group block border-t border-line pt-6 md:col-span-2"
        aria-label={'Voir ' + project.name + ' sur GitHub'}
      >
        <Plate project={project} n={n} banner />
        <div className="mt-6 grid gap-6 border-b border-line pb-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between gap-4">
              <span className="label">
                {project.category} — {project.year}
              </span>
              <ArrowUpRight
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                aria-hidden
              />
            </div>
            <h3 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{project.name}</h3>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{project.summary}</p>
          </div>
          <div className="flex flex-col lg:col-span-4 lg:col-start-9">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-soft"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between gap-4 pt-6">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                github.com/aniszeyy/{project.repo}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">Dépôt ↗</span>
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={'https://github.com/aniszeyy/' + project.repo}
      target="_blank"
      rel="noreferrer"
      className="project-card group block border-t border-line pt-6"
      aria-label={'Voir ' + project.name + ' sur GitHub'}
    >
      <Plate project={project} n={n} />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <span className="label">
            {project.category} — {project.year}
          </span>
          <h3 className="mt-2 font-display text-2xl leading-tight sm:text-3xl">{project.name}</h3>
        </div>
        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
          aria-hidden
        />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-soft">
            {tech}
          </li>
        ))}
      </ul>
    </a>
  );
}

export function Work() {
  const [filter, setFilter] = useState<Filter>('Tous');
  const numbered = useMemo(() => projectsConfig.map((p, i) => ({ project: p, n: i })), []);
  const visible = useMemo(
    () => numbered.filter(({ project }) => filter === 'Tous' || project.category === filter),
    [filter, numbered]
  );

  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="reveal flex flex-wrap items-baseline justify-between gap-4" data-reveal>
          <span className="label">01 / Travaux</span>
          <span className="label">{projectsConfig.length} projets · {forksConfig.length} forks · 12 dépôts</span>
        </div>

        <div className="reveal mt-6 grid gap-8 lg:grid-cols-12" data-reveal>
          <h2 className="headline col-span-full max-w-3xl text-4xl sm:text-5xl lg:col-span-7 lg:text-6xl">
            Du web au desktop, des projets qui tournent.
          </h2>
          <p className="max-w-md self-end text-[15px] leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
            Sélection de dépôts publics : applications Next.js, ASP.NET, WinForms et Java. Chaque carte mène au code
            sur GitHub.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-1 border-t border-line py-3 sm:gap-2" role="group" aria-label="Filtrer les projets">
          {filters.map((f) => {
            const count = f === 'Tous' ? projectsConfig.length : projectsConfig.filter((p) => p.category === f).length;
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={
                  'px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors sm:px-4 sm:text-[11px] sm:tracking-[0.14em] ' +
                  (active ? 'bg-ink text-paper' : 'text-ink-soft hover:bg-paper-2')
                }
              >
                {f}
                <span className={'ml-2 ' + (active ? 'text-paper/60' : 'text-muted')}>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {visible.map(({ project, n }) => (
            <ProjectCard key={project.repo} project={project} n={n} featured={Boolean(project.featured) && filter === 'Tous'} />
          ))}
        </div>

        {/* Forks */}
        <div className="mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl sm:text-3xl">Aussi sur le profil</h3>
            <span className="label">Forks & explorations</span>
          </div>

          <ul className="mt-5 border-t border-line">
            {forksConfig.map((fork) => (
              <li key={fork.repo}>
                <a
                  href={'https://github.com/aniszeyy/' + fork.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-12 items-baseline gap-3 border-b border-line py-4 transition-colors hover:bg-paper-2/60"
                >
                  <span className="col-span-2 font-mono text-[11px] text-muted sm:col-span-1">{fork.year}</span>
                  <span className="col-span-10 flex items-baseline gap-2 sm:col-span-4">
                    <span className="text-[15px] transition-colors group-hover:text-accent">{fork.name}</span>
                    <span className="border border-line px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted">
                      fork
                    </span>
                  </span>
                  <span className="col-span-12 text-sm text-muted sm:col-span-5">{fork.summary}</span>
                  <span className="col-span-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-ink-soft sm:col-span-2 sm:justify-end sm:gap-2">
                    {fork.stack}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://github.com/aniszeyy?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="link-line mt-8 font-mono text-[11px] uppercase tracking-[0.16em]"
          >
            Voir les 12 dépôts sur GitHub
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
