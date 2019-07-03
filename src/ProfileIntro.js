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
    <div className={`ProfileIntro fixed_size ${classes.root}`}>
      <Grid container>
        <Grid xs={12} sm={12} md={6}>
          <div className="picture">
            <img src="https://fakeimg.pl/350x200/?text=World&font=lobster" />
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <div>
            <Grid xs={12} sm={12} md={12}>
              <div className="card_name">
                <h2>I'm Yu Chin Pao</h2>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={12}>
              <div className="card_intro">
                <div>LOCATION: TAIWAN</div>
                <div>E-mail: bow1130bow@gmail.com</div>
                <div>CURRENT: CURRENT Front-end, Lion Technologies, Inc.</div>
              </div>
            </Grid>
          </div>
        </Grid>
          <Grid sm={12} md={4}>
            {/* <SocialIcon url="http://jaketrent.com" network="github" /> */}1
        </Grid>
          <Grid sm={12} md={4}>
            2
        </Grid>
          <Grid sm={12} md={4}>
            3
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileIntro;

// (xs, sm, md, lg, and xl)
