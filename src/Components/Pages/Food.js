import React from 'react';
import Header from '../header/Header';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../Assets/food/Screenshot (19).png";
import img2 from "../../Assets/food/Screenshot (20).png";
import img3 from "../../Assets/food/Screenshot (21).png";
import img4 from "../../Assets/food/Screenshot (22).png";
import img5 from "../../Assets/food/Screenshot (23).png";
import img6 from "../../Assets/food/Screenshot (24).png";
import img7 from "../../Assets/food/Screenshot (25).png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import img8 from "../../Assets/food/Screenshot (26).png";
import {BiLogoReact, BiLogoSass,BiSolidFileCss} from "react-icons/bi"
import "../Pages/Slider.scss"
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import { IoLogoJavascript } from 'react-icons/io';
import { MdAnimation } from 'react-icons/md';

const Food = () => {  
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
    Food Delivery And Order App
    </h1>
    <p style={{marginLeft:"3rem",marginRight:"3rem"}} > This is a single page application that Contain upcoming 
    movie, popular, and watch before. I this project i have used technologies like Sass, 
    CSS, React JS, React-Router, React-Bootstrap , 
    React-Router-Dom , Axios, Sass. 
    I have intergate the Apis to get movie in the rows diffenrtly like for popular , upcoming  etc.   Netflix is one of the world's leading entertainment services with over 247 million paid memberships in over 190 countries enjoying TV series </p>

<div> 
  <div className='projectpage'>
<a target="_blank"  className='projectbtn' style={{color:"black",marginLeft:"0.8rem"}} href='https://github.com/moazzam23/food_dilevery_app'> Food Delivery App code  </a>
<a target="_blank" className='projectbtn' style={{color:"black",marginLeft:"1rem"}} href='https://food-dilevery-app.vercel.app/'> Vercel (See App Demo)</a>
  </div>

<br/>
<label style={{ fontSize:'1rem', border:"none",borderRadius:"6px", marginTop:"0.5rem" , marginLeft:'3rem', padding:"3px",fontWeight:"bolder"}} >Stack :</label>
<label className='text-center'  style={{ borderLeft:"15px solid #e40707",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#FC8B8B", borderRadius:"6px"}} ><BiLogoSass color='black' style={{height:"1rem",width:"1rem"}} /> Sass</label> 
<label className='text-center'  style={{ borderLeft:"15px solid black",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#40a5db", borderRadius:"6px"}} ><BiSolidFileCss color='black' style={{height:"1rem",width:"1rem"}} /> CSS</label> 
<label className='text-center'  style={{ borderLeft:"15px solid black",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#40a5db", borderRadius:"6px"}} ><BiLogoReact color='black' style={{height:"1rem",width:"1rem"}} /> React JS</label> 
<label className='text-center'  style={{ borderLeft:"15px solid black",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#40a5db", borderRadius:"6px"}} ><BiLogoReact color='black' style={{height:"1rem",width:"1rem"}} /> React Router Dom</label> 
<label className='text-center'  style={{ borderLeft:"15px solid black",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#40a5db", borderRadius:"6px"}} ><BiLogoReact color='black' style={{height:"1rem",width:"1rem"}} /> React Icons</label> 
<label className='text-center'  style={{ borderLeft:"15px solid black",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#face0a", borderRadius:"6px"}} ><IoLogoJavascript color='black' style={{height:"1rem",width:"1rem"}} /> Javascript</label> 
<label className='text-center'  style={{ borderLeft:"15px solid black",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#FC8B8B", borderRadius:"6px"}} ><MdAnimation color='black' style={{height:"1rem",width:"1rem"}} /> Animation</label>  
{/* {/* <label className='text-center'  style={{ borderLeft:"15px solid #e40707",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#FC8B8B", borderRadius:"6px"}} ><BiLogoSass color='black' style={{height:"1rem",width:"1rem"}} /> Sass</label>  */}

</div>
    <Carousel className='col-12 px-4 py-4 text-center slider' >
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
      <Carousel.Item>
        <img src={img5} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img6} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img7} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img8} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
    </div>
    <Footer/>

  </>
  )
}

export default Food