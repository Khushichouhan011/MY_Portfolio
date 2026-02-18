import React from 'react'
import { IoBriefcaseOutline } from "react-icons/io5";
  import { FiAward } from "react-icons/fi";
  import { MdSupportAgent } from "react-icons/md";
import"./About.css";
export const Info = () => {
  return (
    <div className='about__info'>
        <div className="about__box">
          
          <FiAward  className='about__icon'/>
            <h3 className="about__title">Offer Letter</h3>
            <span className="about__subtitle">2+ Placed Offers</span>
        </div>


        <div className="about__box">
            <IoBriefcaseOutline className='about__icon'/>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">4+ Projects
            </span>
        </div>


        <div className="about__box">
            <MdSupportAgent className='about__icon' />
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">
                Online 24/7
            </span>
        </div>


    </div>
  )
}


