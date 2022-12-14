import "./Navbar.css";
import Hamburger from "hamburger-react";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import DressUp from "../../Pages/DressUp";
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
              <Link className="link" to="dressup">
                Dress up
              </Link>
            </li>
            <li>
              <Link className="link">Forum</Link>
            </li>
            <li>
              <Link className="link" to="login">
                Login
              </Link>
            </li>
            <li>
              <Link className="link" to="signup">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
