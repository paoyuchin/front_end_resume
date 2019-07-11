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
    minHeight:'37px',
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
    maxWidth: "200px",
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
    minHeight: '36px',
  },
  skillsContent: {
    color: "#3d4451",
    padding: "18px 10px 15px 0px",
    lineHeight: "18px",
    width:'90%'
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
            <div className={classes.skills}>
              React.js, React-router, React-redux, ECMAScript 6,Asynchronous,
              Synchronous, storybook
              <br />
              React-thunk, EJS, SASS/SCSS, PUG
            </div>
            <hr />
            <div className={classes.skillsContent}>
              The reason why I choice React is that allows you to write
              modular and clean code, breaking the project into separate
              components. React also allows for code reuse, which can really
              boost developer productivity.
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-rocket ${classes.icon_style}`} />
            <div className={classes.title}>
              Version Control & Code Optimization
            </div>
            <div className={classes.skills}>
              git, git flow, git kraken, Babel, Webpack, submodule
            </div>
            <hr />
            <div className={classes.skillsContent}>
            Git is useful and when used properly, it can speed up development on a team tremendously.
            I also use git submodule which can keep projects in separate repositories but still be able to reference them as folders in the working directory of other repositories.
            </div>
            <div />
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-code ${classes.icon_style}`} />
            <div className={classes.title}>BACK END</div>
            <div className={classes.skills}>
              firestore, php, mysql, Google Authentication
            </div>
            <hr />
            <div className={classes.skillsContent}>
              As a front-end developer, To familiar and learning with basic
              backend knowledge is necessary. No matter for a better
              communication with backend engineer or a well-corporation with
              others, which will become easier.
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-poll-h ${classes.icon_style}`} />
            <div className={classes.title}>Project Menegement/Marketing</div>
            <div className={classes.skills}>
              Google Adword, social medial, Facebook Adword
              <br />
              Project management, <br />
              Social Media Strategy <br />
            </div>
            <hr />
            <div className={classes.skillsContent}>
              A good SEO in a website is important. Optimizing sites will help
              deliver better information to search engines, so the content can
              be properly displayed within search results. I also had to
              manage google adwords, control budget project.
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-tools ${classes.icon_style}`} />
            <div className={classes.title}>UI Test/TOOLS</div>
            <div className={classes.skills}>
              mockflow, sketch, ILLUSTRATOR, Photoshop
            </div>
            <hr />
            <div className={classes.skillsContent}>
              Tthe most successful websites/applications respond quickly and
              efficiently. Design and software is now heavily based around
              user experience because it has become all about the consumer. I
              usually using tools like mockflow or sketch for design and
              collaborate with user interface.
            </div>
            <div />
          </Grid>
          <Grid xs={12} sm={12} md={4} className={classes.item}>
            <i className={`fas fa-language ${classes.icon_style}`} />
            <div className={classes.title}>LANGUAGE</div>
            <div className={classes.skills}>German, English, Chinese</div>
            <hr />
            <div className={classes.skillsContent}>
              Language plays an important role in my job. By Reading latest
              foreign artical can absorb tenical knowledge. Besides when I
              facing technical problem, language become a helper to understand
              the solution from the internet.
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TechStack;
