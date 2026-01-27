import "./Skills.css";
import { LuRouter } from "react-icons/lu";

import { SiRedux } from "react-icons/si";

import { SiAxios } from "react-icons/si";




export const Frontend2=()=>{
    return(
      <div className="skills__content fade-in">
        <h3 className="skills__title">Application Architecture</h3>
        <div className="skills__box ">
        <div className="skills__group ">
          
        <div className="skills__data">< SiRedux className="skills__icon" />
        <div>
        <h3 className="skills__name"> Redux</h3>
        <span className="skills__level">Intermediate</span>
        </div>
        </div>


         <div className="skills__data">< SiRedux className="skills__icon" />
        <div>
        <h3 className="skills__name">Redux Toolkit</h3>
        <span className="skills__level">Intermediate</span>
        </div>
        </div>


         <div className="skills__data"><LuRouter className="skills__icon" />
         <div>
        <h3 className="skills__name">React Router</h3>
        <span className="skills__level">Intermediate</span>
        </div>
        </div>


        <div className="skills__data "><SiAxios className="skills__icon" />
        <div>
        <h3 className="skills__name">Axios</h3>
        <span className="skills__level">Intermediate</span>
        </div>
        </div>

      

        


        
         </div>
        </div>
        </div>
    )
}