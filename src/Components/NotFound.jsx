import React from 'react'
import { MdError } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{paddingTop:"150px", textAlign: 'center', display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
  <MdError style={{color:"#0b4251",height:"4rem", width:"4rem"}}/>
    <h1 className='marginTop:"1rem"'>404 - Not Found</h1>
    <p>Sorry, the page you are looking for might be in another castle.</p>
  
    <br />
    <Link to="/" style={{padding: "15px 30px"}}>
      <button  style={{ backgroundColor:"#0b4251",padding: "22px 80px",color:"white",border:"none",borderRadius:"10px", fontSize: '22px',fontWeight:"800", cursor: 'pointer' }}>
        Go Back
      </button>
    </Link>
  </div>
  )
}

export default NotFound