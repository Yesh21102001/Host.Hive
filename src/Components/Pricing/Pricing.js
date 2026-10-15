import Link from "next/link";
import "../Home.css";
import "./Pricing.css";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { PLANS, PRICE_FACTORS, PRICING_FAQS } from "../../lib/pricing";

// Server-rendered: all text is in the HTML for search engines.
// No hooks and no scroll animations, so nothing waits on JavaScript.
const Pricing = () => {
  return (
    <main>
      {/* ── PLANS ──────────────────────────────────── */}
      <section className="section pricing-first" aria-labelledby="plans-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Plans</span>
            <h2 id="plans-heading">Website and app <span className="highlight">pricing plans</span></h2>
            <p>Prices are before GST. Each plan is a starting point, and your final quote depends on scope.</p>
          </div>

          <div className="grid grid--4">
            {PLANS.map((plan) => (
              <article key={plan.name} className={`card plan ${plan.featured ? "plan--featured" : ""}`}>
                {plan.featured && <span className="plan__badge">Best for online sales</span>}
                <h3>{plan.name}</h3>
                <p className="plan__audience">{plan.audience}</p>

                <div className={`plan__price ${plan.startingPrice ? "" : "plan__price--custom"}`}>
                  {plan.priceLabel}
                  <small>{plan.priceNote}</small>
                </div>

                <ul className="plan__list">
                  {plan.features.map((f) => (
                    <li key={f}><FaCheckCircle /> {f}</li>
                  ))}
                </ul>

                <p className="plan__timeline">Typical timeline: {plan.timeline}</p>
                <Link href="/contact" className={`btn btn-block ${plan.featured ? "btn-primary" : "btn-outline"}`}>
                  {plan.startingPrice ? "Start this plan" : "Request a quote"} <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINES ──────────────────────────────── */}
      <section className="section section--alt" aria-labelledby="timeline-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Timelines</span>
            <h2 id="timeline-heading">How long each <span className="highlight">project takes</span></h2>
            <p>Timelines start after we agree on scope and receive your content.</p>
          </div>

          <div className="card table-card">
            <table className="price-table">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Starting price</th>
                  <th scope="col">Typical timeline</th>
                </tr>
              </thead>
              <tbody>
                {PLANS.map((plan) => (
                  <tr key={plan.name}>
                    <th scope="row">{plan.name}</th>
                    <td data-label="Starting price">{plan.startingPrice ? `₹${plan.startingPrice.toLocaleString("en-IN")}` : "Custom quote"}</td>
                    <td data-label="Timeline">{plan.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FACTORS ────────────────────────────────── */}
      <section className="section" aria-labelledby="factors-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What affects cost</span>
            <h2 id="factors-heading">What changes the <span className="highlight">price</span></h2>
            <p>Four things decide most project costs. We explain each one before you sign off.</p>
          </div>

          <div className="grid grid--4">
            {PRICE_FACTORS.map((f) => (
              <div key={f.title} className="card factor">
                <span className="factor__icon"><FaCheckCircle /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────── */}
      <section className="section section--alt" aria-labelledby="faq-heading">
        <div className="container faq">
          <div className="faq__intro">
            <span className="eyebrow">Pricing questions</span>
            <h2 id="faq-heading">Clear answers about <span className="highlight">cost</span></h2>
            <p>Did not find your answer here? Send us a message and we will reply within 24 hours.</p>
            <Link href="/contact" className="btn btn-outline">Ask us anything <FaArrowRight /></Link>
          </div>

          <div className="faq__list">
            {PRICING_FAQS.map((f) => (
              <details key={f.q} className="faq__item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="theme-dark cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Get a clear quote for <span className="highlight">your project</span></h2>
            <p>Tell us what you need. We reply within 24 hours with a written quote.</p>
          </div>
          <Link href="/contact" className="btn btn-primary">Contact us <FaArrowRight /></Link>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
