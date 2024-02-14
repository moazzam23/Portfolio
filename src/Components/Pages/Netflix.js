import React from "react";
import Header from "../header/Header";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Assets/Netflix/Screenshot (131).png";
import img2 from "../../Assets/Netflix/Screenshot (132).png";
import img3 from "../../Assets/Netflix/Screenshot (133).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BiLogoSass, BiSolidFileCss, BiLogoReact } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "../Pages/Slider.scss";
import Footer from "../Footer";
import { FaGithub } from "react-icons/fa";

const Netflix = () => {
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
          className="pt-3 backbtn"
        />
        <h1 className="col-12 text-center heading">Netflix</h1>
        <p
          style={{
            marginLeft: "3rem",
            fontSize: "1.2rem",
            fontWeight: "700",
            marginRight: "3rem",
          }}
        >
          <b> 1.</b>This is a single page application that Contain upcoming
          movie, popular, and watch before.
          <br />
          <b> 2.</b> In this project i have used technologies like Sass, CSS,
          React JS, React-Router, React-Bootstrap , React-Router-Dom , Axios,
          Sass.
          <br /> <b> 3.</b> I have intergate the Apis to get movie in the rows
          diffenrtly like for popular , upcoming etc.
          <br /> <b> 4.</b> Netflix is one of the world's leading entertainment
          services with over 247 million paid memberships in over 190 countries
          enjoying TV series{" "}
        </p>

        <div>
          <div className="projectpage">
            <a
              rel="noreferrer"
              target="_blank"
              className="projectbtn"
              style={{ marginLeft: "0.8rem" }}
              href="https://github.com/moazzam23/Netflix---the-movie-app"
            >
              <FaGithub style={{ height: "2rem", width: "2rem" }} /> NetFlix
              code{" "}
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              className="projectbtn"
              style={{ marginLeft: "1rem" }}
              href="https://netflix-the-movie-app-hfcq-git-main-moazzambaig.vercel.app/"
            >
              {" "}
              Vercel (See App Demo)
            </a>
          </div>

          <br />
          <label
            style={{
              fontSize: "1.3rem",
              textDecoration: "underline",
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
          <label className="text-center iconp">
            <BiLogoSass className="iconpp" /> Sass
          </label>
          <label className="text-center iconp">
            <BiSolidFileCss className="iconpp" /> CSS
          </label>
          <label className="text-center iconp">
            <BiLogoReact className="iconpp" /> React JS
          </label>
          <label className="text-center iconp">
            <IoLogoJavascript className="iconpp" /> Javascript
          </label>
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
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default Netflix;