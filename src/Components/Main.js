import React, {useEffect,useState} from 'react';
import img from "../Assets/mypic2.png";
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
                 Moazzam Baig
      </h1>
      <h5  className='mt-3' style={{paddingLeft:"2rem" , color:"white", fontFamily:fontFamily,fontSize:"3vw",color:fontColor,textAlign:"center"}}>Frontend Developer / Designer  </h5>
      <h6  className='mt-3' style={{paddingLeft:"2rem" , color:"white", fontFamily:"Playfair",fontSize:"2vw",color:fontColor}}>React JS Developer   </h6>
  </div>
    <div className='main col-6  text-center' >
      <img className='imagemy ' src={img} alt='mainpic'  />
      </div>
    </div>

    

  );
}

export default Main;
