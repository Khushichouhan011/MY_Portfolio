import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { WOW } from "wowjs";
import "./Project.css";

import Food from "../../assets/food.png";
import Car from "../../assets/car.png";
import Port from "../../assets/port.png";

export const Project = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    setToggle(index);
  };

  useEffect(() => {
    const wow = new WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <section className="services section" id="project">
      <h2 className="section__title">My Projects</h2>
      <span className="section__subtitle">What I Designed</span>

      <div className="services__container container grid">

        {/* ================= PORTFOLIO ================= */}
        <div className="services__content">
          <div className="project-card animate__animated animate__fadeInLeft">
            <img src={Port} alt="Portfolio Website" />
            <div className="project-content">
              <span className="project-year">June 2025 - Jan 2026</span>
              <h3 className="project-title">Portfolio Website</h3>

              <div className="project-links">
                <a
                  href="https://github.com/yourusername/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>

              <button className="view-btn" onClick={() => toggleTab(1)}>
                View More
              </button>
            </div>
          </div>

          <div className={toggle === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <IoMdClose
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Portfolio</h3>

              <ul className="services__modal-services grid">
                <li>
                  <p className="services__modal-info">
                    Built a modern and responsive portfolio website using React, HTML, CSS and JavaScript.
                  </p>
                </li>
                <li>
                  <p className="services__modal-info">
                    Implemented project showcase, contact form and social media integration.
                  </p>
                </li>
                <li>
                  <p className="services__modal-info">
                    Ensured mobile-first, tablet and desktop responsiveness using CSS Grid & media queries.
                  </p>
                </li>
                <li>
                  <p className="services__modal-info">
                    Continuously improving UI, performance and adding new features.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= CAR RENTAL ================= */}
        <div className="services__content">
          <div className="project-card animate__animated animate__fadeInLeft">
            <img src={Car} alt="Car Rental System" />
            <div className="project-content">
              <span className="project-year">Jan 2025 - March 2025</span>
              <h3 className="project-title">Car Rental System</h3>

              <div className="project-links">
                <a
                  href="https://github.com/Khushichouhan011/Car-Rental-minorProjectFinal"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>

              <button className="view-btn" onClick={() => toggleTab(2)}>
                View More
              </button>
            </div>
          </div>

          <div className={toggle === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <IoMdClose
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Car Rental System</h3>

              <ul className="services__modal-services grid">
                <li>
                  <p className="services__modal-info">
                    Developed a responsive car rental web app using HTML, CSS, JavaScript and Java.
                  </p>
                </li>
                <li>
                  <p className="services__modal-info">
                    Implemented car listings, availability status and booking workflow.
                  </p>
                </li>
                <li>
                  <p className="services__modal-info">
                    Integrated frontend with Java-based backend logic.
                  </p>
                </li>
                <li>
                  <p className="services__modal-info">
                    Focused on clean UI and smooth user experience across devices.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= FOOD ORDERING ================= */}
        <div className="services__content">
          <div className="project-card animate__animated animate__fadeInLeft">
            <img src={Food} alt="Food Ordering Web App" />
            <div className="project-content">
              <span className="project-year">Jan 2024 - June 2024</span>
              <h3 className="project-title">Food Ordering Web</h3>

              <div className="project-links">
                <a
                  href="https://github.com/Khushichouhan011/Food-Ordering-Reactjs"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>

              <button className="view-btn" onClick={() => toggleTab(3)}>
                View More
              </button>
            </div>
          </div>

          <div className={toggle === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <IoMdClose
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Food Ordering Web</h3>

              <ul className="services__modal-services grid">
                <li>
                  <p className="services__modal-info">
                    Built an interactive and responsive food ordering interface using React.
                  </p>
                </li>
                <li>
                  <p className="services__modal-info">
                    Implemented cart functionality using React Context API.
                  </p>
                </li>
                <li>
                  <p className="services__modal-info">
                    Added category-based filtering and dynamic UI updates.
                  </p>
                </li>
                <li>
                  <p className="services__modal-info">
                    Created reusable components and managed code with Git & GitHub.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
