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
      <Grid container className="profilebgc">
        <Grid xs={12} sm={12} md={6}>
          <div className="picture">
            <img src="https://fakeimg.pl/350x200/?text=World&font=lobster" />
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <div>
            <Grid xs={12} sm={12} md={12}>
              <div className="card_name">
                <h1 className="color_3">
                  <span className="font_bold_normal color_3">I am</span> Pao
                  Yu Chin
                </h1>
                <div>Front-End Engineer</div>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={12}>
              <div className="card_intro">
                <div>
                  <span className="font_bold">LOCATION:</span>
                  <span className="color_1">TAIWAN</span>
                </div>
                <div>
                  <span className="font_bold">E-mail: </span>
                  <span className="color_1">bow1130bow@gmail.com</span>
                </div>
                <div>
                  <span className="font_bold">CURRENT:</span>
                  <span className="color_1">
                    Front-End Engineer at Lion Travel, Inc.
                  </span>
                </div>
              </div>
            </Grid>
          </div>
        </Grid>
        <Grid container className="link_container">
          <Grid sm={4} md={4}>
            <SocialIcon
              className="link"
              bgColor="#FFF"
              url="http://jaketrent.com"
              network="github"
              style={{ height: 40, width: 40 }}
            />
          </Grid>
          <Grid sm={4} md={4}>
            <SocialIcon
              style={{ height: 40, width: 40 }}
              className="link"
              bgColor="#FFF"
              url="http://jaketrent.com"
              network="linkedin"
            />
          </Grid>
          <Grid sm={4} md={4}>
            <SocialIcon
              style={{ height: 40, width: 40 }}
              className="link"
              bgColor="#FFF"
              url="http://jaketrent.com"
              network=""
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileIntro;

// (xs, sm, md, lg, and xl)
