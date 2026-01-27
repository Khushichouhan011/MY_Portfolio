  import './App.css'
  import 'animate.css';

import { Header } from './components/1header/Header'
import {Footer} from "./components/footer/Footer"
import {Home} from './components/2home/Home'
import {About} from "./components/3about/About"
import {Contact} from "./components/contact/Contact"
import {Skills} from "./components/4skills/Skills"
import {Education } from './components/qualification/Education'
import{Project}  from "./components/project/Project"

function App() {
   return (  
   <>
  <Header/>
    
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Education/>
    <Contact/> 

    <Footer/>
      </>
  )
}

export default App
