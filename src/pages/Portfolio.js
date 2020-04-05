import React from "react";
import ProjectsContainer from "../components/ProjectsContainer";

function Portfolio() {

    return (
        <div>
            <ProjectsContainer />
            <div className="portfolio-bottom-container">
                <h2 className="github-header">Want more? Take a look at my GitHub for other contributions and projects I've made!</h2>
                <form>
                    <button className="github-button" type="submit" formAction="https://github.com/jkile">GitHub</button>
                </form>
            </div>
        </div>
    )
}

export default Portfolio;