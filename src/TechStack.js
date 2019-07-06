import React from "react";
import "./App.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Languages from "./Languages";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    padding: "10px 0",
    textAlign: "center",
    color: "#3d4451"
  },
  ullistStyle: {
    color: "#3d4451",
    fontSize: "16px",
    padding: "0px",
    margin: "auto",
    maxWidth: "200px",
    lineHeight:'1.5'
  },
  icon_style: {
    fontSize: "36px",
    color: "#0073B0",
    padding: "16px"
  }
}));

const TechStack = () => {
  const classes = useStyles();
  return (
    <div className="techStack_wrap">
      <h1 className="color_2 color_3 title_space">Tech Stack</h1>
      <div className={`TechStack fixed_size ${classes.root}`}>
        <Grid container spacing={3}>
          <Grid xs={12} sm={12} md={3}>
            <i className={`fas fa-laptop-code ${classes.icon_style}`} />
            <div className={classes.title}>FRONT END</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>React.js</li>
              <li>React-router</li>
              <li>React-redux</li>
              <li>React-thunk</li>
              <li>EJS</li>
              <li>SASS/SCSS</li>
              <li>ES6,ES7,ES8( Async/Await, Promise ...etc)</li>
              <li>npm</li>
              <li>SEO</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={12} md={3}>
            <i className={`fas fa-tools ${classes.icon_style}`} />
            <div className={classes.title}>TOOLS</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>git</li>
              <li>git flow</li>
              <li>git kraken</li>
              <li>Babel</li>
              <li>Webpack</li>
            </ul>
            <div />
          </Grid>
          <Grid xs={12} sm={12} md={3}>
            <i className={`fas fa-code ${classes.icon_style}`} />
            <div className={classes.title}>BACK END</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>firestore</li>
              <li>php</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={12} md={3}>
            <i className={`fas fa-language ${classes.icon_style}`} />
            <div className={classes.title}>LANGUAGE SKILLS</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>Chinese</li>
              <li>English</li>
              <li>German</li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TechStack;
