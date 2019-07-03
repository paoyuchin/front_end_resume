import React from "react";
import "./App.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    <div className={`TechStack ${classes.root}`}>
      <Grid container spacing={3}>
        <Grid xs={12} sm={12} md={4}>
          <div className={classes.paper}>1</div>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <div className={classes.paper}>1</div>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <div className={classes.paper}>1</div>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <div className={classes.paper}>1</div>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <div className={classes.paper}>1</div>
        </Grid>
        <Grid xs={12} sm={12} md={4}>
          <div className={classes.paper}>1</div>
        </Grid>
      </Grid>
    </div>
  );
}


export default TechStack;