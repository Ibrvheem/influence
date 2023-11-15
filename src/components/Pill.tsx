import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => {
  return {
    pill: {
      height: "2.7rem",
      width: "6rem",
      borderRadius: "2rem !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});
function Pill({ category, categorybgColor, categoryColor }) {
  const classes = useStyles();
  return (
    <Box className={classes.pill} sx={{ backgroundColor: categorybgColor, margin: "1rem 0rem", padding: "1rem 3.5rem" }}>
      <Typography variant="h6" sx={{ fontSize: "1.2rem", textAlign: "center", color: categoryColor, fontWeight: "400" }}>
        {category}
      </Typography>
    </Box>
  );
}

export default Pill;
