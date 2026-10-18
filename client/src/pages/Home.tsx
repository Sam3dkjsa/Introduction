import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, Asterisk, Code2, Layers3, MapPin, Sparkles } from "lucide-react";
import InteractiveField from "@/components/InteractiveField";

const projects = [
  { number: "01", title: "Soft Structures", kind: "Spatial interaction", copy: "SAMPLE — Replace this note with a short description of the installation, the interaction, and what visitors experienced.", role: "Your role · edit", tools: "Tools & tech · edit", art: "art-soft" },
  { number: "02", title: "Afterimage", kind: "WebGL experience", copy: "SAMPLE — Add the idea behind this browser-based world and the detail that made it feel alive.", role: "Your role · edit", tools: "Tools & tech · edit", art: "art-after" },
  { number: "03", title: "Common Ground", kind: "Interactive installation", copy: "SAMPLE — Describe how people, space, and technology came together in this project.", role: "Your role · edit", tools: "Tools & tech · edit", art: "art-ground" },
  { number: "04", title: "A Field of One", kind: "Generative study", copy: "SAMPLE — Replace with the question, process, or outcome behind a selected piece of work.", role: "Your role · edit", tools: "Tools & tech · edit", art: "art-field" },
  { number: "05", title: "Quiet Signals", kind: "Sensor-led experience", copy: "SAMPLE — Add a concise write-up of the signal, gesture, or response at the heart of the work.", role: "Your role · edit", tools: "Tools & tech · edit", art: "art-signals" },
  { number: "06", title: "Elsewhere, Now", kind: "Real-time graphics", copy: "SAMPLE — Tell visitors what they can see, touch, or discover when they enter this experience.", role: "Your role · edit", tools: "Tools & tech · edit", art: "art-elsewhere" },
];

const experience = [
  { period: "YYYY — YYYY", title: "Add role title", place: "Add studio or organisation", note: "EDITABLE PLACEHOLDER — Add one sentence about your contribution or a notable outcome." },
  { period: "YYYY — YYYY", title: "Add role title", place: "Add studio or organisation", note: "EDITABLE PLACEHOLDER — Add one sentence about your contribution or a notable outcome." },
  { period: "YYYY — YYYY", title: "Add role title", place: "Add studio or organisation", note: "EDITABLE PLACEHOLDER — Add one sentence about your contribution or a notable outcome." },
];

const talks = [
  { event: "Add event or conference", detail: "Talk title or topic · YYYY" },
  { event: "Add event or conference", detail: "Talk title or topic · YYYY" },
];

const awards = [
  { name: "Add award or recognition", detail: "Organisation · YYYY" },
  { name: "Add award or recognition", detail: "Organisation · YYYY" },
];

function SectionHeading({ index, eyebrow, title, id }: { index: string; eyebrow: string; title: string; id?: string }) {
  return (
    <div className="section-heading" id={id}>
      <span className="section-number">{index}</span>
      <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Noa Lindqvist — back to top"><span className="wordmark-mark"><Asterisk size={23} strokeWidth={2.4} /></span><span>noa lindqvist<span className="wordmark-dot">.</span></span></a>
        <nav aria-label="Main navigation" className="main-nav">
          <a href="#about">About</a><a href="#work">Work <span className="nav-count">06</span></a><a href="#experience">Experience</a><a href="#contact" className="nav-contact">Say hello <ArrowUpRight size={14} /></a>
        </nav>
        <a className="mobile-contact" href="#contact" aria-label="Go to contact"><ArrowUpRight size={18} /></a>
      </header>

      <section className="hero shell" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="status-line"><span className="status-dot" /> STOCKHOLM, SWEDEN <span className="status-divider">/</span> CREATIVE TECHNOLOGIST</div>
          <h1 id="hero-title">Making the<br /><span className="hero-italic">invisible</span> feel<br />interactive<span className="hero-period">.</span></h1>
          <div className="hero-bottomline">
            <p>I build interactive installations and WebGL experiences — places where code becomes something you can feel.</p>
            <a className="round-link" href="#work" aria-label="Scroll to selected work"><ArrowDown size={20} /></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Interactive generative field. Move the pointer to shift the light and line patterns.">
          <InteractiveField />
          <div className="field-stamp"><span>FIELD STUDY</span><span>NO. 001</span></div>
          <span className="field-prompt"><span className="field-prompt-dot" /> MOVE TO DISTURB THE FIELD</span>
          <span className="field-coordinates">59°19'46.4"N<br />18°04'07.9"E</span>
        </div>
        <div className="hero-caption"><span>INDEPENDENT PRACTICE <span className="caption-star">✳</span> DIGITAL + PHYSICAL</span><span>SCROLL TO EXPLORE <ArrowDown size={12} /></span></div>
      </section>

      <div className="marquee" aria-label="Practice areas">
        <div className="marquee-track" aria-hidden="true">{Array.from({ length: 2 }, (_, i) => <span className="marquee-set" key={i}>INTERACTIVE INSTALLATIONS <Asterisk /> WEBGL WORLDS <Asterisk /> CREATIVE CODE <Asterisk /> DIGITAL PLAYGROUNDS <Asterisk /> SPATIAL STORIES <Asterisk /></span>)}</div>
      </div>

      <section className="about-section shell section-pad" aria-labelledby="about-title">
        <SectionHeading index="01" eyebrow="A LITTLE CONTEXT" title="About, in pieces." id="about" />
        <div className="bento-grid">
          <article className="bento-card bento-intro">
            <span className="card-kicker">THE SHORT VERSION <Asterisk size={14} /></span>
            <p className="intro-copy">I’m Noa — a creative technologist in Stockholm, building <em>interactive installations</em> and <em>WebGL experiences.</em></p>
            <span className="card-footnote">THE WORK SITS BETWEEN SCREEN & SPACE.</span>
            <div className="intro-scribble" aria-hidden="true">↗</div>
          </article>
          <article className="bento-card bento-location">
            <span className="card-kicker">CURRENT COORDINATES</span>
            <MapPin size={23} strokeWidth={1.5} className="location-icon" />
            <p className="bento-big">Stockholm</p><span className="card-footnote">SWEDEN · 59° N</span>
          </article>
          <article className="bento-card bento-practice">
            <span className="card-kicker">PRACTICE</span>
            <div className="practice-row"><span className="practice-icon"><Layers3 size={18} /></span><span>Interactive<br />installations</span></div>
            <div className="practice-row"><span className="practice-icon practice-icon-lime"><Code2 size={18} /></span><span>WebGL<br />experiences</span></div>
            <span className="card-footnote">THE TWO WORLDS TALK.</span>
          </article>
          <article className="bento-card bento-note">
            <span className="card-kicker">WORKING NOTES <Sparkles size={14} /></span>
            <p className="note-copy">Curiosity first.<br />Pixels with purpose.<br /><span>Room for the unexpected.</span></p>
            <span className="card-footnote">ADD OR EDIT A PERSONAL DETAIL</span>
          </article>
          <article className="bento-card bento-placeholder">
            <span className="card-kicker">THE TOOLBOX</span>
            <p>Add your tools, technologies, and favorite ways of working.</p>
            <span className="edit-chip">EDITABLE FIELD</span>
          </article>
        </div>
      </section>

      <section className="work-section section-pad" aria-labelledby="work-title">
        <div className="shell">
          <SectionHeading index="02" eyebrow="SELECTED WORK · SAMPLE CONTENT" title="A few worlds, in progress." id="work" />
          <p className="section-intro">Six editable sample entries to replace with Noa’s real projects. Every card is marked so placeholder copy isn’t mistaken for résumé history.</p>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art ${project.art}`} aria-hidden="true">
                  <div className="art-shape art-shape-a" /><div className="art-shape art-shape-b" /><div className="art-shape art-shape-c" /><div className="art-orbit" /><span className="art-index">{project.number} / 06</span><span className="art-cross">+</span>
                </div>
                <div className="project-meta"><span className="project-kind">{project.kind}</span><span className="sample-label">SAMPLE · EDIT</span></div>
                <div className="project-title-row"><h3>{project.title}</h3><span className="project-arrow"><ArrowUpRight size={16} /></span></div>
                <p className="project-copy">{project.copy}</p>
                <div className="project-detail"><span>{project.role}</span><span>{project.tools}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section shell section-pad" aria-labelledby="experience-title">
        <SectionHeading index="03" eyebrow="THE THROUGH-LINE · PLACEHOLDERS" title="Experience, over time." id="experience" />
        <div className="timeline">
          {experience.map((item, i) => <article className="timeline-item" key={i}>
            <div className="timeline-period">{item.period}</div><span className="timeline-marker" aria-hidden="true" /><div className="timeline-detail"><div className="timeline-heading"><h3>{item.title}</h3><span className="timeline-place">{item.place}</span></div><p>{item.note}</p></div><span className="edit-chip">EDIT ME</span>
          </article>)}
        </div>
        <p className="timeline-hint">Dates, roles, organisations, and summaries are editable placeholders.</p>
      </section>

      <section className="recognition-section shell section-pad" aria-label="Talks and awards">
        <div className="recognition-column">
          <SectionHeading index="04" eyebrow="ON A STAGE · PLACEHOLDERS" title="Talks & conversations." />
          <div className="recognition-list">{talks.map((talk, i) => <article className="recognition-item" key={i}><span className="recognition-year">0{i + 1}</span><div><h3>{talk.event}</h3><p>{talk.detail}</p></div><span className="edit-chip">EDIT ME</span></article>)}</div>
        </div>
        <div className="recognition-column awards-column">
          <SectionHeading index="05" eyebrow="A NICE NOD · PLACEHOLDERS" title="Awards & notes." />
          <div className="recognition-list">{awards.map((award, i) => <article className="recognition-item" key={i}><span className="recognition-year">0{i + 1}</span><div><h3>{award.name}</h3><p>{award.detail}</p></div><span className="edit-chip">EDIT ME</span></article>)}</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <div className="contact-topline"><span><span className="status-dot status-dot-dark" /> OPEN THE DOOR</span><span>06 / SAY HELLO</span></div>
          <h2>Have a good<br />question<span>?</span></h2>
          <div className="contact-bottom"><p>For a collaboration, a curious brief, or a conversation about a project that doesn’t fit neatly in a box.</p><a className="contact-mail" href="mailto:your-email@example.com"><span>your-email@example.com</span><ArrowUpRight size={22} /></a></div>
          <div className="contact-links"><span>CONTACT DETAILS ARE EDITABLE PLACEHOLDERS</span><span className="contact-social">LinkedIn <b>·</b> add profile URL <ArrowRight size={13} /></span><span className="contact-social">Instagram <b>·</b> add profile URL <ArrowRight size={13} /></span></div>
        </div>
      </section>
      <footer className="site-footer shell"><a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark"><Asterisk size={20} strokeWidth={2.4} /></span><span>noa lindqvist<span className="wordmark-dot">.</span></span></a><span>BUILT WITH CURIOSITY · STOCKHOLM</span><a className="back-top" href="#top">BACK TO TOP <ArrowUp size={13} /></a></footer>
    </main>
  );
}
