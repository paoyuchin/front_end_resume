import React from "react";
import "./App.scss";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { SocialIcon } from "react-social-icons";
import resume_pic from './resource/resume_pic.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  titleSet: {
    fontWeight: "bold",
    color: "#3D4451"
  }
}));

const ProfileIntro = () => {
  const classes = useStyles();
  return (
    <div className={`ProfileIntro fixed_size ${classes.root}`}>
      <Grid container className="profilebgc">
        <Grid xs={12} sm={12} md={6}>
          <span className="conversation">Hello</span>
          <div className="picture">
            <img src={resume_pic} />
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <div>
            <Grid xs={12} sm={12} md={12}>
              <div className="card_name">
                <h1 className="color_3">
                
                  <span className="font_bold_normal color_3 name">I am</span> Pao
                  Yu Chin
                </h1>
                <span className="color_4">Front-End Engineer, </span>
                <span className="color_4">React Engineer,</span> <br/>
                <span className="color_4">Product Manager</span>          
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={12}>
              <div className="card_intro">
                <div>
                  <span className={classes.titleSet}>LOCATION:</span>
                  <span className="color_1">TAIWAN</span>
                </div>
                <div>
                  <span className={classes.titleSet}>E-mail: </span>
                  <span className="color_1">bow1130bow@gmail.com</span>
                </div>
                <div>
                  <span className={classes.titleSet}>CURRENT:</span>
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
              url="https://github.com/paoyuchin/front_end_resume"
              network="github"
              style={{ height: 40, width: 40 }}
            />
          </Grid>
          <Grid sm={4} md={4}>
            <SocialIcon
              style={{ height: 40, width: 40 }}
              className="link"
              bgColor="#FFF"
              url="https://www.linkedin.com/in/pao-yu-chin-208529113/"
              network="linkedin"
            />
          </Grid>
          <Grid sm={4} md={4}>
            <SocialIcon
              style={{ height: 40, width: 40 }}
              className="link"
              bgColor="#FFF"
              url="https://my-super-firebase.web.app/"
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
