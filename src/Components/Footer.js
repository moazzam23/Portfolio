 import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faCopyright } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className='footer col-12'>
<div style={{paddingRight:"1rem"}}>
   crafted with by <FontAwesomeIcon icon={faHeart} style={{color: "#e40707", paddingLeft:"1%"}} /> <p >Moazzam Baig</p>
   </div> <hr className='col-12'/>
   <p className='copyright'> <FontAwesomeIcon icon={faCopyright} style={{color: "#e40707",paddingRight:"10px"}} /> ALL RIGHT RESERVED 2023</p>
</div>
  )
}

export default Footer