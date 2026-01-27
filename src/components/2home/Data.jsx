import React from 'react'
import "./Home.css"
import { IoMdSend } from "react-icons/io";
export const Data = () => {
  return (
    <div className='home__data'>
<h1 className="home__title">Khushi Chouhan</h1>      
   <h3 className="home__subtitle">
    React Developer
   </h3>
  <p className="home__description">
    I’m a fresher frontend developer with practical experience in React.js, JavaScript, and responsive design.I’m highly motivated to start my professional journey and grow with the company.”
  </p>
  <a href="#contact" className="button button--flex">say Hello<br/><IoMdSend /> </a>
    </div>
  )
}


