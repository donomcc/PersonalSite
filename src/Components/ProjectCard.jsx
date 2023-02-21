import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import SkillCard from "./SkillCard";

function ProjectCard({
  name,
  description,
  site,
  code,
  skill,
  skill2,
  skill3,
  skill4,
  id,
}) {
  return (
    <div className="max-w-xl py-4">
      <div className="flex gap-2 underline font-bold">
        <a
          key={id}
          className="flex items-center gap-1 text-2xl hover:text-lightpink"
          href={code}
          target="_blank"
        >
          {name}
          <ImArrowRight2 />
        </a>
      </div>
      <p className="text-left">{description}</p>
      <div className="flex gap-3 text-lg font-bold">
        <h1>Skills:</h1>
        <SkillCard skill={skill} />
        <SkillCard skill={skill2} />
        <SkillCard skill={skill3} />
        <SkillCard skill={skill4} />
      </div>
      <div className="flex gap-4">
        <a href={site} target="_blank" className="hover:text-lightpink">
          Site
        </a>
        <a href={code} target="_blank" className="hover:text-lightpink">
          Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
