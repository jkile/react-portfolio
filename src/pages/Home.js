import React from "react";

function Home() {


    return (
        <div>
            <div className="navbar">
                <ul className="nav-items">
                    <li className="home-nav"><a href="index.html">Home</a></li>
                    <li className="about-nav"><a href="about.html">About</a></li>
                    <li className="portfolio-nav"><a href="portfolio.html">Portfolio</a></li>
                    <li className="contact-nav"><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div className="hero">
                <h1 className="hero-title">
                    Hi, I'm Jake
          </h1>
                <h2 className="hero-subtitle">
                    I'm a fullstack web developer
          </h2>
                <p className="hero-description">Here is more information about me that is relatively succinct. Isn't this
            interesting? Please Hire me. Please.</p>
                <button className="work-anchor">Take a look at my work</button>
            </div>
            <div className="spacer-block" />
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
                    </div>
                </div>
                <div className="social-container">
                    <h1 className="social-header">Find Me On...</h1>
                    <div className="social-card" />
                </div>
            </div>
            <div className="contact-container">
                <h1 className="contact-header">Contact</h1>
                <div className="contact-form">
                    <form action>
                        <input type="text" id="name" placeholder="Enter Name" />
                        <input type="text" id="email" placeholder="Enter Email" />
                        <textarea name="messageBody" id="messageBody" cols={30} rows={16} placeholder="Enter message here" defaultValue={""} />
                        <input type="submit" defaultValue="Submit" id="submit" />
                    </form>
                </div>
            </div>
            <footer>
            </footer>
        </div>
    )
}

export default Home;