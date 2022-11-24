import "./Navbar.css";
import Hamburger from "hamburger-react";
import { React, useState } from "react";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleHover = function (e) {
    if (e.target.classList.contains("nav")) {
      const link = e.target;
      const siblings = link.closest(".nav-container").querySelectorAll(".nav");
      console.log(siblings);
      siblings.forEach((el) => {
        if (el !== link) {
          console.log(123);
          el.style.opacity = this;
        }
      });
    }
  };
  // onMouseOver={handleHover.bind(0.5)
  // onMouseOut={handleHover.bind(1)
  return (
    <div className="nav-container">
      <nav className="nav navigation">
        <a href="/" className="nav name">
          {" "}
          <b> EYE CANDY </b>{" "}
        </a>
        <div className="drop-down">
          <button
            className="drop"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <Hamburger size={18} color="black" />
          </button>
        </div>
        <div
          className={
            isNavExpanded ? "inner-nav nav-menu expanded" : "inner-nav nav-menu"
          }
        >
          <ul>
            <li>
              <a href="" className="nav">
                {" "}
                <b> </b>{" "}
              </a>
            </li>
            <li>
              <a href="" className="nav">
                {" "}
                <b> DRESS UP</b>{" "}
              </a>
            </li>
            <li>
              <a href="" className="nav">
                {" "}
                <b>FORUM</b>{" "}
              </a>
            </li>
            <li>
              <a href="" className="nav">
                {" "}
                <b>LOGIN</b>{" "}
              </a>
            </li>
            <li>
              <a href="" className="nav">
                {" "}
                <b>SIGN UP</b>{" "}
              </a>
            </li>
          </ul>
        </div>
        {/* <nav className='navbar'>
          <div className="nav-links">
            <ul>
                <li><a href="">Home</a></li>
                <li> <a href="">About me </a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact Me</a></li>
            </ul>
          </div>
            
        </nav> */}
      </nav>
    </div>
  );
}

export default Navbar;
