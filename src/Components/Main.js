import React, {useEffect,useState} from 'react';
import img from "../Assets/new.png";
import { TypeAnimation } from 'react-type-animation';
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
  <div className='detail1 col-6 py-3 mt-2'>
      <h1 style={{paddingLeft:"2rem" , color:"#87bbd7"}}>
       <b style={{color:"#e6b544"}}> Hi,</b> <br/>
                <label style={{paddingLeft:"5vw",fontWeight:"900",fontSize:"2em",fontStyle:"bold"}}> Moa<label style={{color:"#e6b544" }}>zz</label>am <label style={{color:"#e6b544" }}>B</label>aig</label>
      </h1>
      <TypeAnimation
      sequence={[
        'I am Software Engineer ',
        1000,
        'I am Mern-Stack Developer',
        1000,
        'I am Laravel Developer',
        1000,
        'I am a Designer',
        1000,
        'I love to Code',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em',marginLeft:"4rem", display: 'inline-block',fontWeight:"900",color:"#87bbd7",fontStyle:"Rubik Bubbles" }}
      repeat={Infinity}
    />
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
