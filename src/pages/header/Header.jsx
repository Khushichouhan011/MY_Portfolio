import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
   import { IoMdClose } from "react-icons/io";
 import { CiHome } from "react-icons/ci";
  import { CiUser } from "react-icons/ci";
  import { GiSkills } from "react-icons/gi";
  import { GoProjectRoadmap } from "react-icons/go";
   
 
   import { IoIosContact } from "react-icons/io";
import { useState } from "react";
export const Header = () => {
  const [toggle , setToggle] = useState(false)
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/"className="nav__logo">
          Khushi
        </NavLink>

        <div className={toggle ? "nav__menu show-menu":"nav__menu"}>
          <ul className="nav__list ">
            <li className="nav__item">
             
              <NavLink to ="/"className="nav__link active-link" > <CiHome className="nav__icon"/>
                Home</NavLink>
            </li>

            <li className="nav__item">
            <NavLink to="/about" className="nav__link">
               <CiUser  className="nav__icon"/>
                About</NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/skills" className="nav__link">
                <GiSkills className="nav__icon"/>
                Skills
              </NavLink>
            </li>
              <li className="nav__item">
              <NavLink to ="/project" className="nav__link">
              <GoProjectRoadmap className="nav__icon" />
                Project
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/education" className="nav__link">
              <GoProjectRoadmap className="nav__icon" />Education
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/contact" className="nav__link">
                <IoIosContact className="nav__icon" />
                Contact
              </NavLink>
            </li>
          </ul>
       
<IoMdClose  className="nav__close"  onClick={()=>setToggle(!toggle)}/>
        </div>

<div className="nav__toggle" onClick={()=>setToggle(!toggle)}>☰</div>
      </nav>
    </header>
  );
};