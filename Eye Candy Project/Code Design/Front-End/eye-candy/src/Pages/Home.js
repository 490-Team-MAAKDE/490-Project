import {
  React,
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useInView } from "react-intersection-observer";

import styles from "./Home.module.css";

function Home() {
  const options = {
    root: null,
    threshold: 0.18,
    triggerOnce: true,
  };

  const { ref: header, inView: isHeaderVisible } = useInView(options);
  const { ref: section, inView: isSectionVisible } = useInView(options);
  const { ref: footer, inView: isFooterVisible } = useInView(options);

  return (
    <div>
      <div
        ref={header}
        className={`${styles['header']} ${isHeaderVisible ? "" : `${styles['section--hidden']}`}`}
      >
        <div className={`${styles['head--section']} ${styles['header__title']}`}>
          <div className={styles['container-narrow']}>
            <h1>
              When
              <span className={styles['highlight']}> fashion </span>
              meets technology
            </h1>
          </div>
          <h4>Create your own outfits today</h4>
          <button className={styles['btn--text']}>Learn more ↓</button>
          <img
            src={require("../Assets/Untitled.jpg")}
            alt="logo"
            className={`${styles['img--section']} ${styles['landing--photo']}`}
          />
        </div>
      </div>
      <section
        ref={section}
        className={`${styles['section']} ${isSectionVisible ? "" : `${styles['section--hidden']}`}`}
        id="section--1"
      >
        <div className={styles['section__title']}>
          <h2 className={styles['section__description']}>FEATURES</h2>
          <h3 className={styles['section__header']}>
            Everything you need to create a personalized fit
          </h3>
        </div>
        <div className={styles['features']}>
          <img
            src={require("../Assets/features-img1.jpg")}
            className={styles['features__img']}
          ></img>
          <div className={styles['features__feature']}>
            <div className={styles['features_icon']}></div>
            <h5 className={styles['features__header']}>100% customizable</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              alias sint quos? Accusantium a fugiat porro reiciendis saepe
              quibusdam debitis ducimus.
            </p>
          </div>
          <div className={styles['features__feature']}>
            <div className={styles['features_icon']}></div>
            <h5 className={styles['features__header']}>Share your creations</h5>
            <p>
              Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
              inventore ab? Nulla incidunt eius numquam sequi iste pariatur
              quibusdam!
            </p>
          </div>
          <img
            src={require("../Assets/features-img2.jpg")}
            className={styles['features__img']}
          ></img>
          <img
            src={require("../Assets/features-img3.jpg")}
            className={styles['features__img']}
          ></img>
          <div className={styles['features__feature']}>
            <div className={styles['features_icon']}></div>
            <h5 className="features__header">Optimized for color theory</h5>
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
