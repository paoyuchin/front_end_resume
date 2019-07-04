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
  paper: {
    padding: '30px',
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper1: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding:"16px 0"
  }
}));

const TechStack = () => {
  const classes = useStyles();
  return (
    <div className={`TechStack fixed_size ${classes.root}`}>
      <Grid container spacing={3}>
        <Grid xs={12} sm={12} md={3}>
          <div className={classes.paper}>FRONT END</div>
          <div className="">
            <i class="fas fa-laptop-code" />
          </div>
          <ul>
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
          <div className={classes.paper1}>
            <div>CODE OPTIMIZATION</div>
            <div>VERSION CONTROL</div>
          </div>
          <div className="">
            <i class="fas fa-tools" />
          </div>
          <ul>
            <li>git</li>
            <li>git flow</li>
            <li>git kraken</li>
            <li>Babel</li>
            <li>Webpack</li>
          </ul>
          <div />
        </Grid>
        <Grid xs={12} sm={12} md={3}>
          <div className={classes.paper}>BACK END</div>
          <div className="">
            <i class="fas fa-code" />
          </div>
          <ul>
            <li>firestore</li>
            <li>php</li>
          </ul>
        </Grid>
        <Grid xs={12} sm={12} md={3}>
          <div className={classes.paper}>LANGUAGE SKILLS</div>
          <div className="">
            <i class="fas fa-language" />
          </div>
          <ul>
            <li>Chinese</li>
            <li>English</li>
            <li>German</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default TechStack;
