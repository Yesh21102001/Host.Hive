import Link from "next/link";
import "../Home.css";
import "./ServicePage.css";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { getService } from "../../lib/services";

// One layout for every service landing page. Server-rendered so all the
// text is in the HTML for search engines.
const ServicePage = ({ service }) => {
  const related = service.related.map(getService);

  return (
    <main>
      {/* ── HERO ───────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <ol className="breadcrumb">
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{service.breadcrumb}</li>
          </ol>
          <span className="eyebrow">{service.eyebrow}</span>
          <h1>{service.h1}</h1>
          <p>{service.lead}</p>
          <div className="sv-actions">
            <Link href="/contact" className="btn btn-primary">Get a quote <FaArrowRight /></Link>
            <Link href="/pricing" className="btn btn-outline">See pricing</Link>
          </div>
        </div>
      </section>

      {/* ── KEY FACTS ──────────────────────────────── */}
      <section className="sv-facts" aria-label="Price and timeline">
        <div className="container sv-facts__grid">
          <div className="sv-fact">
            <span className="sv-fact__label">Starting price</span>
            <span className="sv-fact__value">{service.price}</span>
          </div>
          <div className="sv-fact">
            <span className="sv-fact__label">Typical timeline</span>
            <span className="sv-fact__value">{service.timeline}</span>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ────────────────────────── */}
      <section className="section" aria-labelledby="included-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What is included</span>
            <h2 id="included-heading">What you get with <span className="highlight">this service</span></h2>
          </div>
          <div className="grid grid--4">
            {service.included.map((item) => (
              <div key={item.title} className="card sv-included">
                <span className="sv-included__icon"><FaCheckCircle /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ────────────────────────────── */}
      <section className="section section--alt" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">How we work</span>
            <h2 id="process-heading">From first call to <span className="highlight">launch</span></h2>
          </div>
          <div className="grid grid--4">
            {service.steps.map((step, i) => (
              <div key={step.title} className="card step">
                <span className="step__num">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ───────────────────────────── */}
      <section className="section" aria-labelledby="audience-heading">
        <div className="container split">
          <div className="split__copy">
            <span className="eyebrow">Who it is for</span>
            <h2 id="audience-heading">Built for businesses <span className="highlight">like yours</span></h2>
          </div>
          <ul className="sv-audience">
            {service.audience.map((a) => (
              <li key={a}><FaCheckCircle /> {a}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────── */}
      <section className="section section--alt" aria-labelledby="faq-heading">
        <div className="container faq">
          <div className="faq__intro">
            <span className="eyebrow">Questions</span>
            <h2 id="faq-heading">Common questions about <span className="highlight">this service</span></h2>
            <p>Did not find your answer? Send us a message and we will reply within 24 hours.</p>
            <Link href="/contact" className="btn btn-outline">Ask us anything <FaArrowRight /></Link>
          </div>
          <div className="faq__list">
            {service.faqs.map((f) => (
              <details key={f.q} className="faq__item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED ────────────────────────────────── */}
      <section className="section" aria-labelledby="related-heading">
        <div className="container">
          <h2 id="related-heading" className="sv-related__title">Other services in Vizag</h2>
          <div className="grid grid--2">
            {related.map((r) => (
              <Link key={r.slug} href={r.path} className="card sv-related">
                <span>
                  <span className="sv-related__label">{r.breadcrumb}</span>
                  <strong>{r.h1}</strong>
                </span>
                <FaArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="theme-dark cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Ready to start? <span className="highlight">Let&apos;s talk.</span></h2>
            <p>Tell us about your business. We reply within 24 hours with a clear plan and a written quote.</p>
          </div>
          <Link href="/contact" className="btn btn-primary">Get a quote <FaArrowRight /></Link>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
