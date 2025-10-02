import React from "react";
import "../styles/home.css"
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <>
      <section className="home-section">

      <div className="hero-content">

        <h1>
          Hello, I’m <span className="highlight">Feifei Yu</span>
        </h1>

        <h2>
        I'm {" "}
        <span className="typewriter">
        <Typewriter 
        words={[
          "a Software Developer",
          "a Web Developer",
          "a Data Analyist",
          "a Problem Solver"
        ]}
        loop
        cursor
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
        cursorColor="white"/>

      </span>
      </h2>

      <p className="hero-desc">
          I love build interactive websites, I love working on large language models and exploring new skills.
      </p>
      
      <button
      className="view_button"
      onClick={() => document.getElementById("projects").scrollIntoView({behavior : "smooth"})}
      >
        View my Projects
      </button>
      </div>
      </section>
    
    </>
  );
}

export default Home;