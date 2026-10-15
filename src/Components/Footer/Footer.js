import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { PHONE_DISPLAY, PHONE_E164, EMAIL, ADDRESS_LINE } from "../../lib/site";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-dark site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/images/logo-footer.png" alt="Host Hive" width={900} height={505} className="footer-logo" />
          <p>
            Web design, e-commerce and mobile app studio in Visakhapatnam. We build digital products that
            look good, perform well and grow your business.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/host-hive-892b24410/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={`https://wa.me/${PHONE_E164.replace("+", "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/host.hive/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><Link href="/website-development-vizag">Website design</Link></li>
            <li><Link href="/ecommerce-website-development">E-commerce stores</Link></li>
            <li><Link href="/mobile-app-development-vizag">Mobile apps</Link></li>
            <li><Link href="/seo-services-vizag">SEO &amp; growth</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/#about">About us</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Get in touch</h4>
          <ul className="footer-contact">
            <li><FaPhoneAlt /> <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}>{PHONE_DISPLAY}</a></li>
            <li><FaEnvelope /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><FaMapMarkerAlt /> <span>{ADDRESS_LINE}</span></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {currentYear} Host Hive. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
