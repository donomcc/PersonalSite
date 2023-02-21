import React from "react";
import SkillCard from "./SkillCard";

function SkillSection({ bgcolor }) {
  return (
    <>
      <section
        className="font-osrs"
        style={{ backgroundColor: bgcolor === "orange" ? "#F7770F" : "" }}
      >
        <h1 className="text-7xl text-white py-7">Skills</h1>

        <div className="grid grid-rows-2 grid-flow-col gap-7 text-2xl">
          <SkillCard skill={"React"} />
          <SkillCard skill={"Javascript"} />
          <SkillCard skill={"CSS"} />
          <SkillCard skill={"Redux"} />
          <SkillCard skill={"Node.js"} />
          <SkillCard skill={"Express"} />
          <SkillCard skill={"AWS"} />
          <SkillCard skill={"SASS"} />
          <SkillCard skill={"Git"} />
          <SkillCard skill={"GitHub"} />
          <SkillCard skill={"Postman"} />
          <SkillCard skill={"HTML5"} />
          <SkillCard skill={"axios"} />
          <SkillCard skill={"Firebase"} />
        </div>
      </section>
    </>
  );
}

export default SkillSection;
