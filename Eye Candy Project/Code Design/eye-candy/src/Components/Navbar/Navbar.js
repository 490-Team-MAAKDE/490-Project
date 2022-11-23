import './Navbar.css'
import Hamburger from 'hamburger-react'
import { React, useState } from 'react'

function Navbar() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className='navigation'>
      <a href="/" className="name">Eye Candy</a>
     <div className="drop-down">
      <button className="drop" onClick={()=> {
          setIsNavExpanded(!isNavExpanded);
      }}>
      <Hamburger  size={18} color="black"/>
      </button>
        
        </div>
      <div className= {
        isNavExpanded ? "nav-menu expanded": "nav-menu"
      }>
        <ul>
          <li>
            <a href="">Dress up</a>
          </li>
          <li>
            <a href="">Forum</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Sign Up</a>
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
  )
}

export default Navbar