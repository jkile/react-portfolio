import React, { useState, useEffect, useContext } from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import MainContext from "./Context";

function Navbar() {
    const isTabletOrMobile = useMediaQuery({query: "(max-width: 48em)"});
    const ctx = useContext(MainContext);

    if(isTabletOrMobile){

        return (
            <div className="navbar">
                <Menu right isOpen={ctx.isMenuOpen} onStateChange={(state) => ctx.stateChangeHandler(state)}>
                    <ul className="nav-items" >
                        <li className="home-nav"><Link to="/" onClick={ctx.toggleMenu}>Home</Link></li>
                        <li className="about-nav"><Link to="/about" onClick={ctx.toggleMenu}>About</Link></li>
                        <li className="portfolio-nav"><Link to="/portfolio" onClick={ctx.toggleMenu}>Portfolio</Link></li>
                        <li className="contact-nav"><Link to="/contact" onClick={ctx.toggleMenu}>Contact</Link></li>
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