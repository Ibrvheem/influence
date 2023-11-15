import { ArrowDropDownRounded } from "@mui/icons-material";
import { Box, Button, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { StyledInput, StyledInputLabel, StyledSelect } from "../styled-components/styledInput";
import { StyledButton } from "../styled-components/styledButton";
import { useState } from "react";

const useStyles = makeStyles(() => {
  return {
    searchBar: {
      width: "100%",
      backgroundColor: "lavender",
    },
    searchInput: {},
  };
});
function SearchBar() {
  const classes = useStyles();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className={classes.searchBar}>
      <Grid container>
        <Grid item md={12}>
          <Grid container>
            <Grid item md={8}>
              <StyledInput fullWidth />
            </Grid>
            <Grid item md={4}>
              <StyledButton color="info" variant="contained">
                Find
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchBar;
