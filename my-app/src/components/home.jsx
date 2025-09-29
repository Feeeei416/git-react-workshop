import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../styles/home.css"

export default function Home() {
  return (
    
    <section id="home" className="section home-section">
      <div className="hero-content">
        <h1>Hello, I’m <span className="highlight">Kandisa Agarwal</span></h1>

        <h2>
          I’m {" "}
          <span className="typewriter">
            <Typewriter
              words={[
                "a Software Developer",
                "an AI Enthusiast",
                "a Cybersecurity Explorer",
                "a Problem Solver"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="hero-desc">
          I love building interactive web apps and exploring AI-powered
          solutions that make a difference.
        </p>

        <button
          className="cta-btn"
          onClick={() =>
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
          }
        >
          View My Work ↓
        </button>
      </div>
    </section>
  );
}
