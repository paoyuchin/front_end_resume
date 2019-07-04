import React from "react";
import "./App.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LionIcon from './LionIcon';
import GermanyIcon from "./GermanyIcon";
import NCHUicon from "./NCHUicon";
import HotelIcon from './HotelIcon';
import III_icon from './III_icon'


const Timeline = () => {
  return (
    <div className="Timeline">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="lion_work"
          date="2018 - present"
          iconStyle={{ background: "#e1e0d8" }}
          icon={<LionIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Creative Director
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--iii"
          date="2008 - 2010"
          iconStyle={{ background: "#e1e0d8" }}
          icon={<III_icon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--Germany"
          date="2010 - 2011"
          iconStyle={{ background: "#e1e0d8" }}
          icon={<GermanyIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--nchu"
          date="2008 - 2010"
          iconStyle={{ background: "#e1e0d8" }}
          icon={<NCHUicon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--hote"
          date="2006 - 2008"
          iconStyle={{ background: "#e1e0d8" }}
          icon={<HotelIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
