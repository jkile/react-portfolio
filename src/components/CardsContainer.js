import React from "react";

function CardsContainer() {

    
    return (
        <div className="cards-container">
            <div className="technology-container">
                <h1 className="technology-header">Technology</h1>
                <div className="technology-card">
                    <img src="assets/icons8-html-5-50.png" alt="html icon" id="html-icon" />
                    <img src="assets/icons8-javascript-50.png" alt="javascript icon" id="javascript-icon" />
                    <img src="assets/icons8-node-js-50.png" alt=" nodejs icon" id="nodejs-icon" />
                    <img src="assets/icons8-react-native-50.png" alt="react icon" id="react-icon" />
                    <img src="assets/icons8-vuejs-50.png" alt="vue icon" id="vue-icon" />
                    <img src="assets/icons8-css3-50.png" alt="css icon" id="css-icon" />
                </div>
            </div>
            <div className="skills-container">
                <h1 className="skills-header">Skills</h1>
                <div className="skills-card">
                    <ul className="skills-list">
                        <li>Fullstack development with MVC architecture</li>
                        <li>Experience in test driven develoment</li>
                        <li>Understanding of relational and non-relational databases</li>
                        <li>Familiar with CSS frameworks such as Bootstrap and Tailwind as well as preprocessing such as SASS</li>
                        <li>Ability to learn quickly and efficiently</li>
                    </ul>
                </div>
            </div>
            <div className="social-container">
                <h1 className="social-header">Find Me On...</h1>
                <div className="social-card">
                    <ul className="social-list">
                        <li><a href="https://www.linkedin.com/in/jakekile/">LinkedIn</a></li>
                        <li><a href="https://github.com/jkile">GitHub</a></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsContainer;