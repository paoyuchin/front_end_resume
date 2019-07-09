import React from "react";
import Grid from "@material-ui/core/Grid";
import "./App.scss";

const AboutMe = () => {
  return (
    <div className="AboutMe fixed_size">
      <h1 className="color_2 color_3 title_space">About Me</h1>
      <Grid xs={12} sm={12} md={12}>
        <div className="aboutMe_content color_3">
I was majored in Department of english literature in university and working as a Front end engineer for more than one year.
When people say "how could you jump to Front-end engineer?", I would say this is not a big gap when you have PASSION.


I take advantage of my language expertise to get knowledge of my front-end 


For improve myself, I also learning german as my third language and successfully applied exchanged student in Germany for one year. 

I 'm not only technical but I also have hand-on experience with Google Ads, Google analysis, and marketing.

Learning new things is excited for me. I really like the creativity and problem-solving that comes with it.
Hundreds of JavaScript frameworks popped up. Using frameworks is currently my XXXX.

My front-end journey started from web and JavaScript. Software engineering already occupied an important place in modern technologies. I'm glad I'm in.
        </div>
      </Grid>
    </div>
  );
};

export default AboutMe;
