import { createTheme } from "@mui/material";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";
const breakpoints = createBreakpoints({});
const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontFamily: "Poppins",
      fontSize: "6rem",
      fontWeight: 500,
      [breakpoints.down("sm")]: {
        fontSize: "5rem",
      },
    },
    body1: {
      fontSize: "1.8rem",
    },
  },
  palette: {
    primary: {
      main: "#0070ff",
    },
    info: {
      main: "#010b13",
    },
  },
});

// 636A7C

export default theme;
