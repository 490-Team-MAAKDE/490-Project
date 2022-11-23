import "./Navbar.css";
import Hamburger from "hamburger-react";
import { React, useState } from "react";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="name">
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
            <a href="">
              {" "}
              <b> DRESS UP </b>{" "}
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <b> FORUM</b>{" "}
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <b> LOGIN </b>{" "}
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <b> SIGN UP </b>{" "}
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
  );
}

export default Navbar;
