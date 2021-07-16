import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import Proj1 from "../Assests/images/Code-Refactoring_.png"
import Proj2 from "../Assests/images/Day-Planner_Day-organizer_index.html(Pixel 2 XL).png"
import Proj3 from "../Assests/images/JavascriptGame.png"
import Proj4 from "../Assests/images/password.png"

export default function Projects() {
  return (
    
      <section id="work-portfolio">
            <h2 class="headertekst">Work Portfolio</h2>
                <a href="https://briansales.github.io/Code-Refoctoring/" class="hang" target="_blank"> <img src={Proj1} alt="Picture of a deployed website edited by Brian Sales"/> </a>
                <a href="https://briansales.github.io/Day-organizer/" class="hang" target="_blank" > <img src={Proj2} alt="Picture of a deployed website edited by Brian Sales"/></a>
                <a href="https://briansales.github.io/JavaGame/" class="hang" target="_blank"> <img src={Proj3} alt="Picture of a deployed website edited by Brian Sales"/></a>
                <a href= "https://briansales.github.io/Password-Generator/" class="hang" target="_blank"> <img src={Proj4} alt="Picture of a deployed website edited by Brian Sales"/> </a>
      </section>
   
  );
}










