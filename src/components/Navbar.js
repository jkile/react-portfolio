import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";

function Navbar(props) {
    const isTabletOrMobile = useMediaQuery({query: "(max-width: 768px"});
    if(isTabletOrMobile){
        return (
            <div className="navbar">
                <Menu right>
                    <ul className="nav-items">
                        <li className="home-nav"><Link to="/">Home</Link></li>
                        <li className="about-nav"><Link to="/about">About</Link></li>
                        <li className="portfolio-nav"><Link to="/portfolio">Portfolio</Link></li>
                        <li className="contact-nav"><Link to="/contact">Contact</Link></li>
                    </ul>
                </Menu>
            </div>
        )
    } else {
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
    
}

export default Navbar;