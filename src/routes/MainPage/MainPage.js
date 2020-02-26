import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
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
    </div>
  );
}
