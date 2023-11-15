import { AppBar, Box, Card, Container, Drawer, Grid, Toolbar, Typography } from "@mui/material";
import NavTab from "./NavTab";
import { StyledInput } from "../styled-components/styledInput";
import { useLocation } from "react-router-dom";
import { ReactNode, useState } from "react";
import SearchBar from "../components/SearchBar";
const drawerWidth = 240;

interface LayoutProp {
  children: ReactNode;
}
function Layout({ children }: LayoutProp) {
  const location = useLocation();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const handleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
    console.log(showSearchBar);
  };
  return (
    <Box sx={{ backgroundColor: "#eff2f6", height: "auto" }}>
      <Drawer
        sx={{
          width: "100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Container className="align-center" sx={{ padding: "2rem 0rem", gap: ".5rem", flexWrap: "wrap" }}>
          <Box sx={{ width: "100%", gap: "1rem" }} className="align-center">
            <Box className="logoContainer"></Box>
            <Typography variant="h3">Influence</Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <NavTab handleSearch={handleSearchBar} />
          </Box>
        </Container>
      </Drawer>
      <Box sx={{}}>
        <AppBar sx={{ backgroundColor: "white", width: `calc(100% - (${drawerWidth * 2}px) )`, mx: `${drawerWidth}px` }}>
          <Toolbar>
            <Grid container className="align-center">
              <Grid item md={4}>
                <Typography variant="h3" color="#010b13" sx={{ textTransform: "capitalize" }}>
                  {location.pathname.slice(1)}
                </Typography>
              </Grid>

              <Grid item md={8} className="flex" sx={{ justifyContent: "flex-end" }}>
                <StyledInput sx={{ color: "#636A7C", fontSize: "1rem" }} placeholder="Search"></StyledInput>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ width: `calc(100% - (${drawerWidth}px * 2))`, ml: `${drawerWidth}px`, paddingTop: "9rem" }} className="flex">
        {/* <Container sx={{ gap: "1rem", width: "100%" }}> */}
        {children}
        {/* </Container> */}
      </Box>
      <Drawer
        sx={{
          width: "100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Container className="align-center" sx={{ padding: "2rem 0rem", gap: ".5rem", flexWrap: "wrap" }}>
          <Box className="align-center" sx={{ gap: "1rem" }}>
            <img src="./images/portrait3.jpg" style={{ objectFit: "cover", height: "5rem", width: "5rem" }} className="logoContainer" />
            <Box>
              <Typography variant="h5" color="#010b13">
                Ibrahim Aliyu
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 300 }} color="#636A7C">
                @ibrvhimaliyu
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={1} className="align-center">
            <Grid item md={12}>
              <Card sx={{ height: "20rem", backgroundColor: "#eff2f6" }} elevation={0} />
            </Grid>
            <Grid item md={12}>
              <Card sx={{ height: "20rem", backgroundColor: "#eff2f6" }} elevation={0} />
            </Grid>
            <Grid item md={12}>
              <Card sx={{ height: "20rem", backgroundColor: "#eff2f6" }} elevation={0} />
            </Grid>
          </Grid>
        </Container>
      </Drawer>
    </Box>
  );
}

export default Layout;
