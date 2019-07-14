
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
import { GoFileDirectory } from "react-icons/go";

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
  // console.log(3, ICON_NAME);
  
  return (
    <div className="Project">
      <h1 className="color_2 color_3 title_space">Showcase</h1>
      <VerticalTimeline layout={"1-column"}>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#0073b0" }}
          icon={<GoFileDirectory  color="#fff" />}
        >
          <div className={classes.title}>
            <div>
              <span className="skillsButton">React.js</span>
              <span className="skillsButton">jQuery</span>
              <span className="skillsButton">RWD</span>
              <span className="skillsButton">webpack</span>
            </div>
            <h3 className="vertical-timeline-element-title companyName">
              Lion Travel - Ticket/Pass
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              In charge of the Ticket/Pass page of Lion Travel website.
              This page offers the customers ticket booking and car-rental booking service online.
            </p>

            <a className="button" href="">
              Visit website
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#0073b0" }}
          icon={<GoFileDirectory  color="#fff" />}
        >
          <div className={classes.title}>
            <div>
              <span className="skillsButton">React</span>
              <span className="skillsButton">React-Redux</span>
              <span className="skillsButton">React-Router</span>
              <span className="skillsButton">Firebase</span>
              <span className="skillsButton">Firestore</span>
              <span className="skillsButton">
                firebase google authentication
              </span>
              <span className="skillsButton">RWD</span>
            </div>
            <h3 className="vertical-timeline-element-title companyName">
              年輕人最喜歡的-穀米養生粥
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              A website promoting a traditional Taiwanese congee stand in Chiayi.
              It demonstrates the customers the products and allows the customer to write reviews and leave ratings.
            </p>
            <a className="button" href="">
              Visit website
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#0073b0" }}
          icon={<GoFileDirectory  color="#fff" />}
        >
          <div className={classes.title}>
            <div>
              <span className="skillsButton">React</span>
              <span className="skillsButton">RWD</span>
            </div>
            <h3 className="vertical-timeline-element-title companyName">
              React Anchor Module
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              A component of the home page of the Lion Travel website.
            </p>

            <a className="button" href="">
              Visit website
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#0073b0" }}
          icon={<GoFileDirectory  color="#fff" />}
        >
          <div className={classes.title}>
            <div>
              <span className="skillsButton">PHP</span>
              <span className="skillsButton">MySQL</span>
              <span className="skillsButton">JavaScript</span>
              <span className="skillsButton">SCSS</span>
            </div>
            <h3 className="vertical-timeline-element-title companyName">
              Whale Conservation
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              A XXX website.
            </p>
            <a className="button" href="">
              Visit website
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#0073b0" }}
          icon={<GoFileDirectory  color="#fff" />}
        >
          <div className={classes.title}>
            <div>
              <span className="skillsButton">scss</span>
              <span className="skillsButton">svg</span>
              <span className="skillsButton">Pug</span>
              <span className="skillsButton">scss</span>
            </div>
            <h3 className="vertical-timeline-element-title companyName">
              Pure css
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              A XXX website built with JavaScript, PHP and MySQL.
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
