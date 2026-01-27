import React from 'react'
import { useState , useEffect} from 'react';
import { IoMdClose } from "react-icons/io";
import WOW from "wowjs";
import "./Project.css"
import Food from "../../assets/food.png";
import Car from "../../assets/car.png";
import Port from "../../assets/port.png"
export const Project = () => {
    const [toggle , setToggle] = useState(0);
const toggleTab = (index)=>{
        setToggle(index);
    }
useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);
  return (   
<section className="services section" id="project">
    <h2 className="section__title">My Projects</h2>
    <span className="section__subtitle">What I Designed</span>

    <div className="services__container container grid">
        
        <div className="services__content">
        <div className="project-card animate__animated animate__fadeInLeft">
          <img src={Port} alt="Food Ordering App" />
          <div className="project-content">
            
          <span className="project-year">June 2025 - Jan 2026</span>
          <h3 className="project-title">Portfolio Web</h3>
          
          <div className="project-links">
              <a href="https://github.com/yourusername/food-app"target="_blank"rel="noreferrer">GitHub</a>
              <a href="https://food-app-live-link.com"target="_blank"rel="noreferrer">Live Demo</a>
            </div>
          <button className="view-btn" onClick={()=>toggleTab(1)}>View More</button>
          </div>
      </div>
               <div className={toggle ===1 ?"services__modal active-modal":"services__modal"}>
                <div className='services__modal-content'>
                 <IoMdClose className="services__modal-close" onClick={()=>toggleTab(0)}/>
                <h3 className="services__modal-title">Portfolio</h3>
                <p className="services__modal-description"></p>
                <ul className="services__modal-services grid">
                <li className='services__modal-services'>
                
                 <p className="services__modal-info">
Implemented project showcase section, contact form functionality, and social media integration.</p>
                 </li>
               <li className='services__modal-services'>
              
              <p className="services__modal-info">

Ensured mobile-first, tablet, and desktop responsiveness using CSS Grid and media queries.</p>
               </li>
               <li className='services__modal-services'>
              
              <p className="services__modal-info">

Continuously enhancing the website with UI improvements, performance optimization, and new features.</p>
              </li>
               <li className='services__modal-services'>
             
            <p className="services__modal-info">Built a modern and responsive portfolio website using HTML, CSS, JavaScript, and React.
</p>
        </li>
    </ul>
</div>
   </div>  
        </div>
 <div className="services__content">
        <div className="project-card  animate__animated animate__fadeInLeft">
          <img src={Car} alt="Food Ordering App" />
          <div className="project-content">
          <span className="project-year">Jan 2025 - March 2025</span>
          <h3 className="project-title">Car Rental System</h3>
          <div className="project-links">
              <a href="https://github.com/Khushichouhan011/Car-Rental-minorProjectFinal/commits?author=Khushichouhan011"target="_blank"rel="noreferrer">GitHub</a>

              <a href="https://food-app-live-link.com"target="_blank"rel="noreferrer">Live Demo</a>
            </div>
          <button className="view-btn" onClick={()=>toggleTab(2)}>View More</button>
          </div>
      </div>
               <div className={toggle ===2 ?"services__modal active-modal":"services__modal"}>
                <div className='services__modal-content'>
                <IoMdClose  className="services__modal-close" onClick={()=>toggleTab(0)}/>
                <h3 className="services__modal-title">Car Rental</h3>
                <p className="services__modal-description"></p>      
    
                <ul className="services__modal-services grid">
                <li className='services__modal-services'>
                
                 <p className="services__modal-info">Built a responsive car rental web application using HTML, CSS, JavaScript, and Java.
</p>
                 </li>
               <li className='services__modal-services'>
            
              <p className="services__modal-info">
Implemented car listing, availability status, and booking workflow on the frontend.

.</p>
               </li>
               <li className='services__modal-services'>
            
              <p className="services__modal-info">Integrated frontend components with Java-based backend logic for seamless functionality.

</p>
              </li>
               <li className='services__modal-services'>
              
            <p className="services__modal-info">Focused on clean UI design, responsiveness, and smooth user experience across devices</p>
        </li>
    </ul>
</div>
     </div>
     
        </div>

<div className="services__content">
        <div className="project-card  animate__animated animate__fadeInLeft">
          <img src={Food} alt="Food Ordering App" />
          <div className="project-content">
          <span className="project-year">Jan 2024 - June 2024</span>
          <h3 className="project-title">Food Ordering Web</h3>
          <div className="project-links">
              <a href="https://github.com/Khushichouhan011/Food-Ordering-Reactjs/commits?author=Khushichouhan011"target="_blank"rel="noreferrer">GitHub</a>
              <a href="https://food-app-live-link.com"target="_blank"rel="noreferrer">Live Demo</a>
            </div>
          <button className="view-btn" onClick={()=>toggleTab(3)}>View More</button>
          </div>
      </div>
               <div className={toggle ===3 ?"services__modal active-modal":"services__modal"}>
                <div className='services__modal-content'>
                <IoMdClose  className="services__modal-close" onClick={()=>toggleTab(0)}/>
                <h3 className="services__modal-title">Food Ordering</h3>
                <p className="services__modal-description"></p>      
    
                <ul className="services__modal-services grid">
                <li className='services__modal-services'>
                
                 <p className="services__modal-info">Built an interactive and fully responsive food ordering interface using React.

</p>
                 </li>
               <li className='services__modal-services'>

              <p className="services__modal-info">Implemented cart functionality using React Context API for global state management.

</p>
               </li>
               <li className='services__modal-services'>
             
              <p className="services__modal-info">Added category-based filtering and dynamic UI updates to enhance user experience.

</p>
              </li>
               <li className='services__modal-services'>
             
            <p className="services__modal-info">Developed reusable components with responsive design and managed code using Git & GitHub for version control</p>
        </li>
    </ul>
</div>
     </div>
     
        </div>








    









    </div>
</section>     
  
  )
}

