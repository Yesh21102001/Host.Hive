import React from "react";
import "./Footer.css";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="simple-footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Host.Hive. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/host-hive-892b24410/" target="_blank" rel="noopener noreferrer" className="social-icon-simple"><FaLinkedin /></a>
          <a href="https://wa.me/6301253364" target="_blank" rel="noopener noreferrer" className="social-icon-simple"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/host.hive/" target="_blank" rel="noopener noreferrer" className="social-icon-simple"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
