import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3Alt,faReact,faBootstrap,faSquareJs} from '@fortawesome/free-brands-svg-icons';
import {TbBrandNextjs} from "react-icons/tb"
import {BiLogoTailwindCss,BiLogoFirefox,BiLogoSass} from "react-icons/bi"
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {SiAdobexd,SiAdobeillustrator, SiSass} from "react-icons/si"
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
    <FontAwesomeIcon onClick={handleback} icon={faCircleArrowLeft} shake style={{color: "#e7230d",height:"2rem",width:"2rem",paddingLeft:"25px" }} />
  <h1 style={{paddingLeft:"45%",fontSize:"4rem",marginBottom:"2rem",marginTop:"-30px",color:"#e40707"}} > Skills </h1>
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
        <h4>NEXT JS <br/> <TbBrandNextjs fade style={{color: "#e7230d",height:"6rem",width:"6rem",paddingTop:"1rem" }} /></h4>
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
    <hr/>
<Footer/>
</>
  )
}

export default Skills2