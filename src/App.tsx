import { useEffect, useRef, useState } from 'react';
import { profile } from './content/profile';
import { Arrow, Star } from './components/Icons';
import { Projects } from './components/Projects';
import { ContactChannels } from './components/ContactChannels';
import { useReveal } from './hooks/useReveal';

const navigation = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [activeArea, setActiveArea] = useState<number | null>(0);
  const portraitRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useReveal();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="site-container flex h-20 items-center justify-between gap-6">
          <a href="#inicio" className="brand" aria-label="João Furtado, início"><span>JF<span className="text-accent">.</span></span><span className="brand-caption">JOÃO FURTADO<br /><span>DESENVOLVIMENTO</span></span></a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {navigation.map((item) => <a className="nav-link" key={item.href} href={item.href} aria-current={activeSection === item.href ? 'location' : undefined}>{item.label}</a>)}
          </nav>
          <button ref={menuButtonRef} className="menu-button md:hidden" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? 'Fechar' : 'Menu'}</span><span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
          <a className="header-action hidden lg:inline-flex" href={profile.links.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
        </div>
        {menuOpen && <nav id="mobile-menu" className="mobile-menu md:hidden" aria-label="Navegação móvel">{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<Arrow diagonal /></a>)}</nav>}
      </header>

      <main id="conteudo">
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          <div className="site-container relative">
            <div className="hero-topline"><p>WEB COMO PONTO DE PARTIDA.</p><p><span className="status-dot" /> EM BUSCA DE OPORTUNIDADES</p></div>
            <div className="hero-backdrop" aria-hidden="true">PORTFÓLIO</div>
            <div className="hero-composition">
              <div className="hero-copy">
                <p className="hero-greeting">Olá, eu sou</p>
                <h1 id="hero-title">JOÃO<br />FURTADO<span>.</span></h1>
                <p className="hero-role">DESENVOLVIMENTO.<br /><span>VONTADE DE IR ALÉM.</span></p>
                <p className="hero-summary">Meu ponto forte é a web. Meu próximo passo é uma oportunidade para criar software e aprender em diferentes áreas.</p>
                <a className="primary-link" href="#sobre"><span>Conheça minha trajetória</span><Arrow diagonal /></a>
              </div>
              <div ref={portraitRef} className="portrait-stage" onPointerMove={(event) => {
                if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                const bounds = event.currentTarget.getBoundingClientRect();
                event.currentTarget.style.setProperty('--portrait-x', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 9}px`);
                event.currentTarget.style.setProperty('--portrait-y', `${((event.clientY - bounds.top) / bounds.height - 0.5) * 9}px`);
              }} onPointerLeave={() => {
                portraitRef.current?.style.setProperty('--portrait-x', '0px');
                portraitRef.current?.style.setProperty('--portrait-y', '0px');
              }}>
                <div className="portrait-orbit" aria-hidden="true" />
                <div className="portrait-image"><img src="/images/joao-furtado-profile.webp" alt="Retrato de João Furtado" width="1254" height="1254" fetchPriority="high" /></div>
                <div className="portrait-label"><span className="status-dot" /> CURIOSIDADE EM CONSTRUÇÃO</div>
                <Star className="portrait-star" />
              </div>
              <aside className="hero-notes" aria-label="Formação e experiência atuais">
                <Star className="mb-6 text-accent" />
                <p className="mb-9 text-sm leading-relaxed text-muted">Entre a prática<br />de hoje e o código<br />de amanhã.</p>
                <div className="hero-note"><strong>3º</strong><span>PERÍODO DE SISTEMAS<br />DE INFORMAÇÃO</span></div>
                <div className="hero-note"><strong>TI</strong><span>SUPORTE NO<br />GRUPO RIO MAIS</span></div>
              </aside>
            </div>
            <div className="hero-bottom"><span className="mono">JOÃO GUILHERME PEREIRA FURTADO</span><a href="#sobre" className="scroll-link">CONTINUE EXPLORANDO <span aria-hidden="true">↓</span></a></div>
          </div>
        </section>

        <section id="sobre" className="section-border" aria-labelledby="about-title">
          <div className="site-container grid gap-12 py-16 md:grid-cols-2 md:gap-20 md:py-24">
            <div data-reveal><p className="eyebrow"><span>01</span> Um pouco sobre mim</p><h2 id="about-title" className="section-title mt-8">Web é meu<br />ponto de <em>partida.</em></h2></div>
            <div className="flex flex-col justify-between gap-8 md:pt-14" data-reveal>
              <p className="about-lead">Quero construir software.<br /><span className="text-muted">E continuar aprendendo no caminho.</span></p>
              <p className="max-w-lg leading-relaxed text-muted">{profile.summary}</p>
              <div className="education-row"><span className="education-index">03</span><div><p className="text-sm font-medium">{profile.education.course}</p><p className="mt-1 text-sm text-muted">{profile.education.institution} <span className="text-accent">/</span> {profile.education.period}</p></div><Star className="ml-auto shrink-0 text-accent" /></div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section-border experience-section" aria-labelledby="experience-title">
          <div className="site-container py-16 md:py-24">
            <div className="section-heading" data-reveal><p className="eyebrow"><span>02</span> Experiência profissional</p><h2 id="experience-title" className="section-title">Tecnologia na <em>vida real.</em></h2></div>
            <div className="experience-grid">
              <div className="experience-intro" data-reveal>
                <p className="eyebrow text-accent">{profile.experience.period}</p>
                <h3>{profile.experience.role}<br /><span>{profile.experience.company}</span></h3>
                <p className="mono mt-4 text-xs text-muted">CABO FRIO / ATENDIMENTO PRESENCIAL E REMOTO</p>
                <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted">{profile.experience.summary}</p>
                <div className="cftv-stat"><span>≈40</span><div><strong>Instalações de CFTV</strong><p>Em clínicas e bases da empresa,<br />além das manutenções.</p></div></div>
              </div>
              <div className="experience-areas" data-reveal>
                {profile.experience.areas.map((area, index) => (
                  <div className="experience-area" key={area.title}>
                    <h4><button type="button" aria-expanded={activeArea === index} aria-controls={`area-${index}`} onClick={() => setActiveArea(activeArea === index ? null : index)}><span className="area-number">0{index + 1}</span><span>{area.title}</span><span className="area-toggle" aria-hidden="true">{activeArea === index ? '−' : '+'}</span></button></h4>
                    <div id={`area-${index}`} className={`area-content ${activeArea === index ? 'is-open' : ''}`} aria-hidden={activeArea !== index}><div><p>{area.description}</p>{index === 0 && <span className="tag mt-4 inline-block">Chamados / Auvo</span>}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Projects />

        <section id="contato" className="contact-section section-border" aria-labelledby="contact-title">
          <div className="site-container relative py-16 md:py-24">
            <p className="eyebrow" data-reveal><span>04</span> O próximo passo</p>
            <div className="contact-layout" data-reveal>
              <h2 id="contact-title">VAMOS<br /><em>CONVERSAR</em><span>?</span></h2>
              <div className="contact-copy"><Star className="text-accent" /><p>Busco uma oportunidade em desenvolvimento para contribuir, escrever código e aprender com novos desafios.</p><ContactChannels /></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-border"><div className="site-container flex flex-col justify-between gap-6 py-7 sm:flex-row sm:items-center"><p className="mono text-[10px] text-muted">© {new Date().getFullYear()} JOÃO FURTADO</p><p className="text-xs text-muted">Este site: React <span className="text-accent">/</span> TypeScript <span className="text-accent">/</span> Tailwind CSS</p><a className="text-link text-xs" href="#inicio">Voltar ao topo <span aria-hidden="true">↑</span></a></div></footer>
    </>
  );
}

export default App;
