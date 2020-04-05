import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./reset.css";
import './App.scss';


function App() {
  return (
      <Router>
        <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
