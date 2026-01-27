import React from "react";
import "./Header.css";
   import { IoMdClose } from "react-icons/io";
 import { CiHome } from "react-icons/ci";
  import { CiUser } from "react-icons/ci";
  import { GiSkills } from "react-icons/gi";
  import { GoProjectRoadmap } from "react-icons/go";
   import { MdMedicalServices } from "react-icons/md";
 
   import { IoIosContact } from "react-icons/io";
import { useState } from "react";
export const Header = () => {
  const [toggle , setToggle] = useState(false)
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Khushi
        </a>

        <div className={toggle ? "nav__menu show-menu":"nav__menu"}>
          <ul className="nav__list ">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
               <CiHome className="nav__icon"/>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
               
               <CiUser  className="nav__icon"/>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <GiSkills className="nav__icon"/>
                Skills
              </a>
            </li>
              <li className="nav__item">
              <a href="#project" className="nav__link">
              <GoProjectRoadmap className="nav__icon" />
                Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#education" className="nav__link">
              <GoProjectRoadmap className="nav__icon" />
Education
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <IoIosContact className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
       
<IoMdClose  className="nav__close"  onClick={()=>setToggle(!toggle)}/>
        </div>

<div className="nav__toggle" onClick={()=>setToggle(!toggle)}>☰</div>
      </nav>
    </header>
  );
};