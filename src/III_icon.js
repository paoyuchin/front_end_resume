import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  style: {
    top: "24px",
    left: "50px",
    width: "100%",
  }
}));
const GermanyIcon = () => {
  const classes = useStyles();

  return (
    <div className={classes.style}>
      <span>
        <img
          src="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2016/07/12/99/2365617.png&x=0&y=0&sw=0&sh=0&sl=W&fw=800"
          alt=""
        />
      </span>
      <span>Institute for Information Industry</span>
    </div>
  );
};

export default GermanyIcon;
