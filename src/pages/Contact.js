import React from "react";

function Contact() {


    return (
        <div>
            <div className="navbar">
                <ul className="nav-items">
                    <li className="home-nav"><a href="index.html">Home</a></li>
                    <li className="about-nav"><a href="about.html">About</a></li>
                    <li className="portfolio-nav"><a href="portfolio.html">Portfolio</a></li>
                    <li className="contact-nav">Contact</li>
                </ul>
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
            <footer />
        </div>

    )
}

export default Contact;