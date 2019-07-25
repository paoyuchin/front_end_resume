
import React from "react";
import "./App.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
// import '~video-react/dist/video-react.css';
import LionIcon from "./LionIcon";
import GermanyIcon from "./GermanyIcon";
import NCHUicon from "./NCHUicon";
import HotelIcon from "./HotelIcon";
// import III_icon from "./III_icon";
import { makeStyles } from "@material-ui/core/styles";
import { GoFileDirectory } from "react-icons/go";
import {anchor_video} from './video/anchor.mp4';
import { Player } from 'video-react';
import pic from './resource/anchorrrrr.jpg'


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
          iconStyle={{ background: "#6181B6" }}
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
              In charge of the Ticket/Pass page of Lion Travel website.<br />
              This page offers the customers ticket booking and car-rental booking service online.
            </p>

            <a className="button" href="https://activity.liontravel.com/" target="_blank">
              Visit website
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#6181B6" }}
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
              Kitchen of Handmade Taiwanese Congee
            </h3>
            <p
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              A website promoting a traditional Taiwanese congee stand in Chiayi.<br />
              It demonstrates the customers the products and allows the customer to write reviews and leave ratings.
            </p>
            <a className="button" href="https://my-super-firebase.web.app/" target="_blank">
              Visit website
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#6181B6" }}
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
            <div>
            <img src={pic} alt="" className="anchor_pic"/>
            </div>
            <a className="button button_1" href="https://paoyuchin.github.io/react_anchor/" target="_blank">
              anchor component website
            </a>
            <a className="button" href="https://www.liontravel.com/" target="_blank">visit website</a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#6181B6" }}
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
              A Whale Conservation website.<br />
              The services of this website are fundraising for whales, explain how we can protect whale, and how do we use the money from our donation.
            </p>
            <a className="button" href="http://140.115.236.71/demo-personal/PJ/BD104G3_%e9%af%a8%e8%81%b2%e9%af%a8%e4%b8%96%e5%b0%88%e9%a1%8c%e6%96%87%e4%bb%b6.pdf?fbclid=IwAR3rJvYhbZj9E2Uywzt6ih0LH08tylk7SA_cpGFeLHgMhHfHx5pyank-PXM">
              Visit website
            </a>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="lion_work"
          iconStyle={{ background: "#6181B6" }}
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
              A static website, including differences static showcase.
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


// <source src={anchor_video} type="video/mp4">
//                 Your browser does not support this video format.
//             </source>
