import React from 'react';
import Header from '../header/Header';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../Assets/chaiwala/Screenshot (2).png";
import img2 from "../../Assets/chaiwala/Screenshot (4).png";
import img3 from "../../Assets/chaiwala/Screenshot (5).png";
import img4 from "../../Assets/chaiwala/Screenshot (6).png";
import img5 from "../../Assets/chaiwala/Screenshot (7).png";
import img6 from "../../Assets/chaiwala/Screenshot (8).png";
import {BiLogoSass,BiSolidFileCss,BiLogoReact} from "react-icons/bi"
import { IoLogoJavascript } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { MdAnimation } from "react-icons/md";
import "../Pages/Slider.scss"
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

const Chaiwala = () => {
  const navigate = useNavigate();
  function handleback(){
      navigate('/project')
  }
  return (
<>
    <Header />
    <div style={{backgroundColor:"#87bbd7", marginTop:"-24px" , borderTop:"2px solid #0b4251"}}>     
    <FontAwesomeIcon onClick={handleback} icon={faCircleArrowLeft} shake className='pt-3 backbtn'  />
    <h1 className="col-12 text-center heading" >
    Pakistani Chai Wala
    </h1>
    <p style={{marginLeft:"3rem",marginRight:"3rem",fontSize:"1.2rem",fontWeight:"700"}} > <b> 1.</b>This is a single page application that Contain upcoming 
    movie, popular, and watch before.<br/><b> 2.</b> In this project i have used technologies like Sass, 
    CSS, React JS, React-Router, React-Bootstrap , 
    React-Router-Dom , Axios, Sass. 
   <br/> <b> 3.</b> This app is full of animations and color<br/> <b> 4.</b>  Its Colorful interface shows the attractiveness of the user</p>

<div>
<div className='projectpage'>
<a rel="noreferrer" target="_blank" className='projectbtn' style={{marginLeft:"0.8rem"}} href='https://github.com/moazzam23/Pakistani-Chai-Wala'> Pakistani Chai Wala code  </a>
<a rel="noreferrer" target="_blank" className='projectbtn' style={{marginLeft:"1rem"}} href='https://pakistni-chai-wala-1dofs629j-moazzambaig.vercel.app/'> Vercel (See App Demo)</a>
  </div>

<br/>
<label style={{ fontSize:'1.3rem',textDecoration:"underline", border:"none",borderRadius:"6px", marginTop:"0.5rem" , marginLeft:'3rem', padding:"3px",fontWeight:"bolder"}} >Stack :</label>
<label className='text-center iconp'   ><BiLogoSass className='iconpp' /> Sass</label> 
<label className='text-center iconp' ><BiSolidFileCss className='iconpp' /> CSS</label> 
<label className='text-center iconp' ><BiLogoReact className='iconpp' /> React JS</label> 
<label className='text-center iconp' ><IoLogoJavascript className='iconpp' /> Javascript</label> 
<label className='text-center iconp' ><MdAnimation className='iconpp' /> Animation</label> 
{/* <label className='text-center'  style={{ borderLeft:"15px solid #e40707",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#FC8B8B", borderRadius:"6px"}} ><BiLogoSass color='black' style={{height:"1rem",width:"1rem"}} /> Sass</label>  */}

</div>
{/* <div className='col-11 px-4 py-4 slider' style={{position:"fixed"}}> */}
    <Carousel  className='col-12 ps-4 text-center py-4 slider' >
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
    </Carousel>
    {/* </div> */}
    </div>
    <Footer/>

  </>
  )
}

export default Chaiwala