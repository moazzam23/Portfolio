import React, { useState, useEffect } from "react";
import "./Loading.scss";

const LoadingPage = ({ onLoadComplete }) => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
      onLoadComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
<>

<div class="shell">
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 101.3 101.3" style={{enableBackground:"new 0 0 101.3 101.3;"}} xmlSpace="preserve">

<polygon id="XMLID_3_" class="st0" points="49.9,92.3 17.3,78.6 50.2,65.1 50.2,10.3 17.5,23.7 50.1,37.3 83,23.5 82.8,61.2 
	50.1,48.9 2.7,67.2 50.2,87.1 98.2,67.4 98.2,35.2 50.5,53.2 2.7,35.3 50.2,15.7 82.9,29.2 82.7,78.4 "/>
<polygon id="XMLID_1_" class="st1" points="98.3,67.4 50,48.6 50,65.4 83,78.7 83,23.7 50.3,10.2 50.3,15.9 97.9,35.2 72,45.5 
	71.9,57.6 50.5,67.2 28.8,58.1 28.8,44.1 47.3,36 17,23.5 17,78.3 23.3,75.8 2.8,67 2.8,35 50.4,15.5 50.2,34.7 72.1,45.2 
	97.9,35.3 "/>
<polygon id="XMLID_4_" class="st2" points="50.3,87 50.4,67.4 71.2,58.2 50.8,49.4 47.2,51.1 29,44.2 50.1,34.8 71.9,45.4 
	53.9,51.4 50.1,50 29,57.3 49.9,66.7 50.1,65 82.8,78.4 49.9,92.2 16.7,78.3 16.8,23.5 49.7,36.7 82.8,23.8 50,9.9 50,48.9 3,67 "/>
</svg>
  <br/>
  <br/>
  <br/>
  <br/>
</div>

    

    <div className=" col-12 loading-page">
      <div className="page2">
        <h1>  Wait Something Interesting Is Loading</h1>
        <h2>Moazzam Baig</h2>
        {/* <article id="loader_wrapper">
          <section class="loader"></section>
          <section class="loader_section section_left"></section>
          <section class="loader_section section_right"></section>
        </article> */}
        {/* <h1 className=' pt-2'> Loading<FontAwesomeIcon icon={faSpinner} shake size="sm"  className='ps-3 pt-2'  style={{color: "#e40707",}} /></h1> */}
      </div>
    </div>
    </>  );
};

export default LoadingPage;
