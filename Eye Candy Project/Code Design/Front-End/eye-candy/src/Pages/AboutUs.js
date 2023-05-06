import React from "react";
import "./AboutUs.css";
function AboutUs() {
  return (
    <div className="body">
      <header className="header__title__about">
        <h1 className="h1">Eye Candy</h1>
      </header>
      <section className="mission">
        <p>
          At Eye Candy, veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section className="features">
        <h2>Our Features</h2>
        <ul>
          <li>[Feature 1]</li>
          <li>[Feature 2]</li>
          <li>[Feature 3]</li>
        </ul>
      </section>
      <section className="team">
        <h2>Our Team</h2>
        <ul>
          <li>Deni</li>
          <li>Matthew</li>
          <li>Andres</li>
          <li>Kennedy</li>
          <li>Aaron</li>
          <li>Erik</li>
        </ul>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or feedback, please don't hesitate to reach
          out to us. We'd love to hear from you!
        </p>
        <p>Email: [contact email]</p>
      </section>
    </div>
  );
}

export default AboutUs;
