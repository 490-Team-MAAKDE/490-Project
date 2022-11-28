import "./Navbar.css";
import Hamburger from "hamburger-react";
import { React, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <ul>
            <li>
              <a href="" className="nav">
                <b> DRESS UP</b>
              </a>
            </li>
            <li>
              <a href="" className="nav">
                <b>FORUM</b>
              </a>
            </li>
            <li>
              <Link to="Login">Login</Link>
            </li>
            <li>
              <a href="" className="nav">
                <b>Sign up</b>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
