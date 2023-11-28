import React from 'react';
import img from "../Assets/mypic2.png";
// import vedio from "../Assets/vedio.mp4";
import ReactTyped from "react-typed";

const Main = () => {
  return (

<div className='main1 col-12 ' >
    {/* <video className='col-12 mainvedio' src={""} muted autoPlay loop controlsList="nodownload" /> */}
  <div className='detail1 col-6 py-3 mt-4'>
      <h1 style={{paddingLeft:"2rem" , color:"white"}}>
        Hi, <br/>
                 Moazzam Baig
      </h1>
      <h5  className='mt-3' style={{paddingLeft:"2rem" , color:"white"}}>Frontend Developer / Designer  </h5>

  <h3 className='string text-center' style={{color:"#c2102a" ,paddingLeft:"1rem", marginTop:"7%"}}
      >
      <ReactTyped
       strings={[ "<" , "Who Loves to design","But Loves More To Code" , ]}
        typeSpeed={70}
        loop
        backSpeed={40}
        cursorChar2="\"
        showCursor={true}
      />
    </h3>
  </div>
    <div className='main col-6  text-center' >
      <img className='imagemy ' src={img} alt='mainpic'  />
      </div>
    </div>

  );
}

export default Main;
