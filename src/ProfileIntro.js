import React from "react";
import "./App.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { SocialIcon } from "react-social-icons";

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

const ProfileIntro = () => {
  const classes = useStyles();
  return (
    <div className={`ProfileIntro ${classes.root}`}>
      <Grid container>
        <Grid xs={12} sm={12} md={6}>
          <div className={classes.paper}>picture</div>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <div className={classes.paper}>
            <Grid xs={12} sm={12} md={12}>
              <div className={classes.paper}>
                <h2>I'm Yu Chin Pao</h2>
                Front-end Engineer,
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={12}>
              <div className={classes.paper}>
                LOCATION TW, 886 956353518 E-MAIL bow1130bow@gmail.com CURRENT
                Front-end, Lion Technologies, Inc.
              </div>
            </Grid>
          </div>
        </Grid>
        <Grid sm={12} md={6}>
                <SocialIcon url="http://jaketrent.com" network="github" />
        </Grid>
        <Grid sm={12} md={6}>
          2
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileIntro;

// (xs, sm, md, lg, and xl)
