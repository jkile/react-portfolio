import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Navbar() {

    return (
            <div className="navbar">
                <ul className="nav-items">
                    <li className="home-nav"><Link to="/">Home</Link></li>
                    <li className="about-nav"><Link to="/about">About</Link></li>
                    <li className="portfolio-nav"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="contact-nav"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
    )
}

export default Navbar;