import React from "react"

const skills = ["Machine Learning", "Deep Learning", "Reinforcement Learning", "Computer Vision", "Latex",
                "Image data Cleaning & Preprocessing",]

function Skills(){

    return (
        <div id="skills">
            <h2>Skills</h2>
            <section className="section--page">

                <div id="wrapper--skills">
                    
                    {skills.map(skill =>{

                        return <div className="skill--card">
                            <span>{skill}</span>
                                </div>
                })}
                </div>
                

            </section>
            
        </div>
    )
}

export default Skills