import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (

    <footer className="contact-footer">

      <div className="footer-content">

        <p>Have a project or just want to say hi? Let’s connect!</p>

        <a className="email-link" href="mailto:kandisaagarawal@example.com">
          kandisaagarwal@example.com
        </a>

        <div className="social-links">
          <a href="https://github.com/kandisaagarwal" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/kandisa-agarwal-060aab210/" target="_blank">LinkedIn</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Contact;
