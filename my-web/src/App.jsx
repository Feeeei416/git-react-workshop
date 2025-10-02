import React from "react";
import "./App.css"
import cardsData from "./assets/cardsData";

import Card from "./components/card";
import Home from "./components/home";

function App() {

  return (
    <>

      <Home/>

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

      /* Add components here */

    </>
  );

}

export default App