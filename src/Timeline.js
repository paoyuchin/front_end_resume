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
import { GoMortarBoard } from "react-icons/go";
import { MdWork } from "react-icons/md";


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
  }
}));

const Timeline = () => {
  const classes = useStyles();
  return (
    <div className="Timeline">
      <h1 className="color_2 color_3 title_space">
        Work experience & Education
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="lion_work"
          date="2018 - present"
          iconStyle={{ background: "#0073b0" }}
          icon={
              <MdWork color="white"/>
          }
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">
              <LionIcon />
            </h3>
            <h4
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              front-end engineer
            </h4>
            <p className={classes.title}>
              <ul>
                <li>The Ticket/Pass Page of Lion Travel Website</li>
                <li>React module development</li>
                <li>jQuery module development</li>
                <li>Define and apply the interfaces with the backend engineers</li>
                <li>Inter-department collaboration</li>
                <li>Take part in the project design discussions</li>
                <li>Search engine optimization</li>
                <li>Responsive Web Design</li>
                <li>Cross-browser compatibility</li>
              </ul>
              {/* <ul>
                <li>雄獅旅遊網-票券當地遊開發窗口</li>
                <li>使用 React 進行模組化開發</li>
                <li>參與專案架構與使用技術討論</li>
                <li>負責集團各部門需求進行模組開發</li>
                <li>與UED, PM 討論使用者行為與後端討論api串接</li>
              </ul> */}
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--iii"
          date="2018.10～2018.03"
          iconStyle={{ background: "#e1e0d8" }}
          icon={
            <GoMortarBoard />
          }
        >
          <div className={classes.title}>
            <h3
              className={`vertical-timeline-element-subtitle ${classes.name}`}
            >
              <III_icon />
            </h3>
            <h4 className="vertical-timeline-element-subtitle" />
            <p className={classes.title}>
              <ul>
                <li>Javascript</li>
                <li>HTML5</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Responsive web design</li>
              </ul>
              {/* <ul>
                <li>Javascript 動態網頁程式設計</li>
                <li>HTML5 網頁程式設計</li>
                <li>PHP網站程式設計</li>
                <li>MySQL資料庫設計</li>
                <li>響應式網頁設計(RWD)</li>
              </ul> */}
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--Germany"
          date="2018.10～2018.03"
          iconStyle={{ background: "#e1e0d8" }}
          icon={
            <GoMortarBoard />
          }
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">
              <GermanyIcon />
            </h3>
            <h4 className="vertical-timeline-element-subtite">
              Exchange Student
            </h4>
            <p className={classes.title}>
              <ul>
                <li>Goethe Zertifikat A2</li>
                <li>Goethe Zertifikat B1</li>
              </ul>
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--nchu"
          date="2016.07～2017.07"
          iconStyle={{ background: "#e1e0d8" }}
          icon={
            <GoMortarBoard />
          }
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">
              <NCHUicon />
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Department of Foreign Languages and Literatures
            </h4>
            <p className={classes.title}>
              <ul>
              </ul>
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--hote"
          date="2012.09～2016.06"
          iconStyle={{ background: "#0073b0" }}
          icon={
            <MdWork   color="white"/>
          }
        >
          <div className={classes.title}>
            <h3 className="vertical-timeline-element-title">
              <HotelIcon />
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <p className={classes.title}>
                <ul>
                  <li>Marketing communications</li>
                  <li>Facebook advertising</li>
                  <li>Google Adwords advertising</li>
                  <li>Customer relationship management</li>
                </ul>
              </p>

              {/* <ul>
                <li>購買臉書廣告, Google關鍵字廣告</li>
                <li>廣告宣傳撰寫與文字潤搞,協助媒體拍攝不同檔期新聞露出</li>
                <li>
                  飯店平面媒體與廣告媒體路出資料，規劃、執行、改進行銷策略及計劃之工作.
                </li>
                <li>CRM顧客關係管理系統</li>
                <li>管理多媒體社群網站，Facebook臉書管理與刊登廣告操作</li>
              </ul> */}
            </h4>
            {/* <p className={classes.title}>User Experience, Visual Design</p> */}
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
