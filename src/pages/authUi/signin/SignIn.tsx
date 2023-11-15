import { Box, Checkbox, Divider, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { StyledInput } from "../../../styled-components/styledInput";
import { StyledButton } from "../../../styled-components/styledButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../slices/AuthSlice";
import { AppDispatch } from "../../../store";
import FormContainer from "../FormContaner";
import { MoonLoader } from "react-spinners";
const useStyles = makeStyles(() => {
  return {
    icon: {
      height: "1.5rem",
      width: "1.5rem",
      objectFit: "contain",
    },
  };
});
function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    displayName: "",
  });
  function login() {
    setLoading(true);
    dispatch(loginUser({ email: user.email, password: user.password })).then((action) => {
      if (action.payload) {
        navigate("/home");
        setLoading(false);
      } else {
        console.log("error");
        setLoading(false);
      }
    });
  }

  return (
    <FormContainer>
      <Box>
        <Typography variant="h3">Get Started Now</Typography>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 300 }}>
          Enter your credentials to access your account
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ padding: "2rem 0rem" }}>
        <Grid item md={6}>
          <StyledButton color="primary" fullWidth variant="outlined" sx={{ fontWeight: 400, fontSize: "1rem" }} startIcon={<img src="./icons/google.png" className={classes.icon} />}>
            Sign in with Google
          </StyledButton>
        </Grid>
        <Grid item md={6}>
          <StyledButton color="primary" fullWidth variant="outlined" sx={{ fontWeight: 400, fontSize: "1rem" }} startIcon={<img src="./icons/apple-logo.png" className={classes.icon} />}>
            Sign in with Apple
          </StyledButton>
        </Grid>
      </Grid>
      <Divider sx={{ margin: "2rem 0rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          or
        </Typography>
      </Divider>
      <Grid container>
        <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            Email Address
          </Typography>
          <StyledInput
            variant="outlined"
            color="primary"
            fullWidth
            onChange={(e) => {
              setUser((prevUser) => ({ ...prevUser, email: e.target.value }));
            }}
          />
        </Grid>
        <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
          <Box className="justify-space-btw">
            <Typography variant="h6" sx={{ fontWeight: 300 }}>
              Password
            </Typography>

            <Typography variant="h6" color="primary" sx={{ fontWeight: 400 }}>
              Forgot Password?
            </Typography>
          </Box>
          <StyledInput
            variant="outlined"
            color="primary"
            fullWidth
            type="password"
            onChange={(e) => {
              setUser((prevUser) => ({ ...prevUser, password: e.target.value }));
            }}
          />
        </Grid>
        <Grid item md={12} className="align-center" sx={{ gap: ".7rem", marginBottom: "1.5rem" }}>
          <Checkbox sx={{ padding: 0 }} color="primary" />
          <Typography variant="h6" color="info" sx={{ fontWeight: 300 }}>
            Remember Me
          </Typography>
        </Grid>
        <Grid item md={12} sx={{ marginBottom: "1.5rem" }} className="justify-center">
          {loading ? (
            <MoonLoader loading={loading} size={30} color="#0070ff" />
          ) : (
            <StyledButton variant="contained" color="primary" fullWidth onClick={login}>
              Continue
            </StyledButton>
          )}
        </Grid>
        <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="h6" color="info" sx={{ fontWeight: 400 }}>
            Dont have an account?{" "}
            <Link to="/register" style={{ color: "#0070ff", fontWeight: 600 }}>
              Sign Up
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </FormContainer>
  );
}

export default SignIn;
