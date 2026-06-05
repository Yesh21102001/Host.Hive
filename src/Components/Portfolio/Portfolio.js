import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import { FaArrowRight } from "react-icons/fa";
import rrbrosImg from "../../Images/rrbros.png";
import huayinImg from "../../Images/Huain_trade.png";

const Portfolio = () => {
  const observerRef = useRef(null);

  const projects = [
    {
      id: 1,
      category: "RETAIL E-COMMERCE",
      title: "RR Bros",
      subtitle: "Multi-Category Shopping Mall",
      description: "A comprehensive online presence for a Visakhapatnam-based multi-category retail store specializing in wedding garments, festive wear, and family fashion. Features curated collections, inventory management, and seamless shopping experience.",
      tagline: "Complete family shopping destination",
      color: "#fec62a",
      results: "Enhanced online presence",
      year: "2024",
      link: "https://rrbros.in/",
      image: rrbrosImg
    },
    {
      id: 2,
      category: "INTERNATIONAL TRADE",
      title: "Huayin Trade",
      subtitle: "China-India Trade Platform",
      description: "A sophisticated B2B trading platform connecting Indian and Chinese suppliers for bulk commodities, minerals, and industrial equipment. Streamlines cross-border supply chain with real-time inventory, logistics tracking, and trade documentation.",
      tagline: "Global trade made seamless",
      color: "#4ecdc4",
      results: "30+ countries served",
      year: "2024",
      link: "https://www.huaintrade.com/",
      image: huayinImg
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
                <div className="project-hero" style={{ backgroundImage: project.image ? `url(${project.image})` : `linear-gradient(135deg, ${project.color}40 0%, ${project.color}20 100%)` }}>
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <span className="project-category" style={{ color: project.color }}>
                    {project.category}
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>

                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="read-story">
                      Visit Website <FaArrowRight />
                    </a>
                  ) : (
                    <button type="button" className="read-story">
                      Read the story <FaArrowRight />
                    </button>
                  )}
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