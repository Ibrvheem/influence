import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { StyledButton } from "../../styled-components/styledButton";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
const useStyles = makeStyles(() => {
  return {
    home: {
      height: "90vh",
      backgroundColor: "#eff2f6",
      padding: "6rem 0rem 3rem 0rem",
    },
    avi: {
      height: "7rem",
      width: "7rem",
      objectFit: "cover",
      borderRadius: "50%",
      border: ".5rem solid #fff",
      marginLeft: "-1.5rem",
      verticalAlign: "middle",

      "&:nth-child(1)": {
        marginLeft: "0rem",
      },
    },
  };
});
function Home() {
  const classes = useStyles();
  return (
    <>
      {/* <Navbar /> */}
      <Box className={classes.home}>
        <Container sx={{ flexDirection: "column" }}>
          <Typography variant="h6" sx={{ backgroundColor: "white", padding: "1rem 2rem", borderRadius: "1rem", width: "fit-content", margin: "2rem 0rem" }}>
            Hire Verified Content and Product Influencers
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: 500 }} component="h2" gutterBottom>
            The easiest way to hire
            <span>
              <img src="./images/portrait3.jpg" alt="" className={classes.avi} />
              <img src="./images/portrait3.jpg" alt="" className={classes.avi} />
              <img src="./images/portrait3.jpg" alt="" className={classes.avi} />
            </span>
            <br />
            professionals anyone,anywhere.
          </Typography>
          <Typography variant="body1" color="#636A7C" sx={{ margin: "3.5rem 0rem" }} gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, itaque.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, veritatis.
          </Typography>
          <Box className="flex" sx={{ gap: "1.5rem" }}>
            <Link to="/register">
              <StyledButton variant="contained" color="info">
                Register Now
              </StyledButton>
            </Link>
            <StyledButton variant="outlined" color="info" sx={{ backgroundColor: "white" }}>
              Learn More
            </StyledButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;
