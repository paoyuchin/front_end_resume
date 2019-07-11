import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const HotelIcon = () => {
  const useStyles = makeStyles(theme => ({
    root: {
    },
    layout:{
      display:'inline-blockl'
    }
  }));
  const classes = useStyles();
  return (
    <div>
      <span className={classes.layout}>
        <img
          src="http://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/145/2017/11/27143351/%E5%8F%B0%E4%B8%AD%E7%A6%8F%E8%8F%AF-%E5%8E%BB%E8%83%8C%E9%BB%91%E5%AD%97.png"
          alt=""
        />
      </span>
      <span className={classes.layout}>Howard Prince Hotel Taichung</span>
    </div>
  );
};

export default HotelIcon;
