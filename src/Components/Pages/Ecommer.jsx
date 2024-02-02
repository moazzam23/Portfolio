import React from "react";
import Header from "../header/Header";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Assets/Ecommer/Screenshot (102).png";
import img2 from "../../Assets/Ecommer/Screenshot (103).png";
import img3 from "../../Assets/Ecommer/Screenshot (104).png";
import img4 from "../../Assets/Ecommer/Screenshot (105).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BiSolidFileCss, BiLogoReact } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../Pages/Slider.scss";
import Footer from "../Footer";
import { FaNode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMongoose, SiTypescript } from "react-icons/si";

const Ecommer = () => {
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
          backgroundColor: "#be686849",
          marginTop: "-24px",
          borderTop: "2px solid #e40707",
        }}
      >
        <FontAwesomeIcon
          onClick={handleback}
          icon={faCircleArrowLeft}
          shake
          style={{
            color: "#e7230d",
            height: "3rem",
            width: "3rem",
            paddingLeft: "25px",
          }}
        />
        <h1
          className="col-12 text-center"
          style={{
            color: "#c2102a",
            marginTop: "-50px",
            fontFamily: "caveat",
            fontWeight: "800",
            fontSize: "5vw",
          }}
        >
       Ecommerce Store
        </h1>
        <p style={{ marginLeft: "3rem", marginRight: "3rem" }}>
          {" "}
          It a Full stack Social Media App, made using TypeScript React JS ,Node JS
          ,Express JS and Mongo DB. In this app you can register yourself, login using Google,Admin can see all user,product and order and Transaction Details. Where user other then admin can only see product and their own profile to make order or find any product. User can place order and select the payment method. Admin Can make new product , update them , manage stock and also maintain the record to be seen. 
        </p>

        <div>
          <div className="projectpage">
            <a
            target="_blank"
              className="projectbtn"
              style={{ color: "black", marginLeft: "0.8rem" }}
              href="https://github.com/moazzam23/Ecommerce_MERN-STACK"
            >
              {" "}
              Ecommerce Store Code{" "}
            </a>

            <a
            target="_blank"
              className="projectbtn"
              style={{ color: "black", marginLeft: "1rem" }}
              href="https://www.loom.com/share/22068c75410a4fbbadae98760e42f863?sid=ea9f531e-f464-47ce-92df-23a27dd674ff"
            >
              {" "}
              See App Demo
            </a>
          </div>

          <br />
          <label
            style={{
              fontSize: "1rem",
              border: "none",
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
            className="text-center"
            style={{
              borderLeft: "15px solid black",
              fontWeight: "bolder",
              paddingRight: "10px",
              color: "black",
              marginLeft: "1rem",
              backgroundColor: "#40a5db",
              borderRadius: "6px",
            }}
          >
            <BiSolidFileCss
              color="black"
              style={{ height: "1rem", width: "1rem" }}
            />{" "}
            CSS
          </label>
         
          <label
            className="text-center"
            style={{
              borderLeft: "15px solid black",
              fontWeight: "bolder",
              paddingRight: "10px",
              color: "black",
              marginLeft: "1rem",
              backgroundColor: "#40a5db",
              borderRadius: "6px",
            }}
          >
            <SiTypescript
              color="black"
              style={{ height: "1rem", width: "1rem" }}
            />{" "}
            TypeScript
          </label>
          <label
            className="text-center"
            style={{
              borderLeft: "15px solid black",
              fontWeight: "bolder",
              paddingRight: "10px",
              color: "black",
              marginLeft: "1rem",
              backgroundColor: "#40a5db",
              borderRadius: "6px",
            }}
          >
            <BiLogoReact
              color="black"
              style={{ height: "1rem", width: "1rem" }}
            />{" "}
            React JS
          </label>
          <label
            className="text-center"
            style={{
              borderLeft: "15px solid black",
              fontWeight: "bolder",
              paddingRight: "10px",
              color: "black",
              marginLeft: "1rem",
              backgroundColor: "#face0a",
              borderRadius: "6px",
            }}
          >
            <FaNode color="black" style={{ height: "1rem", width: "1rem" }} />{" "}
            Node JS
          </label>
          <label
            className="text-center"
            style={{
              borderLeft: "15px solid black",
              fontWeight: "bolder",
              paddingRight: "10px",
              color: "black",
              marginLeft: "1rem",
              backgroundColor: "#face0a",
              borderRadius: "6px",
            }}
          >
            <SiExpress
              color="black"
              style={{ height: "1rem", width: "1rem" }}
            />{" "}
            Express JS
          </label>
          <label
            className="text-center"
            style={{
              borderLeft: "15px solid black",
              fontWeight: "bolder",
              paddingRight: "10px",
              color: "black",
              marginLeft: "1rem",
              backgroundColor: "#face0a",
              borderRadius: "6px",
            }}
          >
            <SiMongodb
              color="black"
              style={{ height: "1rem", width: "1rem" }}
            />{" "}
            Mongo DB
          </label>
          <label
            className="text-center"
            style={{
              borderLeft: "15px solid black",
              fontWeight: "bolder",
              paddingRight: "10px",
              color: "black",
              marginLeft: "1rem",
              backgroundColor: "#face0a",
              borderRadius: "6px",
            }}
          >
            <SiMongoose
              color="black"
              style={{ height: "1rem", width: "1rem" }}
            />{" "}
            Mongoose
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
        </Carousel>
      </div>
      <Footer />
    </>

  )
}

export default Ecommer