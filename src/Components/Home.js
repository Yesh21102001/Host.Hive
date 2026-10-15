"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Home.css";
import QuoteForm from "./QuoteForm/QuoteForm";
import { FaArrowRight, FaCheckCircle, FaCode, FaShoppingCart, FaMobileAlt, FaSearch, FaStar, FaTimes, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { faqs } from "../lib/faqs";
import { STATS, PHONE_DISPLAY, EMAIL, ADDRESS_LINE, HOURS_LINE } from "../lib/site";

const services = [
  { icon: <FaCode />, title: "Website design", desc: "Custom websites that match your brand and turn visitors into enquiries. Fast, clean and built to be found on Google.", href: "/website-development-vizag" },
  { icon: <FaShoppingCart />, title: "E-commerce stores", desc: "Online shops with product catalogues, inventory, secure checkout and payment gateway integration.", href: "/ecommerce-website-development" },
  { icon: <FaMobileAlt />, title: "Mobile apps", desc: "Android and iOS apps, built natively or cross-platform, tested and tuned before launch.", href: "/mobile-app-development-vizag" },
  { icon: <FaSearch />, title: "SEO & growth", desc: "Search-ready pages, clear structure and measurable growth, so the right customers find you.", href: "/seo-services-vizag" },
];

const process = [
  { step: "01", title: "Discovery", desc: "We learn your business, goals and audience through structured workshops." },
  { step: "02", title: "Strategy", desc: "Wireframes, tech stack and timelines, agreed before we write any code." },
  { step: "03", title: "Design", desc: "High-fidelity designs that capture your brand. We refine them with your feedback." },
  { step: "04", title: "Development", desc: "Clean, scalable code with regular demos, so you are never in the dark." },
  { step: "05", title: "Launch", desc: "Full QA testing, performance tuning and a smooth go-live." },
  { step: "06", title: "Support", desc: "Ongoing maintenance, updates and growth support after launch." },
];

const testimonials = [
  { name: "Priya Sharma", role: "Founder, BloomBoutique", message: "Working with Host Hive was a breeze. They brought my business idea to life beautifully. The attention to detail is unmatched.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Rohan Mehta", role: "CEO, TechVentures", message: "Amazing team! They handled everything with professionalism and creativity. Our website traffic doubled in 3 months.", img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "Ananya Reddy", role: "Co-founder, StyleHub", message: "Prompt service, beautiful design, and fantastic support. They understood our vision from day one.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Vikram Patel", role: "Director, GreenLeaf", message: "The team exceeded every expectation. Our e-commerce sales jumped 40% after the redesign.", img: "https://randomuser.me/api/portraits/men/34.jpg" },
];

const aboutPoints = [
  "Client-first approach to every project",
  "Transparent communication and timelines",
  "Post-launch support and maintenance",
  "Modern tech for future-ready builds",
];

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Close the popup with the Escape key.
  useEffect(() => {
    if (!showPopup) return;
    const onKey = (e) => e.key === "Escape" && setShowPopup(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showPopup]);

  return (
    <main>
      {/* ── HERO ───────────────────────────────────── */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">Web design &amp; app development</span>
            <h1>
              Websites and apps that <span className="highlight">grow your business</span>
            </h1>
            <p className="hero__lead">
              Host Hive is Visakhapatnam&apos;s web and app studio. We turn ideas into fast, professional
              digital experiences that customers trust.
            </p>
            <div className="hero__actions">
              <button type="button" className="btn btn-primary" onClick={() => setShowPopup(true)}>
                Get started <FaArrowRight />
              </button>
              <Link href="/portfolio" className="btn btn-outline">View our work</Link>
            </div>
            <ul className="hero__points">
              <li><FaCheckCircle /> Reply within 24 hours</li>
              <li><FaCheckCircle /> Transparent pricing</li>
              <li><FaCheckCircle /> Support after launch</li>
            </ul>
          </div>

          <div className="hero__visual">
            <div className="hero__frame">
              <Image
                src="/images/hero-office.jpg"
                alt="Modern office with city views, the kind of workspace we design digital products for"
                width={1600}
                height={1067}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="hero__badge">
              <strong>18+</strong>
              <span>Projects delivered</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────── */}
      <section className="theme-dark stats-band" aria-label="Host Hive in numbers">
        <div className="container stats-band__grid">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────── */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head-row">
            <div className="section-head">
              <span className="eyebrow">What we do</span>
              <h2>Services built for <span className="highlight">growth</span></h2>
              <p>Everything you need to build, launch and grow your digital presence, from one team.</p>
            </div>
            <Link href="/pricing" className="btn btn-outline">See pricing <FaArrowRight /></Link>
          </div>

          <div className="grid grid--4">
            {services.map((s) => (
              <article key={s.title} className="card service">
                <span className="service__icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href={s.href} className="btn-ghost service__link">
                  Learn more <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────── */}
      <section className="section section--alt" id="about">
        <div className="container split">
          <div className="split__media">
            <div className="split__image">
              <Image
                src="/images/about-team.jpg"
                alt="A Host Hive team member reviewing a client project"
                width={1200}
                height={801}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="split__badge">
              <strong>2+</strong>
              <span>Years of experience</span>
            </div>
          </div>

          <div className="split__copy">
            <span className="eyebrow">Who we are</span>
            <h2>Crafting digital excellence <span className="highlight">since 2024</span></h2>
            <p>
              We are a team of designers, developers and strategists based in Visakhapatnam. We build digital
              products that do more than look good. They perform, convert and grow with your business.
            </p>
            <ul className="about-points">
              {aboutPoints.map((p) => (
                <li key={p}><FaCheckCircle /> {p}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary">Talk to our team <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">How we work</span>
            <h2>A proven <span className="highlight">six-step process</span></h2>
            <p>A clear path from first call to launch, with no surprises along the way.</p>
          </div>

          <div className="grid grid--3">
            {process.map((p) => (
              <div key={p.step} className="card step">
                <span className="step__num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Client love</span>
            <h2>What our clients <span className="highlight">say</span></h2>
          </div>

          <div className="grid grid--2">
            {testimonials.map((t) => (
              <figure key={t.name} className="card quote">
                <div className="quote__stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, j) => <FaStar key={j} />)}
                </div>
                <blockquote>&ldquo;{t.message}&rdquo;</blockquote>
                <figcaption>
                  <img src={t.img} alt="" width="48" height="48" loading="lazy" />
                  <span>
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container faq">
          <div className="faq__intro">
            <span className="eyebrow">Common questions</span>
            <h2>Questions, <span className="highlight">answered</span></h2>
            <p>Still have a question? Send us a message and we will reply within 24 hours.</p>
            <Link href="/contact" className="btn btn-outline">Ask us anything <FaArrowRight /></Link>
          </div>

          <div className="faq__list">
            {faqs.map((f) => (
              <details key={f.q} className="faq__item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────── */}
      <section className="theme-dark cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Ready to build something <span className="highlight">incredible?</span></h2>
            <p>Tell us about your project. We will turn your vision into a plan you can trust.</p>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => setShowPopup(true)}>
            Start your project <FaArrowRight />
          </button>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────── */}
      <section className="section" id="contact">
        <div className="container split split--contact">
          <div className="split__copy">
            <span className="eyebrow">Get in touch</span>
            <h2>Let&apos;s <span className="highlight">connect</span></h2>
            <p>Have a project in mind? Send us a message and we will get back to you within 24 hours.</p>
            <ul className="contact-list">
              <li><span className="contact-list__icon"><FaPhoneAlt /></span><a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}>{PHONE_DISPLAY}</a></li>
              <li><span className="contact-list__icon"><FaEnvelope /></span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><span className="contact-list__icon"><FaMapMarkerAlt /></span><span>{ADDRESS_LINE}</span></li>
              <li><span className="contact-list__icon"><FaClock /></span><span>{HOURS_LINE}</span></li>
            </ul>
          </div>

          <div className="card form-card">
            <h3>Send us a message</h3>
            <p>Fill in your details and we will be in touch shortly.</p>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* ── POPUP ──────────────────────────────────── */}
      {showPopup && (
        <div className="popup-overlay" role="presentation" onClick={() => setShowPopup(false)}>
          <div
            className="popup card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="popup__close" aria-label="Close" onClick={() => setShowPopup(false)}>
              <FaTimes />
            </button>
            <h3 id="popup-title">Start your project</h3>
            <p>Fill in your details and we will get back to you within 24 hours.</p>
            <QuoteForm onSent={() => setShowPopup(false)} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
