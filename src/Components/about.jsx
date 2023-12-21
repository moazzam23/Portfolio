import React from 'react'
import vedio from "../Assets/design.mp4"
// import img from "../Assets/2.jpg"


const About = () => {
  return (
    <div className='me col-12' >
      <h1 className='about'>About Me</h1>
    <div>  <video className='img col-5 ps-2' style={{borderRadius:"20px"}} src={vedio} muted autoPlay loop controlsList="nodownload" />
      <p className='detail col-6'>   Welcome To My Portfolio. Myself
                             Mirza Muhammad Moazzam Baig and I am a Passionate Developer. I have completed my graduation in BS Software Engineering From Lahore Garrison University
     <br/><br/>My aim to design, develop, and maintain Websites and Apps that meet high standards of quality, performance, reliability, and security and also produce system that is 100% bug free. 
      </p>
      </div>
      <a href="https://drive.google.com/file/d/14wF3ryG3g_SeLR_J18imtibtWkJIcHxK/view?usp=share_link" download="Moazzam_Resume" target='_blank'>
<button type="button" >See My Resume</button>
</a>
      <marquee behaviour="scroll" direction="left">Passionate developers don't just write code; they craft experiences that change the world</marquee>
    </div>
  )
}

export default About
