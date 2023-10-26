import React from 'react'
import '../Booking/BookingAppointment.css'
const Booking_Appointment = () => {
  return (
    <div className='appointment-container container' id='appointment'>
     <div className="booking-form-heading">
      <h1>Booking Form</h1>
      <form>
              <div class="input-row">
                <div class="input-group">
                  <label>Name</label>
                  <input type="text" placeholder="your name*" required />
                </div>
                <div class="input-group">
                  <label>Phone</label>
                  <input type="number" placeholder="your phone no*" required />
                </div>
              </div>
              <div class="input-row">
                <div class="input-group">
                  <label>select your operation</label>
                <select id='Hair' name='Hair'>
                  <option value="Choose your Operation">Choose your Operation</option>
                  <option value="Hair Trasplant">Hair Trasplant</option>
                  <option value="Hair Treatment">Hair Treatment</option>
                  <option value="Beards Transplant">Beards Transplant</option>
                </select>
                </div>
                <div class="input-group">
                  <label>select your country</label>
                  <select select ='chose your operation'>
                  <option value="Kenya">Kenya</option>
                  <option value="Somalia">Somalia</option>
                
                </select>
                </div>
              </div>

              <div class="input-row">
                <div class="input-group">
                  <label>Name</label>
                  <input type="text" placeholder="Age*" required />
                </div>
                <div class="input-group">
                  <label>Date</label>
                  <input type="date"required />
                </div>
              </div>
              <button type="submit" class="form-submit">SEND</button>
            </form>
     </div>
    </div>
  )
}

export default Booking_Appointment
