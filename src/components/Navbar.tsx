import { Box, Container, Typography } from "@mui/material";
import { StyledButton } from "../styled-components/styledButton";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => {
  return {
    navbar: {
      padding: "3rem",
      backgroundColor: "#eff2f6",
    },
    logoContainer: {
      height: "4rem",
      width: "4rem",
      borderRadius: "50%",
      backgroundColor: "#fff",
    },
  };
});
function Navbar() {
  const classes = useStyles();
  return (
    <Box className={classes.navbar}>
      <Container className="justify-space-btw" sx={{ flexDirection: "row" }}>
        <Box className="center-center" sx={{ gap: "1rem" }}>
          <Box className={classes.logoContainer}></Box>
          <Typography variant="h5">App-name</Typography>
        </Box>
        <Box className="center-center" sx={{ gap: "1rem" }}>
          <Typography variant="h5">Navigation 1</Typography>
          <Typography variant="h5">Navigation 2</Typography>
          <Typography variant="h5">Navigation 3</Typography>
          <Typography variant="h5">Navigation 4</Typography>
        </Box>
        <Box className="center-center">
          <Link to="/signin">
            <StyledButton color="info" variant="outlined" sx={{ backgroundColor: "white" }}>
              Sign In
            </StyledButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
