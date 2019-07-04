import React from "react";
import Timeline from "./Timeline";
import ProfileIntro from "./ProfileIntro";
import TechStack from "./TechStack";
import AboutMe from './AboutMe';

const App = () => {
  return (
    <div className="App">
      <ProfileIntro />
      <AboutMe />
      <TechStack />
      <Timeline />
    </div>
  );
};

export default App;
