import React from "react";
import "./ProjectCard.css";
import guessTheLetterImage from "../../images/guess_the_letter.png";
import keepItCodeImage from "../../images/keep_it_code.png";
import placeHolderImage from "./200x200.png";
import surviveTheGridImage from "../../images/survive_the_grid.gif";
import temptationsImage from "../../images/temptations.png";

export default function ProjectCard(props) {
  const images = {
    guessTheLetterImage,
    keepItCodeImage,
    placeHolderImage,
    surviveTheGridImage,
    temptationsImage
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
        <a href={deployedLink}>Deployed</a>
        <a href={repositoryLink}>Repository</a>
      </div>
    </article>
  );
}
