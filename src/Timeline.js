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
import III_icon from "./III_icon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    color: "red !important"
  }
}));

const Timeline = () => {
  const classes = useStyles();
  return (
    <div className="Timeline">
      <h1 className="color_2 color_3 title_space">Work Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="lion_work"
          date="2018 - present"
          iconStyle={{ background: "#e1e0d8" }}
          icon={<LionIcon />}
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p className={classes.title}>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--iii"
          date="2008 - 2010"
          iconStyle={{ background: "#e1e0d8" }}
          icon={<III_icon />}
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p className={classes.title}>User Experience, Visual Design</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--Germany"
          date="2010 - 2011"
          iconStyle={{ background: "#e1e0d8" }}
          icon={<GermanyIcon />}
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p className={classes.title}>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--nchu"
          date="2008 - 2010"
          iconStyle={{ background: "#e1e0d8" }}
          icon={<NCHUicon />}
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p className={classes.title}>User Experience, Visual Design</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--hote"
          date="2006 - 2008"
          iconStyle={{ background: "#e1e0d8" }}
          icon={<HotelIcon />}
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p className={classes.title}>User Experience, Visual Design</p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
