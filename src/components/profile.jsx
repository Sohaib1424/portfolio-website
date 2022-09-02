import React from "react"
import "./styles.css"
import { IconContext } from "react-icons"
import {FiTwitter} from "react-icons/fi"
import {VscGithub} from "react-icons/vsc"
import {AiOutlineLinkedin, AiOutlineMail} from "react-icons/ai"

function Profile(){
    return(
        
            <div id="profile">
                <section id="wrapper--hero" className="section--page">
                    <img id="profile_pic" src={"./profile_pic1.jpg"} />
                    
                    <div>
                        <h1 id="creator">Sohaib Moradi</h1>
                        <p id="bio">Computer Engineering undergraduate student at University of Tabriz <br />
                         Artificial Intelligence Enthusiast</p>
                        <p id="email"><AiOutlineMail/> sohaib1380moradi@gmail.com</p>
                        <IconContext.Provider value={{ size: "1.5em"}}>
                            <a href="https://twitter.com/SohaibMoradi"><FiTwitter className="icons"/></a>
                            <a href="https://github.com/sohaib1424"><VscGithub className="icons"/></a>
                            <a href="https://linkedin.com/in/sohaib-moradi-8b0988214/"><AiOutlineLinkedin className="icons"/></a>
                        </IconContext.Provider>
                        
                    </div> 
                </section>
            </div>
        
    )
}

export default Profile