import React from "react";

export default function About() {
  return (
    <>
      <div id="about">
        <div id="about-section">
              <div className="aboutMe">
                <p className="heading-font section-heading">About Me</p>
              </div>
          <div id="abt-style">
            <div id="aboutText">
              <div className="about-text">
                <p id="name">Hello I'm Bhumit Patel.</p>
                <p>
                  As an aspiring Software Engineer, I am
                  passionate about crafting innovative solutions and diving into
                  the dynamic world of technology. My journey in this field
                  began with a fervent curiosity to unravel the complexities of
                  programming and create impactful software. Armed with a good
                  foundation in computer science, acquired through academic
                  pursuits, I am enthusiastic about applying my knowledge and
                  skills to real-world challenges. I possess a strong grasp of
                  programming languages, a keen eye for detail, and an eagerness
                  to continuously learn and adapt in this ever-evolving
                  landscape. I am eager to leverage my fresh perspective,
                  coupled with a dedication to problem-solving, to contribute
                  effectively to projects, collaborate with teams, and make
                  meaningful contributions to the world of software engineering.
                </p>
              </div>
            </div>

            <div id="aboutImage" className="center">
              <img src="https://i.ibb.co/89zghvh/about2.png" alt="about-me" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
