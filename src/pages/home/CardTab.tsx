import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => {
  return {
    cardTabImage: {
      height: "6rem",
      width: "6rem",
      borderRadius: "1rem",
      backgroundColor: "white",
      objectFit: "cover",
    },
  };
});
function CardTab() {
  const classes = useStyles();
  return (
    <Paper elevation={0} sx={{ backgroundColor: "#eff2f6", borderRadius: "2rem", padding: "1.1rem" }} className="flex">
      <img src="./images/selfie1.jpg" alt="" className={classes.cardTabImage} />
      <Grid container>
        <Grid item md={12}>
          <Grid container>
            <Grid item md={6}>
              <Grid container className={"justify-space-btw"} >
                <Grid item md={12}>
                  <Typography variant="body1">Ibrahim Aliyu</Typography>
                </Grid>
                <Grid item md={12}>
                  <Typography variant="h6">Content-Creator</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CardTab;
