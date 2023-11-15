import React from "react";
import { navigation } from "../local-data/navigation";
import { Box, MenuItem, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => {
  return {
    menuItem: {
      gap: "2rem",
      padding: "1rem 2rem !important",
      margin: "0rem 0rem 1rem 0rem !important",
      cursor: "pointer",
      borderRadius: "1rem !important",
      transition: "all ease-in-out .2s",
      "&:hover": {
        backgroundColor: "#eff2f6",
        transition: "all ease-in-out .2s",
      },
    },
    activeMenuItem: {
      backgroundColor: "#eff2f6 !important",
      transition: "all ease-in-out .2s",
    },
  };
});
function NavTab({ handleSearch }) {
  const navigate = useNavigate();
  const classes = useStyles();
  const location = useLocation();
  return (
    <Box>
      <Box sx={{ marginTop: "5rem !important" }}>
        {navigation.map((nav) => {
          return (
            <MenuItem
              key={nav.name}
              className={`${classes.menuItem}  align-center ${location.pathname == "/" + nav.name ? classes.activeMenuItem : null}`}
              onClick={() => {
                navigate(`/${nav.name}`);
              }}
            >
              <>
                <img src={location.pathname == "/" + nav.name ? nav.activeIcon : nav.icon} alt={nav.title} style={{ height: "2rem", width: "2rem", objectFit: "contain" }} />
              </>
              <Typography variant="body1" color={location.pathname == "/" + nav.name ? "main" : "#0000001f"}>
                {nav.title}
              </Typography>
            </MenuItem>
          );
        })}
      </Box>
      <MenuItem className={`${classes.menuItem} align-center`} sx={{ marginTop: "17rem !important" }}>
        <>
          <img src="./icons/log-out.png" alt="log-out" style={{ height: "2rem", width: "2rem", objectFit: "contain" }} />
        </>
        <Typography variant="body1">Log Out</Typography>
      </MenuItem>
    </Box>
  );
}

export default NavTab;
