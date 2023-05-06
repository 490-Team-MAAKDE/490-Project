import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={require("../Assets/logo.png")} className="footer__logo"></img>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Dashboard
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="footer__social-links">
            <li className="footer__item">
              <img src={require("../Assets/Icons/twitter.png")} alt="twitter" />
            </li>
            <li className="footer__item">
              {" "}
              <img
                src={require("../Assets/Icons/facebook.png")}
                alt="facebook "
              />
            </li>
            <li className="footer__item">
              {" "}
              <img src={require("../Assets/Icons/tiktok.png")} alt="tiktok " />
            </li>
            <li className="footer__item">
              {" "}
              <img
                src={require("../Assets/Icons/instagram.png")}
                alt="instagram "
              />
            </li>
          </div>
        </div>
      </div>
      <div className="footer__rights">
        <p>2023 ©Eye Candy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;