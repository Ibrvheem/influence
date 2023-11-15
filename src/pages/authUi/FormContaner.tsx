import { Box, Container, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactNode } from "react";

const useStyles = makeStyles((theme: Theme) => {
  return {
    signUp: {
      backgroundColor: "#eff2f6",
      minHeight: "100vh",
      padding: "2rem",
    },
    signUpForm: {
      backgroundColor: "white",
      padding: "2rem",
      minHeight: "93vh",
      borderRadius: "3rem 0rem 0rem 3rem",
    },
    textContent: {
      backgroundColor: theme.palette.info.main,
      padding: "2rem",
      minHeight: "93vh",
      borderRadius: "0rem 3rem 3rem 0rem",
    },
    logoContainer: {
      height: "4rem",
      width: "4rem",
      borderRadius: "50%",
      backgroundColor: theme.palette.info.main,
    },
    icon: {
      height: "1.5rem",
      width: "1.5rem",
      objectFit: "contain",
    },
  };
});
function FormContainer({ children }: { children: ReactNode }) {
  const classes = useStyles();

  return (
    <Box className={classes.signUp}>
      <Container>
        <Grid container>
          <Grid item md={6} className={classes.signUpForm}>
            <Box className={classes.logoContainer}></Box>
            <Container sx={{ padding: "0rem 7rem !important" }}>{children}</Container>
          </Grid>
          <Grid item md={6} className={classes.textContent}>
            <Box>
              <Typography variant="h3" gutterBottom color="white">
                Get Started Now
              </Typography>
              <Typography variant="h6" gutterBottom color="white">
                Enter your credentials to access your account
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FormContainer;
