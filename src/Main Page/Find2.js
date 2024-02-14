import React from 'react';
import "../Components/Pages/Slider.scss"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedin, faSquareBehance,faFacebookSquare,faInstagramSquare,faSnapchatSquare } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope,faCaretUp ,faCircleArrowLeft,faPhone} from '@fortawesome/free-solid-svg-icons';

import Header from '../Components/header/Header';
import Footer from '../Components/Footer';
const Find2 = () => {
    const navigate = useNavigate();
    function handleback(){
        navigate('/')
    }
    return (
    <>
    <Header/>
    <div  style={{marginTop:"-25px", backgroundColor:"#87bbd7" , borderTop:"2px solid #0b4251"}} >
    <FontAwesomeIcon onClick={handleback} icon={faCircleArrowLeft} shake className='pt-3 backbtn' />
    <div className='find2 col-12 text-center'>
    <h1  style={{marginTop:"-60px",fontFamily:"caveat", fontSize:"6vw",fontWeight:"800", color:"#0b4251", border:"none"}}className='col-4 text-center'>  Contact Me On</h1>
    <div className='col-12 text-center'>
      <a rel="noreferrer" target="_blank" href='tel:0331-4483362'> <FontAwesomeIcon icon={faPhone}  style={{ color: "#0b4251"}} /></a>  
      <a rel="noreferrer" target="_blank" href='https://www.instagram.com/moazzambaig23/'> <FontAwesomeIcon icon={faInstagramSquare}  style={{ color: "#0b4251"}} /></a>  
    <a rel="noreferrer" target="_blank" href='https://www.facebook.com/profile.php?id=100011040979268'> <FontAwesomeIcon icon={faFacebookSquare}  style={{ color: "#0b4251"}} /></a>  
    <a rel="noreferrer" target="_blank" href='https://www.snapchat.com/add/moazzambaig2019?share_id=jKLsgCbH6qg&locale=en-GB '><FontAwesomeIcon icon={faSnapchatSquare}  style={{ color: "#0b4251"}} /></a>  
      <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/mirza-muhammad-moazzam-baig-0b127a215/'><FontAwesomeIcon fade icon={faLinkedin} style={{color: "#0b4251",}} /></a>
      <a rel="noreferrer" target="_blank" href='https://github.com/moazzam23'><FontAwesomeIcon icon={faGithub} fade style={{ color: "#0b4251" }} /></a>
      <a rel="noreferrer" target="_blank" href='https://www.behance.net/moazzambaig'><FontAwesomeIcon fade icon={faSquareBehance} style={{color: "#0b4251",}} /></a>
      <a rel="noreferrer" target="_blank" href='mailto:moazzambaig140@gmail.com'><FontAwesomeIcon icon={faEnvelope} bounce style={{color: "#0b4251",}} /></a>
      <a rel="noreferrer" target="_blank" href='https://vercel.com/dashboard'><FontAwesomeIcon icon={faCaretUp}  fade style={{color: "#0b4251",height:"5rem",width:"5rem"}} /></a>
    </div>
    <div className="container2">
      <div className="contact-form">
        <form action="https://formspree.io/f/xoqoolne" method="POST" className="contact-inputs" > 
        <h2> Contact Or Have A Coffee For Talk </h2><br />
        <input style={{marginTop:"-110px",backgroundColor:"#87bbd7" ,color:"#0b4251"}} type="text"  placeholder="username" name="username" required autoComplete="off" />
        <input type="email" style={{backgroundColor:"#87bbd7",color:"#0b4251"}} placeholder="Enter active email" name="email" required autoComplete="off" />
       <textarea name="description" style={{backgroundColor:"#87bbd7",color:"#0b4251"}} required autoComplete="off" placeholder="enter your message" cols={30} rows={10}></textarea>
<input type="submit" />
        </form>
      </div>
    </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default Find2