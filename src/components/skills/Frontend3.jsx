import "./Skills.css";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";

export const Frontend3=()=>{
    return(
      <div className="skills__content fade-in">
        <h3 className="skills__title">UI and Workflow</h3>
        <div className="skills__box">
        <div className="skills__group">

         <div className="skills__data"><RiTailwindCssFill className="skills__icon" />
        <div>
        <h3 className="skills__name">Tailwind</h3>
        <span className="skills__level">Intermediate</span>
        </div>
        </div>


         <div className="skills__data"><BsFillBootstrapFill className="skills__icon" />
        <div>
        <h3 className="skills__name">BootStrap</h3>
        <span className="skills__level">Intermediate</span>
        </div>
        </div>

        <div className="skills__data"><FaGitAlt className="skills__icon" />
        <div>
        <h3 className="skills__name">Responsive Design</h3>
        <span className="skills__level">Intermediate</span>
        </div>
        </div>

          <div className="skills__data"><FaGithub className="skills__icon" />
        <div>
        <h3 className="skills__name">API Integration</h3>
        <span className="skills__level">Intermediate</span>
        </div>
        </div>
        
         </div>
        </div>
        </div>
    )
}