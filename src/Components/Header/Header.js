import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Images/Host Hive.png";
import "./Header.css";
import { FaHome, FaBoxOpen, FaImages, FaPhoneAlt } from "react-icons/fa";

const navLinks = [
  { to: "/",          label: "Home",      icon: <FaHome />,     key: "#home"      },
  { to: "/portfolio", label: "Portfolio", icon: <FaBoxOpen />,  key: "/portfolio" },
  { to: "/gallery",   label: "Gallery",   icon: <FaImages />,   key: "/gallery"   },
  { to: "/Contact",   label: "Contact",   icon: <FaPhoneAlt />, key: "/Contact"   },
];

const Header = () => {
  const location  = useLocation();
  const [active,   setActive]   = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const { pathname, hash } = location;
    if      (pathname === "/portfolio") setActive("/portfolio");
    else if (pathname === "/gallery")   setActive("/gallery");
    else if (pathname === "/Contact")   setActive("/Contact");
    else if (hash)                      setActive(hash);
    else                                setActive("#home");
  }, [location]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ════ DESKTOP HEADER ════ */}
      <header className={`hdr ${scrolled ? "hdr--solid" : ""}`}>
        <div className="hdr__wrap">

          <Link to="/" className="hdr__logo" onClick={() => setActive("#home")}>
            <img src={Logo} alt="Host.Hive" />
          </Link>

          <nav className="hdr__nav">
            {navLinks.map((l) => (
              <Link
                key={l.key}
                to={l.to}
                className={`hdr__link ${active === l.key ? "hdr__link--on" : ""}`}
                onClick={() => setActive(l.key)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link to="/Contact" className="hdr__cta" onClick={() => setActive("/Contact")}>
            Get&nbsp;Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

        </div>
      </header>

      {/* ════ MOBILE TOP BAR ════ */}
      <header className="mhdr">
        <Link to="/" onClick={() => { setActive("#home"); setMenuOpen(false); }}>
          <img src={Logo} alt="Host.Hive" className="mhdr__logo" />
        </Link>

        <button
          className={`mhdr__burger ${menuOpen ? "mhdr__burger--open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* Mobile slide-down menu */}
      <div className={`mhdr__menu ${menuOpen ? "mhdr__menu--open" : ""}`}>
        <div className="mhdr__menu-inner">
          {navLinks.map((l) => (
            <Link
              key={l.key}
              to={l.to}
              className={`mhdr__mlink ${active === l.key ? "mhdr__mlink--on" : ""}`}
              onClick={() => { setActive(l.key); setMenuOpen(false); }}
            >
              <span className="mhdr__micon">{l.icon}</span>
              {l.label}
            </Link>
          ))}
          <Link
            to="/Contact"
            className="hdr__cta mhdr__mcta"
            onClick={() => { setActive("/Contact"); setMenuOpen(false); }}
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* ════ MOBILE BOTTOM NAV ════ */}
      <nav className="bnav">
        {navLinks.map((l) => (
          <Link
            key={l.key}
            to={l.to}
            className={`bnav__item ${active === l.key ? "bnav__item--on" : ""}`}
            onClick={() => setActive(l.key)}
          >
            <span className="bnav__bubble">
              {l.icon}
            </span>
            <span className="bnav__label">{l.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;