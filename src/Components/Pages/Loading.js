import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; 
import "./Loading.scss"

const LoadingPage = ({ onLoadComplete }) => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
      onLoadComplete(); // Notify the parent component that loading is complete
    }, 4000); 

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className=" col-12 loading-page" >
     
        <div className='page2' >
        <h1>Welcome To My Porfolio</h1>
        <h2>Moazzam Baig</h2>
        <article id="loader_wrapper">
            <section class="loader"></section>
            <section class="loader_section section_left"></section>
            <section class="loader_section section_right"></section>
        </article>
      {/* <h1 className=' pt-2'> Loading<FontAwesomeIcon icon={faSpinner} shake size="sm"  className='ps-3 pt-2'  style={{color: "#e40707",}} /></h1> */}
        </div>
    </div>
  );
};

export default LoadingPage;
