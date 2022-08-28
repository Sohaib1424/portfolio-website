import React from "react"

function Project(props){
    return(
        <div className="projects--card">
                    <h3>{props.name}</h3>
                    <img src={props.pic}/>
                    <p>
                        {props.description}
                    </p>
                    
                    {props.demo == false ? <></> : <a href={props.demo} target="_blank" className="button">Demo</a>}
                    <a href={props.link} target="_blank" className="button">Code</a>
        </div>
    )
}

export default Project