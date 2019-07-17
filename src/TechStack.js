import React from "react";
import "./App.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { FaReact } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { IoIosGitBranch } from "react-icons/io";
import { MdWeb, MdBuild, MdTranslate } from "react-icons/md";



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
    paddingTop: '15px',
    ["@media (max-width:960px)"]: {
      textAlign: "left",
      // paddingLeft: "16px",
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
      // marginLeft: "16px",
      paddingLeft: "0",
      maxWidth: "none"
    }
  },
  iconStyle: {
    width:'35px',
    height:'35px',
    color:'rgb(0, 115, 176);'
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
            <FaReact className={classes.iconStyle} />
            <div className={classes.title}>Front-end</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>React.js</li>
              <li>React-router</li>
              <li>React-redux</li>
              <li>React-thunk</li>
              <li>EJS</li>
              <li>SASS/SCSS</li>
              <li>ES6</li>
              <li>SEO</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <IoIosGitBranch className={classes.iconStyle} />
            <div className={classes.title}>Dev Tools</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>git</li>
              <li>git flow</li>
              <li>git kraken</li>
              <li>storybook</li>
              <li>npm/yarn</li>
              <li>Babel</li>
              <li>Webpack</li>
              <li>Sketch</li>
            </ul>
            <div />
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <FaLaptopCode className={classes.iconStyle} />
            <div className={classes.title}>Back-end</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>Firestore</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>Google Authentication</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <MdWeb className={classes.iconStyle} />
            <div className={classes.title}>Project Management/Marketing</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>Google Adword</li>
              <li>social media</li>
              <li>Facebook Adword</li>
              <li>Project management</li>
              <li>Social Media Strategy</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <MdBuild className={classes.iconStyle} />
            <div className={classes.title}>UI Test Tools</div>
            <hr />
            <ul className={classes.ullistStyle}>
              <li>MockFlow</li>
              <li>Sketch</li>
              <li>Illustrator</li>
              <li>AdobeXD</li>
              <li>Photoshop</li>
            </ul>
            <div />
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <MdTranslate className={classes.iconStyle} />
            <div className={classes.title}>Language</div>
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
