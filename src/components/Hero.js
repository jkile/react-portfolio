import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    
    return (
        <div className="hero">
            <h1 className="hero-title">
                Hi, I'm Jake
                </h1>
            <h2 className="hero-subtitle">
                I'm a fullstack web developer
                </h2>
            <p className="hero-description">Here is more information about me that is relatively succinct. Isn't this
                    interesting? Please Hire me. Please.</p>
            <Link to="/portfolio" className="link"><button className="work-anchor">Take a look at my work</button></Link>
        </div>
    )
}

export default Hero;