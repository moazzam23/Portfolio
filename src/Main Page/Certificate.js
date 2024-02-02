import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import img from "../Assets/certificates/uiux.png"
import img1 from "../Assets/certificates/email.png"
import img5 from "../Assets/certificates/version.png"
import img6 from "../Assets/certificates/java.png"
import img2 from "../Assets/certificates/html.png"
import img7 from "../Assets/certificates/21.png"
import img4 from "../Assets/certificates/meta.png"
import img3 from "../Assets/certificates/graphic.png"
import { useNavigate } from 'react-router-dom'
import Header from '../Components/header/Header'
import Footer from '../Components/Footer'


const Certificate = () => {
    const navigate = useNavigate();
    function handleback(){
        navigate('/')
    }
  return (
    <>
    <Header/>
    <div className='col-12' style={{marginTop:"-25px", backgroundColor:"#be686849" , borderTop:"2px solid #e40707"}}>
    <FontAwesomeIcon onClick={handleback} icon={faCircleArrowLeft} shake className='mt-4' style={{color: "#e7230d",height:"3rem",width:"3rem",paddingLeft:"25px" }} />
        <h2 style={{textAlign:"center",marginTop:"-50px", color:"#e40707",fontSize:'6vw',fontFamily:"caveat",fontWeight:"800",marginBottom:"2rem"}}>Certificates</h2>
      
        <div className="cardmain2 col-12">
    <div className="card3">
      <div  className="image2 ">
        <img src={img7} alt="card" />
      </div>
      <div className="cardbody3 ">
      <h4 className=' text-center'>Indepth HTLM And CSS</h4>
           <label style={{fontSize:"1rem",fontWeight:"600"}}>Goals Achieved:</label>
            <p><b> 1.</b> Create a simple form with a responsive layout using HTML5 and CSS

            Create a responsive layout using CSS.Create a UI using Bootstrap   <br/> <b> 2.</b> Implement debugging tools. CSS Animation, selectors and Effect Implementation</p>
             <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Duration: </label>
            <label style={{fontWeight:"400",paddingLeft:"20px"}}> One Month (Dec 2023 –Dec 2023) </label><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>verify at:</label>
            <a target="_blank" style={{paddingLeft:"10px",color:"red"}} href='https://www.coursera.org/account/accomplishments/verify/4MK4U8C4R6AX'> Click to verify the certificate?</a><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Skills:</label>
            <label style={{fontWeight:"400",paddingLeft:"20px",paddingTop:"5px"}}>HTML and CSS,
React (Web Framework),
Debugging,
User Interface</label>
        </div>
    </div></div>
        <div className="cardmain2 col-12">
    <div className="card3">
      <div  className="image2 ">
        <img src={img5} alt="card" />
      </div>
      <div className="cardbody3 ">
      <h4 className=' text-center'>Version Control</h4>
           <label style={{fontSize:"1rem",fontWeight:"600"}}>Goals Achieved:</label>
            <p><b> 1.</b> Implement Version Control systems 

Navigate using the command line. help to colaaborate when working in a large team. 

Use a GitHub repository.   <br/> <b> 2.</b> Create a GitHub repository

Manage code revisions </p>
             <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Duration: </label>
            <label style={{fontWeight:"400",paddingLeft:"20px"}}> One Month (Nov 2023 –Dec 2023) </label><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>verify at:</label>
            <a target="_blank" style={{paddingLeft:"10px",color:"red"}} href='https://www.coursera.org/account/accomplishments/verify/9MKMYGN9XVNA'> Click to verify the certificate?</a><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Skills:</label>
            <label style={{fontWeight:"400",paddingLeft:"20px",paddingTop:"5px"}}>Version Control, collaboration , Git and Github </label>
        </div>
    </div></div>
        <div className="cardmain2 col-12">
    <div className="card3">
      <div  className="image2 ">
        <img src={img6} alt="card" />
      </div>
      <div className="cardbody3 ">
      <h4 className=' text-center'>Programming With JavaScript</h4>
           <label style={{fontSize:"1rem",fontWeight:"600"}}>Goals Achieved:</label>
            <p><b> 1.</b>  Creating simple JavaScript codes. Indepth knowledge of object oriented language(oop). Real world coding.


Writing unit tests using Jest  <br/> <b> 2.</b> 
Creating and manipulating objects and arrays..The benefits of working with UI frameworks. </p>
             <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Duration: </label>
            <label style={{fontWeight:"400",paddingLeft:"20px"}}> Two Month (Oct 2023 –Dec 2023) </label><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>verify at:</label>
            <a target="_blank" style={{paddingLeft:"10px",color:"red"}} href='https://www.coursera.org/account/accomplishments/verify/NPBJUG5LP6D4'> Click to verify the certificate?</a><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Skills:</label>
            <label style={{fontWeight:"400",paddingLeft:"20px",paddingTop:"5px"}}>
JavaScript,
Front-End Web Development,
Object-Oriented Programming (OOP) </label>
        </div>
    </div></div>

        <div className="cardmain2 col-12">
    <div className="card3">
      <div  className="image2 ">
        <img src={img4} alt="card" />
      </div>
      <div className="cardbody3 ">
      <h4 className=' text-center'>Introduction to Front-End Development</h4>
           <label style={{fontSize:"1rem",fontWeight:"600"}}>Goals Achieved:</label>
            <p><b> 1.</b>  Distinguish between front-end, back-end, and full-stack developers. benefits of writing clean code. Create responsive web-designs <br/> <b> 2.</b>  Create and style a webpage with HTML and CSS.The benefits of working with UI frameworks. </p>
             <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Duration: </label>
            <label style={{fontWeight:"400",paddingLeft:"20px"}}> Two Month (Aug 2023 –Oct 2023) </label><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>verify at:</label>
            <a target="_blank" style={{paddingLeft:"10px",color:"red"}} href='https://www.coursera.org/account/accomplishments/verify/XL82DPSXKCJZ'> Click to verify the certificate?</a><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Skills:</label>
            <label style={{fontWeight:"400",paddingLeft:"20px",paddingTop:"5px"}}>Web Development, HTML and CSS,Responsive Web Design and User Interface </label>
        </div>
    </div></div>
        <div className="cardmain2 col-12">
    <div className="card3">
      <div  className="image2 ">
        <img src={img2} alt="card" />
      </div>
      <div className="cardbody3 ">
      <h4 className=' text-center'>Introduction To HTML5</h4>
           <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Goals Achieved:</label>
            <p><b> 1.</b>   Recognize and use common HTML5 tags. write the tag that matches with the functionality of the specific piece of code<br/> <b> 2.</b>   Be aware of what an editor is and how to use one. Compose HTML5 code that can create images and links. </p>
             <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Duration: </label>
            <label style={{fontWeight:"400",paddingLeft:"20px"}}> One Month (May 2022 – June 2022) </label><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>verify at:</label>
            <a target="_blank" style={{paddingLeft:"10px",color:"red"}} href='https://coursera.org/verify/AYBA97HFQG3W'> Click to verify the certificate?</a><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Skills:</label>
            <label style={{fontWeight:"400",paddingLeft:"20px",paddingTop:"5px"}}>Web Design,Web Accessibility,HTML5 and clean code</label>
        </div>
    </div></div>
        <div className="cardmain2 col-12">
    <div className="card3">
      <div  className="image2 ">
        <img src={img} alt="card" />
      </div>
      <div className="cardbody3 ">
      <h4 className=' text-center'>Foundation Of User Exprience (UX) Design</h4>
           <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Goals Achieved:</label>
            <p><b> 1.</b>  Identify common job responsibilities of entry-level UX designers and other teams .<br/> <b> 2.</b>  Understand foundational concepts in UX design, such as user-centered design, the design process, and equity-focused design. </p>
             <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Duration: </label>
            <label style={{fontWeight:"400",paddingLeft:"20px"}}> One Month (Dec 2020 –Jan 2021) </label><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>verify at:</label>
            <a target="_blank" style={{paddingLeft:"10px",color:"red"}} href='https://coursera.org/verify/JT744UCBJWGB'> Click to verify the certificate?</a><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Skills:</label>
            <label style={{fontWeight:"400",paddingLeft:"20px",paddingTop:"5px"}}>Prototype,Wireframe,User Experience Design (UXD) and UX Research </label>
        </div>
    </div></div>
        <div className="cardmain2 col-12">
    <div className="card3">
      <div  className="image2 ">
        <img src={img1} alt="card" />
      </div>
      <div className="cardbody3 ">
      <h4 className=' text-center'>Write Professional E-mails In English</h4>
           <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Goals Achieved:</label>
            <p><b> 1.</b>  Identify common job responsibilities of how to write the professional email and how convey a meaningful message to .<br/> <b> 2.</b>  Know how to show the correct set of words and convey the message that is short and fullfil the purpose of email</p>
             <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Duration: </label>
            <label style={{fontWeight:"400",paddingLeft:"20px"}}> One Month (JULY 2021 –AUG 2021) </label><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>verify at:</label>
            <a target="_blank" style={{paddingLeft:"10px",color:"red"}} href='https://www.coursera.org/account/accomplishments/verify/PVFZMFNJLAAC'> Click to verify the certificate?</a><br/>
            <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Skills:</label>
            <label style={{fontWeight:"400",paddingLeft:"20px",paddingTop:"5px"}}>Professional Email Writing, Communication, Writing </label>
        </div>
    </div></div>
        <div className="cardmain2 col-12">
    <div className="card3">
      <div  className="image2 ">
        <img src={img3} alt="card" />
      </div>
      <div className="cardbody3 ">
      <h4 className=' text-center'>Graphic Designing Course </h4>
           <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Goals Achieved:</label>
            <p><b> 1.</b>  Identify common job responsibilities of entry-level designers and other teams you might work with.<br/> <b> 2.</b>  Understand foundational concepts in design, such as Adobe Photoshop, the design process, Adobe XD, Prototyping, and equity-focused design. </p>
             <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Duration: </label>
            <label style={{fontWeight:"400",paddingLeft:"20px"}}> One Month (Aug 2020 –Sep 2020) </label><br/>
            {/* <label style={{fontSize:"1.1rem",fontWeight:"600"}}>verify at:</label>
         <a style={{paddingLeft:"10px",color:"red"}} href='https://coursera.org/verify/AYBA97HFQG3W'> Click to verify the certificate?</a> */}
                   <label style={{fontSize:"1.1rem",fontWeight:"600"}}>Skills:</label>
            <label style={{fontWeight:"400",paddingLeft:"20px",paddingTop:"5px"}}>Abode Photoshop, Adobe Illustrator,Canva and Adobe XD</label>
        </div>
    </div></div>
      
    </div>
    <Footer/>
    
    </>
  )
}

export default Certificate