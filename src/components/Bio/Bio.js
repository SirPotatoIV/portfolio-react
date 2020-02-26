import React from "react";
import "./Bio.css";
import profileImage from "../../images/cartoon_profile.png";

export default function Bio() {
  return (
    <div className="bio">
      <img alt="creator of the site" src={profileImage} />
      <p>
        As a former medical device engineer and project manager, I learned the
        skills of design verification, risk management, documentation, and team
        collaboration. I hold a Bachelors of Science in Biomedical Engineering
        from the Illinois Institute of Technology and am currently completing a
        certification in Full Stack Web Development from the University of
        Minnesota. I strive to make the user’s experience accessible, intuitive,
        fun, and aesthetically pleasing.
      </p>
    </div>
  );
}
