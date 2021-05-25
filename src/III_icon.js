import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  style: {
    top: "24px",
    left: "50px",
    width: "100%",
  },
  text: {
    fontWeight: "bold !important",
  },
  date: {
    margin: "10px 0px !important",
  },
}));
const GermanyIcon = () => {
  const classes = useStyles();

  return (
    <div className={classes.style}>
      <div className="padding_right">
        <img
          src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2016/07/12/99/2365617.png&x=0&y=0&sw=0&sh=0&sl=W&fw=800"
          alt=""
        />
      </div>
      <p  className={classes.text}>Institute for Information Industry</p>
      <p  className={classes.date}>2017/10~2018/3</p>
    </div>
  );
};

export default GermanyIcon;
