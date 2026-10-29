import { profile, projects } from '../content/profile';
import { Arrow, Star } from './Icons';

export function Projects() {
  return (
    <section id="projetos" className="section-border" aria-labelledby="projects-title">
      <div className="site-container py-16 md:py-24">
        <div className="section-heading" data-reveal>
          <p className="eyebrow"><span>03</span> O que estou construindo</p>
          <h2 id="projects-title" className="section-title">Código em <em>movimento.</em></h2>
        </div>

        {projects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="project-card" data-reveal>
                {project.screenshot && <img src={project.screenshot} alt={`Interface de ${project.title}`} loading="lazy" width="1200" height="750" />}
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p>Minha participação: {project.role}</p>
                <ul className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                  {project.technologies.map((technology) => <li className="tag" key={technology}>{technology}</li>)}
                </ul>
                <div className="flex flex-wrap gap-6">
                  {project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noreferrer">Código <Arrow diagonal /></a>}
                  {project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Aplicação <Arrow diagonal /></a>}
                </div>
              </article>
            ))}
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
