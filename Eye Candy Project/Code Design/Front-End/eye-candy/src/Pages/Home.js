import { React, useRef, useState, useEffect, useMemo } from "react";
import "./Home.css";

function Home() {
  const header = useRef();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div ref={header} className="header">
        <div className="head--section header__title">
          <div className="container-narrow">
            <h1>
              When
              <span class="highlight"> fashion </span>
              meets technology
            </h1>
          </div>
          <h4>Create your own outfits today</h4>
          <button className="btn--text">Learn more ↓</button>
          <img
            src={require("../Assets/Untitled.jpg")}
            alt="logo"
            className="img--section landing-photo"
          />
        </div>
      </div>
      <section className="section" id="section--1">
        <div className="section__title">
          <h2 className="section__description">FEATURES</h2>
          <h3 className="section__header">
            Everything you need to create a personalized fit
          </h3>
        </div>
        <div className="features">
          <img
            src={require("../Assets/features-img1.jpg")}
            className="features__img"
          ></img>
          <div className="features__feature">
            <div className="features_icon"></div>
            <h5 class="features__header">100% customizable</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              alias sint quos? Accusantium a fugiat porro reiciendis saepe
              quibusdam debitis ducimus.
            </p>
          </div>
          <div className="features__feature">
            <div className="features_icon"></div>
            <h5 class="features__header">Share your creations</h5>
            <p>
              Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
              inventore ab? Nulla incidunt eius numquam sequi iste pariatur
              quibusdam!
            </p>
          </div>
          <img
            src={require("../Assets/features-img2.jpg")}
            className="features__img"
          ></img>
          <img
            src={require("../Assets/features-img3.jpg")}
            className="features__img"
          ></img>
          <div className="features__feature">
            <div className="features_icon"></div>
            <h5 class="features__header">Optimized for color theory</h5>
            <p>
              Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
              eveniet consequatur odit quam quos possimus assumenda dicta fuga
              inventore ab.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--sign-up">
        <div class="section__title">
          <h3 className="section__header">Look your best self today.</h3>
        </div>
        <button className="btn btn--show-modal">Create an account!</button>
      </section>
    </div>
  );
}

export default Home;
