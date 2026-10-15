import Link from "next/link";
import Image from "next/image";
import "../Home.css";
import "./Portfolio.css";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../../lib/projects";

const Portfolio = () => {
  return (
    <main>
      {/* ── WORK ───────────────────────────────────── */}
      <section className="section pf-work" aria-labelledby="work-heading">
        <div className="container">
          <div className="section-head">
              <span className="eyebrow">Selected work</span>
              <h2 id="work-heading">Projects we are <span className="highlight">proud of</span></h2>
            </div>

          <div className="pf-grid">
            {PROJECTS.map((p) => (
              <article key={p.id} className="pf-card">
                <div className="pf-card__media">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>

                <div className="pf-card__body">
                  <span className="pf-card__category">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p className="pf-card__subtitle">{p.subtitle}</p>
                  <p className="pf-card__text">{p.description}</p>

                  <div className="pf-card__foot">
                    {p.result ? <span className="pf-card__result">{p.result}</span> : <span />}
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="pf-card__link">
                        Visit site <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="theme-dark cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Have a project in mind? <span className="highlight">Let&apos;s talk.</span></h2>
            <p>Tell us what you need. We reply within 24 hours with a clear plan and a written quote.</p>
          </div>
          <Link href="/contact" className="btn btn-primary">Start your project <FaArrowRight /></Link>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
