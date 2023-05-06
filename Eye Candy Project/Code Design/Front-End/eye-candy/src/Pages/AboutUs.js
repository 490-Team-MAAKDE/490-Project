import React from "react";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.about}>
    <div className={styles.wrapper}>
      <div className={styles.aboutbody}>
        <header className={styles.header__title__about}>
          <h1 className={styles.headings}>Eye Candy</h1>
        </header>
        <section className={styles.mission}>
          <h2 className={styles.headings}>About Us</h2>
          <p className={styles.aboutp}>
            We are a team of fashion enthusiasts who want to make it easier for
            you to find the perfect outfit. With our AI-powered system, you can
            upload a photo of yourself and receive personalized recommendations
            based on your style.
          </p>
        </section>
        <section className={styles.features}>
          <h2 className={styles.headings}>Our Features</h2>
          <ul>
            <li className={styles.aboutli} >[Feature 1]</li>
            <li className={styles.aboutli}>[Feature 2]</li>
            <li className={styles.aboutli}>[Feature 3]</li>
          </ul>
        </section>
        <section className={styles.team}>
          <h2 className={styles.headings}>Our Team</h2>
          <ul>
            <li className={styles.aboutli}>Deni</li>
            <li className={styles.aboutli}>Matthew</li>
            <li className={styles.aboutli}>Andres</li>
            <li className={styles.aboutli}>Kennedy</li>
            <li className={styles.aboutli}>Aaron</li>
            <li className={styles.aboutli}>Erik</li>
          </ul>
        </section>
        <section className={styles.contact}>
          <h2>Contact Us</h2>
          <p className={styles.aboutp}>
            If you have any questions or feedback, please don't hesitate to
            reach out to us. We'd love to hear from you!
          </p>
          <p className={styles.aboutp}>Email: EyeCandySupport@gmail.com</p>
        </section>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
