import React from "react"
import "./styles.css"
import data from "../projects.json"
import Project from "./project"

function Projects(){

    
    return(
        <div id="projects">
            <h2>Projects </h2>
            <section id="wrapper--project" className="section--page">

                    {Object.entries(data).map(([key, value]) =>{
                        if(value.show){
                            return <Project key={key} name={value.name}
                                        link={value.link}
                                        pic={value.pic}
                                        description={value.description}
                                        demo={value.demo}
                                        />
                        }
                    })}
                
            </section>
        </div>
    )
}

export default Projects