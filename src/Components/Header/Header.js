import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import "./Header.css";

// React Icons
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaBoxOpen,
  FaImages,
  FaPhoneAlt,
} from "react-icons/fa";

const Header = () => {
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) scrollToSection(hash);
  }, [location]);

  return (
    <>
      {/* ===== Desktop Header ===== */}
      <header className="desktop-navbar">
        <div className="container header-desktop-inner">
          <img src={Logo} alt="Logo" className="logo-desktop" />
          <nav className="nav-desktop">
            <Link className="nav-link" to="/#home">Home</Link>
            <Link className="nav-link" to="/#about">About</Link>
            <Link className="nav-link" to="/#services">Services</Link>
            <Link className="nav-link" to="/#products">Products</Link>
            <Link className="nav-link" to="/gallery">Gallery</Link>
            <Link className="nav-link" to="/#contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* ===== Mobile Header (logo only) ===== */}
      <header className="mobile-header">
        <div className="container header-mobile-inner">
          <img src={Logo} alt="Logo" className="logo-mobile" />
        </div>
      </header>

      {/* ===== Mobile Bottom Navigation ===== */}
      <nav className="mobile-bottom-nav" aria-label="Mobile bottom navigation">
        <Link to="/#home" className="bottom-link">
          <FaHome />
          <span>Home</span>
        </Link>
        
        <Link to="/#products" className="bottom-link">
          <FaBoxOpen />
          <span>Products</span>
        </Link>
        <Link to="/gallery" className="bottom-link">
          <FaImages />
          <span>Gallery</span>
        </Link>
        <Link to="/#contact" className="bottom-link">
          <FaPhoneAlt />
          <span>Contact</span>
        </Link>
      </nav>
    </>
  );
};

export default Header;
