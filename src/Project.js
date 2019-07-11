
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
      <VerticalTimeline layout={'1-column'}>
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
              <span className="skillsButton">adddda</span>
              <span className="skillsButton">bb</span>
            </div>
            <h3 className="vertical-timeline-element-title">
              Lion Travel - Ticket
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              content content content content content content content content
              content content content
            </p>

            <a className="button" href="">
              go
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
              <span className="skillsButton">adddda</span>
              <span className="skillsButton">bb</span>
            </div>
            <h3 className="vertical-timeline-element-title">
              Lion Travel - Ticket
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              content content content content content content content content
              content content content
            </p>

            <a className="button" href="">
              go
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
              <span className="skillsButton">adddda</span>
              <span className="skillsButton">bb</span>
            </div>
            <h3 className="vertical-timeline-element-title">
              Lion Travel - Ticket
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              content content content content content content content content
              content content content
            </p>

            <a className="button" href="">
              go
            </a>
          </div>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
};

export default Project;
