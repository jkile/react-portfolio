import React from "react";
import Navbar from "../components/Navbar"
import ContactCard from "../components/ContactCard";
import Hero from "../components/Hero";
import CardsContainer from "../components/CardsContainer";

function Home() {


    return (
        <div>
            <Hero />
            <div className="spacer-block" />
            <CardsContainer />
            <ContactCard />
            <footer>
            </footer>
        </div>
    )
}

export default Home;