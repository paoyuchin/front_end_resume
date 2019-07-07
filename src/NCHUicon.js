import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  style: {
    top: "23px",
    left: "100px",
    width: "100%"
  },
  imgStyle:{
    width:' 60px',
    height: '60px',
  },
  title:{
    paddingLeft:'16px'
  }
}));
const NCHUicon = () => {
  const classes = useStyles();
  return (
    <div className={classes.style}>
      <span>
        <img
          src="https://upload.wikimedia.org/wikipedia/zh/thumb/7/7a/National_Chung_Hsing_University.svg/1200px-National_Chung_Hsing_University.svg.png"
          className={classes.imgStyle}
        />
      </span>
      <span className={classes.title}>台灣-國立中興大學</span>
    </div>
  );
};

export default NCHUicon;
