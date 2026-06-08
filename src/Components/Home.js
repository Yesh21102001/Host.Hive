import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import { FaAward, FaUsers, FaSmile, FaTasks, FaCode, FaShoppingCart, FaMobileAlt, FaSearch, FaCheckCircle, FaStar, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "" });
  const [submitted, setSubmitted] = useState(false);
  const observerRef = useRef(null);

  const achievements = [
    { icon: <FaAward />, value: "2+", label: "Years of Experience" },
    { icon: <FaUsers />, value: "10+", label: "Team Members" },
    { icon: <FaSmile />, value: "15+", label: "Happy Clients" },
    { icon: <FaTasks />, value: "18+", label: "Projects Delivered" },
  ];

  const services = [
    {
      icon: <FaCode />,
      title: "Website Design",
      desc: "Stunning, custom websites tailored to your brand identity. We craft pixel-perfect designs that convert visitors into clients.",
      tag: "Design",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce",
      desc: "Full-featured online stores with seamless checkout, inventory management, and payment gateway integration.",
      tag: "Commerce",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      desc: "Native and cross-platform mobile apps built for performance, delivering exceptional user experiences on every device.",
      tag: "Mobile",
    },
    {
      icon: <FaSearch />,
      title: "SEO & Growth",
      desc: "Data-driven SEO strategies that get you ranked, drive organic traffic, and turn your site into a lead-generating machine.",
      tag: "Marketing",
    },
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "We start by deeply understanding your business, goals, and target audience through structured workshops." },
    { step: "02", title: "Strategy", desc: "We map out a detailed roadmap — wireframes, tech stack, timelines — before writing a single line of code." },
    { step: "03", title: "Design", desc: "High-fidelity mockups that capture your brand voice. Iterative feedback loops until it's perfect." },
    { step: "04", title: "Development", desc: "Clean, scalable code built with modern best practices. Regular demos so you're never in the dark." },
    { step: "05", title: "Launch", desc: "Rigorous QA testing, performance optimization, then a smooth go-live with zero downtime." },
    { step: "06", title: "Support", desc: "We don't disappear post-launch. Ongoing maintenance, updates, and growth support — we're your long-term partner." },
  ];


  const testimonials = [
    { name: "Priya Sharma", role: "Founder, BloomBoutique", message: "Working with Host.Hive was a breeze. They brought my business idea to life beautifully. The attention to detail is unmatched.", img: "https://randomuser.me/api/portraits/women/44.jpg", stars: 5 },
    { name: "Rohan Mehta", role: "CEO, TechVentures", message: "Amazing team! They handled everything with professionalism and creativity. Our website traffic doubled in 3 months.", img: "https://randomuser.me/api/portraits/men/46.jpg", stars: 5 },
    { name: "Ananya Reddy", role: "Co-founder, StyleHub", message: "Prompt service, beautiful design, and fantastic support. They understood our vision from day one.", img: "https://randomuser.me/api/portraits/women/65.jpg", stars: 5 },
    { name: "Vikram Patel", role: "Director, GreenLeaf", message: "The team exceeded every expectation. Our e-commerce sales jumped 40% after the redesign.", img: "https://randomuser.me/api/portraits/men/34.jpg", stars: 5 },
  ];

  const faqs = [
    { q: "How long does a typical project take?", a: "Website projects usually take 3–6 weeks. E-commerce and mobile apps can take 6–12 weeks depending on complexity. We always give you a clear timeline upfront." },
    { q: "Do you offer post-launch support?", a: "Absolutely. We offer monthly maintenance packages that include updates, security patches, performance monitoring, and priority support." },
    { q: "What technologies do you work with?", a: "We work with React, Vue, Angular, Node.js, PHP, Laravel, React Native, and more. We choose the best tech stack based on your project's specific needs." },
    { q: "Can you redesign my existing website?", a: "Yes! Redesigns are one of our specialties. We analyze your current site, identify pain points, and deliver a modern, high-converting redesign." },
    { q: "How much does a website cost?", a: "Pricing varies by scope — a basic site starts around ₹15,000 while full e-commerce platforms can go upward of ₹60,000. We provide detailed quotes after understanding your requirements." },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate").forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, I'm ${formData.firstName} ${formData.lastName}. I'm interested in ${formData.service}. You can reach me at ${formData.email} or ${formData.phone}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6301253364?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => { setShowPopup(false); setSubmitted(false); setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "" }); }, 2500);
  };

  return (
    <div className="hh-root">
      <Helmet>
        <title>Host Hive | Website Development Company in Vizag</title>
        <meta
          name="description"
          content="Host Hive is a professional web design and app development company in Visakhapatnam offering website development, ecommerce solutions and mobile app development."
        />
        <meta
          name="keywords"
          content="website development vizag, web design company vizag, ecommerce development vizag, react js developers vizag, app development company visakhapatnam"
        />
        <meta name="author" content="Host Hive" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Host Hive" />
        <meta
          property="og:description"
          content="Professional website and app development company in Vizag."
        />
        <meta property="og:image" content="https://hosthive.online/logo.png" />
        <meta property="og:url" content="https://hosthive.online" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-grid-bg" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-noise" />
        <div className="hero-content">
          <div className="hero-badge animate">Web Design &amp; Development</div>
          <h1 className="hero-title animate">
            <span className="brand-glow">Host.Hive</span>
            <br />
            <span className="hero-sub">Experts in Execution</span>
          </h1>
          <p className="hero-desc animate">
            Transforming ideas into powerful digital experiences.<br />
            Visakhapatnam's most trusted web &amp; app studio.
          </p>
          <div className="hero-actions animate">
            <button className="btn-primary" onClick={() => setShowPopup(true)}>
              Get Started <FaArrowRight />
            </button>
            <a href="/Portfolio" className="btn-ghost">View Our Work</a>
          </div>
          <div className="hero-stats animate">
            {achievements.map((a, i) => (
              <div className="hero-stat" key={i}>
                <span className="stat-icon">{a.icon}</span>
                <strong>{a.value}</strong>
                <small>{a.label}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────── */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {["Website Design", "E-Commerce", "Mobile Apps", "SEO", "UI/UX Design", "Branding", "Website Design", "E-Commerce", "Mobile Apps", "SEO", "UI/UX Design", "Branding"].map((t, i) => (
            <span key={i}>{t} <span className="marquee-dot">✦</span></span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section className="about-section">
        <div className="section-inner">
          <div className="about-text">
            <span className="eyebrow animate">Who We Are</span>
            <h2 className="section-title animate">Crafting Digital Excellence <span className="gold">Since 2024</span></h2>
            <p className="animate">We're a passionate team of designers, developers, and strategists based in Visakhapatnam, India. Our mission is to build digital products that don't just look good — they perform, convert, and grow your business.</p>
            <ul className="about-list animate">
              {["Client-first approach to every project", "Transparent communication & timelines", "Post-launch support and maintenance", "Cutting-edge tech for future-ready builds"].map((item, i) => (
                <li key={i}><FaCheckCircle className="check-icon" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="about-visual animate">
            <div className="av-card av-card-1">
              <strong>18+</strong><span>Projects Delivered</span>
            </div>
            <div className="av-card av-card-2">
              <strong>15+</strong><span>Happy Clients</span>
            </div>
            <div className="av-card av-card-3">
              <strong>100%</strong><span>Client Satisfaction</span>
            </div>
            <div className="av-ring" />
            <div className="av-dot-grid" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="services-section" id="services">
        <div className="section-inner">
          <div className="section-header animate">
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Our <span className="gold">Services</span></h2>
            <p>Everything you need to build, grow, and scale your digital presence.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card animate" key={i} style={{ "--delay": `${i * 0.1}s` }}>
                <div className="service-tag">{s.tag}</div>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-arrow"><FaArrowRight /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────── */}
      <section className="process-section" id="process">
        <div className="section-inner">
          <div className="section-header animate">
            <span className="eyebrow">How We Work</span>
            <h2 className="section-title">Our <span className="gold">Process</span></h2>
            <p>A proven 6-step framework that delivers results every time.</p>
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <div className="process-card animate" key={i} style={{ "--delay": `${i * 0.08}s` }}>
                <div className="process-step">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="testi-section">
        <div className="section-inner">
          <div className="section-header animate">
            <span className="eyebrow">Client Love</span>
            <h2 className="section-title">What They <span className="gold">Say</span></h2>
          </div>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div className="testi-card animate" key={i} style={{ "--delay": `${i * 0.1}s` }}>
                <div className="testi-stars">{Array(t.stars).fill(0).map((_, j) => <FaStar key={j} />)}</div>
                <p>"{t.message}"</p>
                <div className="testi-author">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="faq-section">
        <div className="section-inner">
          <div className="section-header animate">
            <span className="eyebrow">Common Questions</span>
            <h2 className="section-title">FAQ<span className="gold">s</span></h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item animate ${activeFaq === i ? "open" : ""}`} key={i} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="faq-q">
                  <span>{f.q}</span>
                  {activeFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {activeFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-blob" />
        <div className="cta-inner animate">
          <h2>Ready to Build Something <span className="gold">Incredible?</span></h2>
          <p>Let's discuss your project and turn your vision into reality.</p>
          <button className="btn-primary" onClick={() => setShowPopup(true)}>
            Start Your Project <FaArrowRight />
          </button>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section className="contact-section" id="contact">
        <div className="section-inner contact-inner">
          <div className="contact-info animate">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="section-title">Let's <span className="gold">Connect</span></h2>
            <p>Have a project in mind? Drop us a message and we'll get back to you within 24 hours.</p>
            <div className="contact-details">
              <div className="contact-item"><FaEnvelope /><span>hello@hosthive.in</span></div>
              <div className="contact-item"><FaPhone /><span>+91 98765 43210</span></div>
              <div className="contact-item"><FaMapMarkerAlt /><span>Visakhapatnam, Andhra Pradesh, India</span></div>
            </div>
            <div className="social-links">
              <button type="button" className="social-btn"><FaLinkedin /></button>
              <button type="button" className="social-btn"><FaTwitter /></button>
              <button type="button" className="social-btn"><FaInstagram /></button>
            </div>
          </div>
          <form className="contact-form animate" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Select a Service</option>
              <option>Website Design</option>
              <option>E-Commerce</option>
              <option>Mobile App Development</option>
              <option>SEO</option>
            </select>
            <button type="submit" className="btn-primary full-width">
              {submitted ? "Message Sent! ✓" : "Send Message"} {!submitted && <FaArrowRight />}
            </button>
          </form>
        </div>
      </section>


      {/* ── POPUP ────────────────────────────────────── */}
      {showPopup && (
        <div className="popup-overlay" onClick={(e) => e.target.classList.contains("popup-overlay") && setShowPopup(false)}>
          <div className="popup-box">
            <button className="popup-close" onClick={() => setShowPopup(false)}>&times;</button>
            {submitted ? (
              <div className="popup-success">
                <div className="success-icon">✓</div>
                <h3>We'll be in touch!</h3>
                <p>Thanks for reaching out. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="popup-header">
                  <h3>Start Your Project</h3>
                  <p>Fill in your details and we'll get back to you within 24 hours.</p>
                </div>
                <form className="popup-form-inner" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                  </div>
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Select a Service</option>
                    <option>Website Design</option>
                    <option>E-Commerce</option>
                    <option>Mobile App Development</option>
                    <option>SEO</option>
                  </select>
                  <button type="submit" className="btn-primary full-width">
                    Submit Request <FaArrowRight />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;