import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    const handleLinkClick = () => {
    setMenuOpen(false);
  };



  return (
   <nav>
    <h1>Chaitra</h1>
    <div class="menu-toggle" onClick={toggleMenu}>
    &#9776; </div>
 
    <ul className={menuOpen ? "show" : ""}>
      <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
      <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
      <li><Link to="/education" onClick={handleLinkClick}>Education</Link></li>
      <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
    </ul>
   </nav>
  )
}

export default Navbar
