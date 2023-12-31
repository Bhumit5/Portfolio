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
          {skills.map((techs) => (
            <>
              <div className="tech">
                <p>{techs.skill}</p>
              </div>

              <div className="skill-set">
                {techs.skill_set.map((technology) => (
                  <p className="skill-name">{technology}</p>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
