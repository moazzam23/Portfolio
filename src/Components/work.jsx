import React from 'react'
import img from "../Assets/Hand coding-pana.png"

const   Work = () => {
  return (
    <div className='works col-12' >
      <h1 className='text-center'>What I DO</h1>
      <div className='dodiv'>

      <div className='col-7'>
        <h2 >DESIGN</h2>
        <p>I Love to the design a Product that is attractive and have a eye catching impression for the client.
       I could involve myself creating user interfaces (UI), user experiences (UX), prototyping, and making aesthetic and functional decisions to enhance the overall app design 
        Designing the application is not just a task, it is the time to create design more then your imagination power</p>
      
    <h2>DEVELOPMENT</h2>
    <p>While Developing, I my aim to produce the code is easier to understand and can also be reuse in future. we can create the componenet of code that give the more clarity and neatness in our work. On the other hand developing is a continous process of learning and growing <br></br><br></br>The art of development lies in turning ideas into reality, one algorithm at a time</p>
   <h2>PORTOLIO</h2>
   <p>My era of development start with the creation of my personsal protfolio. Portfolio is the best way to show cast the devlopment of various application that you have build. This also help in judging your hand on experience on various tools.
    The challenges that we face during developemt is the real dource of learning and growing
   </p>
   </div>
<div className='col-5 workimage'>
   <img src={img} alt="design" /></div>
      </div>
    </div>
  )
}

export default Work
