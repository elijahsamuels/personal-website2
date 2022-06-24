import React, { useId } from "react";
import ProjectsObject from "./ProjectsObject";
import "./Projects.css";
import { SiGithub, SiNetlify, SiHeroku, SiApplemusic } from "react-icons/si";

function Projects() {
  let id = useId();

  const prodLinkReturn = (linkProps) => {
    if (linkProps.includes("netlify")) {
      return <SiNetlify size="1em" />;
    } else if (linkProps.includes("heroku")) {
      return <SiHeroku size="1em" />;
    } else {
      return <SiApplemusic size="1em" />;
    }
  };

  const ProjectsReturn = () => {
    return ProjectsObject.map((project) => {
      return (
        <div className="project" key={`${project.name}-${id}`}>
          <a href={project.prod_link} className={"prod-link"}>
            <div className="project-name">{project.name}</div>
          </a>
          <div className="project-description">{project.description}</div>
          {project.skills_used.map((skill) => (
            <div className="project-skills" key={`${project.name}-${skill}`}>
              {skill}
            </div>
          ))}
          <div className="project-social-media-links">
            <a
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
              className="link social-media-icon github-link">
              <SiGithub size="1em" />
            </a>
            <a
              href={project.prod_link}
              target="_blank"
              rel="noreferrer"
              className="link social-media-icon github-link">
              {prodLinkReturn(project.prod_link)}
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <ProjectsReturn />
    </div>
  );
}

export default Projects;
