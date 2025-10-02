import React from "react";
import "./App.css"
import cardsData from "./assets/cardsData";

import Card from "./components/card";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  
  return (
    <>
    
    <Navbar />
      
    <section id="home">
        <Home />
    </section>

    <section id="projects">

        <h1> Projects</h1>
        <div className="projects">

        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}

      </div>

      </section>

      <section id="contact" className="contact">
        <Contact />
      </section>

    </>
  );

}

export default App