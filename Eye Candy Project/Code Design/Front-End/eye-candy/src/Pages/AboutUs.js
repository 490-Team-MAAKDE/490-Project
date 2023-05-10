import React from "react";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.about}>
    <div className={styles.wrapper}>
      <div className={styles.aboutbody}>
        <header className={styles.header__title__about}>
          <h1 className={styles.headings}>Eye Candy</h1>
          <img
              src={require("../Assets/logo.png")}
              className={styles.headingsimg}
              alt="Logo for eyecandy"
            ></img>
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
          <h2 className={styles.headings}> <i>Our Features</i> </h2>
          <ul>
            <h3 className={styles.subheadings}>Clothing Detection</h3>
            <li className={styles.aboutli} > Our model takes an image input of clothing and identify what the piece of clothing is</li>
            <h3 className={styles.subheadings}>Color Detection</h3>
            <li className={styles.aboutli}>Like clothing detection, we have a seperate model that is able to identify the colors within the image including the colors of the clothing</li>
            <h3 className={styles.subheadings}>Forum</h3>
            <li className={styles.aboutli}>Be able to share your outfit and reccomendations with other users on our forum page!</li>
          </ul>
        </section>
        <section className={styles.team}>
          <h2 className={styles.headings}>Our Team</h2>
          <ul>
            <li className={styles.teamli}>Deni</li>
            <li className={styles.teamli}>Matthew</li>
            <li className={styles.teamli}>Andres</li>
            <li className={styles.teamli}>Kennedy</li>
            <li className={styles.teamli}>Aaron</li>
            <li className={styles.teamli}>Erik</li>
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
