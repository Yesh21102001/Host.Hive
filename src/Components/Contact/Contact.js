import React, { useState, useEffect, useRef } from "react";
import "../Home.css";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaArrowRight, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate").forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, I'm ${formData.firstName} ${formData.lastName}. I'm interested in ${formData.service}. You can reach me at ${formData.email} or ${formData.phone}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6301253364?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
      });
    }, 2500);
  };

  return (
    <div className="hh-root">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="contact-hero">
        <div className="hero-grid-bg" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-noise" />
        <div className="contact-hero-content">
          <span className="eyebrow animate">Contact Us</span>
          <h1 className="contact-hero-title animate">Let's Build Something <span className="gold">Amazing</span></h1>
          <p className="contact-hero-desc animate">
            Got a project in mind? We'd love to hear about it. Get in touch and let's create something incredible together.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO ────────────────────────────── */}
      <section className="contact-info-section">
        <div className="section-inner">
          <div className="contact-info-grid">
            <div className="contact-info-card animate">
              <div className="info-icon"><FaPhone /></div>
              <h3>Phone</h3>
              <p className="info-value">+91 98765 43210</p>
              <p className="info-desc">Available Mon-Fri, 10 AM - 6 PM IST</p>
            </div>

            <div className="contact-info-card animate" style={{ "--delay": "0.1s" }}>
              <div className="info-icon"><FaEnvelope /></div>
              <h3>Email</h3>
              <p className="info-value">hello@hosthive.in</p>
              <p className="info-desc">We'll respond within 24 hours</p>
            </div>

            <div className="contact-info-card animate" style={{ "--delay": "0.2s" }}>
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <h3>Address</h3>
              <p className="info-value">Visakhapatnam</p>
              <p className="info-desc">Andhra Pradesh, India</p>
            </div>

            <div className="contact-info-card animate" style={{ "--delay": "0.3s" }}>
              <div className="info-icon"><FaClock /></div>
              <h3>Response Time</h3>
              <p className="info-value">Within 24 Hours</p>
              <p className="info-desc">Quick turnaround guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT ────────────────────────────── */}
      <section className="contact-main-section">
        <div className="section-inner contact-main-inner">
          <div className="contact-form-wrapper animate">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill in your details and we'll be in touch shortly</p>
            </div>

            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>We've received your message and will get back to you within 24 hours.</p>
                <p className="whatsapp-note">Opening WhatsApp for you...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-main">
                <div className="form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Service</option>
                  <option>Website Design</option>
                  <option>E-Commerce</option>
                  <option>Mobile App Development</option>
                  <option>SEO & Growth</option>
                  <option>Other</option>
                </select>

                <button type="submit" className="btn-primary full-width contact-submit">
                  Send Message <FaArrowRight />
                </button>
              </form>
            )}
          </div>

          <div className="contact-side animate" style={{ "--delay": "0.2s" }}>
            <div className="contact-side-card">
              <h3>Why Choose Us?</h3>
              <ul className="why-list">
                <li>✓ Expert team with 2+ years of experience</li>
                <li>✓ 100% client satisfaction rate</li>
                <li>✓ Quick turnaround times</li>
                <li>✓ Post-launch support included</li>
                <li>✓ Transparent communication</li>
                <li>✓ Competitive pricing</li>
              </ul>
            </div>

            <div className="contact-side-card">
              <h3>Connect With Us</h3>
              <div className="social-links-contact">
                <a href="#" className="social-btn-contact"><FaLinkedin /></a>
                <a href="#" className="social-btn-contact"><FaTwitter /></a>
                <a href="#" className="social-btn-contact"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
