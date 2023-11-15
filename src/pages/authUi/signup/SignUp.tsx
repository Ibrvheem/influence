import { Box, Checkbox, Divider, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { StyledInput } from "../../../styled-components/styledInput";
import { StyledButton } from "../../../styled-components/styledButton";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useFormik } from "formik";
import FormContainer from "../FormContaner";
import { MoonLoader } from "react-spinners";
import { useState } from "react";

const useStyles = makeStyles(() => {
  return {
    icon: {
      height: "1.5rem",
      width: "1.5rem",
      objectFit: "contain",
    },
  };
});
function SignUp() {
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const initialValues = {
    auth: {
      email: "",
      password: "",
    },
    moreInfo: {
      fullName: "",
      role: "",
    },
  };
  interface formValues {
    auth: {
      email: string;
      password: string;
    };
    moreInfo: {
      fullName: string;
      role: string;
    };
  }

  const onSubmit = async (values: formValues) => {
    console.log(values);
    setLoading(true);
    await createUserWithEmailAndPassword(auth, values.auth.email, values.auth.password)
      .then((response) => {
        console.log(response.user.uid);
        const userRef = doc(db, "users", response.user.uid);
        setDoc(userRef, values.moreInfo).then((res) => {
          console.log(res);
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.code);
        setLoading(false);
        setErrorMessage(err.code);
      });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <FormContainer>
      <Box>
        <Typography variant="h3">Get Started Now</Typography>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 300 }}>
          Fill in your credentials to create an account
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ padding: "2rem 0rem" }}>
        <Grid item md={6}>
          <StyledButton color="primary" fullWidth variant="outlined" sx={{ fontWeight: 400, fontSize: "1rem" }} startIcon={<img src="./icons/google.png" className={classes.icon} />}>
            Continue with Google
          </StyledButton>
        </Grid>
        <Grid item md={6}>
          <StyledButton color="primary" fullWidth variant="outlined" sx={{ fontWeight: 400, fontSize: "1rem" }} startIcon={<img src="./icons/apple-logo.png" className={classes.icon} />}>
            Continue with Apple
          </StyledButton>
        </Grid>
      </Grid>
      <Divider sx={{ margin: "2rem 0rem" }}>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          or
        </Typography>
      </Divider>

      <Grid container>
        {errorMessage ? (
          <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
            <Typography variant="h6" sx={{ fontWeight: 500, color: "red", textAlign: "center" }}>
              {errorMessage}
            </Typography>
          </Grid>
        ) : null}
        <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            Name
          </Typography>
          <StyledInput variant="outlined" color="primary" fullWidth {...formik.getFieldProps("moreInfo.fullName")} />
        </Grid>
        <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            Email Address
          </Typography>
          <StyledInput variant="outlined" color="primary" fullWidth {...formik.getFieldProps("auth.email")} />
        </Grid>{" "}
        <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            What are you?
          </Typography>
          <Grid container>
            <RadioGroup defaultValue="influencer" sx={{ width: "100%", flexDirection: "row" }} className="flex" {...formik.getFieldProps("moreInfo.role")}>
              <Grid item md={6} className="align-center">
                <Radio value="influencer" />
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  Influencer
                </Typography>
              </Grid>
              <Grid item md={6} className="align-center">
                <Radio value="brandOwner" />
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                  Brand Owner
                </Typography>
              </Grid>
            </RadioGroup>
          </Grid>
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
          <StyledInput variant="outlined" color="primary" fullWidth {...formik.getFieldProps("auth.password")} />
        </Grid>
        <Grid item md={12} className="align-center" sx={{ gap: ".7rem", marginBottom: "1.5rem" }}>
          <Checkbox sx={{ padding: 0 }} color="primary" />
          <Typography variant="h6" color="info" sx={{ fontWeight: 300 }}>
            I agree to the terms and policy
          </Typography>
        </Grid>
        <Grid item md={12} sx={{ marginBottom: "1.5rem" }} className="justify-center">
          {loading ? (
            <MoonLoader loading={loading} size={30} color="#0070ff" />
          ) : (
            <StyledButton
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Continue
            </StyledButton>
          )}
        </Grid>
        <Grid item md={12} sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="h6" color="info" sx={{ fontWeight: 300 }}>
            Have an account?{" "}
            <Link to="/signin" style={{ color: "#0070ff", fontWeight: 600 }}>
              Sign In
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </FormContainer>
  );
}

export default SignUp;
