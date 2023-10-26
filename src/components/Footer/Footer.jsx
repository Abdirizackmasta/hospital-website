import React from 'react'
import '../Footer/Footer.css'
import logo from '../images/logo.jpeg'
import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className='footer container'>
    <div class="row">

      <div class="col">
       <div className="logo">
        <img src={logo} alt="" />
       </div>
        <p>
        Hair Revive Centre is an aesthetic surgery company serving in East Africa, 
         with its team of doctors and health
         professionals who are experts in aesthetic surgery and hair transplant operations.
         In addition that, beard and hair treatement are among the services we offer
        </p>
      </div>
      <div class="col">
        <h3>
          <div class="underline"><span></span></div>
          Office
        </h3>
        <p>Parkland,opposite Aga Khan Hosipital</p>
        <p>(pmc towers 6th floor)</p>
        <p>Nairobi, kenya</p>
        <p class="email-id">info@hairrevive.com</p>
        <h4>+254700037244</h4>
        <h4>+254115253101</h4>
      </div>
      <div class="col">
        <h3>
          <div class="underline"><span></span></div>
          Links
        </h3>
        <ul>
          <li><Link to="home" spy={true} smooth={true} offset={-20} duration={500}>Home</Link></li>
          <li><Link to="services" spy={true} smooth={true} offset={-20} duration={500}>Services</Link></li>
          <li><Link to="about" spy={true} smooth={true} offset={-20} duration={500}>About us</Link></li>
          <li><Link to="contact" spy={true} smooth={true} offset={-20} duration={500}>Contacts</Link></li>
        </ul>
      </div>
      <div class="col">
        <h3>
          <div class="underline"><span></span></div>
          Newsletter
        </h3>
        <form>
          <i class="fa-regular fa-envelope"></i>
          <input type="email" placeholder="Enter Your Email" required />
          <button type="submit">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </form>
        <div class="social-icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-whatsapp"></i>
        </div>
      </div>
    </div>
    <hr />
    <p class="copyright">Hair Revive center &copy; .All rights reserved 2023</p>
  </footer>
  )
}

export default Footer
