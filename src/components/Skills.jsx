import React from "react";
import { skills } from "../listJs/skills";

export default function Skills() {
  return (
    <>
      <div id="about">
        <div className="skills">
          <p className="heading-font section-heading">Tech Palette</p>
        </div>
        <div className="skill-palette">
          {skills.map((techs,index) => (
            <div key={index}>
              <div className="tech">
                <p>{techs.skill}</p>
              </div>

              <div className="skill-set">
                {techs.skill_set.map((technology,index2) => (
                  <p key={index2} className="skill-name">{technology}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
