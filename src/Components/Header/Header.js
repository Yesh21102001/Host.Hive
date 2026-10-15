"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaHome, FaBoxOpen, FaRupeeSign, FaPhoneAlt } from "react-icons/fa";
import "./Header.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Tabs for the phone bottom bar.
const bottomLinks = [
  { href: "/", label: "Home", icon: <FaHome /> },
  { href: "/portfolio", label: "Portfolio", icon: <FaBoxOpen /> },
  { href: "/pricing", label: "Pricing", icon: <FaRupeeSign /> },
  { href: "/contact", label: "Contact", icon: <FaPhoneAlt /> },
];

// Home-page sections the menu follows while you scroll.
const SPY_SECTIONS = ["services", "about"];

const Header = () => {
  const pathname = usePathname();
  const navRef = useRef(null);
  const lastY = useRef(0);

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [spy, setSpy] = useState(null);
  const [pill, setPill] = useState({ left: 0, width: 0, show: false });

  // Scroll behaviour: solid background, progress line, hide on scroll down,
  // reveal on scroll up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);

      const dy = y - lastY.current;
      if (y < 80) setHidden(false);
      else if (dy > 6) setHidden(true);
      else if (dy < -6) setHidden(false);
      if (Math.abs(dy) > 6) lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // New page: close the menu, show the header, reset the scroll memory.
  useEffect(() => {
    setOpen(false);
    setHidden(false);
    lastY.current = window.scrollY;
    if (pathname !== "/") setSpy(null);
  }, [pathname]);

  // Home page: highlight the section currently in view.
  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const key = `/#${e.target.id}`;
          if (e.isIntersecting) setSpy(key);
          else setSpy((current) => (current === key ? null : current));
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SPY_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  // Sliding highlight: measure the active link and glide to it.
  const measurePill = useCallback(() => {
    const active = navRef.current?.querySelector("a.is-active");
    if (!active) {
      setPill((p) => (p.show ? { ...p, show: false } : p));
      return;
    }
    setPill({ left: active.offsetLeft, width: active.offsetWidth, show: true });
  }, []);

  useEffect(() => {
    measurePill();
    window.addEventListener("resize", measurePill);
    return () => window.removeEventListener("resize", measurePill);
  }, [measurePill, pathname, spy]);

  const isActive = (href) => {
    if (href.startsWith("/#")) return spy === href;
    if (href === "/") return pathname === "/" && !spy;
    return pathname === href;
  };

  // Keep the header visible while the mobile menu is open.
  const isHidden = hidden && !open;

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${isHidden ? "is-hidden" : ""}`}>
        <div className="hdr-progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />

        <div className="container site-header__inner">
          <Link href="/" className="brand" aria-label="Host Hive home">
            <Image src="/images/logo-header.png" alt="Host Hive" width={900} height={505} className="brand__logo" priority />
          </Link>

          <nav className="nav" aria-label="Main" ref={navRef}>
            <span
              className="nav__pill"
              aria-hidden="true"
              style={{
                transform: `translateX(${pill.left}px)`,
                width: pill.width,
                opacity: pill.show ? 1 : 0,
              }}
            />
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? "is-active" : undefined}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <Link href="/contact" className="btn btn-primary header-cta">Get a Quote</Link>
            <button
              type="button"
              className="burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${open ? "is-open" : ""}`}>
          <nav className="container mobile-menu__inner" aria-label="Mobile">
            {navLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={isActive(l.href) ? "is-active" : undefined}
                style={{ "--i": i }}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary btn-block" style={{ "--i": navLinks.length }}>
              Get a Quote
            </Link>
          </nav>
        </div>
      </header>

      {/* Phone bottom bar */}
      <nav className="bnav" aria-label="Quick links">
        {bottomLinks.map((l) => (
          <Link key={l.href} href={l.href} className={`bnav__item ${pathname === l.href ? "is-active" : ""}`}>
            <span className="bnav__icon">{l.icon}</span>
            <span className="bnav__label">{l.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;
