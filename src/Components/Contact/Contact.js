import Link from "next/link";
import "../Home.css";
import "./Contact.css";
import QuoteForm from "../QuoteForm/QuoteForm";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { PHONE_DISPLAY, PHONE_E164, EMAIL, ADDRESS_LINE, HOURS_LINE, SOCIAL_PROFILES } from "../../lib/site";

const reasons = [
  "Expert team with 2+ years of experience",
  "100% client satisfaction rate",
  "Quick turnaround times",
  "Post-launch support included",
  "Transparent communication",
  "Competitive pricing",
];

const Contact = () => {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <ol className="breadcrumb">
            <li><Link href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Contact</li>
          </ol>
          <span className="eyebrow">Contact us</span>
          <h1>Let&apos;s build something <span className="highlight">amazing</span></h1>
          <p>
            Got a project in mind? We would love to hear about it. Get in touch and let&apos;s create
            something incredible together.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split split--contact">
          <div className="split__copy">
            <span className="eyebrow">Reach us directly</span>
            <h2>Talk to <span className="highlight">our team</span></h2>
            <p>Prefer a call or a chat? Use any of the channels below. We reply within 24 hours.</p>

            <ul className="contact-list">
              <li>
                <span className="contact-list__icon"><FaPhoneAlt /></span>
                <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                <span className="contact-list__icon"><FaEnvelope /></span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <span className="contact-list__icon"><FaMapMarkerAlt /></span>
                <span>{ADDRESS_LINE}</span>
              </li>
              <li>
                <span className="contact-list__icon"><FaClock /></span>
                <span>{HOURS_LINE}</span>
              </li>
            </ul>

            <div className="contact-social">
              <a href={SOCIAL_PROFILES[0]} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href={`https://wa.me/${PHONE_E164.replace("+", "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href={SOCIAL_PROFILES[1]} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            </div>

            <div className="contact-reasons">
              <h3>Why choose us</h3>
              <ul>
                {reasons.map((r) => (
                  <li key={r}><FaCheckCircle /> {r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card form-card">
            <h3>Send us a message</h3>
            <p>Fill in your details and we will be in touch shortly.</p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
