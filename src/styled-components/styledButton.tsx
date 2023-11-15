import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: "0.7rem 2.5rem",
  fontSize: "1.2rem",
  textTransform: "none",
  // "&:hover": {
  //   borderColor: theme.palette.primary.main,
  //   color: theme.palette.primary.main,
  // },
}));
