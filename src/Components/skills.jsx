import React from 'react'
import {BiLogoJavascript,BiLogoHtml5,BiSolidFileCss,BiLogoFirefox,BiLogoSass,BiLogoTailwindCss} from "react-icons/bi"
import {TbBrandNextjs} from "react-icons/tb"
import {SiAdobexd,SiAdobeillustrator} from "react-icons/si"
import { FaReact ,FaBootstrap, FaLaravel, FaPhp } from 'react-icons/fa'
import {DiMysql} from "react-icons/di"

import "./skill.scss"

const Skills = () => {
  return (
    <div className='skill'>
    <h1> Skills </h1>
    <div className='col-12'>
       <marquee> 
         <BiLogoHtml5/> HTML    <BiSolidFileCss/> CSS <BiLogoJavascript/> JAVASCRIPT <FaReact/>React <BiLogoSass/>SASS <TbBrandNextjs/> NEXT JS <BiLogoTailwindCss/> TAILWIND CSS </marquee>
         <marquee direction='right'> <FaLaravel/> Laravel <FaPhp/> PHP <DiMysql/> MySQL   <FaBootstrap/> REACT BOOTSTRAP</marquee>
         <marquee><SiAdobexd/> ADOBE XD <SiAdobeillustrator/> ADOBE ILLUSTRATOR  <FaReact/> React Router Dom <BiLogoFirefox/> FIRBASE</marquee>
    </div>
  </div>
  )
}

export default Skills
