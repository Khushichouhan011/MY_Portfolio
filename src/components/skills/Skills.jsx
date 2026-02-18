import { Frontend1 } from "./Frontend1";
import { Frontend2 } from "./Frontend2";
import { Frontend3 } from "./Frontend3";
import "./Skills.css";
export const Skills=()=>{
    return(
        <section className="skills section container" id="skills">
            <h2 className="section__title">
               Skills
            </h2>
            <span className="section__subtitle">
                My Technical Level
            </span>
            <div className="skills__container ">
            <Frontend1/>
            <Frontend2/>
            <Frontend3/>
            </div> 
            </section>
    )
}