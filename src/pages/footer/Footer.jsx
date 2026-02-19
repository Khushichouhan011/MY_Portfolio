import "./Footer.css"
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
<footer className="footer">
<div className="footer__container container">
<h1 className="footer__title">Khushi</h1>

<ul className="footer__list">
<li><a href="/about"className="footer___link">About</a></li>
<li><a href="/project"className="footer___link">Projects</a></li>
<li><a href="/education"className="footer___link">Education</a></li>
<li><a href="/contact"className="footer___link">Contact</a></li>
</ul> 

<div className="footer__social">
<li><a href="https://www.instagram.com/khushhyy1.3?igsh=a2FsYmlqZ3owYXp1" className="home__social-icon"target='_blank'><FaInstagram /></a></li>
<li><a href="https://github.com/Khushichouhan011" className="home__social-icon"target='_blank'><FaGithub /></a></li>
<li><a href="https://www.linkedin.com/in/khushi-chouhan-b97b4525a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="home__social-icon"target='_blank'><CiLinkedin /></a></li>
        
            
</div>

<span className="footer__copy">@copyright All rights reserved</span>
         </div>
    </footer>
  )
}


