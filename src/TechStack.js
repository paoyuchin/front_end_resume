import React from "react";
import "./App.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Languages from "./Languages";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const TechStack = () => {
  const classes = useStyles();
  return (
    <div className={`TechStack fixed_size ${classes.root}`}>
      <Grid container spacing={3}>
        <Grid xs={12} sm={12} md={4}>
          <div className={classes.paper}>FRONT END</div>
          <div>
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
        <Grid xs={12} sm={12} md={4}>
          <div className={classes.paper}>CODE OPTIMIZATION</div>
          <div>Babel</div>
          <div>Webpack</div>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          VERSION CONTROL
          <ul>
            <li>git</li>
            <li>git flow</li>
            <li>git kraken</li>
          </ul>
          <div className={classes.paper}>1</div>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <div className={classes.paper}>BACK END</div>
          <ul>
            <li>firestore</li>
          </ul>
          <div className={classes.paper}>1</div>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <div className={classes.paper}>LANGUAGE SKILLS</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TechStack;
