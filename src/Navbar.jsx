import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h2>KAVIRASU</h2>

      {/* Hamburger Icon - Switches Between ☰ (Open) and ✖ (Close) */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Mobile Menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Skills" onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/Contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
