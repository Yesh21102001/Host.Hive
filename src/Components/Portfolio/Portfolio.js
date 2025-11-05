import React from "react";
import Header from "../Header/Header";
import Delicious from "../../Images/delicious.png";
import Eggora from "../../Images/Eggora.png";
import Ans from "../../Images/Ans.png";
import Bhamas from "../../Images/Bhamas.png";
import kanaka from "../../Images/kanakadurga.png";
import Chandu from "../../Images/Chandu.png";
import "./Portfolio.css";

const Portfolio = () => {
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
                <h5 className="card-title fw-bold">Bhimavaram Delicious Biryanis</h5>
                <p className="card-text">
                  This is a small description about the project.
                </p>

                <a
                  href="https://bhimavaramdeliciousbiryanis.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning"
                >
                  View Project
                </a>
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

                <a
                  href="https://eggora.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <img src={Ans} className="card-img-top" alt="project 1" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Anusha Catering & Services</h5>
                <p className="card-text">
                  This is a small description about the project.
                </p>

                <a
                  href="https://ans.anushacatering.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning"
                >
                  View Project
                </a>
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

                <a
                  href="https://bhamaskitchen.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning"
                >
                  View Project
                </a>
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

                <a
                  href="https://kanakadurgacateringsuppliers.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning"
                >
                  View Project
                </a>
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

                <a
                  href="https://chandu-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
