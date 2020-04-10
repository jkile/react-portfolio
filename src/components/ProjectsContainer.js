import React from "react";
import Project from "./Project";

function ProjectsContainer() {

    let projects = [
        {
            projectName: "Covid-19 Tracker",
            projectDescription: `With the obvious impact that Covid-19 has had on all of us, we created an
            application to actively track the progress of the spread and it's impact on the United States. The
            application features a full color coded map of the US according to the current number of positive cases
            using d3 as our method of drawing. The data used is pulled daily from an API via a Heroku Scheduler
            function that pulls in a csv which is then parsed and added to a MySql database. The data is then pulled
            from the database and used to generate the map as well as the three individual charts for each state
            that were made with ChartJs.`,
            projectTechnology: [
                "Javascript",
                "Tailwind.css",
                "MySQL",
                "Sequelize",
                "Node.js",
                "Express",
                "d3",
                "ChartJS"
            ],
            projectRepoLink: "https://github.com/jkile/covid-19-tracker",
            projectLiveLink: "https://covid-19-mapper.herokuapp.com"
        },
        {
            projectName: "Pi Hub",
            projectDescription: `Pi Hub is a lightweight GitHub like app to be hosted locally entirely on a Raspberry Pi. Made for personal use, the app allows you to SSH into the Pi and be able to push and pull git remotely and have all repositories be viewable in the GUI.`,
            projectTechnology: [
                "Tailwind.css",
                "Node.js",
                "Express",
                "MongoDB",
                "BCrypt"
            ],
            projectRepoLink: "https://github.com/jkile/covid-19-tracker",
            projectLiveLink: ""
        }
    ]

    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">Portfolio</h1>
            {projects.map(item => <Project title={item.projectName} description={item.projectDescription} technology={item.projectTechnology} repoLink={item.projectRepoLink} liveLink={item.projectLiveLink} /> )}
        </div>
    )
}

export default ProjectsContainer;