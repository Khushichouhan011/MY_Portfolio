import './App.css'
 
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./components/home/Home"
import AppLayout from './pages/AppLayout';
import {Skills} from "./components/skills/Skills"
import {About} from "./components/about/About";
import {Project} from "./components/project/Project"
import {Contact} from "./components/contact/Contact"
import {Education} from "./components/qualification/Education"
const router =createBrowserRouter([
  {
    path:"/",
    element :<AppLayout/>,
   
    children:[
       {
path : "/",
element : <Home/>,
  },{
path : "about",
element : <About/>,
  },{
    path : "skills",
element : <Skills/>,
  },
  {
    path : "contact",
    element : <Contact/>,

  },{
    path : "project",
    element : <Project/>,
  },{
    path : "education",
    element : <Education/>
  },
    ]
  }
 
])
function App() {

  return (
  <RouterProvider router={router}></RouterProvider>
  )
}

export default App

//   import './App.css'
//   import 'animate.css';

// import { Header } from './components/1header/Header'
// import {Footer} from "./components/footer/Footer"
// import {Home} from './components/2home/Home'
// import {About} from "./components/3about/About"
// import {Contact} from "./components/contact/Contact"
// import {Skills} from "./components/4skills/Skills"
// import {Education } from './components/qualification/Education'
// import{Project}  from "./components/project/Project"

// function App() {
//    return (  
//    <>
//   <Header/>
    
//     <Home/>
//     <About/>
//     <Skills/>
//     <Project/>
//     <Education/>
//     <Contact/> 

//     <Footer/>
//       </>
//   )
// }

// export default App
