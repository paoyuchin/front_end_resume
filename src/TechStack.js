import React from "react";
import "./App.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    ["@media (max-width:960px)"]: {
      paddingLeft: "15px",
      paddingTop: "15px"
    },
    textAlign: "left",
    padding: "16px"
  },
  title: {
    // padding: "10px 0",
    textAlign: "left",
    color: "#3d4451",
    minHeight:'37px',
    ["@media (max-width:960px)"]: {
      textAlign: "left",
      paddingLeft: "16px",
      padding: "0"
    }
  },
  ullistStyle: {
    color: "#3d4451",
    fontSize: "16px",
    padding: "0px",
    margin: "auto",
    maxWidth: "200px",
    lineHeight: "1.5",
    ["@media (max-width:960px)"]: {
      marginLeft: "16px",
      paddingLeft: "0",
      maxWidth: "none"
    }
  },
  icon_style: {
    fontSize: "36px",
    color: "#0073B0",
    padding: "16px"
  },
  item: {
    ["@media (max-width:960px)"]: {
      textAlign: "left",
      marginBottom: "19px"
    }
  },
  skills: {
    color: "#0073B0",
    padding: "16px 0px",
    minHeight: '36px',
  },
  skillsContent: {
    color: "#3d4451",
    padding: "18px 10px 15px 0px",
    lineHeight: "18px",
    width:'90%'
  }
}));

const TechStack = () => {
  const classes = useStyles();
  return (
    <div className="techStack_wrap">
      <h1 className="color_2 color_3 title_space">Tech Stack</h1>
      <div className={`TechStack fixed_size ${classes.root}`}>
        <Grid container spacing={3}>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-laptop-code ${classes.icon_style}`} />
            <div className={classes.title}>FRONT END</div>
            <div className={classes.skills}>
              React.js, React-router, React-redux <br />
              React-thunk, EJS, SASS/SCSS, PUG
            </div>
            <hr />
            <div className={classes.skillsContent}>
              The reason why using UI libraries is that things will go messy
              if you define layout by HTML and operate on DOM elements by
              document.querySelector or jQuery.
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-rocket ${classes.icon_style}`} />
            <div className={classes.title}>
              Version Control & Code Optimization
            </div>
            <div className={classes.skills}>
              git, git flow, git kraken, Babel, Webpack
            </div>
            <hr />
            <div className={classes.skillsContent}>
              The reason why using UI libraries is that things will go messy
              if you define layout by HTML and operate on DOM elements by
              document.querySelector or jQuery.
            </div>
            <div />
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-code ${classes.icon_style}`} />
            <div className={classes.title}>BACK END</div>
            <div className={classes.skills}>
              firestore, php, mysql, Google Authentication
            </div>
            <hr />
            <div className={classes.skillsContent}>
              The reason why using UI libraries is that things will go messy
              if you define layout by HTML and operate on DOM elements by
              document.querySelector or jQuery.
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-poll-h ${classes.icon_style}`} />
            <div className={classes.title}>Project Menegement/Marketing</div>
            <div className={classes.skills}>
              Google Analytics, Keyword Analysis
              <br />
              SEO Executive, Project management, <br />
              Social Media Strategy <br />
            </div>
            <hr />
            <div className={classes.skillsContent}>
              The reason why using UI libraries is that things will go messy
              if you define layout by HTML and operate on DOM elements by
              document.querySelector or jQuery.
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-tools ${classes.icon_style}`} />
            <div className={classes.title}>UI Test/TOOLS</div>
            <div className={classes.skills}>
              Storybook, ILLUSTRATOR, Photoshop,{" "}
            </div>
            <hr />
            <div className={classes.skillsContent}>
              The reason why using UI libraries is that things will go messy
              if you define layout by HTML and operate on DOM elements by
              document.querySelector or jQuery.
            </div>
            <div />
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-language ${classes.icon_style}`} />
            <div className={classes.title}>LANGUAGE</div>
            <div className={classes.skills}>German, English, Chinese</div>
            <hr />
            <div className={classes.skillsContent}>
              The reason why using UI libraries is that things will go messy
              if you define layout by HTML and operate on DOM elements by
              document.querySelector or jQuery.
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TechStack;
