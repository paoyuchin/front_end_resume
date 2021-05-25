import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const HotelIcon = () => {
  const useStyles = makeStyles(theme => ({
    root: {
    },
    layout:{
      display:'inline-blockl'
    },
    imgSize:{
      width:'90px',
    }
  }));
  const classes = useStyles();
  return (
    <div>
      <div className={classes.layout}>
        <img
          className={classes.imgSize}
          src="http://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/145/2017/11/27143351/%E5%8F%B0%E4%B8%AD%E7%A6%8F%E8%8F%AF-%E5%8E%BB%E8%83%8C%E9%BB%91%E5%AD%97.png"
          alt=""
        />
      </div>
      <span className={classes.layout}>Howard Prince Hotel Taichung</span>
      <p>2013/11~2015/10</p>
    </div>
  );
};

export default HotelIcon;
