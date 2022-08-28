import React from "react"
import "./styles.css"
import data from "../certificates.json"

function Certificates(){
    return(
        <div id="certificates">
            <h2>Certificates </h2>
            <section id="wrapper--certificates" className="section--page">
                <ui>
                {Object.entries(data).map(([key, value]) =>{
                           return   <li>
                                        <a href={value.link} className="certificateLink"> ✔️{value.name} </a>
                                    </li>
                })}
                </ui>
                

            </section>
        </div>
    )
}

export default Certificates