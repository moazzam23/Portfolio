import React from 'react'
import vedio from "../Assets/Mainvedio.mp4"
import Footer from '../Components/Footer'
import Header from '../Components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import img from "../Assets/2-removebg-preview.png" 
import { useNavigate } from 'react-router-dom'
import { FaBehanceSquare, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaSnapchat } from 'react-icons/fa'

const About2 = () => {
    const navigate = useNavigate();
    function handleback(){
        navigate('/')
    }
  return (
             <>   <Header/>
    <div className='me col-12' >
    <FontAwesomeIcon onClick={handleback} icon={faCircleArrowLeft} shake style={{color: "#e7230d",height:"2rem",width:"2rem",paddingLeft:"25px" }} />
      <h1 className='about'>About Me</h1>

    <div >
        <img className='col-6' src={img}  alt='mypic'/>

         {/* <video className='img col-6' src={vedio} muted autoPlay loop controlsList="nodownload" /> */}
      <p className='detail col-6 '> 
      <h2 className='text-center'>Mirza Muhammad Moazzam Baig</h2>
      <h3 style={{paddingBottom:"1rem",fontWeight:"800",color:"red"}}>Front-End Developer</h3>
      <label style={{display:"flex",fontSize:"1.1rem",fontWeight:"800",color:"red"}}>Contact No:<p style={{color:"black", paddingLeft:"1rem",fontWeight:"300"}}>0331-4483362</p></label>
      <label style={{display:"flex",fontSize:"1.1rem",fontWeight:"800",color:"red"}}>DOB:<p style={{color:"black", paddingLeft:"1rem",fontWeight:"300"}}>08 AUG 2001</p></label>
      <label style={{display:"flex" ,fontSize:"1.1rem",fontWeight:"800",color:"red"}}>Nationality:<p style={{color:"black", paddingLeft:"1rem",fontWeight:"300"}}>Pakistani</p></label>
      <label style={{display:"flex",fontSize:"1.1rem",fontWeight:"800",color:"red"}}>Blood Group:<p style={{color:"black", paddingLeft:"1rem",fontWeight:"300"}}>O +ve</p></label>
      <label style={{display:"flex",fontSize:"1.1rem",fontWeight:"800",color:"red"}}>Bahelor's:<p style={{color:"black", paddingLeft:"1rem",fontWeight:"300"}}>BS Software Engineering</p></label><br/>
     I am a Passionate Developer. I have completed my graduation in BS Software Engineering From Lahore Garrison University
     <br/><br/>My aim to design, develop, and maintain Websites and Apps that meet high standards of quality, performance, reliability, and security and also produce system that is 100% bug free. 
  <br/>  <label style={{paddingTop:"1rem",paddingBottom:"2rem",fontSize:"1.3rem",fontWeight:"800",color:"red"}} >Follow Me On:</label><br/>
  <div className='col-1' style={{display:"inline-flex" }}>
    <a href='https://www.instagram.com/moazzambaig23/'> <FaInstagram style={{color:"red",height:"2rem",width:"2rem"}}/></a>  
    <a href='https://www.facebook.com/profile.php?id=100011040979268'> <FaFacebook style={{color:"#0a0c91",height:"2rem",width:"2rem"}}/></a>  
    {/* <a href='https://www.behance.net/moazzambaig'><FaBehanceSquare style={{color: "#e40707",height:"2rem",width:"2rem"}} /></a> */}
    <a href='https://www.linkedin.com/in/mirza-muhammad-moazzam-baig-0b127a215/'> <FaLinkedin style={{color:"#0a0c91",height:"2rem",width:"2rem"}}/></a>  
    <a href='https://www.snapchat.com/add/moazzambaig2019?share_id=jKLsgCbH6qg&locale=en-GB '> <FaSnapchat style={{color:"yellow",height:"2rem",width:"2rem"}}/></a>  
    <a href='mailto:moazzambaig140@gmail.com'><FaEnvelope  style={{color: "#e40707",height:"2rem",width:"2rem"}} /></a>
    </div></p>
      
      </div>
      <a href="https://drive.google.com/file/d/14wF3ryG3g_SeLR_J18imtibtWkJIcHxK/view?usp=share_link" download="Moazzam_Resume" target='_blank'>
<button type="button" >See My Resume</button>
</a>
     </div>
     <Footer/>
     </>
  )
}

export default About2