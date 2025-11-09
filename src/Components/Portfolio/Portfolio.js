import React, { useState } from "react";
import Header from "../Header/Header";
import Delicious from "../../Images/delicious.png";
import Eggora from "../../Images/Eggora.png";
import Ans from "../../Images/Ans.png";
import Bhamas from "../../Images/Bhamas.png";
import kanaka from "../../Images/kanakadurga.png";
import Chandu from "../../Images/Chandu.png";
import "./Portfolio.css";
import "../Home.css";

const Portfolio = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <Header />
      {/* Banner Section */}
      <div className="banner position-relative d-flex justify-content-center align-items-center">
        <div className="banner-overlay"></div>
        <h1 className="fw-bold text-black position-relative z-2">Portfolio</h1>
      </div>

      {/* Cards Section */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <img src={Delicious} className="card-img-top" alt="project 1" />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Bhimavaram Delicious Biryanis
                </h5>
                <p className="card-text">
                  This is a small description about the project.
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="send-btn"
                    onClick={() => {
                      setShowPopup(true);
                      window.location.href =
                        "https://bhimavaramdeliciousbiryanis.in/";
                    }}
                  >
                    <span className="text-light">View Project</span>
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
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <img src={Eggora} className="card-img-top" alt="project 1" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Eggora Natural Nutrition</h5>
                <p className="card-text">
                  This is a small description about the project.
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="send-btn"
                    onClick={() => {
                      setShowPopup(true);
                      window.location.href =
                        "https://eggora.vercel.app/";
                    }}
                  >
                    <span className="text-light">View Project</span>
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
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <img src={Ans} className="card-img-top" alt="project 1" />
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  Anusha Catering & Services
                </h5>
                <p className="card-text">
                  This is a small description about the project.
                </p>

                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="send-btn"
                    onClick={() => {
                      setShowPopup(true);
                      window.location.href =
                        "https://ans.anushacatering.in/";
                    }}
                  >
                    <span className="text-light">View Project</span>
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
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <img src={Bhamas} className="card-img-top" alt="project 1" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Bhama's Kitchen</h5>
                <p className="card-text">
                  This is a small description about the project.
                </p>

                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="send-btn"
                    onClick={() => {
                      setShowPopup(true);
                      window.location.href =
                        "https://bhamaskitchen.in/";
                    }}
                  >
                    <span className="text-light">View Project</span>
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
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <img src={kanaka} className="card-img-top" alt="project 1" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Sri Kanakadurga Events</h5>
                <p className="card-text">
                  This is a small description about the project.
                </p>

                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="send-btn"
                    onClick={() => {
                      setShowPopup(true);
                      window.location.href =
                        "https://kanakadurgacateringsuppliers.in/";
                    }}
                  >
                    <span className="text-light">View Project</span>
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
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <img src={Chandu} className="card-img-top" alt="project 1" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Chandu Events</h5>
                <p className="card-text">
                  This is a small description about the project.
                </p>

                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="send-btn"
                    onClick={() => {
                      setShowPopup(true);
                      window.location.href =
                        "https://chandu-seven.vercel.app/";
                    }}
                  >
                    <span className="text-light">View Project</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;