import React from "react";
import "./App.css";
import Header from "./Components/Header";
import SkillSection from "./Components/SkillSection";
import IntroSection from "./Components/IntroSection";
import ProjectSection from "./Components/ProjectSection";
import ContactSection from "./Components/ContactSection";

function App() {
  return (
    <div>
      <div className="layer3 spacer2"></div>
      <IntroSection />
      <div className="spacer layer2"></div>
      <SkillSection bgcolor={"orange"} />
      <div className="layer5 spacer"></div>
      <ProjectSection bgcolor={"pink"} />
      <div className="layer7 spacer"></div>
      <ContactSection bgcolor={"purple"} />
      <div className="layer8 spacer"></div>
    </div>
  );
}

export default App;
