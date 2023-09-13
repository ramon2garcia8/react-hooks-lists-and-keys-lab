import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectElements = projects.map((p)=>{
    return (
      <ProjectItem 
      key={p.id}
      name={p.name}
      about={p.about}
      technologies={p.technologies}
      />
    )
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
      /* render ProjectItem components here */
      projectElements
      }</div>
    </div>
  );
}

export default ProjectList;
