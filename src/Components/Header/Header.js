import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Images/Host Hive.png";
import "./Header.css";
import { FaHome, FaBoxOpen, FaImages, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const { pathname, hash } = location;
    if (pathname === "/portfolio") setActive("/portfolio");
    else if (hash) setActive(hash);
    else setActive("#home");
  }, [location]);

  return (
    <>
      {/* Desktop Header */}
      <header className="desktop-navbar">
        <div className="container header-desktop-inner">
          <img src={Logo} alt="Logo" className="logo-desktop" />
          <nav className="nav-desktop">
            <Link to="/#home" className="nav-link">
              <FaHome /> Home
            </Link>
            <Link to="/portfolio" className="nav-link">
              <FaBoxOpen /> Portfolio
            </Link>
            <Link to="/gallery" className="nav-link">
              <FaImages /> Gallery
            </Link>
            <Link to="/#contact" className="nav-link">
              <FaPhoneAlt /> Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="container header-mobile-inner">
          <img src={Logo} alt="Logo" className="logo-mobile" />
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="mobile-bottom-nav">
        <Link
          to="/#home"
          className={`bottom-link ${active === "#home" ? "active" : ""}`}
          onClick={() => setActive("#home")}
        >
          <div className="icon-wrapper">
            <FaHome />
          </div>
          {active === "#home" && <span>Home</span>}
        </Link>

        <Link
          to="/portfolio"
          className={`bottom-link ${active === "/portfolio" ? "active" : ""}`}
          onClick={() => setActive("/portfolio")}
        >
          <div className="icon-wrapper">
            <FaBoxOpen />
          </div>
          {active === "/portfolio" && <span>Portfolio</span>}
        </Link>

        <Link
          to="/gallery"
          className={`bottom-link ${active === "/gallery" ? "active" : ""}`}
          onClick={() => setActive("/gallery")}
        >
          <div className="icon-wrapper">
            <FaImages />
          </div>
          {active === "/gallery" && <span>Gallery</span>}
        </Link>

        <Link
          to="/#contact"
          className={`bottom-link ${active === "#contact" ? "active" : ""}`}
          onClick={() => setActive("#contact")}
        >
          <div className="icon-wrapper">
            <FaPhoneAlt />
          </div>
          {active === "#contact" && <span>Contact</span>}
        </Link>
      </nav>
    </>
  );
};

export default Header;
