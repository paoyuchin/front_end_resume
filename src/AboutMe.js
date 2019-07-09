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

          To improve myself, I also learned German and successfully applied exchanged student in Germany for one year. 
          Because of this opportunity, I step into field of Front-end development.<br />
          
          I am not only technical but I also have hand-on experience with Google Ads, Google analysis, and marketing.
          
          Learning something new gets me access to new and different opportunities. 
          I am really into the problem-solving and the creativeness that come along it. 
          
          Software engineering already occupied an important place in modern technologies. I'm glad I'm in.
        </div>
      </Grid>
    </div>
  );
};

export default AboutMe;
