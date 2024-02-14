import React from 'react'
import Header from '../Components/header/Header'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Components/Footer'
import img from "../Assets/Studying-amico.png"
import "../Components/Pages/Pages.scss"
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
    const navigate = useNavigate();
    function handleback(){
        navigate('/')
    }
  return (
<>
<Header/>
<div className='col-12' style={{backgroundColor:"#87bbd7",marginTop:"-24px", borderTop:"2px solid #0b4251"}}>
<FontAwesomeIcon onClick={handleback} icon={faCircleArrowLeft} shake className='pt-3 backbtn'/>
        <h2 style={{textAlign:"center",marginTop:"-50px", color:"#0b4251",fontWeight:"800",fontFamily:"caveat",fontSize:'6vw',marginBottom:"2rem"}}>Education</h2>
        <div className=' educ d-flex flex-row col-12'>

    <div className='d-flex flex-column col-6 justify-content-around' >
      <div className='education mx-3 '>
        <div className='px-4' >
        <h2><FaGraduationCap style={{height:"3rem",width:"3rem"}} /> Marticulation</h2>
        <label> Institute: <p>Army Public School Mahfooz Shaheed Garrison</p> </label>
        <label> Passing-Year : <p>2015-2017</p> </label>
        <label> Course: <p>Science</p> </label>
        <label> Board: <p>Federal Board</p> </label>
        </div>
        </div>
        <div className='education  mx-3 '>
        <div className='px-4'>
        <h2><FaGraduationCap style={{height:"3rem",width:"3rem"}}/> Intermediate</h2>
        <label> Institute: <p> Forman Christian College University Lahore </p></label>
        <label> Passing-Year: <p>2017-2019</p> </label>
        <label> Course: <p>Pre-Engineering</p> </label>
        <label> Board: <p>Lahore Board</p> </label>
        </div>
        </div>
        <div className='education mx-3'>
        <div className='px-4' >
        <h2><FaGraduationCap style={{height:"3rem",width:"3rem"}}/>  Bahelor's</h2>
        <label> Institute: <p>Lahore Garrison University </p></label>
        <label> Passing-Year: <p>2019-2023</p> </label>
        <label> Course: <p>BS Software Engineering</p> </label>
        </div>
        </div>
    </div>
    <div className='col-6 workimage2'>
      <img  src={img} alt='education' /> 
    </div>
        </div>
</div>

<Footer/>
</>
  )
}

export default Education