import React from 'react'
import '../About/About.css'
import image from '../images/image6.jpg'
const About = () => {
  return (
    <section className='about-section container' id='about'>
      <div className="about-section-text">
      <h1 className='about-heading heading'>About-Us</h1>
      <h4>Hair Revive Center</h4>
      <p>Hair Revive Centre is an aesthetic surgery company serving in East Africa, 
         with its team of doctors and health
         professionals who are experts in aesthetic surgery and hair transplant operations.
          In addition that, beard and hair treatement are among the services we offer to our patients within the 
         scope of hair transplantation operations.

        </p>
        <p className='location'>Our main center in Kenya is located</p>
        <p>Nairobi / Parkland opposite Aga Khan Hosipital( pmc Tower)/ 6th Floor.</p>

      </div>
      <div className="about-section-image">
        <img src={image} alt="image" />
      </div>
    </section>
  )
}

export default About
