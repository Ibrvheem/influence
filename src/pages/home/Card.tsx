import { Box, Paper, Typography } from "@mui/material";
import { StyledCard } from "../../styled-components/styledCard";
import { makeStyles } from "@mui/styles";
import CardTab from "./CardTab";

const useStyles = makeStyles(() => {
  return {
    borderedBox: {
      padding: "1rem 2rem",
      border: `.15rem solid #eff2f6`,
      height: "40rem",
      borderRadius: "2rem",
      marginTop: "2rem",
    },
  };
});
function Card() {
  const classes = useStyles();
  return (
    <StyledCard elevation={0}>
      <Box>
        <Typography variant="h3">Hire who you need.</Typography>
        <Typography variant="h5">Find pros who can start right away and handle the job.</Typography>
      </Box>
      <Box className={classes.borderedBox}>
        <Typography variant="body1" sx={{ padding: "0rem 0rem 1rem 0rem" }}>
          {" "}
          Hire the best influencers
        </Typography>

        <CardTab />
      </Box>
    </StyledCard>
  );
}

export default Card;
