import { React, useRef, useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const myRef = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();

  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("section--hidden");
        observer.unobserve(entry);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    myRef.current.classList.add("section--hidden");
    observer.observe(myRef.current);
  }, []);

  return (
    <div>
      <div className="header">
        <div ref={myRef} className="head--section header__title">
          <h1>
            When
            <span class="highlight"> fashion </span>
            meets technology
          </h1>
          <h4>Create your own outfits today</h4>
          <button className="btn--text">Learn more ↓</button>
          <img
            src={require("../Assets/landing-page-photo.jpg")}
            alt="logo"
            className="img--section landing-photo"
            ref={img1}
            width="722"
            height="481"
            loading="lazy"
          />
          <img
            src={require("../Assets/landing-page-photo2.jpg")}
            alt="logo"
            className="img--section landing-photo2"
            width="361"
            height="542"
            ref={img2}
          />
          <img
            src={require("../Assets/landing-page-photo3.jpg")}
            alt="logo"
            className="img--section landing-photo3"
            width="252"
            height="379"
            ref={img3}
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
            <h5 class="features__header">Optimized for color matching</h5>
            <p>
              Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
              eveniet consequatur odit quam quos possimus assumenda dicta fuga
              inventore ab.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
