import React from "react";
import { projects } from "../listJs/projects";

export default function Projects() {
  return (
    <>
      <div id="projects">
        <div id="project-section">
          <p className="heading-font section-heading">Projects</p>
        </div>

        <div className="project-container grid-2">
          {projects.map((project, index) => (
            <div className="project-card center" key={index}>
              <div className="project-info">
                <div className="info-content">
                  
                  <div className="info-about">
                    <p className="p-title">Project: {project.title}</p>
                    <p className="p-techs">Tech: {project.techs}</p>
                    <p className="p-work">Work: {project.work}</p>
                  </div>
                  
                  <div className="visit">
                    <a rel="noreferrer" target="_blank" href={project.link} >Visit</a>
                  </div>
                </div>
              </div>

              <div className="project-img center">
                <img src={project.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
