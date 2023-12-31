import React from "react";
import { experience } from "../listJs/experience";

export default function Experience() {
  return (
    <>
      <div id="experience">
        <div id="experience-section">
          <p className="heading-font section-heading">Experience</p>
        </div>

        <div className="grid-2 fixed-grid">
          <div className="exp-image">
            <img className="exp-img" src="https://i.ibb.co/yYm0wjt/work.png" alt="" />
          </div>

          <div className="exp-list">
            {experience.map((info, index) => (
              <div className="exp-card" key={index}>
                <p className="role">{info.role}</p>
                <p className="company">{info.place}</p>
                <p className="duration">{info.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
