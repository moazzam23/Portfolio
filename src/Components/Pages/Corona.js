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
    <div style={{backgroundColor:"#87bbd7", marginTop:"-24px" , borderTop:"2px solid #0b4251"}}>    
    <FontAwesomeIcon onClick={handleback} icon={faCircleArrowLeft} shake className='pt-3 backbtn' />
    <h1 className="col-12 text-center heading">
        Corona (Covid-2019) App 
    </h1>
    <p style={{marginLeft:"3rem",fontSize:"1.2rem",fontWeight:"700",marginRight:"3rem"}} > <b>1.</b> It is the prototyping of app named as Corona (2019).<br/><b>2.</b> The prototying is made on AdobeXD. <br/><b>3.</b>It conatin several screen and each screen have its own functionalities. <br/><b>4.</b> It have complete navigation to different page. </p>

<div>
<div className='projectpage'>
<a  rel="noreferrer" target="_blank" className='projectbtn' style={{marginLeft:"1rem"}} href='https://www.behance.net/gallery/148517665/Covid-App-Prototype'> See Prototype Demo</a>
  </div>

<br/>
<label style={{ fontSize:'1.3rem',textDecoration:"underline", border:"none",borderRadius:"6px", marginTop:"0.5rem" , marginLeft:'3rem', padding:"3px",fontWeight:"bolder"}} >Stack :</label>
<label className='text-center iconp'   ><SiAdobexd  className='iconpp'  /> Adobe Xd</label> 
<label className='text-center iconp' ><SiAdobeillustrator className='iconpp' /> Adobe Illustrator</label> 
<label className='text-center iconp' ><SiHandshakeProtocol className='iconpp' /> Prototyping</label> 
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