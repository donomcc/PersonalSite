import React from "react";

function SkillCard({ skill }) {
  return (
    <div>
      <h1 className="transition text-center hover:scale-125 cursor-pointer hover:text-yellow-300">
        {skill}
      </h1>
    </div>
  );
}

export default SkillCard;
