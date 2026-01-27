import React from 'react'
import "./Home.css"
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
export const Social = () => {
  return (
    <div className='home__social'>
        <a href="https://www.instagram.com/khushhyy1.3?igsh=a2FsYmlqZ3owYXp1" className="home__social-icon"target='_blank'><FaInstagram /></a>
         <a href="https://github.com/Khushichouhan011" className="home__social-icon"target='_blank'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/khushi-chouhan-b97b4525a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="home__social-icon"target='_blank'><CiLinkedin /></a>
          
    </div>

  )
}


