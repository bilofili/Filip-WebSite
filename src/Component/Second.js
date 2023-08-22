import myImg from '../Component/sc-bl-img.png';

import html from "../Component/Skill_Img/html.png";
import css from "../Component/Skill_Img/css-3.png";
import javaScript from "../Component/Skill_Img/js.png";
import typeScipt from "../Component/Skill_Img/typescript.png";
import react from "../Component/Skill_Img/React.png";
import cSharp from "../Component/Skill_Img/c-sharp.png";
import bootstrap from "../Component/Skill_Img/bootstrap.png";
import figma from "../Component/Skill_Img/figma.png";

export const Second = () => {

    return (
        <section id="second">
            <div className="mine-flex-bl">

                <div className='bl-2'>
                    <div className='cont-bl-2'>

                     <div className='cont-posititons-1'>  
                        <h2>About me</h2>
                        <p>Passionate JavaScript and React enthusiast with a strong desire to contribute to innovative projects. Proficient in leveraging the power of these technologies to create dynamic and engaging web applications. Adept at problem-solving and continuously enhancing skills through self-directed learning. Open-minded and adaptable, eagerly embracing new challenges in the ever-evolving tech landscape.</p>
                        <button>Contact me</button>
                    </div>     

                        <div className="cont-posititons-2">    
                        <h2>My skills</h2>
                            <div className="ic-sk-bl">
                                <img src={html} alt="" className="icon-sk"/>
                                <img src={css} alt="" className="icon-sk"/>
                                <img src={javaScript} alt="" className="icon-sk"/>
                                <img src={typeScipt} alt="" className="icon-sk"/>
                            </div>
                            <div className="ic-sk-bl">
                                <img src={react} alt="" className="icon-sk"/>
                                <img src={cSharp} alt="" className="icon-sk"/>
                                <img src={bootstrap} alt="" className="icon-sk"/>
                                <img src={figma} alt="" className="icon-sk"/>
                            </div>
                        </div>   
                    </div>
                    
                </div>

                <div className='bl-1'>
                    <div className='oval-bl'>
                        <img src={myImg} alt='myImg'  className='my-img-sc' />
                    </div>
                </div>
            </div>

            <img src={myImg} alt='myImg' className='mobl-img-my'/>

        </section>
    )
}