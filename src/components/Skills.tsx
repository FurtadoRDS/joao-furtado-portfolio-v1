import { skills, skillsSummary } from '../content/profile';

export function Skills() {
  return (
    <section id="conhecimentos" className="section-border" aria-labelledby="skills-title">
      <div className="site-container py-16 md:py-24">
        <div className="section-heading" data-reveal>
          <p className="eyebrow"><span>02</span> Conhecimentos</p>
          <h2 id="skills-title" className="section-title">Ferramentas que <em>eu uso.</em></h2>
        </div>

        <p className="skills-lead" data-reveal>{skillsSummary}</p>

        <ul className="skills-grid" data-reveal>
          {skills.map((group, index) => (
            <li className="skill-group" key={group.title}>
              <h3 className="skill-group-title">
                <span className="area-number">{String(index + 1).padStart(2, '0')}</span>
                {group.title}
              </h3>
              <ul className="skill-tags" aria-label={`Tecnologias de ${group.title}`}>
                {group.items.map((item) => <li className="tag" key={item}>{item}</li>)}
              </ul>
              <p className="skill-used-in">Onde usei: {group.usedIn}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
