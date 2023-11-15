import { Tab, styled } from "@mui/material";
export const StyledTab = styled(Tab)(({ theme }) => {
  return {
    backgroundColor: "transparent",
    // color: "white !important",
    minHeight: 0,
    height: "3.5rem !important",
    width: "fit-content",
    borderRadius: "1.2rem",
    textTransform: "none",
    fontSize: "1.3rem",
    fontWeight: 300,
    padding: "0",
    marginLeft: ".5rem",
    transition: "all ease-in-out .2s",
    minWidth: "7rem",

    "&.css-1p0tm1n-MuiTabs-indicator": {
      display: "none !important",
    },

    "&.Mui-selected": {
      color: "white",
      fontWeight: 400,
      backgroundColor: theme.palette.primary.main,
      transition: "all ease-in-out .2s",
    },
  };
});

export const ProfileStyledTab = styled(Tab)(({ theme }) => {
  return {
    backgroundColor: "",
    // color: "white !important",
    minHeight: "0 !important",
    height: "3rem !important",
    width: "fit-content",
    borderRadius: "1rem",
    textTransform: "none",
    fontSize: "1.3rem",
    fontWeight: 300,
    padding: "0rem 1rem !important",
    marginLeft: "5rem",
    transition: "all ease-in-out .2s",
    minWidth: "7rem",
    "&.Mui-selected": {
      color: theme.palette.info.main,

      fontWeight: 400,
      backgroundColor: "#eff2f6",
      transition: "all ease-in-out .2s",
      "& .MuiTabs-flexContainer": {
        justifyContent: "space-evenly",
      },
    },
  };
});
