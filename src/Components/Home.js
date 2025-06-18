import React, { useState, useEffect } from "react";
import "./Home.css";
import website from "../Images/html-coding.png";
import Ecommerce from "../Images/ecommerce.png";
import app from "../Images/website.png";
import seo from "../Images/seo.png";
import Header from "./Header/Header";
import { FaAward, FaUsers, FaSmile, FaTasks } from "react-icons/fa";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
  });

  const achievements = [
    { icon: <FaAward />, value: "2+", label: "Years of Experience" },
    { icon: <FaUsers />, value: "10+", label: "Team Members" },
    { icon: <FaSmile />, value: "15+", label: "Happy Clients" },
    { icon: <FaTasks />, value: "18+", label: "Projects Delivered" },
  ];

  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll(".animate").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowPopup(false);
  };

  return (
    <div>
      <Header />
      {/* Home */}
      <div className="home-bg d-flex align-items-center justify-content-center text-center">
        <div className="overlay" />
        <div className="content container px-3">
          <p>Host.Hive</p>
          <h5 className="text-white fw-bold">
            Experts in Execution Delivering Excellence
          </h5>
          <div className="d-flex justify-content-center mt-3">
            <button
              type="button"
              className="send-btn"
              onClick={() => setShowPopup(true)}
            >
              <span className="text-light">Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 74 74"
                height="34"
                width="34"
              >
                <circle
                  strokeWidth="3"
                  stroke="white"
                  r="35.5"
                  cy="37"
                  cx="37"
                />
                <path
                  fill="white"
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Popup Form */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-form">
              {/* (X) Button */}
              <button
                className="popup-close-btn"
                onClick={() => setShowPopup(false)}
              >
                &times;
              </button>
              <h4 className="mb-3">Get in Touch</h4>
              <form onSubmit={handleSubmit}>
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
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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
                <input
                  type="text"
                  name="service"
                  placeholder="Which service are you looking for?"
                  value={formData.service}
                  onChange={handleChange}
                  required
                />
                <div className="submit-btn-container">
                  <button type="submit" className="send-btn">
                    <span className="text-light">Submit</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 74 74"
                      height="34"
                      width="34"
                    >
                      <circle
                        strokeWidth="3"
                        stroke="white"
                        r="35.5"
                        cy="37"
                        cx="37"
                      />
                      <path
                        fill="white"
                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <section className="welcome-section py-5 bg-light text-center">
        <div className="container">
          <h5 className="fw-bold text-uppercase mb-3 animate">Welcome to</h5>
          <h1 className="mb-3 heading animate">Host.Hive</h1>
          <p className="lead mx-auto animate" style={{ maxWidth: "800px" }}>
            Host.Hive is the Web Design and Development Company in
            Visakhapatnam, India. We are since 2024, in web design and
            development and our motto is to develop, design websites and
            generate lead and traffic for your website.
          </p>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center gx-4 gy-4">
            <div className="col-md-6 col-lg-3 d-flex justify-content-center animate">
              <div className="custom-section p-4 text-center">
                <img
                  src={website}
                  alt="Website Design"
                  className="section-icon mb-3"
                />
                <h5 className="fw-bold mb-2">Website Design</h5>
                <p>
                  Host.Hive is the Leading Low Cost Web Design Company In
                  Visakhapatnam. We design unique design which suits your
                  business.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex justify-content-center">
              <div className="custom-section p-4 text-center">
                <img
                  src={Ecommerce}
                  alt="E-Commerce Website Design"
                  className="section-icon mb-3"
                />
                <h5 className="fw-bold mb-2">E-Commerce Website Design</h5>
                <p>
                  Build your own shopping Website. We are the Top-Notch
                  E-Commerce Web Design In Visakhapatnam.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex justify-content-center">
              <div className="custom-section p-4 text-center">
                <img
                  src={app}
                  alt="Mobile App Development"
                  className="section-icon mb-3"
                />
                <h5 className="fw-bold mb-2">Mobile App Development</h5>
                <p>
                  We are living in the most advanced technology of connectivity,
                  and that means more than ever.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex justify-content-center">
              <div className="custom-section p-4 text-center">
                <img src={seo} alt="SEO" className="section-icon mb-3" />
                <h5 className="fw-bold mb-2">SEO</h5>
                <p>
                  Be the first to reach your target audience before competitors.
                  Host.Hive helps you through SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container1">
        <div className="why-us-content">
          <div className="why-us-header animate">
            <h2>Why Host.Hive?</h2>
            <p>
              Since 2024, we've been transforming ideas into digital reality.
              With a 10+ strong team, 15+ happy clients, and 18+ projects
              delivered. Our commitment to quality and innovation has made us a
              trusted name in app and web development.
            </p>
          </div>
          <div className="achievement-cards">
            {achievements.map((item, index) => (
              <div className="achievement-card animate" key={index}>
                <div className="achievement-icon">{item.icon}</div>
                <div className="achievement-content">
                  <div className="achievement-value">{item.value}</div>
                  <div className="achievement-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="testimonial-section">
        <div className="container">
          <h2 className="section-title text-center mb-5 animate">
            What Our Customers Say
          </h2>

          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {[
                {
                  name: "Priya Sharma",
                  message:
                    "Working with Host.Hive was a breeze. They brought my business idea to life beautifully.",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                  stars: 5,
                },
                {
                  name: "Rohan Mehta",
                  message:
                    "Amazing team! They handled everything with professionalism and creativity.",
                  img: "https://randomuser.me/api/portraits/men/46.jpg",
                  stars: 4,
                },
                {
                  name: "Ananya Reddy",
                  message:
                    "Prompt service, beautiful design, and fantastic support. Highly recommend!",
                  img: "https://randomuser.me/api/portraits/women/65.jpg",
                  stars: 5,
                },
                {
                  name: "Vikram Patel",
                  message:
                    "Loved the final website. The team exceeded expectations.",
                  img: "https://randomuser.me/api/portraits/men/34.jpg",
                  stars: 5,
                },
              ].map((review, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="d-flex justify-content-center">
                    <div className="testimonial-card text-center">
                      <img
                        src={review.img}
                        alt={review.name}
                        className="testimonial-img"
                      />
                      <p className="testimonial-message">"{review.message}"</p>
                      <div className="testimonial-stars">
                        {"★".repeat(review.stars)}
                        {"☆".repeat(5 - review.stars)}
                      </div>
                      <h6 className="testimonial-name">– {review.name}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon rounded-circle p-2 bg-dark"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon rounded-circle p-2 bg-dark"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
