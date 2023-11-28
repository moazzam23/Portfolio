import React from 'react'
import {BiLogoJavascript,BiLogoHtml5,BiSolidFileCss,BiLogoFirefox,BiLogoSass,BiLogoTailwindCss} from "react-icons/bi"
import {TbBrandNextjs} from "react-icons/tb"
import {SiAdobexd,SiAdobeillustrator} from "react-icons/si"
import { FaReact ,FaBootstrap } from 'react-icons/fa'

import "./skill.scss"

const Skills = () => {
  return (
    <div className='skill'>
    <h1> Skills </h1>
    <div className='col-12'>
       <marquee> 
         <BiLogoHtml5/> HTML    <BiSolidFileCss/> CSS <BiLogoJavascript/> JAVASCRIPT <FaReact/>React <BiLogoTailwindCss/> TAILWIND CSS </marquee>
         <marquee direction='right'><TbBrandNextjs/> NEXT JS <BiLogoFirefox/> FIRBASE <BiLogoSass/>SASS <FaBootstrap/> REACT BOOTSTRAP</marquee>
         <marquee><SiAdobexd/> ADOBE XD <SiAdobeillustrator/> ADOBE ILLUSTRATOR  <FaReact/> React Router Dom</marquee>
    </div>
  </div>
  )
}

export default Skills
