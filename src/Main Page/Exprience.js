import React from 'react'
import Header from '../Components/header/Header'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../Assets/Working late-bro.png"
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Exprience = () => {
  const navigate = useNavigate();
    function handleback(){
        navigate('/')
    }
  return (
  <>
  <Header/>
  
  <div className='col-12'  style={{marginTop:"-25px", backgroundColor:"#be686849" , borderTop:"2px solid #e40707"}} >
    <FontAwesomeIcon onClick={handleback} icon={faCircleArrowLeft} shake className='mt-4' style={{color: "#e7230d",height:"3rem",width:"3rem",paddingLeft:"25px" }} />
    <h1  style={{marginTop:"-60px",fontFamily:"caveat", fontSize:"6vw",fontWeight:"800", color:"#e40707", border:"none"}}className='col-12 text-center'>  Experience</h1>
    <div className='col-12 d-flex flex-row'>
 
    <div className='col-6 expmain'>
      <div className='col-12 bg-danger-200 p-4' >
        <div>
          <div className='d-flex flex-row justify-content-between'>
          <h3 className=' expheading'>ID Logix, Johar Town Lahore </h3>
          <label className='pt-2 fw-bold ' >Sep-2023 To Date </label>
        </div>
        <div  className='d-flex flex-row '>
          <h4 className='expheading'>Position:</h4>
          <label className='explabel'>Front-End Developer (React JS) </label>
        </div>
<h4 className='expheading'>Responsibilities:</h4>
<p className='exppara'> • Hand on experience in HTML5, CSS, SASS, JavaScript, React Js and Reactbootstrap.
• Reuseable Component- building<br/>
• State-Management, API Integration and Version-Control.<br/>
• Collaboration with Team, Troubleshooting and Debugging.<br/>
• Responsive Web Designs and Data Handling.  </p>
{/* <a className='explink' href=''> Check The LOE?</a> */}
          <hr style={{height:"3px",borderWidth:"0",color:"#E40707",backgroundColor:"#E40707"}}/>
          </div>
        <div>
          <div className='d-flex flex-row justify-content-between'>
          <h3 className=' expheading'>Premium Ebizols Digital, Bahria Town Lahore  </h3>
          <label className='pt-2 fw-bold ' >Aug-2022 To Oct-2022 </label>
        </div>
        <div  className='d-flex flex-row '>
          <h4 className='expheading'>Position:</h4>
          <label className='explabel'>React JS Internee </label>
        </div>
<h4 className='expheading'>Responsibilities:</h4>
<p className='exppara'> • Practical exposure to various essentials of Front-End Web
Development.<br/>
• Reuseable Component- building<br/>
• Hand on experience on JavaScript, React JS, Next JS. </p>
<a rel="noreferrer" target="_blank" className='explink' href='https://drive.google.com/file/d/1jdJ38YFuTbM_7BoN_7Q9eTl04P5NcCHY/view?usp=drive_link'> Check The LOE?</a>
          <hr style={{height:"3px",borderWidth:"0",color:"#E40707",backgroundColor:"#E40707"}}/>
          </div>
        <div>
          <div className='d-flex flex-row justify-content-between'>
          <h3 className=' expheading'>Indian Institute Of Digital Education </h3>
          <label className='pt-2 fw-bold ' >Feb-2022 To March-2022 </label>
        </div>
        <div  className='d-flex flex-row '>
          <h4 className='expheading'>Position:</h4>
          <label className='explabel'>Digital Marketing Internee </label>
        </div>
<h4 className='expheading'>Responsibilities:</h4>
<p className='exppara'> • Training and tasks related to Social Media Marketing, SEO, Content
• Writing and Google Sheet Management <br/> • A practical exposure to
 Various essentials of Digital Marketing </p>
<a rel="noreferrer" target="_blank" className='explink' href='https://drive.google.com/file/d/1ZYMtwc21lhzcuD-4wDaEm7qQW5K65vsK/view?usp=drive_link'> Check The LOE?</a>
          <hr style={{height:"3px",borderWidth:"0",color:"#E40707",backgroundColor:"#E40707"}}/>
          </div>
        <div>
          <div className='d-flex flex-row justify-content-between'>
          <h3 className=' expheading'>Business Management Club  </h3>
          <label className='pt-2 fw-bold ' >Nov-2021 To Dec-2022 </label>
        </div>
        <div  className='d-flex flex-row '>
          <h4 className='expheading'>Position:</h4>
          <label className='explabel'>Graphic Designer - Vice Head </label>
        </div>
<h4 className='expheading'>Responsibilities:</h4>
<p className='exppara'> • Heading the team of 8 Graphic Designing Members.<br/>
• Social Media Post/Flyers. <br/>
• Logo Integration and Pasting.<br/>
• Poster Making.<br/>
• Event / Task Management.  </p>
{/* <a className='explink' href=''> Check The LOE?</a> */}
          <hr style={{height:"3px",borderWidth:"0",color:"#E40707",backgroundColor:"#E40707"}}/>
          </div>
       </div>
    </div>
    <div className='col-6 align-items-center'>
      <img className='col-12' style={{paddingTop:"150px"}} src={img} alt="experipic"/>

    </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default Exprience