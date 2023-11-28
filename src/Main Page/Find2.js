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
    <FontAwesomeIcon onClick={handleback} icon={faCircleArrowLeft} shake style={{color: "#e7230d",height:"3rem",width:"3rem",paddingLeft:"25px" }} />
    <div className='find2 col-12 text-center'>
    <h1  style={{marginTop:"-90px"}}className='col-4 text-center'>  Contact Me On</h1>
    <div className='col-12 text-center'>
      <a href='tel:0331-4483362'> <FontAwesomeIcon icon={faPhone}  style={{ color: "#e40707"}} /></a>  
      <a href='https://www.instagram.com/moazzambaig23/'> <FontAwesomeIcon icon={faInstagramSquare}  style={{ color: "#e40707"}} /></a>  
    <a href='https://www.facebook.com/profile.php?id=100011040979268'> <FontAwesomeIcon icon={faFacebookSquare}  style={{ color: "#e40707"}} /></a>  
    <a href='https://www.snapchat.com/add/moazzambaig2019?share_id=jKLsgCbH6qg&locale=en-GB '><FontAwesomeIcon icon={faSnapchatSquare}  style={{ color: "#e40707"}} /></a>  
      <a href='https://www.linkedin.com/in/mirza-muhammad-moazzam-baig-0b127a215/'><FontAwesomeIcon fade icon={faLinkedin} style={{color: "#e40707",}} /></a>
      <a href='https://github.com/moazzam23'><FontAwesomeIcon icon={faGithub} fade style={{ color: "#e40707" }} /></a>
      <a href='https://www.behance.net/moazzambaig'><FontAwesomeIcon fade icon={faSquareBehance} style={{color: "#e40707",}} /></a>
      <a href='mailto:moazzambaig140@gmail.com'><FontAwesomeIcon icon={faEnvelope} bounce style={{color: "#e40707",}} /></a>
      <a href='https://vercel.com/dashboard'><FontAwesomeIcon icon={faCaretUp}  fade style={{color: "#e40707",height:"5rem",width:"5rem"}} /></a>
    </div>
    <div className="container2">
      <div className="contact-form">
        <form action="https://formspree.io/f/xoqoolne" method="POST" className="contact-inputs" > 
        <h2> Contact Form </h2><br />
        <input style={{marginTop:"-110px"}} type="text"  placeholder="username" name="username" required autoComplete="off" />
        <input type="email"  placeholder="Enter active email" name="email" required autoComplete="off" />
       <textarea name="description" required autoComplete="off" placeholder="enter your message" cols={30} rows={10}></textarea>
<input type="submit" />
        </form>
      </div>
    </div>
    </div>
  
  <Footer/>
  </>)
}

export default Find2