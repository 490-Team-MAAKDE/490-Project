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
