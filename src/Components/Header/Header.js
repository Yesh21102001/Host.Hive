import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import "./Header.css";
import { FaHome, FaBoxOpen, FaImages, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState("#home");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Update active state whenever location changes
    const { pathname, hash } = location;

    if (pathname === "/gallery") {
      setActive("/gallery");
    } else if (hash) {
      setActive(hash);
      scrollToSection(hash.replace("#", ""));
    } else {
      setActive("#home");
    }
  }, [location]);

  return (
    <>
      {/* ===== Desktop Header ===== */}
      <header className="desktop-navbar">
        <div className="container header-desktop-inner">
          <img src={Logo} alt="Logo" className="logo-desktop" />
          <nav className="nav-desktop">
            <Link className="nav-link" to="/#home">Home</Link>
            <Link className="nav-link" to="/#products">Products</Link>
            <Link className="nav-link" to="/gallery">Gallery</Link>
            <Link className="nav-link" to="/#contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* ===== Mobile Header (Logo Only) ===== */}
      <header className="mobile-header">
        <div className="container header-mobile-inner">
          <img src={Logo} alt="Logo" className="logo-mobile" />
        </div>
      </header>

      {/* ===== Mobile Bottom Navigation ===== */}
      <nav className="mobile-bottom-nav" aria-label="Mobile bottom navigation">
        <Link
          to="/#home"
          className={`bottom-link ${active === "#home" ? "active" : ""}`}
          onClick={() => setActive("#home")}
        >
          <div className="icon-wrapper"><FaHome /></div>
          {active === "#home" && <span>Home</span>}
        </Link>

        <Link
          to="/#products"
          className={`bottom-link ${active === "#products" ? "active" : ""}`}
          onClick={() => setActive("#products")}
        >
          <div className="icon-wrapper"><FaBoxOpen /></div>
          {active === "#products" && <span>Products</span>}
        </Link>

        <Link
          to="/gallery"
          className={`bottom-link ${active === "/gallery" ? "active" : ""}`}
          onClick={() => setActive("/gallery")}
        >
          <div className="icon-wrapper"><FaImages /></div>
          {active === "/gallery" && <span>Gallery</span>}
        </Link>

        <Link
          to="/#contact"
          className={`bottom-link ${active === "#contact" ? "active" : ""}`}
          onClick={() => setActive("#contact")}
        >
          <div className="icon-wrapper"><FaPhoneAlt /></div>
          {active === "#contact" && <span>Contact</span>}
        </Link>
      </nav>
    </>
  );
};

export default Header;
