import { InputLabel, Select, TextField, styled } from "@mui/material";

export const StyledInput = styled(TextField)(() => {
  return {
    "& .MuiInputBase-input": {
      padding: "6px 12px",
      boxShadow: "inset 0 1px 1px rgb(0 0 0 / 8%)",

      "&:focus": {
        // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        border: "none",
        // outline: "none",
      },
      "&.MuiInputBase-input": {
        fontSize: "1.5rem",
      },
    },
  };
});
export const StyledSelect = styled(Select)(() => {
  return {
    "& .MuiInputBase-input": {
      padding: "6px 12px",
      boxShadow: "inset 0 1px 1px rgb(0 0 0 / 8%)",
      border: "none",
      "&:focus": {
        // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        border: "none",
        // outline: "none",
      },
      "&.MuiInputBase-input": {
        fontSize: "1.5rem",
      },
    },
  };
});
export const StyledInputLabel = styled(InputLabel)(() => {
  return {
    "& .MuiInputBase-input": {
      padding: "6px 12px",
      boxShadow: "inset 0 1px 1px rgb(0 0 0 / 8%)",

      "&:focus": {
        // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        border: "none",
        // outline: "none",
      },
      "&.MuiInputBase-input": {
        fontSize: "1.5rem",
      },
    },
  };
});
