import React from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {BsPersonWorkspace} from "react-icons/bs"
import {MdSchool,MdFindInPage} from "react-icons/md"
import {ImProfile} from "react-icons/im"
import {GiSkills} from "react-icons/gi"
import {PiCertificateFill} from "react-icons/pi"
import { useNavigate } from 'react-router-dom';


const Sidebar = ({ ...props }) => {

  const navigate=useNavigate();
function handleabout(){
  navigate("/about")
}
function handlefind(){
  navigate("/join")
}
function handleskills(){
  navigate("/skills")
}
function handlecertificate(){
  navigate("/certificate")
}
function handleexprience(){
  navigate("/exprience")
}
function handleeducation(){
  navigate("/education")
}

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
<>
      <Button variant='warning' onClick={handleShow} className=" bars ">
        <FontAwesomeIcon   icon={faBars}/>
      </Button>
      <Offcanvas style={{width:"260px"}} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton >
        </Offcanvas.Header>
        <Offcanvas.Body style={{textAlign:" center",
    display: "block",
    justifyContent: "space-evenly",
    marginTop: "40px",
}} >
            <Offcanvas.Title className='sidetitle'  onClick={handleabout} > <ImProfile className="sidebarlogo"  /> About Me</Offcanvas.Title>
            {/* <Offcanvas.Title className='sidetitle' onClick={handleexprience} ><BsPersonWorkspace className='sidebarlogo' />Experience</Offcanvas.Title> */}
            <Offcanvas.Title className='sidetitle' onClick={handleeducation} > <MdSchool className='sidebarlogo'/> Education</Offcanvas.Title>
            <Offcanvas.Title className='sidetitle' onClick={handlecertificate} > <PiCertificateFill style={{marginRight:"2px"}} className='sidebarlogo'/> Certificates</Offcanvas.Title>
            <Offcanvas.Title className='sidetitle' onClick={handleskills} ><GiSkills className='sidebarlogo' />Skills</Offcanvas.Title>
            <Offcanvas.Title className='sidetitle'  onClick={handlefind} ><MdFindInPage className="sidebarlogo" /> Find Me</Offcanvas.Title>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Sidebar