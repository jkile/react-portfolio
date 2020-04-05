import React from "react";

function Portfolio() {

    return (
        <div>
            <div className="portfolio-container">
                <h1 className="portfolio-title">Portfolio</h1>
                <div className="project-container">
                    <h2 className="project-title">Covid-19 Tracker</h2>
                    <h3 className="project-subtitle">Description</h3>
                    <p className="project-description">With the obvious impact that Covid-19 has had on all of us, we created an
                        application to actively track the progress of the spread and it's impact on the United States. The
                        application features a full color coded map of the US according to the current number of positive cases
                        using d3 as our method of drawing. The data used is pulled daily from an API via a Heroku Scheduler
                        function that pulls in a csv which is then parsed and added to a MySql database. The data is then pulled
                        from the database and used to generate the map as well as the three individual charts for each state
                        that were made with ChartJs.
                    </p>
                    <h3 className="project-subtitle">Technology Used</h3>
                    <ul className="project-list">
                        <li>Javascript</li>
                        <li>Tailwind.css</li>
                        <li>MySql</li>
                        <li>Sequelizer</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>d3</li>
                        <li>ChartJs</li>
                    </ul>
                    <h3 className="project-subtitle">Links</h3>
                    <ul className="project-list">
                        <li><a href="https://morning-earth-44249.herokuapp.com">Live Site</a></li>
                        <li><a href="https://github.com/jkile/covid-19-tracker">GitHub Repository</a></li>
                    </ul>
                </div>
                <div className="project-container">
                    <h2 className="project-title">Pi Hub</h2>
                    <h3 className="project-subtitle">Description</h3>
                    <p className="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores
                        ipsum tempora nihil, fuga maxime. Provident vel esse nostrum? Doloribus alias est sint, beatae et veniam
                        aut velit quam quo.
                    </p>
                    <h3 className="project-subtitle">Technology Used</h3>
                    <ul className="project-list">
                        <li>Tailwind.css</li>
                        <li>Vue</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>BCrypt</li>
                    </ul>
                    <h3 className="project-subtitle">Links</h3>
                    <ul className="project-list">
                        <li><a href="https://github.com/jkile/pi-hub-repo">GitHub Repository</a></li>
                    </ul>
                </div>
                <h2 className="github-header">Want more? Take a look at my GitHub for other contributions and projects I've made!</h2>
                <form>
                    <button className="github-button" type="submit" formAction="https://github.com/jkile">GitHub</button>
                </form>
            </div>
            <footer></footer>
        </div>
    )
}

export default Portfolio;