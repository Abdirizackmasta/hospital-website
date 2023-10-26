import React from 'react'
import '../Servics/Services.css'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import images7 from '../images/images7.jpg'

const Services = () => {
  return (
    <div className='service-section container' id='services'>
      <div className="service-heading-text">
        <h1 className="service-heading heading">
          Our Service
        </h1>
        
      </div>
      <div className="service-info">
        <div className="info-details">
          <img src={image3} alt="sawir" />
          <h2>HAIR TRANSPLANT</h2>
          <p>hair transplantation is the process of replanting hair follicles in balding areas in the direction of natural growth by taking the hair tips one by one with special devices with local anesthesia by expert anesthetists.</p>
            <div className="numbers">1</div>
        </div>
        <div className="info-details">
          
          <img src={image4} alt="sawir" />
          <h2>BEARD TRANSPLANT</h2>
          <p>The beard part, which is among the parts that men care about on the face, is among the parts of the body where the most hair loss is experienced. In addition to the reduction of beards over time, in some cases, beards are either congenitally sparse or no beard at all.</p>
            <div className="numbers">2</div>
        </div>
        <div className="info-details">
          <img src={images7} alt="sawir" />
          <h2>HAIR TREATMENT</h2>
          <p>Hair treatments generally refer to any means of managing common hair related problems such as hair fall, dryness, dandruff, frizzy hair, thinning hair, and so on. The treatments vary in terms of the problem you are suffering from because different ingredients and elements are required to tackle them.</p>
            <div className="numbers">3</div>
        </div>
      
      
      </div>
     
    </div>
  )
}

export default Services
