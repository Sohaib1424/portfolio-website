import React from "react"
import { IconContext } from "react-icons"
import {SiGooglecolab, SiTensorflow, SiOpencv, SiGit, SiJupyter} from "react-icons/si"
import {TbBrandPython} from "react-icons/tb"

function Tools(){
    return(
        <div id="tools">
            <h2>Tools</h2>

        <section className="section--page">
            <div id="wrapper--tools">
                <IconContext.Provider value={{ size: "2.5em"}}>

                    <TbBrandPython className="icons"/>
                    <SiTensorflow className="icons"/>
                    <SiJupyter className="icons"/>
                    <SiGooglecolab className="icons"/>
                    <SiOpencv className="icons"/>
                    <SiGit className="icons"/>


                </IconContext.Provider>
            </div>
            
        </section>
        </div>
    )
}

export default Tools