import React from "react";
import Timeline from "./Timeline";
import ProfileIntro from "./ProfileIntro";
import TechStack from "./TechStack";
import AboutMe from './AboutMe';
import Project from './Project';
const App = () => {
  return (
    <div className="App">
      <ProfileIntro />
      <AboutMe />
      <TechStack />
      <Timeline />
      <Project />
    </div>
  );
};

export default App;
