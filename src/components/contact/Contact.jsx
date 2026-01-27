import { IoDownloadOutline } from "react-icons/io5";
import "./Contact.css";
 import { IoSendOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m5x2lbs",
        "template_rmu5hyf",
        form.current,
        "tW920OY7mAs7qj6dF"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed ❌ " + error.text);
        }
      );
  };

  return (

  <section className='contact section'id="contact">
     <h2 className="section__title">Get In Touch</h2>
     <span className="section__subtitle">Contact Me</span>
     <div className="contact__container container grid">
       <div className="contact__content">
         <h3 className="contact__title">Talk to me</h3>

         <div className="contact_info">
           <div className="contact__card">
           <MdEmail  className='contact__card-icon'/>

   <h3 className="contact__card-title">Email</h3>
   <span className="contact__card-data">khushirajput4771@gmail.com</span>

   <a href="mailto:khushirajput4771@gmail.com" className="contact__button">Write Me <MdEmail className='contact__button-icon'/>
   </a>
           </div>

           <div className="contact__card">
   <IoIosCall className='contact__card-icon'/>

   <h3 className="contact__card-title">Whatsapp</h3>
   <span className="contact__card-data">91+7722984771</span>
   <a href="https://api.whatsapp.com/send?phone=7722984771&tetx=hello,more information!" className="contact__button">Write Me  <IoIosCall className='contact__button-icon'/>
   </a>
           </div>

           <div className="contact__card">
   <CiLinkedin className='contact__card-icon'/>

   <h3 className="contact__card-title">Linkldin</h3>
   <span className="contact__card-data">khushi Chouhan</span>
  
   <button type="submit" className='contact__button'>Write Me<CiLinkedin className='contact__button-icon'/></button>

         </div>
         </div>
       </div>

<div className="contact__content">
    <h3 className="contact__title">Write me your Project</h3>
    <form ref={form} onSubmit={sendEmail}className="contact__form">
          <div className='contact__form-div'>
             <input type="text" name="name" placeholder="Your Name" className='contact__form-input'/>
          </div>
      <div className='contact__form-div'>
      <input type="email" name="email" placeholder="Your Email"className='contact__form-input' />
      </div>
      <div className='contact__form-div'>
      <textarea name="project" placeholder="Your Project"className='contact__form-input'cols="30"rows="10"></textarea>
      </div>
      <button type="submit" className='buttons button--flex'>Send Message<IoSendOutline />
      </button>
    </form>
    </div>
    </div>
    </section>
  );
};



















          
