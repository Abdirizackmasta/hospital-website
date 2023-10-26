import React, { useState, useEffect, useRef } from "react";
import logo from "../images/logo.jpeg";
import "../Navbar/Navbar.css";
import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const barsRef = useRef(null);

  // This useEffect handles clicking anywhere outside the navbar to hide it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (barsRef.current && !barsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-toggle" ref={barsRef} onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="navbar-items">
        <li>
          <Link to="home" spy={true} smooth={true} offset={10} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-20} duration={500}>About</Link>
        </li>
        <li>
          <Link to="services" spy={true} smooth={true} offset={-20} duration={500}>Services</Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={-20} duration={500}>Contact</Link>
        </li>
        <li>
          <Link to="appointment" spy={true} smooth={true} offset={-20} duration={500}>Book Appointment</Link>
        </li>
        <span className="phone">
          <a href=" tel: +254712345678">
            <i className="fa-solid fa-phone-volume"> +254700037244</i>
          </a>
        </span>
      </ul>
    </nav>
 
  </div> 
  );
};
<>
</>
export default Navbar;