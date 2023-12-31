import React from "react";
import { educationList } from "../listJs/education";

export default function Education() {
  return (
    <>
      <div id="education">
        <div id="education-section">
          <p className="heading-font section-heading">Education</p>
        </div>
        <div className="edu-list grid-2">
            {educationList.map((qualification, index) => (
                <div className="edu-container">
                    <div key={index} className="edu-info">
                        <p className="edu-title">{qualification.title}</p>
                        <p className="edu-marks">{qualification.marks}</p>
                        <p className="edu-time">{qualification.time}</p>
                        <p className="edu-place">{qualification.place}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  );
}
