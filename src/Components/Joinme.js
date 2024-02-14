import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedin, faSquareBehance } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope,faCaretUp } from '@fortawesome/free-solid-svg-icons';


const Joinme = () => {
  return (
    <div className='find col-12 text-center'>
      {/* <hr/> */}
      <h1 className='text-center'> Join Me On</h1>
      <div className='col-12 text-center'>
        <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/mirza-muhammad-moazzam-baig-0b127a215/'><FontAwesomeIcon fade icon={faLinkedin} style={{color: "#0b4251",}} /></a>
        <a target="_blank" rel="noreferrer" href='https://github.com/moazzam23'><FontAwesomeIcon icon={faGithub} fade style={{ color: "#0b4251" }} /></a>
        <a target="_blank" rel="noreferrer" href='https://www.behance.net/moazzambaig'><FontAwesomeIcon fade icon={faSquareBehance} style={{color: "#0b4251",}} /></a>
        <a target="_blank" rel="noreferrer" href='mailto:moazzambaig140@gmail.com'><FontAwesomeIcon icon={faEnvelope} bounce style={{color: "#0b4251",}} /></a>
        <a target="_blank" rel="noreferrer" href='https://vercel.com/dashboard'><FontAwesomeIcon icon={faCaretUp}  fade style={{color: "#0b4251",height:"5rem",width:"5rem"}} /></a>
      </div>
    </div>
  );
}

export default Joinme;
