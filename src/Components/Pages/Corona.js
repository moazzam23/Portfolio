import React from 'react';
import Header from '../header/Header';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../Assets/corona/Screenshot (9).png";
import img2 from "../../Assets/corona/Screenshot (10).png";
import img3 from "../../Assets/corona/Screenshot (11).png";
import img4 from "../../Assets/corona/Screenshot (12).png";
import { SiAdobeillustrator, SiAdobexd,SiHandshakeProtocol } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import "../Pages/Slider.scss"
import Footer from '../Footer';

const Corona = () => {
  const navigate = useNavigate();
  function handleback(){
      navigate('/project')
  }
  return (
    <>
    <Header />
    <div style={{backgroundColor:"#be686849", marginTop:"-24px" , borderTop:"2px solid #e40707"}}>    
    <FontAwesomeIcon onClick={handleback} icon={faCircleArrowLeft} shake style={{color: "#e7230d",height:"3rem",width:"3rem",paddingLeft:"25px" }} />
    <h1 className="col-12 text-center" style={{ color: '#c2102a',marginTop:"-50px" , fontFamily:"caveat", fontWeight:"800", fontSize:"5vw" }}>
        Corona (Covid-2019) App 
    </h1>
    <p style={{marginLeft:"3rem",marginRight:"3rem"}} > This is a single page application that Contain upcoming 
    movie, popular, and watch before. I this project i have used technologies like Sass, 
    CSS, React JS, React-Router, React-Bootstrap , 
    React-Router-Dom , Axios, Sass. 
    I have intergate the Apis to get movie in the rows diffenrtly like for popular , upcoming  etc.   Netflix is one of the world's leading entertainment services with over 247 million paid memberships in over 190 countries enjoying TV series </p>

<div>
<div className='projectpage'>
<a className='projectbtn' style={{color:"black",marginLeft:"1rem"}} href='https://www.behance.net/gallery/148517665/Covid-App-Prototype'> See Prototype Demo</a>
  </div>

<br/>
<label style={{ fontSize:'1rem', border:"none",borderRadius:"6px", marginTop:"0.5rem" , marginLeft:'3rem', padding:"3px",fontWeight:"bolder"}} >Stack :</label>
<label className='text-center'  style={{ borderLeft:"15px solid #e40707",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#FC8B8B", borderRadius:"6px"}} ><SiAdobexd color='black' style={{height:"1rem",width:"1rem" , marginLeft:"5px"}}  /> Adobe Xd</label> 
<label className='text-center'  style={{ borderLeft:"15px solid black",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#FC8B8B", borderRadius:"6px"}} ><SiAdobeillustrator color='black' style={{height:"1rem",width:"1rem" , marginLeft:"5px"}} /> Adobe Illustrator</label> 
<label className='text-center'  style={{ borderLeft:"15px solid black",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#FC8B8B", borderRadius:"6px"}} ><SiHandshakeProtocol color='black' style={{height:"1rem",width:"1rem" , marginLeft:"5px"}} /> Prototyping</label> 
{/* <label className='text-center'  style={{ borderLeft:"15px solid black",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#40a5db", borderRadius:"6px"}} ><BiLogoReact color='black' style={{height:"1rem",width:"1rem"}} /> React JS</label> 
<label className='text-center'  style={{ borderLeft:"15px solid black",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#face0a", borderRadius:"6px"}} ><IoLogoJavascript color='black' style={{height:"1rem",width:"1rem"}} /> Javascript</label> 
<label className='text-center'  style={{ borderLeft:"15px solid black",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#face0a", borderRadius:"6px"}} ><IoLogoFirebase color='black' style={{height:"1rem",width:"1rem"}} /> Firebase</label>  */}

</div>
    <Carousel className='col-11 px-4 py-4 text-center slider' >
      <Carousel.Item >
        <img src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
    </div>
    <Footer/>

  </>)
}

export default Corona