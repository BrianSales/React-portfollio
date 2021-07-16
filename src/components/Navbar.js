
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
    
    <nav>
       
        <ul>
            
            <li>
                <Link className="navbar-brand" to="/">
        My Story
      </Link>
            </li>
            <li>
            <Link className="navbar-brand" to="/Projects">
        Work Projects
      </Link>
            </li>
            <li>
            <Link className="navbar-brand" to="/Contact">
        Contact
      </Link>
            </li>
            <li class="my-name">
                <a href="https://github.com/BrianSales/Portfolio-" target="_blank" class="navlink" >Brian Sales</a>
            
            </li>
        </ul>
    </nav>   
    </header>
    
  );
}

