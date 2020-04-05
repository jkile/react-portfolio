import React from "react";

function ProjectLinks(props) {
    if (props.liveLink !== "") {
        return (
            <div>
                <li><a href={props.liveLink}>Live Site</a></li>
                <li><a href={props.repoLink}>GitHub Repository</a></li>
            </div>
        )
    } else {
        return <li><a href={props.repoLink}>GitHub Repository</a></li>
    }
}

export default ProjectLinks;