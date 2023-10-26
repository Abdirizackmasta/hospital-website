import React from 'react'
import '../Contact/Contact.css'
const Contact = () => {
  return <>
  <div class="contact-container container" id='contact'>
        <h1 className='contact-heading'>Connect with us</h1>
        <p>
          we would like to respond to your queries.Feel free to get in touch
          with us.
        </p>
        <div class="contact-box">
          <div class="contact-left">
            <h1>Send us your request</h1>
            <form>
              <div class="input-row">
                <div class="input-group">
                  <label>Name</label>
                  <input type="text" placeholder="Abdi Issack" required />
                </div>
                <div class="input-group">
                  <label>Phone</label>
                  <input type="number" placeholder="+254712345678" required />
                </div>
              </div>
              <div class="input-row">
                <div class="input-group">
                  <label>Email</label>
                  <input type="Email" placeholder="abdissack@gmail.com"  required/>
                </div>
                <div class="input-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Subject" required />
                </div>
              </div>
              <label>Message</label>
              <textarea rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" class="form-submit">SEND</button>
            </form>
          </div>
          {/* <div class="contact-right-section">
            <h1>Reach Us</h1>
            <div class="contact-right-info">
              <div class="address">
                <p><i class="fa-solid fa-location-dot"></i></p>
                <p>
                  Parkland, opposite Aga Khan Hosipital,
                   (pmc towers 6th floor),
                </p>
              </div>
              <div>
                <a href="tel: +254700037244"
                  ><i class="fas fa-phone-square-alt"></i>+254700037244</a
                >
              </div>
              <div>
                <a href="email:info@hairrivive.com .com"
                  ><i class="fa fa-envelope"></i
                  > info@hairrivive.com</a
                >
              </div>
            </div>
          </div> */}
          <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8506099066676!2d36.81799478885497!3d-1.2619511999999982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f170aba694959%3A0x4839f2bcf6442bc5!2sPmc!5e0!3m2!1sen!2ske!4v1692561600231!5m2!1sen!2ske" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
  </>  
}

export default Contact
