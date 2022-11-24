import { React, useRef, useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const myRef = useRef();
  const img = useRef();
  const [isVisible, setIsVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        entry.target.classList.remove("section--hidden");
        observer.unobserve(entry.target);
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
            className="landing-photo"
            ref={img}
          />
          <img
            src={require("../Assets/landing-page-photo2.jpg")}
            alt="logo"
            className="landing-photo2"
            ref={img}
          />
          <img
            src={require("../Assets/landing-page-photo3.jpg")}
            alt="logo"
            className="landing-photo3"
            ref={img}
          />
        </div>
      </div>

      <section>
        <div className="section" id="section--1"></div>
        <div className="features"></div>
      </section>

      <section class="section" id="section--2">
        <div className="operations"></div>
      </section>

      <section className="section" id="section--3">
        <div className="section__title section__title--testimonials"></div>
        <div className="slider"></div>
      </section>
    </div>
  );
}

export default Home;
