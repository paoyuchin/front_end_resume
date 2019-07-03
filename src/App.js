import React from "react";
import Timeline from './Timeline';
import ProfileIntro from './ProfileIntro'
import TechStack from './TechStack';
import Languages from './Languages';

const App = () => {
  return (
    <div className="App">
      <ProfileIntro/>       
      <Timeline />
      <TechStack />
      <Languages />
    </div>
  );
};

export default App;
