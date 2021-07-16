import './App.css';
import React from "react";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




export default function App() {




  return (



    <Router>
      
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
       <Route exact path="/" component= {About} />
      <Route exact path="/Projects" component= {Projects} />

      
      
      <Route exact path="/Contact" component= {Contact} />
    </main>


    </Router>
    
  );
}



