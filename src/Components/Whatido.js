import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFigma} from "@fortawesome/free-brands-svg-icons"
import { faLaptopCode ,faIdBadge} from '@fortawesome/free-solid-svg-icons'

const Whatido = () => {
  return (
    <div className='offers col-12'>
   <h1 className=''>What I Offers</h1>

   <div>
<h4> <FontAwesomeIcon icon={faFigma} style={{color: "#e40707",}} /> Design</h4>
<h4> <FontAwesomeIcon icon={faLaptopCode} style={{color: "#e40707",}} /> Application Development</h4>

   </div>
<h4 style={{marginTop:"6rem"}} ><FontAwesomeIcon icon={faIdBadge} style={{color: "#e40707",}} />Portfolio Development </h4>
</div>
  )
}

export default Whatido