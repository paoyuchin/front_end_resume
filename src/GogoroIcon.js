import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  style: {
    width: "100%"
  },
  icon: {
    display: "inline-block"
  },
  header_lion_logo:{
    width:'60px',
    height: '60px',    
    paddingRight: '15px'
  },
  image: {
    width: "30%",
  },
}));
const GogoroIcon = () => {
  const classes = useStyles();
  return (
    <div className={classes.style}>
    <img
      className={classes.image}
      src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1505914847/ealijgffo29i1opvhras.png"
      />
    </div>
  );
};

export default GogoroIcon;
