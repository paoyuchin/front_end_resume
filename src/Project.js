
import React from "react";
import "./App.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LionIcon from "./LionIcon";
import GermanyIcon from "./GermanyIcon";
import NCHUicon from "./NCHUicon";
import HotelIcon from "./HotelIcon";
// import III_icon from "./III_icon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    color: "#3d4451 !important"
  },
  name: {
    color: "#3d4451;",
    padding: "16px 0px 11px 0px",
    fontWeight: "bold",
    fontSize: "18px"
  },
  iconstyle: {
    color: "white",
    fontSize: "31px",
    position: "relative",
    top: "13px",
    ["@media (max-width: 960px)"]: {
      top: "7px !important",
      color: "white !important",
      position: "relative !important",
      fontSize: "24px !important"
    }
  },
}));

const Project = () => {
  const classes = useStyles();
  return (
    <div className="Project">
      <h1 className="color_2 color_3 title_space">Projects & developments</h1>
      <VerticalTimeline layout={"1-column"}>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#0073b0" }}
          icon={
            <i
              className={`fas fa-suitcase iconMediaquery ${
                classes.iconstyle
              }`}
            />
          }
        >
          <div className={classes.title}>
            <div>
              <span className="skillsButton">React.js</span>
              <span className="skillsButton">Jquery</span>
              <span className="skillsButton">RWD</span>
              <span className="skillsButton">webpack</span>
            </div>
            <h3 className="vertical-timeline-element-title">
              Lion Travel - Ticket
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              <li>In charge of Lion Travel's Ticket website</li>
              The most challenge part in the project is that projec built with
              Jquery and React.js. The search panel built with react. And
              other parts build with Jquery. Because of the differenct
              environmentm. I need to pack with two differenct bundle file to
              intergret with. Also needs to discuss with back-end engineer
              about data connection.
            </p>

            <a className="button" href="">
              Visit website
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#0073b0" }}
          icon={
            <i
              className={`fas fa-suitcase iconMediaquery ${
                classes.iconstyle
              }`}
            />
          }
        >
          <div className={classes.title}>
            <div>
              <span>Ract</span>
              <span>Ract-Redux</span>
              <span>Rect-Router</span>
              <span className="skillsButton">Firebase</span>
              <span className="skillsButton">Firestore</span>
              <span className="skillsButton">
                firebase google authentication
              </span>
              <span className="skillsButton">RWD</span>
            </div>
            <h3 className="vertical-timeline-element-title">
              年輕人最喜歡的-穀米養生粥
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              I am making a website for my best Friend without any payment
              from scratch by myself currently. Cloud Firestore is flexible,
              scalable database for web. For beginner learning database, which
              is a good startup.
            </p>

            <a className="button" href="">
              Visit website
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#0073b0" }}
          icon={
            <i
              className={`fas fa-suitcase iconMediaquery ${
                classes.iconstyle
              }`}
            />
          }
        >
          <div className={classes.title}>
            <div>
              <span>Ract</span>
              <span>RWD</span>
            </div>
            <h3 className="vertical-timeline-element-title">
              React Anchor Module
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              I made a react module, which using in lion travel's index.
            </p>

            <a className="button" href="">
              Visit website
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#0073b0" }}
          icon={
            <i
              className={`fas fa-suitcase iconMediaquery ${
                classes.iconstyle
              }`}
            />
          }
        >
          <div className={classes.title}>
            <div>
              <span className="skillsButton">php</span>
              <span className="skillsButton">mySql</span>
              <span className="skillsButton">javascript</span>
              <span>scss</span>
            </div>
            <h3 className="vertical-timeline-element-title">Pure css, svg</h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              This is my first website with php and mySql when I was learning
              front-end skills in Institute for Information Industry.
            </p>

            <a className="button" href="">
              Visit website
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#0073b0" }}
          icon={
            <i
              className={`fas fa-suitcase iconMediaquery ${
                classes.iconstyle
              }`}
            />
          }
        >
          <div className={classes.title}>
            <div>
              <span className="skillsButton">scss</span>
              <span className="skillsButton">svg</span>
              <span className="skillsButton">Pug</span>
              <span>scss</span>
            </div>
            <h3 className="vertical-timeline-element-title">
              Pure css with some stuffs
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              This is my first website built with php and mySql when I was
              learning front-end skills in Institute for Information Industry.
            </p>

            <a className="button" href="">
              Visit website
            </a>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Project;
