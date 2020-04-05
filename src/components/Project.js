import React from "react";
import ProjectLinks from "./ProjectLinks";

function Project(props) {

    return (
        <div className="project-container">
            <h2 className="project-title">{props.title}</h2>
            <h3 className="project-subtitle">Description</h3>
            <p className="project-description">{props.description}</p>
            <h3 className="project-subtitle">Technology Used</h3>
            <ul className="project-list">
                {props.technology.map(item => <li>{item}</li>)}
            </ul>
            <h3 className="project-subtitle">Links</h3>
            <ul className="project-list">
                <ProjectLinks liveLink={props.liveLink} repoLink={props.repoLink}/>
            </ul>
        </div>
    )
}

export default Project;