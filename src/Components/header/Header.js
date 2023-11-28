import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {  faBars } from '@fortawesome/free-solid-svg-icons'; 
import Sidebar from '../Sidebar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate()
  function handle(){
  navigate("/project")
  }

function handle1(){
  navigate("/")
}


  return (
    <>
        <Navbar className="bg-body-tertiary col-12" >
        {[{icon: faBars,
            name: 'start'}].map((item, idx) => (
        <Sidebar key={idx} placement={item.name} >
           <FontAwesomeIcon color='#e40707'  icon={item.icon} /> 
          </Sidebar>
      ))}
        <Container >
          <Navbar.Brand className='col-10 text-center'onClick={handle1}  href="#home">
                      Moazzam 
 </Navbar.Brand>
          <Navbar.Brand className='col-2 text-center' onClick={handle}>Work</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  )
}

export default Header