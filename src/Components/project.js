import React from 'react'
import img from "../Assets/Netflix/Screenshot (131).png"
import img1 from "../Assets/chatapp.png"
import img2 from "../Assets/chaiwala/Screenshot (2).png"
import img3 from "../Assets/food/Screenshot (19).png"
import img4 from "../Assets/corona2.png"
import img5 from "../Assets/social/Screenshot (98).png"

import Header from "../Components/header/Header"
import { Alert } from "react-bootstrap"
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Project = () => {
  
  const navigate=useNavigate()

  function handlenetfilx(){
    navigate("/netflix")
  }
  function handlechat(){
    navigate("/Chatapp")
  }
  function handlecorona(){
    navigate("/corona")
  }
  function handlechaiwala(){
    navigate("/chaiwala")
  }
  function handlefood(){
    navigate("/foodapp")
  }
  function handlesocial(){
    navigate("/socialapp")
  }
  return (

    <>
    <Header/>
    <div style={{backgroundColor:"#be686849",marginTop:"-24px",borderTop:"2px solid #e40707"}}>
    <h1 style={{ textAlign:"center", fontFamily:"Caveat",fontWeight:"800",color:"#e40707", fontSize:"3.7rem" ,marginBottom:"60px"}} > Project</h1>
    <div className="cardmain col-12">
    <div className="card1">
      <div className="image">
        <img onClick={handlesocial} src={img5} alt="card"/>
      </div>
      <div className="cardbody">
        <h4>Social Media App</h4>
        <p>It a MERN STACK Social Media App, which is made using React JS , Noda JS ,Express JS and Mongo-BD... </p>
 <Alert variant='danger' > Click image to view Details? </Alert>

        </div>
    </div>
    <div className="card1">
      <div className="image">
        <img onClick={handlenetfilx} src={img} alt="card"/>
      </div>
      <div className="cardbody">
        <h4>Netflix - The Movie App</h4>
        <p>This is a single page application that Contain upcoming movie, popular, and watch before... </p>
 <Alert variant='danger' > Click image to view Details? </Alert>

        </div>
    </div>
    <div className="card1">
      <div className="image">
        <img onClick={handlechat} src={img1} alt="card" />
      </div>
      <div className="cardbody">
        <h4>The Chatting App</h4>
        <p>This made on React JS. This app allow the user to chat with each other in real time...</p>
        <Alert variant='danger'> Click image to view Details? </Alert>
       </div>

    </div>
    <div className="card1">
      <div  className="image">
        <img  onClick={handlechaiwala} src={img2} alt="card" />
      </div>
      <div className="cardbody">
        <h4>Pakistani Chai Wala</h4>
        <p>This is a single page app contain different section on the page. This is a animated app and full of colors...</p>
        <Alert variant='danger' > Click image to view Detils? </Alert>
        </div>
    </div>
    <div className="card1">
      <div className="image">
        <img onClick={handlecorona} src={img4} alt="card" />
      </div>
      <div className="cardbody">
        <h4>Corona App Prototype</h4>
        <p>This is made on Adobe XD. This is the Prototype of this app.Check complete design of app...</p>
        <Alert variant='danger' > Click image to view Details? </Alert>
        </div>
    </div>
    <div className="card1">
      <div className="image">
        <img onClick={handlefood} src={img3} alt="card" />
      </div>
      <div className="cardbody">
        <h4>Food Delivery App</h4>
        <p>This is a single page app contain different section on the page. This is a animated app and full of colors...</p>
        <Alert variant='danger' > Click image to view Details? </Alert>
        </div>
    </div>
    </div>
    </div>
  <Footer/>
  </>
  )
}

export default Project
// function project() {
 
     
//   return (
//     <>
//     <Header/>
//     <h1 style={{ textAlign:"center", fontFamily:"fantasy",color:"#e40707", fontSize:"3rem" ,marginBottom:"60px"}} > Project</h1>
//     <div className="cardmain">
//     <div className="card1">
//       <div className="image">
//         <img src={img} alt="card"/>
//       </div>
//       <div className="cardbody">
//         <h4>Netflix - The Movie App</h4>
//         <p>This is a single page application that Contain upcoming movie, popular, and watch before... </p>
//  <Alert variant='danger' > Click image to view Deatils? </Alert>

//         </div>
//     </div>
//     <div className="card1">
//       <div className="image">
//         <img src={img1} alt="card" />
//       </div>
//       <div className="cardbody">
//         <h4>The Chatting App</h4>
//         <p>This made on React JS. This app allow the user to chat with each other in real time...</p>
//         <Alert variant='danger'> Click image to view Details? </Alert>
//        </div>

//     </div>
//     <div className="card1">
//       <div className="image">
//         <img src={img2} alt="card" />
//       </div>
//       <div className="cardbody">
//         <h4>Pakistani Chai Wala</h4>
//         <p>This is a single page app contain different section on the page. This is a animated app and full of colors...</p>
//         <Alert variant='danger' > Click image to view Deatils? </Alert>
//         </div>
//     </div>
//     <div className="card1">
//       <div className="image">
//         <img src={img3} alt="card" />
//       </div>
//       <div className="cardbody">
//         <h4>Pakistani Chai Wala</h4>
//         <p>This is made on Adobe XD. This is the Prototype of this app.Check complete design of app...</p>
//         <Alert variant='danger' > Click image to view Deatils? </Alert>
//         </div>
//     </div>
//   </div>
//   <Footer/>
//   </>
//   )
// }

// export default project