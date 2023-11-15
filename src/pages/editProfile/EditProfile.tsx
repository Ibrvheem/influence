import React, { useEffect } from "react";
import Layout from "../../layout/Layout";
import { Button, Container, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import { overviewForm } from "../../local-data/editProfile";
import { StyledInput } from "../../styled-components/styledInput";
import { useFormik } from "formik";
import { db } from "../../config/firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

function EditProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user", user);
  const initialValues = {
    name: "",
    email: "",
    bio: "",
    address: "",
  };
  const userRef = doc(db, "users", user.user.uid);
  const onSubmit = (values) => {
    console.log(values);
    setDoc(userRef, values)
      .then(() => {
        console.log("additional info added");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    async function getProfileData() {
      const docSnap = await getDoc(userRef);
      if (docSnap) {
        console.log("docSnap", docSnap.data());
      }
    }
    getProfileData();
  }, []);

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography variant="h3">Overview</Typography>
          </Grid>
          {overviewForm.map((aForm) => {
            return (
              <Grid item md={6}>
                {aForm.type == "text" || aForm.type == "email" ? (
                  <>
                    <Typography variant="h6" sx={{ fontWeight: 400 }}>
                      {aForm.label}
                    </Typography>
                    <StyledInput fullWidth type={aForm.type} {...formik.getFieldProps(aForm.name)} />
                  </>
                ) : aForm.type == "textArea" ? (
                  <>
                    {" "}
                    <Typography variant="h6" sx={{ fontWeight: 400 }}>
                      {aForm.label}
                    </Typography>
                    <StyledInput fullWidth multiline rows={6} {...formik.getFieldProps(aForm.name)} />
                  </>
                ) : aForm.type == "radio" ? (
                  <>
                    <Typography variant="h6" sx={{ fontWeight: 400 }}>
                      {aForm.label}
                    </Typography>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" {...formik.getFieldProps(aForm.name)}>
                      {aForm?.values?.map((value) => {
                        return (
                          // <FormControlLabel value="female" control={<Radio />} label="Female" />
                          // <FormControlLabel value="male" control={<Radio />} label="Male" />
                          <FormControlLabel value={value} control={<Radio />} label={value} />
                        );
                      })}
                    </RadioGroup>
                  </>
                ) : null}
              </Grid>
            );
          })}
          <Button onClick={formik.handleSubmit}>CLick me</Button>

          <Grid item md={12}>
            <Typography variant="h3">Rates</Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default EditProfile;
