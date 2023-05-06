import React from "react";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <header className={styles.header__title__about}>
          <h1 className={styles.h1}>Eye Candy</h1>
        </header>
        <section className={styles.mission}>
          <h2>About Us</h2>
          <p>
            We are a team of fashion enthusiasts who want to make it easier for
            you to find the perfect outfit. With our AI-powered system, you can
            upload a photo of yourself and receive personalized recommendations
            based on your style.
          </p>
        </section>
        <section className={styles.features}>
          <h2>Our Features</h2>
          <ul>
            <li>[Feature 1]</li>
            <li>[Feature 2]</li>
            <li>[Feature 3]</li>
          </ul>
        </section>
        <section className={styles.team}>
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
        <section className={styles.contact}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or feedback, please don't hesitate to
            reach out to us. We'd love to hear from you!
          </p>
          <p>Email: EyeCandySupport@gmail.com</p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
