import React, { useEffect } from "react";
import Logo from "../../Images/Logo.png";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to section when location changes
  useEffect(() => {
    const hash = location.hash.replace("#", ""); 
    if (hash) {
      scrollToSection(hash);
    }
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid header">
        <img src={Logo} alt="Bootstrap" width="130" height="80" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/#home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
