import { ArrowDownRight, ArrowUpRight, Github, Instagram, Linkedin, Mail, Menu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  { number: "01", name: "Morro Studio", type: "Brand identity · 2024", className: "peach" },
  { number: "02", name: "The Sunday Edit", type: "Digital journal · 2024", className: "sage" },
  { number: "03", name: "Noma Objects", type: "Commerce · 2023", className: "lilac" },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-page">
      {isLoading && (
        <div className="page-loader" role="status" aria-live="polite">
          <p>Hi, I am <em>Sujan.</em><span className="loader-caret" aria-hidden="true" /></p>
        </div>
      )}
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Sujan Katuwal home">SK<span>®</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#about">About me</a>
          <a href="mailto:hello@sujankatuwal.com">Let's talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-button" aria-label="Open navigation"><Menu size={21} /></button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Independent designer & developer</p>
            <h1>Making the web<br />feel <em>more human.</em></h1>
            <p className="intro">I’m Sujan — a multidisciplinary designer crafting warm, memorable digital experiences from Kathmandu to everywhere.</p>
            <div className="hero-actions">
              <a className="primary-link" href="#work">Explore my work <ArrowDownRight size={18} /></a>
              <a className="text-link" href="#about">A little about me <span>↘</span></a>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract visual composition">
            <div className="art-sun" />
            <div className="art-shape art-arch" />
            <div className="art-shape art-circle" />
            <div className="art-shape art-tile" />
            <p className="art-caption">STAY CURIOUS<br />STAY KIND</p>
            <p className="art-index">01—25</p>
            <div className="orbit"><Sparkles size={17} /></div>
          </div>
        </section>

        <section className="ticker" aria-label="Skills">
          <span>BRANDING</span><i>✦</i><span>DIGITAL EXPERIENCES</span><i>✦</i><span>CREATIVE DEVELOPMENT</span><i>✦</i><span>BRANDING</span>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <p className="eyebrow"><span /> A few things I’ve made</p>
            <h2>Selected <em>work</em></h2>
            <a className="view-all" href="#contact">View all projects <ArrowUpRight size={16} /></a>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project" href="#contact" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className={`project-preview ${project.className}`}><span>{project.name.slice(0, 1)}</span></div>
                <div className="project-info"><h3>{project.name}</h3><p>{project.type}</p></div>
                <ArrowUpRight className="project-arrow" size={21} />
              </a>
            ))}
          </div>
        </section>

        <section className="about-strip" id="about">
          <p className="eyebrow"><span /> In short</p>
          <p className="about-statement">I believe the best work feels <em>considered,</em> not complicated. Good ideas, clear stories, and a bit of personality go a long way.</p>
          <div className="socials">
            <a href="#contact" aria-label="Email"><Mail size={19} /></a>
            <a href="#contact" aria-label="LinkedIn"><Linkedin size={19} /></a>
            <a href="#contact" aria-label="GitHub"><Github size={19} /></a>
            <a href="#contact" aria-label="Instagram"><Instagram size={19} /></a>
          </div>
        </section>
      </main>

      <footer id="contact">
        <p>Have something in mind?</p>
        <a href="mailto:hello@sujankatuwal.com">Let’s make it <em>lovely.</em> <ArrowUpRight size={32} /></a>
        <div className="footer-bottom"><span>© 2025 Sujan Katuwal</span><span>Made with care in Nepal</span></div>
      </footer>
    </div>
  );
};

export default Index;
