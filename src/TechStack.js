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
    minHeight: "37px",
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
    // maxWidth: "200px",
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
    minHeight: "36px"
  },
  skillsContent: {
    color: "#3d4451",
    padding: "18px 10px 15px 0px",
    lineHeight: "18px",
    width: "90%"
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
            <hr />
            <ul className={classes.ullistStyle}>
              <li>React.js</li>
              <li>React-router</li>
              <li>React-redux</li>
              <li>React-thunk</li>
              <li>EJS</li>
              <li>SASS/SCSS</li>
              <li>ES6</li>
              <li>Synchronous</li>
              <li>storybook</li>
              <li>npm</li>
              <li>SEO</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-code ${classes.icon_style}`} />
            <div className={classes.title}>BACK END</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>firestore</li>
              <li>php</li>
              <li>mysql</li>
              <li>Google</li>
              <li>Authentication</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-rocket ${classes.icon_style}`} />
            <div className={classes.title}>DevTools</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>git</li>
              <li>git flow</li>
              <li>git kraken</li>
              <li>Babel</li>
              <li>Webpack</li>
              <li>Sketch</li>
              <li>AdobeXD</li>
              <li>mockflow</li>
            </ul>
            <div />
          </Grid>

          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-poll-h ${classes.icon_style}`} />
            <div className={classes.title}>Project Menegement/Marketing</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>Google Adword</li>
              <li>social medial</li>
              <li>Facebook Adword</li>
              <li>Project management</li>
              <li>Social Media Strategy </li>
            </ul>
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-tools ${classes.icon_style}`} />
            <div className={classes.title}>UI Test/TOOLS</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>mockflow</li>
              <li>sketch</li>
              <li>ILLUSTRATOR</li>
              <li>Photoshop</li>
            </ul>
            <div />
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-language ${classes.icon_style}`} />
            <div className={classes.title}>LANGUAGE</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>German</li>
              <li>English</li>
              <li>Chinese</li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TechStack;
