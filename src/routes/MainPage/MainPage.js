import React from "react";
import "./MainPage.css";
import Bio from "../../components/Bio";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function MainPage() {
  return (
    <div className="main-page">
      <h1>Projects</h1>
      {projects.map(project => (
        <ProjectCard
          deployedLink={project.deployedLink}
          description={project.description}
          image={project.image}
          key={project.key}
          name={project.name}
          repositoryLink={project.repositoryLink}
          techUsed={project.techUsed}
        />
      ))}
      <h1>Bio</h1>
      <Bio />
    </div>
  );
}
