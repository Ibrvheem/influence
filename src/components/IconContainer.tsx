import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => {
  return {
    iconContainer: {
      height: "4rem",
      width: "4rem",
      borderRadius: "1rem !important",
      border: "1px solid #0000001f !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    socialIcon: {
      width: "2rem",
      objectFit: "contain",
    },
  };
});
function IconContainer({ img }) {
  const classes = useStyles();
  return (
    <IconButton className={classes.iconContainer}>
      <img src={img} className={classes.socialIcon} alt="" />
    </IconButton>
  );
}

export default IconContainer;
