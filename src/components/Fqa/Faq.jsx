import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import '../Fqa/Faq.css'

const Faq = ({title,content}) => {
    const [showContent, setShowContent] = useState(false)
  return (
    <div className='question'>
     <header>
     <h4>{title}</h4>
       <button className='btn2' onClick={() => setShowContent(!showContent)}>
        {showContent ? <AiOutlineMinus/> : <AiOutlinePlus/>}
       </button>
     </header>
     {showContent && <p className='content'>{content}</p>}
    </div>
  )
}

export default Faq
