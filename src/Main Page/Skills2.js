import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3Alt,faReact,faBootstrap,faSquareJs, faNode} from '@fortawesome/free-brands-svg-icons';
import {BiLogoTailwindCss,BiLogoFirefox} from "react-icons/bi"
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {SiAdobexd,SiAdobeillustrator, SiSass, SiExpress, SiMongodb, SiTypescript, SiRedux} from "react-icons/si"
import Footer from '../Components/Footer';
import Header from '../Components/header/Header';
import { useNavigate } from 'react-router-dom';

const Skills2 = () => {
    const navigate = useNavigate();
    function handleback(){
        navigate('/')
    }
  return ( 
    <>
    <Header/>
    <div  style={{marginTop:"-25px", backgroundColor:"#be686849" , borderTop:"2px solid #e40707"}} >
    <FontAwesomeIcon onClick={handleback} icon={faCircleArrowLeft} shake className='mt-4' style={{color: "#e7230d",height:"2rem",width:"2rem",paddingLeft:"25px" }} />
  <h1 style={{paddingLeft:"45%",fontSize:"6vw",marginBottom:"2rem",marginTop:"-30px",color:"#e40707", fontWeight:"800", fontFamily:"caveat"}} > Skills </h1>
  <div className="cardmain1 col-12">
    <div className="card2">
      <div className="cardbody2">
        <h4>HTML <br/><FontAwesomeIcon icon={faHtml5} fade style={{color: "#e7230d",height:"4rem",width:"4rem",paddingTop:"1rem" }} /></h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4> CSS <br/> <FontAwesomeIcon icon={faCss3Alt} fade style={{color: "#e7230d",height:"4rem",width:"4rem",paddingTop:"1rem" }} /></h4>
       </div>

    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4>JAVASCRIPT <br/> <FontAwesomeIcon icon={faSquareJs} fade style={{color: "#e7230d",height:"4rem",width:"4rem",paddingTop:"1rem" }} /></h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4> REACT JS <br/> <FontAwesomeIcon icon={faReact} fade style={{color: "#e7230d",height:"4rem",width:"4rem",paddingTop:"1rem" }} /></h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4> NODE JS <br/> <FontAwesomeIcon icon={faNode} fade style={{color: "#e7230d",height:"4rem",width:"4rem",paddingTop:"1rem" }} /></h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4> Express JS <br/> <SiExpress style={{color: "#e7230d",height:"4rem",width:"4rem",paddingTop:"1rem" }} />  </h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4> MONGO DB <br/> <SiMongodb style={{color: "#e7230d",height:"4rem",width:"4rem",paddingTop:"1rem" }}/></h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4> TYPESCRIPTE <br/> <SiTypescript style={{color: "#e7230d",height:"4rem",width:"4rem",paddingTop:"1rem" }}/></h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4> REDUX <br/> <SiRedux style={{color: "#e7230d",height:"4rem",width:"4rem",paddingTop:"1rem" }}/></h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4>SASS <br/> <SiSass fade style={{color: "#e7230d",height:"6rem",width:"6rem",paddingTop:"1rem" }} /></h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4>TAILWIND CSS <br/> <BiLogoTailwindCss  style={{color: "#e7230d",height:"6rem",width:"6rem",paddingTop:"1rem" }} /></h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4>FIREBASE <br/> <BiLogoFirefox fade style={{color: "#e7230d",height:"6rem",width:"6rem",paddingTop:"1rem" }} /></h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4>REACT BOOTSTRAP <br/> <FontAwesomeIcon icon={faBootstrap} fade style={{color: "#e7230d",height:"4rem",width:"4rem",paddingTop:"1rem" }} /></h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4>ADOBE XD <br/> <SiAdobexd fade style={{color: "#e7230d",height:"5rem",width:"5rem",paddingTop:"1rem" }} /></h4>
        </div>
    </div>
    <div className="card2">
      <div className="cardbody2">
        <h4>ADOBE ILLUSTRATOR <br/> <SiAdobeillustrator fade style={{color: "#e7230d",height:"5rem",width:"5rem",paddingTop:"1rem" }} /></h4>
        </div>
    </div>
    </div>
    {/* <hr/> */}
    </div>
<Footer/>
</>
  )
}

export default Skills2