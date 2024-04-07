import React from "react";
import vi from "../video/bgVideo.mp4";
import img from "../images/Me.jpg";
import myCV from "../Documents/Bhumit_Patel_CV.pdf";

export default function Home() {
  return (
    <>
      <div className="video-background">
        <video autoPlay loop className="video">
          <source src={vi} type="video/mp4" />
        </video>
      </div>

      <div className="cv-btn">
        <a href={myCV} download="Bhumit_Patel_Resume">
          <button className="btn">Download CV</button>
        </a>
      </div>

      <div className="intro">
        <div id="myImage">
          <img src={img} alt="" />
        </div>
        <div className="introText">
          <p className="heading-font">Bhumit Patel</p>
          <p className="special-text">Welcome to my digital canvas</p>
        </div>
      </div>
    </>
  );
}