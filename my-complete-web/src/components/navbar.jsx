import React from "react";
import "../styles/navbar.css"

export default function Navbar() {
  /*Defining a function scrollToSection that takes in 'id' as the argument and then uses DOM to scroll into the section I want*/
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div 
      className="nav-logo"
      onClick={() => scrollToSection("home")}>
        Kandisa Agarwal
      </div>

      <ul className="nav-links">
        
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
        <li onClick={() => window.open("/resume.pdf", "_blank")}>Resume</li>

      </ul>
    </nav>
  );
}
