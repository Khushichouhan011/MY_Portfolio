import "./Skills.css";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export const Frontend1=()=>{
    return(
        <div className="skills__content fade-in">
        <h3 className="skills__title">Core Frontend</h3>
        <div className="skills__box">
        <div className="skills__group">

        <div className="skills__data"><FaHtml5 className="skills__icon" />
        <div>
        <h3 className="skills__name">HTML</h3>
        <span className="skills__level">Basic</span>
        </div>
        </div>


         <div className="skills__data"><IoLogoCss3 className="skills__icon" />
        <div>
        <h3 className="skills__name">CSS</h3>
        <span className="skills__level">Advanced</span>
        </div>
        </div>


         <div className="skills__data"><IoLogoJavascript className="skills__icon" />

        <div>
        <h3 className="skills__name">JavaScript</h3>
        <span className="skills__level">Intermediate</span>
        </div>
        </div>

 <div className="skills__data"><FaReact className="skills__icon" />

        <div>
        <h3 className="skills__name">ReactJs</h3>
        <span className="skills__level">Advanced</span>
        </div>
        </div>
      
       

       


         </div>
        </div>
        </div>
    )
}