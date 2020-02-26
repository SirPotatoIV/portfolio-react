import React from "react";
import "./ProjectCard.css";
import placeHolderImage from "./200x200.png";

export default function ProjectCard(props) {
  const images = {
    placeHolderImage: placeHolderImage
  };
  const {
    deployedLink,
    description,
    image,
    name,
    repositoryLink,
    techUsed
  } = props;

  return (
    <article className="project-card">
      <h2>{name}</h2>
      <img alt="preview of the project" src={images[image]} />
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Tech Used</h3>
      <p>{techUsed}</p>
      <div>
        <button href={deployedLink}>Deployed</button>
        <button href={repositoryLink}>Repository</button>
      </div>
    </article>
  );
}
