import React from 'react'
import "./About.css";
import { IoDownloadOutline } from "react-icons/io5";
import AboutImg from "../../assets/profile.jpg";
import CV from "../../assets/CV.pdf"
import My2 from "../../assets/my2.jpeg";
import { Info } from './Info';
export const About = () => {
  return (

   <section className='about section'id="about">

    <h2 className="section__title">About Me</h2>
    <span className='section__subtitle'>My Introduction</span>
  
    <div className="about__container container grid">
        <div>
            <img src={My2}  alt="about_img"className='about__img'height="150px"/>

        </div>
    
     <div className="about__data">
       <Info/>
       <p className="about__description">I'am Passionate React Developer with a strong interest in building clean responsive and user-friendly web application , I enjoy turning ideas into real products using modern web technologies</p>
      <br/><a download="" href={CV} className="about__button">Download CV <IoDownloadOutline /></a>
     </div>

    </div>

    </section>

  )

}


