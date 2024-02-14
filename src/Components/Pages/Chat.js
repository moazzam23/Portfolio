import React from "react";
import Header from "../header/Header";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Assets/chatapp/Screenshot (128).png";
import img2 from "../../Assets/chatapp/Screenshot (129).png";
import img3 from "../../Assets/chatapp/Screenshot (129).png";
import { BiLogoSass, BiSolidFileCss, BiLogoReact } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IoLogoFirebase } from "react-icons/io5";
import "../Pages/Slider.scss";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();
  function handleback() {
    navigate("/project");
  }
  return (
    <>
      <Header />
      <div
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
          className= " pt-3 backbtn"
          
        />
        <h1
          className="col- heading text-center"
           >
          Real Time Chatting App
        </h1>
        <p style={{ marginLeft: "3rem",fontSize:"1.2rem",fontWeight:"700", marginRight: "3rem" }}>
          {" "}
         <b>1.</b> This is a single page application that made using React JS.<br/><b>2.</b> It is a chat App in which you can perform certain tasks.
         <br/><b>3.</b> First you have to login using Google and then you ca chat with any one.<br/><b>4.</b> You can chat with anyone and can also delete the message <br/><b>5.</b> After Chatting you can logout from the app. 
        </p>

        <div>
          <div className="projectpage">
            <a
            rel="noreferrer"
             target="_blank"
              className="projectbtn"
              style={{  marginLeft: "0.8rem" }}
              href="https://github.com/moazzam23/chatting-app"
            >
              {" "}
               Chatting App code{" "}
            </a>
            <a
            rel="noreferrer"
             target="_blank"
              className="projectbtn"
              style={{ marginLeft: "1rem" }}
              href="https://chatting-app-phi.vercel.app/"
            >
              {" "}
              Vercel (See App Demo)
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
            Stack :
          </label>
          <label
            className="text-center iconp"
          >
            <BiLogoSass className="iconpp"
            />{" "}
            Sass
          </label>
          <label
            className="text-center iconp"
            
          >
            <BiSolidFileCss className="iconpp"
            />{" "}
            CSS
          </label>
          <label
            className="text-center iconp"
          >
            <BiLogoReact className="iconpp"
            />{" "}
            React JS
          </label>
          <label
            className="text-center iconp"
          >
            <IoLogoJavascript className="iconpp"
            />{" "}
            Javascript
          </label>
          <label
            className="text-center iconp"
          >
            <IoLogoFirebase className="iconpp"
            />{" "}
            Firebase
          </label>
        </div>
        <Carousel className="col-12 px-4 py-4 text-center slider">
          <Carousel.Item>
            <img className="object-fit-fill" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} alt="Second slide" className="object-fit-fill" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} alt="Third slide" className="object-fit-fill" />
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default Chat;
