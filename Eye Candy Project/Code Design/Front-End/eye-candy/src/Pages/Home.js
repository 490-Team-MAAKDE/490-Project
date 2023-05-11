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
              The idea of outfits being 100% customizable is becoming increasingly popular.
               With the rise of online retailers and fashion technology, consumers now have
                more options than ever to personalize their clothing. From custom sizing to
                 choosing fabrics, colors, and designs, fashion brands are giving customers
                  the power to create their own unique look. This trend towards customization
                   reflects a growing desire for individuality and self-expression in the fashion world.
            </p>
          </div>
          <div className={styles['features__feature']}>
            <div className={styles['features_icon']}></div>
            <h5 className={styles['features__header']}>Share your creations</h5>
            <p>
            Sharing outfit creations has become a popular trend in the fashion world.
             Users can easily share their personalized outfits with their followers. 
             This has created a community of fashion enthusiasts who share their style
              and inspiration with each other. Being able to share outfit creations not only
               allows for self-expression but also provides a platform for fashion lovers 
               to connect and engage with one another.
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
            <h5 className={styles['features__header']}>Optimized for color theory</h5>
            <p>
            Color theory plays an essential role in the fashion industry, particularly
             when it comes to selecting the right colors for clothing. Different colors
              can evoke specific emotions and convey various messages, making it crucial
               to choose the right hues for a particular garment. Colors can be used to
                complement skin tone, highlight specific features, and create a cohesive
                 look. Understanding color theory and how it applies to clothing can help
                  individuals make informed decisions when selecting their outfits, 
                  ensuring that they look and feel their best.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
