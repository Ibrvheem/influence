import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { Box, Button, Card, Container, Divider, Grid, Typography } from "@mui/material";
import { Edit, Home } from "@mui/icons-material";
import { StyledButton } from "../../styled-components/styledButton";
import IconContainer from "../../components/IconContainer";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ProfileStyledTab, StyledTab } from "../../styled-components/styledTab";
import Pill from "../../components/Pill";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { getUserData } from "../../slices/AuthSlice";
import { useNavigate } from "react-router";

function Profile() {
  const [value, setValue] = useState("1");
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  console.log("user", user);

  const handleChange = (event: Event, newValue: any) => {
    setValue(newValue);
  };
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUserData(user?.user.uid));
  }, []);
  const userData = useSelector((state) => state.auth.user);
  console.log(userData);

  return (
    <Layout>
      <Container sx={{ gap: "1rem", width: "100%" }}>
        <Grid item md={12} sx={{ height: "auto" }}>
          <Card elevation={0} sx={{ backgroundColor: "", width: "100%", height: "55vh", borderRadius: "1rem", position: "relative" }}>
            <Box sx={{ height: "50%", backgroundImage: "url('./images/selfie1.jpg')", backgroundPositionY: "30%", backgroundSize: "100%" }}></Box>
            <Divider />
            <img
              src="./images/portrait3.jpg"
              className="logoContainer"
              style={{ height: "17rem", width: "17rem", position: "absolute", border: ".4rem solid white", bottom: "32%", left: "3%", objectFit: "cover" }}
            />
            <Box sx={{ height: "50%" }}>
              <Container sx={{ padding: "2rem 0rem" }}>
                <Box>
                  <Grid container sx={{ position: "relative" }}>
                    <Grid item md={3}></Grid>
                    <Grid item md={6}>
                      <Typography variant="h4">{userData?.fullName}</Typography>
                      {/* <Typography variant="h6" sx={{ padding: ".5rem 0rem", color: "#636A7C" }}>
                      Creator
                    </Typography> */}
                      <Pill categoryColor={"rgb(13, 91, 225)"} categorybgColor={"rgba(13, 91, 225,0.1)"} category={userData?.role == "brandOwner" ? "Brand" : "Creator"} />
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "1.1rem", fontWeight: "400", backgroundColor: "#eff2f6", width: "fit-content", color: "black", padding: "0.5rem 1.5rem", borderRadius: "1rem" }}
                      >
                        {userData?.address}
                      </Typography>
                    </Grid>
                    <Grid item md={3} sx={{ display: "flex", justifyContent: "flex-end", height: "fit-content" }}>
                      <StyledButton
                        variant="outlined"
                        sx={{ padding: "0.2rem 1rem", borderColor: "#0000001f", color: "black" }}
                        startIcon={<Edit color="primary" />}
                        onClick={() => {
                          navigate("/edit");
                        }}
                      >
                        Edit Profile
                      </StyledButton>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ padding: "2rem 0rem" }}>
                    <Grid item md={3}></Grid>
                    <Grid item md={6}>
                      <Box className="flex" sx={{ gap: "1rem" }}>
                        <IconContainer img="./icons/mail.png" />
                        <IconContainer img="./icons/instagram.png" />
                        <IconContainer img="./icons/mail.png" />
                        <IconContainer img="./icons/mail.png" />
                      </Box>
                    </Grid>
                    <Grid item md={3} sx={{ display: "flex", justifyContent: "flex-end", height: "fit-content" }}>
                      <IconContainer img="./icons/save.png" />
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </Box>
          </Card>
          <Box sx={{ backgroundColor: "white", margin: "2rem 0rem", borderRadius: "1rem" }}>
            <TabContext value={value}>
              <Box>
                <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ padding: 0, minHeight: "4rem !important", width: "100%" }} className="justify-space-btw">
                  <ProfileStyledTab label="Overview" value="1" sx={{ padding: "0 0" }} />
                  <ProfileStyledTab label="Rates" value="2" />
                  <ProfileStyledTab label="Collaborations" value="3" />
                  <ProfileStyledTab label="Feed" value="4" />
                  <ProfileStyledTab label="Engagements" value="5" />
                </TabList>
              </Box>
            </TabContext>
          </Box>
          <Box>
            <Card elevation={0} sx={{ backgroundColor: "", width: "100%", height: "auto", margin: "2rem 0rem", padding: "2rem 2rem", borderRadius: "1rem", position: "relative" }}>
              <TabContext value={value}>
                <TabPanel value="1">
                  <Typography variant="h4" sx={{ marginBottom: "2.5rem" }}>
                    {" "}
                    Overview
                  </Typography>
                  <Typography variant="h5" color="#636A7C">
                    {userData?.bio}
                  </Typography>
                </TabPanel>
                <TabPanel value="2">
                  <Typography variant="h4" sx={{ marginBottom: "2.5rem" }}>
                    {" "}
                    Rates
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item md={4}>
                      <Grid container sx={{ border: "1px solid #eff2f6", borderRadius: "1rem", height: "20rem", padding: "1rem" }}>
                        <Grid item md={12}>
                          <IconContainer img="./icons/instagram-bordered.png" />
                        </Grid>
                        <Grid container>
                          <Grid item md={12}>
                            <Typography>Instagram Rates</Typography>
                          </Grid>
                          <>
                            <Grid item md={6}>
                              <Typography variant="h6">Instagram Stories</Typography>
                            </Grid>
                            <Grid item md={6} className="justify-end">
                              <Typography variant="h6">$50.00</Typography>
                            </Grid>
                          </>
                          <>
                            <Grid item md={6}>
                              <Typography variant="h6">Instagram Stories</Typography>
                            </Grid>
                            <Grid item md={6} className="justify-end">
                              <Typography variant="h6">$50.00</Typography>
                            </Grid>
                          </>
                          <>
                            <Grid item md={6}>
                              <Typography variant="h6">Instagram Stories</Typography>
                            </Grid>
                            <Grid item md={6} className="justify-end">
                              <Typography variant="h6">$50.00</Typography>
                            </Grid>
                          </>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={4}>
                      <Grid container sx={{ border: "1px solid #eff2f6", borderRadius: "1rem", height: "20rem", padding: "1rem" }}>
                        <Grid item md={12}>
                          <IconContainer img="./icons/twitter.png" />
                        </Grid>
                        <Grid container>
                          <Grid item md={12}>
                            <Typography>Instagram Rates</Typography>
                          </Grid>
                          <>
                            <Grid item md={6}>
                              <Typography variant="h6">Instagram Stories</Typography>
                            </Grid>
                            <Grid item md={6} className="justify-end">
                              <Typography variant="h6">$50.00</Typography>
                            </Grid>
                          </>
                          <>
                            <Grid item md={6}>
                              <Typography variant="h6">Instagram Stories</Typography>
                            </Grid>
                            <Grid item md={6} className="justify-end">
                              <Typography variant="h6">$50.00</Typography>
                            </Grid>
                          </>
                          <>
                            <Grid item md={6}>
                              <Typography variant="h6">Instagram Stories</Typography>
                            </Grid>
                            <Grid item md={6} className="justify-end">
                              <Typography variant="h6">$50.00</Typography>
                            </Grid>
                          </>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={4}>
                      <Grid container sx={{ border: "1px solid #eff2f6", borderRadius: "1rem", height: "20rem", padding: "1rem" }}>
                        <Grid item md={12}>
                          <IconContainer img="./icons/youtube-bordered.png" />
                        </Grid>
                        <Grid container>
                          <Grid item md={12}>
                            <Typography>Instagram Rates</Typography>
                          </Grid>
                          <>
                            <Grid item md={6}>
                              <Typography variant="h6">Instagram Stories</Typography>
                            </Grid>
                            <Grid item md={6} className="justify-end">
                              <Typography variant="h6">$50.00</Typography>
                            </Grid>
                          </>
                          <>
                            <Grid item md={6}>
                              <Typography variant="h6">Instagram Stories</Typography>
                            </Grid>
                            <Grid item md={6} className="justify-end">
                              <Typography variant="h6">$50.00</Typography>
                            </Grid>
                          </>
                          <>
                            <Grid item md={6}>
                              <Typography variant="h6">Instagram Stories</Typography>
                            </Grid>
                            <Grid item md={6} className="justify-end">
                              <Typography variant="h6">$50.00</Typography>
                            </Grid>
                          </>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value="3">
                  <Typography variant="h4" sx={{ marginBottom: "2.5rem" }}>
                    {" "}
                    Collaborations
                  </Typography>
                  <Typography variant="h5" color="#636A7C">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, porro error! Quis, sapiente asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
                    <br /> Eveniet nemo dolorem illo veniam omnis reprehenderit sunt quis esse, minima eligendi rerum! Laboriosam, atque itaque dolore ipsam similique vel natus dolorem perferendis
                    tempore commodi, totam nostrum nesciunt nulla aspernatur doloribus ducimus.
                  </Typography>
                </TabPanel>
                <TabPanel value="5">
                  <Typography variant="h4" sx={{ marginBottom: "2.5rem" }}>
                    {" "}
                    Engagements
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item md={6}>
                      <Box sx={{ borderRadius: "1rem", height: "30rem", padding: "1rem", boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>
                        <IconContainer img="./icons/instagram-bordered.png" />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box sx={{ borderRadius: "1rem", height: "30rem", padding: "1rem", boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>
                        <IconContainer img="./icons/twitter.png" />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box sx={{ borderRadius: "1rem", height: "30rem", padding: "1rem", boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>
                        <IconContainer img="./icons/twitter.png" />
                      </Box>
                    </Grid>

                    <Grid item md={6}>
                      <Box sx={{ borderRadius: "1rem", height: "30rem", padding: "1rem", boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>
                        <IconContainer img="./icons/youtube-bordered.png" />
                      </Box>
                    </Grid>
                  </Grid>
                </TabPanel>
              </TabContext>
            </Card>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Profile;
