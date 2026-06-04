import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const observerRef = useRef(null);

  const projects = [
    {
      id: 1,
      category: "E-COMMERCE PLATFORM",
      title: "ShopNest",
      subtitle: "Premium Fashion Store",
      description: "A full-featured e-commerce platform with seamless checkout, inventory management, and personalized recommendations that increased client sales by 200%.",
      tagline: "Elegant shopping experience",
      color: "#fec62a",
      results: "200% sales increase",
      year: "2024"
    },
    {
      id: 2,
      category: "SAAS SOLUTION",
      title: "TrakFlow",
      subtitle: "Project Management Suite",
      description: "Cloud-based project management tool with real-time collaboration, advanced analytics, and team automation serving over 10,000 active users.",
      tagline: "Streamlined team collaboration",
      color: "#4ecdc4",
      results: "10K+ active users",
      year: "2024"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate").forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="portfolio-root">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="portfolio-hero">
        <div className="hero-grid-bg" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-noise" />
        <div className="hero-content">
          <div className="hero-badge animate">Our Creations</div>
          <h1 className="hero-title animate">
            Exceptional <span className="brand-glow">Work</span>
            <br />
            <span className="hero-sub">We've Done</span>
          </h1>
          <p className="hero-desc animate">
            Explore our portfolio of successful projects across e-commerce,<br />
            SaaS, mobile apps, and creative platforms.
          </p>
        </div>
      </section>

      {/* ── PROJECTS GRID ────────────────────────────── */}
      <section className="projects-section">
        <div className="section-inner">
          <div className="projects-grid">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="project-card animate"
                style={{ "--delay": `${i * 0.1}s`, "--accent": project.color }}
              >
                {/* Project Hero Image */}
                <div className="project-hero" style={{ background: `linear-gradient(135deg, ${project.color}40 0%, ${project.color}20 100%)` }}>
                  <div className="hero-overlay" />
                  <div className="hero-content">
                    <p className="hero-tagline">{project.tagline}</p>
                    <h2 className="hero-title">{project.title}</h2>
                  </div>
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <span className="project-category" style={{ color: project.color }}>
                    {project.category}
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>

                  <a href="javascript:void(0)" className="read-story">
                    Read the story <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <section className="stats-section">
        <div className="section-inner">
          <div className="stats-grid">
            <div className="stat-card animate">
              <div className="stat-number">50+</div>
              <div className="stat-text">Projects Delivered</div>
            </div>
            <div className="stat-card animate" style={{ "--delay": "0.1s" }}>
              <div className="stat-number">40+</div>
              <div className="stat-text">Happy Clients</div>
            </div>
            <div className="stat-card animate" style={{ "--delay": "0.2s" }}>
              <div className="stat-number">8+</div>
              <div className="stat-text">Years Experience</div>
            </div>
            <div className="stat-card animate" style={{ "--delay": "0.3s" }}>
              <div className="stat-number">99%</div>
              <div className="stat-text">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-blob" />
        <div className="cta-inner animate">
          <h2>Ready to Build Your <span className="gold">Next Project?</span></h2>
          <p>Let's create something extraordinary together.</p>
          <button className="btn-primary">
            Start Your Project <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;