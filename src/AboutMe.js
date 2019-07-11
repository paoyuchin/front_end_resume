import React from "react";
import Grid from "@material-ui/core/Grid";
import "./App.scss";

const AboutMe = () => {
  return (
    <div className="AboutMe fixed_size">
      <h1 className="color_2 color_3 title_space">About Me</h1>
      <Grid xs={12} sm={12} md={12}>
        <div className="aboutMe_content color_3">
          Hi! I am Yu Chin. I graduated with a Bachelor of Foreign Language and has been working as a front-end engineer for
          the past year.           
          When people ask me why would you make such a leap, I would tell them that the gap is made small when you have PASSION. <br />

          Out of interest in a different culture, I learned German and became an exchanged student in Germany in 2016. 
          The University I exchanged to is renowned for its reputation in engineering, which gave me access to many intelligent engineer students.
          It was this opportunity that broadened my perspective and encouraged me to step into the pit of programming. <br />
        </div>
      </Grid>
    </div>
  );
};

export default AboutMe;
