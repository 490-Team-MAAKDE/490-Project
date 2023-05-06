import React from 'react';
import "./AboutUs.css"
function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-section">
        <h1 className="about-us-title">About Eye Candy</h1>
        <p className="about-us-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Our Mission */}
      <div className="about-us-section">
        <h2 className="about-us-subtitle">Our Mission</h2>
        <hr />
        <p className="about-us-text">
          At Eye Candy, veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Our Features */}
      <div className="about-us-section">
        <h2 className="about-us-subtitle">Our Features</h2>
        <hr />
        <ul className="about-us-list">
          <li>[Feature 1]</li>
          <li>[Feature 2]</li>
          <li>[Feature 3]</li>
        </ul>
      </div>

      {/* Our Team */}
      <div className="about-us-section">
        <h2 className="about-us-subtitle">Our Team</h2>
        <hr />
        <p className="about-us-text">
          Our team is composed of experienced developers and designers who are passionate about delivering the best possible experience for our users. We're committed to staying up-to-date with the latest technologies and design trends.
        </p>
        <ul className="dev-list">
          <li>Deni</li>
          <li>Matthew</li>
          <li>Andres</li>
          <li>Kennedy</li>
          <li>Aaron</li>
          <li>Erik</li>
        </ul>
      </div>

      {/* Contact Us */}
      <div className="about-us-section">
        <h2 className="about-us-subtitle">Contact Us</h2>
        <hr />
        <p className="about-us-text">
          If you have any questions or feedback, please don't hesitate to reach out to us. We'd love to hear from you!
        </p>
        <p className="about-us-text">
          Email: [contact email]<br />
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
