import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { profile, projects } from '../content/profile';
import { Arrow, Star } from './Icons';

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');
  const carouselRef = useRef<HTMLDivElement>(null);
  const transitionLocked = useRef(false);
  const transitionTimer = useRef<number | undefined>(undefined);
  const hasMultipleProjects = projects.length > 1;

  useEffect(() => () => window.clearTimeout(transitionTimer.current), []);

  function changeProject(step: -1 | 1) {
    if (!hasMultipleProjects || transitionLocked.current) return;

    const focusedElement = document.activeElement;
    if (focusedElement?.closest('.project-slide') && carouselRef.current?.contains(focusedElement)) {
      carouselRef.current.focus({ preventScroll: true });
    }

    setDirection(step === 1 ? 'next' : 'previous');
    setActiveIndex((currentIndex) => (currentIndex + step + projects.length) % projects.length);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPreviousIndex(null);
      return;
    }

    transitionLocked.current = true;
    setPreviousIndex(activeIndex);
    transitionTimer.current = window.setTimeout(() => {
      setPreviousIndex(null);
      transitionLocked.current = false;
    }, 560);
  }

  function handleCarouselKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!hasMultipleProjects) return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target instanceof HTMLElement && event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    event.preventDefault();
    changeProject(event.key === 'ArrowRight' ? 1 : -1);
  }

  return (
    <section id="projetos" className="section-border" aria-labelledby="projects-title">
      <div className="site-container py-16 md:py-24">
        <div className="section-heading" data-reveal>
          <p className="eyebrow"><span>03</span> O que estou construindo</p>
          <h2 id="projects-title" className="section-title">Código em <em>movimento.</em></h2>
        </div>

        {projects.length > 0 ? (
          <div
            ref={carouselRef}
            className="project-carousel"
            role="region"
            aria-roledescription={hasMultipleProjects ? 'carrossel' : undefined}
            aria-labelledby="projects-title"
            tabIndex={-1}
            onKeyDown={handleCarouselKeyDown}
            data-reveal
          >
            {hasMultipleProjects && (
              <div className="project-carousel-toolbar">
                <p className="project-carousel-label">Explore os projetos</p>
                <div className="project-carousel-controls" role="group" aria-label="Navegar pelos projetos">
                  <button className="project-carousel-arrow project-carousel-arrow-previous" type="button" aria-label="Projeto anterior" aria-controls="project-slides" aria-disabled={previousIndex !== null} onClick={() => changeProject(-1)}><Arrow /></button>
                  <span className="project-carousel-counter" aria-hidden="true"><strong>{String(activeIndex + 1).padStart(2, '0')}</strong><span>/</span>{String(projects.length).padStart(2, '0')}</span>
                  <button className="project-carousel-arrow" type="button" aria-label="Próximo projeto" aria-controls="project-slides" aria-disabled={previousIndex !== null} onClick={() => changeProject(1)}><Arrow /></button>
                </div>
              </div>
            )}
            <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">Projeto {activeIndex + 1} de {projects.length}: {projects[activeIndex]?.title}</p>
            <div id="project-slides" className={`project-carousel-slides project-carousel-${direction}`}>
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              const isLeaving = index === previousIndex;

              return (
              <article
                key={project.title}
                className={`project-card project-card-featured project-slide${isActive ? ' is-active' : ''}${isLeaving ? ' is-leaving' : ''}${isActive && previousIndex !== null ? ' is-entering' : ''}`}
                aria-roledescription={hasMultipleProjects ? 'slide' : undefined}
                aria-label={`${index + 1} de ${projects.length}: ${project.title}`}
                aria-hidden={!isActive}
                inert={!isActive}
              >
                {project.screenshot && (
                  <figure className="project-preview">
                    <div className="project-preview-screen">
                      <img src={project.screenshot} alt={project.screenshotAlt ?? `Interface de ${project.title}`} loading="lazy" width="1600" height="900" />
                    </div>
                    <figcaption>{project.screenshotCaption ?? 'Dashboard · prévia da interface'}</figcaption>
                  </figure>
                )}
                <div className="project-details">
                  {project.status && <p className="project-status"><span className="status-dot" />{project.status}</p>}
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p>Minha participação: {project.role}</p>
                  <ul className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                    {project.technologies.map((technology) => <li className="tag" key={technology}>{technology}</li>)}
                  </ul>
                  {project.note && <p className="project-note">{project.note}</p>}
                  <div className="project-links">
                    {project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Ver demonstração de ${project.title} (abre em nova aba)`}>Ver demonstração <Arrow diagonal /></a>}
                    {project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`Ver repositório de ${project.title} no GitHub (abre em nova aba)`}>Ver repositório <Arrow diagonal /></a>}
                  </div>
                  {project.demoHint && <p className="project-demo-hint">{project.demoHint}</p>}
                </div>
              </article>
              );
            })}
            </div>
          </div>
        ) : (
          <article className="current-project" data-reveal aria-label={`${profile.currentProject.name}: ${profile.currentProject.status}`}>
            <div className="project-art" aria-hidden="true">
              <div className="project-art-lines" />
              <span className="project-monogram">CG</span>
              <Star className="project-star" />
            </div>
            <div className="relative z-10 flex flex-col justify-between gap-14 p-7 sm:p-10 md:p-14">
              <p className="eyebrow"><span className="status-dot" /> {profile.currentProject.status}</p>
              <div>
                <h3 className="project-name">Contract<br />Guardian<span>.</span></h3>
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">Um projeto que estou desenvolvendo. Em breve, compartilho os detalhes por aqui.</p>
              </div>
              <span className="mono text-xs text-muted">EM CONSTRUÇÃO / PRÓXIMO CAPÍTULO</span>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
