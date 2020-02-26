import React from "react";
import Bio from "../../components/Bio";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function MainPage() {
  return (
    <div>
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
      <Bio />
    </div>
  );
}
