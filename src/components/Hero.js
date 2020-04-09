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
            <div className="hero-description-container">
                <p className="hero-description">Holding a certificate from University of Arizona in fullstack web development and a love of all things programming, I look forward to showing what I can bring to the table!</p>
            </div>
            
            <Link to="/portfolio" className="link"><button className="work-anchor">Take a look at my work</button></Link>
        </div>
    )
}

export default Hero;