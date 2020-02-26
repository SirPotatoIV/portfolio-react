import React from "react";
import "./ProjectCard.css";
import placeHolderImage from "./200x200.png";

export default function ProjectCard() {
  return (
    <article className="project-card">
      <h2>Project Name</h2>
      <img alt="preview of the project" src={placeHolderImage} />
      <h3>Description</h3>
      <p>This is a project</p>
      <h3>Tech Used</h3>
      <p>The HTMLs, the CSSs, the Reacts</p>
      <div>
        <button>Deployed</button>
        <button>Repository</button>
      </div>
    </article>
  );
}
