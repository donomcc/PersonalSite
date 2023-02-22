import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../projects.json";
import { ImGithub } from "react-icons/im";

function ProjectSection({ bgcolor }) {
  return (
    <div>
      <section
        style={{ backgroundColor: bgcolor === "pink" ? "#C62368" : "" }}
        className="py-2"
      >
        <div>
          <h1 className="text-7xl font-bold text-white font-sans py-7">
            Check out my work!
          </h1>
        </div>
        <div>
          {projects.map((project) => (
            <ProjectCard
              name={project.name}
              description={project.description}
              site={project.site}
              code={project.code}
              skill={project.skill}
              skill2={project.skill2}
              skill3={project.skill3}
              skill4={project.skill4}
            />
          ))}
        </div>
        <a
          href="https://github.com/donomcc?tab=repositories"
          target="_blank"
          className="text-2xl hover:text-lightpink py-10 flex gap-3 text-center items-center"
        >
          More on <ImGithub />
        </a>
      </section>
    </div>
  );
}

export default ProjectSection;
