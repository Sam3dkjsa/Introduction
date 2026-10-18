import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, Asterisk, Award, BookOpen, Code2, GraduationCap, MapPin } from "lucide-react";
import InteractiveField from "@/components/InteractiveField";

const highlights = [
  { number: "01", title: "Java", kind: "PROGRAMMING LANGUAGE", copy: "Listed as a top skill in the supplied résumé.", art: "art-soft" },
  { number: "02", title: "JavaScript", kind: "PROGRAMMING LANGUAGE", copy: "Listed as a top skill in the supplied résumé.", art: "art-after" },
  { number: "03", title: "Python", kind: "PROGRAMMING LANGUAGE", copy: "Listed as a top skill in the supplied résumé; also supported by a basic certificate.", art: "art-ground" },
  { number: "04", title: "Python (Basic)", kind: "CERTIFICATE", copy: "Python (Basic) Certificate, included in the supplied résumé.", art: "art-field" },
  { number: "05", title: "Python Workshop", kind: "3-HOUR WORKSHOP CERTIFICATE", copy: "Python workshop certificate, listed as 3hr_workshop_certificate_python in the résumé.", art: "art-signals" },
  { number: "06", title: "NASA Space Apps", kind: "CHALLENGE PARTICIPATION", copy: "NASA Space Apps Challenge Participant Certificate, listed in the supplied résumé.", art: "art-elsewhere" },
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
        <a className="wordmark" href="#top" aria-label="Arpit Singh — back to top"><span className="wordmark-mark"><Asterisk size={23} strokeWidth={2.4} /></span><span>arpit singh<span className="wordmark-dot">.</span></span></a>
        <nav aria-label="Main navigation" className="main-nav">
          <a href="#about">About</a><a href="#highlights">Highlights <span className="nav-count">06</span></a><a href="#education">Education</a><a href="#contact" className="nav-contact">Say hello <ArrowUpRight size={14} /></a>
        </nav>
        <a className="mobile-contact" href="#contact" aria-label="Go to contact"><ArrowUpRight size={18} /></a>
      </header>

      <section className="hero shell" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="status-line"><span className="status-dot" /> HOWRAH, WEST BENGAL, INDIA <span className="status-divider">/</span> COMPUTER SCIENCE STUDENT</div>
          <h1 id="hero-title">Curious by<br /><span className="hero-italic">nature.</span><br />Building with<br />code<span className="hero-period">.</span></h1>
          <div className="hero-bottomline">
            <p>I’m Arpit Singh, a Computer Science student at Techno India University, learning and building with Java, JavaScript, and Python.</p>
            <a className="round-link" href="#highlights" aria-label="Scroll to résumé highlights"><ArrowDown size={20} /></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Interactive generative field. Move the pointer to shift the light and line patterns.">
          <InteractiveField />
          <div className="field-stamp"><span>CODE STUDY</span><span>NO. 001</span></div>
          <span className="field-prompt"><span className="field-prompt-dot" /> MOVE TO DISTURB THE FIELD</span>
          <span className="field-coordinates">HOWRAH<br />WEST BENGAL, INDIA</span>
        </div>
        <div className="hero-caption"><span>COMPUTER SCIENCE <span className="caption-star">✳</span> TECHNO INDIA UNIVERSITY</span><span>SCROLL TO EXPLORE <ArrowDown size={12} /></span></div>
      </section>

      <div className="marquee" aria-label="Skills and résumé highlights">
        <div className="marquee-track" aria-hidden="true">{Array.from({ length: 2 }, (_, i) => <span className="marquee-set" key={i}>JAVA <Asterisk /> JAVASCRIPT <Asterisk /> PYTHON <Asterisk /> COMPUTER SCIENCE <Asterisk /> NASA SPACE APPS CHALLENGE <Asterisk /></span>)}</div>
      </div>

      <section className="about-section shell section-pad" aria-labelledby="about-title">
        <SectionHeading index="01" eyebrow="A LITTLE CONTEXT" title="About, in pieces." id="about" />
        <div className="bento-grid">
          <article className="bento-card bento-intro">
            <span className="card-kicker">THE SHORT VERSION <Asterisk size={14} /></span>
            <p className="intro-copy">I’m Arpit — a Computer Science student at <em>Techno India University</em>, based in Howrah.</p>
            <span className="card-footnote">WEST BENGAL · INDIA</span>
            <div className="intro-scribble" aria-hidden="true">↗</div>
          </article>
          <article className="bento-card bento-location">
            <span className="card-kicker">BASED IN</span>
            <MapPin size={23} strokeWidth={1.5} className="location-icon" />
            <p className="bento-big">Howrah</p><span className="card-footnote">WEST BENGAL, INDIA</span>
          </article>
          <article className="bento-card bento-practice">
            <span className="card-kicker">TOP SKILLS</span>
            <div className="practice-row"><span className="practice-icon"><Code2 size={18} /></span><span>Java</span></div>
            <div className="practice-row"><span className="practice-icon practice-icon-lime"><Code2 size={18} /></span><span>JavaScript</span></div>
            <div className="practice-row"><span className="practice-icon"><Code2 size={18} /></span><span>Python</span></div>
          </article>
          <article className="bento-card bento-note">
            <span className="card-kicker">EDUCATION <GraduationCap size={15} /></span>
            <p className="note-copy">BTech<br /><span>Computer Science</span></p>
            <span className="card-footnote">AUG 2024 — JUL 2028</span>
          </article>
          <article className="bento-card bento-placeholder">
            <span className="card-kicker">ON THE RECORD <Award size={15} /></span>
            <p>Python certificates and NASA Space Apps Challenge participation.</p>
            <span className="card-footnote">AS LISTED IN THE RÉSUMÉ</span>
          </article>
        </div>
      </section>

      <section className="work-section section-pad" aria-labelledby="highlights-title">
        <div className="shell">
          <SectionHeading index="02" eyebrow="SKILLS & CREDENTIALS · FROM THE RÉSUMÉ" title="A foundation in code." id="highlights" />
          <p className="section-intro">The supplied résumé doesn’t list project descriptions, so these six highlights use only its named programming skills, certificates, and challenge participation.</p>
          <div className="project-grid">
            {highlights.map((item) => (
              <article className="project-card" key={item.number}>
                <div className={`project-art ${item.art}`} aria-hidden="true">
                  <div className="art-shape art-shape-a" /><div className="art-shape art-shape-b" /><div className="art-shape art-shape-c" /><div className="art-orbit" /><span className="art-index">{item.number} / 06</span><span className="art-cross">+</span>
                </div>
                <div className="project-meta"><span className="project-kind">{item.kind}</span><span className="sample-label">RÉSUMÉ DETAIL</span></div>
                <div className="project-title-row"><h3>{item.title}</h3><span className="project-arrow"><ArrowUpRight size={16} /></span></div>
                <p className="project-copy">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section shell section-pad" aria-labelledby="education-title">
        <SectionHeading index="03" eyebrow="EDUCATION · FROM THE RÉSUMÉ" title="Learning, over time." id="education" />
        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-period">AUG 2024 — JUL 2028</div><span className="timeline-marker" aria-hidden="true" /><div className="timeline-detail"><div className="timeline-heading"><h3>Bachelor of Technology</h3><span className="timeline-place">Techno India University</span></div><p>Computer Science · BTech</p></div><span className="edit-chip">EDUCATION</span>
          </article>
        </div>
      </section>

      <section className="recognition-section shell section-pad" aria-label="Certificates and participation">
        <div className="recognition-column">
          <SectionHeading index="04" eyebrow="CERTIFICATES · FROM THE RÉSUMÉ" title="Certificates." />
          <div className="recognition-list">
            <article className="recognition-item"><span className="recognition-year">01</span><div><h3>Python (Basic) Certificate</h3><p>Certification listed in the supplied résumé.</p></div><span className="edit-chip">CERTIFICATE</span></article>
            <article className="recognition-item"><span className="recognition-year">02</span><div><h3>Python Workshop · 3 hours</h3><p>Listed as 3hr_workshop_certificate_python.</p></div><span className="edit-chip">CERTIFICATE</span></article>
          </div>
        </div>
        <div className="recognition-column awards-column">
          <SectionHeading index="05" eyebrow="PARTICIPATION · FROM THE RÉSUMÉ" title="Challenge accepted." />
          <div className="recognition-list">
            <article className="recognition-item"><span className="recognition-year">NASA</span><div><h3>NASA Space Apps Challenge</h3><p>Participant Certificate.</p></div><span className="edit-chip">PARTICIPANT</span></article>
          </div>
          <p className="timeline-hint">The supplied résumé lists no talks or awards.</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <div className="contact-topline"><span><span className="status-dot status-dot-dark" /> CONTACT</span><span>06 / SAY HELLO</span></div>
          <h2>Let’s talk<br />about code<span>.</span></h2>
          <div className="contact-bottom"><p>Reach out to Arpit by email, or connect through LinkedIn.</p><a className="contact-mail" href="mailto:arpitsinghths@gmail.com"><span>arpitsinghths@gmail.com</span><ArrowUpRight size={22} /></a></div>
          <div className="contact-links"><span>CONTACT DETAILS FROM THE RÉSUMÉ</span><a className="contact-social" href="https://www.linkedin.com/in/arpit-singh-382040315" target="_blank" rel="noreferrer">LinkedIn <b>·</b> Arpit Singh <ArrowRight size={13} /></a></div>
        </div>
      </section>
      <footer className="site-footer shell"><a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark"><Asterisk size={20} strokeWidth={2.4} /></span><span>arpit singh<span className="wordmark-dot">.</span></span></a><span>COMPUTER SCIENCE · TECHNO INDIA UNIVERSITY</span><a className="back-top" href="#top">BACK TO TOP <ArrowUp size={13} /></a></footer>
    </main>
  );
}
