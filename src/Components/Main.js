import React, {useEffect,useState} from 'react';
import img from "../Assets/new.png";
// import vedio from "../Assets/vedio.mp4";

const Main = () => {

  const [fontFamily, setFontFamily] = useState('caveat'); // Initial font family
  const [fontColor, setFontColor] = useState('white'); // Initial font color

  useEffect(() => {
    // Change font and color after 5 seconds
    const timeoutId = setTimeout(() => {
      setFontFamily('Rubik Bubbles'); // Change 'NewFont' to the desired font
      setFontColor('black'); // Change to the desired font color
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []); 
  return (

<div className='main1 col-12 ' >
    {/* <video className='col-12 mainvedio' src={""} muted autoPlay loop controlsList="nodownload" /> */}
  <div className='detail1 col-6 py-3 mt-4'>
      <h1 style={{paddingLeft:"2rem" , color:"white"}}>
        Hi, <br/>
                <label style={{paddingLeft:"5vw",fontWeight:"900",fontStyle:"bold"}}> Moa<label style={{color:"red" }}>zz</label>am <label style={{color:"red" }}>B</label>aig</label>
      </h1>
      <h5   style={{paddingLeft:"1rem",marginTop:"3vw" , fontFamily:fontFamily,fontSize:"2vw",color:fontColor,textAlign:"center"}}>Full Stack Developer / Designer  </h5>
      <div className='btndiv' >
        <a className='mainbtn' href='/project'>View My Projects </a>
        <a  className='mainbtn' href='/join' >Connect With Me </a>
      </div>
  </div>
    <div className='main col-6  text-center' >
      <img className='imagemy ' src={img} alt='mainpic'  />
      </div>
    </div>

    

  );
}

export default Main;
