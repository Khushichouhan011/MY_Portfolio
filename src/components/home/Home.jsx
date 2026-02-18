import React from 'react'
import { About } from '../about/About'
import { Project } from '../project/Project'
import { Education } from '../qualification/Education'
import { Skills } from '../skills/Skills'
import { Contact } from '../contact/Contact'
import "./Home.css"
import { Data } from './Data'
import { Social } from './Social'


export const Home = () => {
  return (
    <>
    <section className='home section' id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
            <Social/>
        <div className='home__img'></div>
<Data/>
        </div>
        
</div> 

    </section>
     <About/>
    <Skills/>
    <Project/>
    <Education/>
    <Contact/>   
    </>

  )
}


