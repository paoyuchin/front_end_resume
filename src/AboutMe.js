import React from "react";
import Grid from "@material-ui/core/Grid";
import "./App.scss";

const AboutMe = () => {
  return (
    <div className="AboutMe fixed_size">
      <h1 className="color_2 color_3 title_space">About Me</h1>
      <Grid xs={12} sm={12} md={12}>
        <div className="aboutMe_content color_3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur consequatur qui ducimus sed quasi aut blanditiis
          molestias fugiat earum suscipit corrupti aspernatur quos, temporibus
          veniam unde quis corporis deleniti quod?orem ipsum dolor sit amet,
          consectetur adipisicing elit. Consequuntur consequatur qui ducimus
          sed quasi aut blanditiis molestias fugiat earum suscipit corrupti
          aspernatur quos, temporibus veniam unde quis corporis deleniti quod?
        </div>
      </Grid>
    </div>
  );
};

export default AboutMe;
