
import React, { useState } from 'react'
import Data from '../Data'
import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";
import '../Home/Home.css'
import About from '../About/About'
import Services from '../Servics/Services'
import Fqa from "../Fqa/Faq";
import Contact from '../Contact/Contact'
import BookingAppointment from '../Booking/BookingAppointment'

const Home = () => {
  const [frequents, setFrequents] = useState(Data);
  return (
    <>
    <div className=' hero-container container' id='home'>
      <div className="hero-text">
        <h1>Wellcome to <br /> Hair Revive Center</h1>
        <p> Hair Revive Center helps you with treatment, beauty and advice for your skin and hair</p>
        <Link to="appointment" className='appointment' spy={true} smooth={true} offset={-20} duration={500}>Make Appointment</Link>
      </div>
      
    </div>
        <About/>
        <Services/>
        <div className="container">
         <div className="frequent">
           <h1>Questios and Answers About Us</h1>
           <section className="frequent">
             {frequents.map((frequent) => {
               return <Fqa key={frequent.id} {...frequent}/>
             })}
           </section>
         </div>
        </div>
        <Contact/>
        <BookingAppointment/>
        </>
  )
}
export default Home
