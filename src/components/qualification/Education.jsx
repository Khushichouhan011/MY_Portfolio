import { useState } from "react";
import "./Education.css";
import { CiLocationOn } from "react-icons/ci";

export  const Education= () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="qualification section" id="education">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      {/* Tabs */}
      <div className="qualification__tabs">
        <div
          className={`qualification__button ${
            activeTab === "education" ? "active" : ""
          }`}
          onClick={() => setActiveTab("education")}
        >
         Certificates
        </div>

        <div
          className={`qualification__button ${
            activeTab === "certificate" ? "active" : ""
          }`}
          onClick={() => setActiveTab("certificate")}
        >
         Educations
        </div>
      </div>

      {/* Education Section */}
      {activeTab === "education" && (
        <div className="qualification__container">


          

          {/* Left */}
          <div className="qualification__content">
            <div className="qualification__data">
              <h3 className="qualification__title">C/C++</h3>
              <span className="qualification__subtitle">
               Programming world.
              </span>
              <span className="qualification__calendar">
                Jan 2024 - May 2024
              </span>
            </div>

            <div className="qualification__line">
              <span className="qualification__rounder"></span>
              <span className="qualification__liner"></span>
            </div>
            <div>
            </div>
          </div>


          {/* Right */}
          <div className="qualification__content">
            <div></div>

            <div className="qualification__line">
              <span className="qualification__rounder"></span>
              <span className="qualification__liner"></span>
            </div>

            <div className="qualification__data">
              <h3 className="qualification__title">
          AI in UAS Communication and Navigation for Remote Sensing
              </h3>
              <span className="qualification__subtitle">
               Ministry of Electronic and Information Technology
              The BOOTCAMP 8.0 COURSE OF 40+HOURS 
              </span>
              <span className="qualification__calendar">
               Feb 2025 - March 2025
              </span>
            </div>
          </div>

             {/* Left */}
           <div className="qualification__content">
            <div className="qualification__data">
              <h3 className="qualification__title">Web Design</h3>
              <span className="qualification__subtitle">
                mandleshwar
              </span>
              <span className="qualification__calendar">
                2021 - Present
              </span>
            </div>

            <div className="qualification__line">
              <span className="qualification__rounder"></span>
              <span className="qualification__liner"></span>
            </div>
            <div>




              
            </div>






          </div>
             {/* Right */}
          <div className="qualification__content">
            <div></div>

            <div className="qualification__line">
              <span className="qualification__rounder"></span>
              <span className="qualification__liner"></span>
            </div>

            <div className="qualification__data">
              <h3 className="qualification__title">
               bombay
              </h3>
              <span className="qualification__subtitle">
                bansal
              </span>
              <span className="qualification__calendar">
                2018 - 2020
              </span>
            </div>
          </div>


        </div>
      )}






      {/* Certificate Section */}
      {activeTab === "certificate" && (
        <div className="certificate__container">

  
              {/* Left */}
          <div className="qualification__content">
            <div className="qualification__data">
              <h3 className="qualification__title">Bachelor of Technology</h3>
              <span className="qualification__subtitle">
             <CiLocationOn className="icons" /> Shushila Devi Bansal Collage Of Technology Rau
              </span>
              <span className="qualification__calendar">
                2022 - Present / CGPA : 7.3
              </span>
            </div>

            <div className="qualification__line">
              <span className="qualification__rounder"></span>
              <span className="qualification__liner"></span>
            </div>
            <div>
            </div>
          </div>


          {/* Right */}
          <div className="qualification__content">
            <div></div>

            <div className="qualification__line">
              <span className="qualification__rounder"></span>
              <span className="qualification__liner"></span>
            </div>

            <div className="qualification__data">
              <h3 className="qualification__title">
                Higher Secondary School
              </h3>
              <span className="qualification__subtitle">
              <CiLocationOn className="icons"/> Shri Umiya Girls HSS , Mandleshwar
              </span>
              <span className="qualification__calendar">
                2021 - 2022
              </span>
            </div>
          </div>

           

            {/*Right*/} 
        
  
             {/* Left */}
           <div className="qualification__content">
            <div className="qualification__data">
              <h3 className="qualification__title">Secondary School</h3>
              <span className="qualification__subtitle">
             <CiLocationOn  className="icons"/> Shree Umiya Bal Vidhya Aashram , Somakhedi
              </span>
              <span className="qualification__calendar">
                2019-2020
              </span>
            </div>

            <div className="qualification__line">
              <span className="qualification__rounder"></span>
              <span className="qualification__liner"></span>
            </div>
            <div>
         </div>

           </div>

<div>
  </div>
        </div>
        
      )}
    </section>
  );
};

