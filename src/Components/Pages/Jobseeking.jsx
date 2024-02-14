import React from "react";
import Header from "../header/Header";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Assets/job/Screenshot (117).png";
import img2 from "../../Assets/job/Screenshot (118).png";
import img3 from "../../Assets/job/Screenshot (111).png";
import img4 from "../../Assets/job/Screenshot (112).png";
import img5 from "../../Assets/job/Screenshot (113).png";
import img6 from "../../Assets/job/Screenshot (115).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BiSolidFileCss, BiLogoReact } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../Pages/Slider.scss";
import Footer from "../Footer";
import { FaNode } from "react-icons/fa";
import { SiExpress, SiJsonwebtokens, SiMongodb, SiMongoose } from "react-icons/si";

const Jobseeking = () => {
    const navigate = useNavigate();
    function handleback() {
      navigate("/project");
    }
    return (
      <>
        <Header />
        <div
          className="col-12"
          style={{
            backgroundColor: "#87bbd7",
            marginTop: "-24px",
            borderTop: "2px solid #0b4251",
          }}
        >
          <FontAwesomeIcon
            onClick={handleback}
            icon={faCircleArrowLeft}
            shake
           className="pt-3 backbtn"
          />
          <h1
            className="col-12 heading text-center"
           
          >
            Job Seeking App
          </h1>
          <p style={{ marginLeft: "3rem",fontSize:"1.2rem",fontWeight:"700", marginRight: "3rem" }}>
            {" "}
            <b> 1.</b> It a Full stack Job Seeking web App, made using React JS ,Node JS
            ,Express JS and Mongo DB.<br/>
            <b> 2.</b>In this app you can register yourself, login , can see your profile.<br/>
            <b> 3.</b> Admin have right to post a job and see applicant application. he can also delete or update the job details.<br/>
            <b> 4.</b> User have right to see all job application and apply to certain job application and can aslo delete his application. 
          </p>
  
          <div>
            <div className="projectpage">
              <a
              rel="noreferrer"
              target="_blank"
                className="projectbtn"
                style={{ marginLeft: "0.8rem" }}
                href="https://github.com/moazzam23/Job_Seeking__MERN_Stack"
              >
                {" "}
                Job Seeking App Code{" "}
              </a>
  
              <a
              rel="noreferrer"
              target="_blank"
                className="projectbtn"
                style={{marginLeft: "1rem" }}
                href="https://www.loom.com/share/300c227528b144e28965a31651381056"
              >
                {" "}
                See App Demo
              </a>
            </div>
  
            <br />
            <label
              style={{
                fontSize: "1.3rem",
                border: "none",
                textDecoration:"underline",
                borderRadius: "6px",
                marginTop: "0.5rem",
                marginLeft: "3rem",
                padding: "3px",
                fontWeight: "bolder",
              }}
            >
              Stack
            </label>
            <label
              className="text-center iconp"
             >
              <BiSolidFileCss
              className="iconpp"       />{" "}
              CSS
            </label>
            <label
              className="text-center iconp"
            >
              <BiLogoReact
               className="iconpp"      />{" "}
              React JS
            </label>
            <label
              className="text-center iconp "
           >
              <FaNode className="iconpp" />{" "}
              Node JS
            </label>
            <label
              className="text-center iconp"
           >
              <SiExpress
                className="iconpp"     />{" "}
              Express JS
            </label>
            <label
              className="text-center iconp"
          >
              <SiMongodb
               className="iconpp"
              />{" "}
              Mongo DB
            </label>
            <label
              className="text-center iconp"
           >
              <SiMongoose
                className="iconpp"     />{" "}
              Mongoose
            </label>
            <label
              className="text-center iconp"
             >
              <SiJsonwebtokens
               className="iconpp"      />{" "}
              JSONWEBTOKEN
            </label>
            {/* <label className='text-center'  style={{ borderLeft:"15px solid #e40707",  fontWeight:"bolder",paddingRight:"10px",color:"black",marginLeft:"1rem", backgroundColor:"#FC8B8B", borderRadius:"6px"}} ><BiLogoSass color='black' style={{height:"1rem",width:"1rem"}} /> Sass</label>  */}
          </div>
          <Carousel className="col-12 px-4 py-4 text-center slider">
            <Carousel.Item>
              <img src={img1} alt="First slide" />
              <Carousel.Caption>
                <h3>First Slide</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2} alt="Second slide" />
              <Carousel.Caption>
                <h3>Second Slide</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img3} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third Slide</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img4} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third Slide</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img5} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third Slide</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img6} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third Slide</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Footer />
      </>
  )
}

export default Jobseeking