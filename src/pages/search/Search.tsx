import React from "react";
import Layout from "../../layout/Layout";
import SearchBar from "../../components/SearchBar";
import { Container, Grid, Typography } from "@mui/material";
import { StyledInput } from "../../styled-components/styledInput";
import { StyledButton } from "../../styled-components/styledButton";

function Search() {
  return (
    <Layout>
      <Container>
        <Grid container>
          <Grid item md={12}>
            <Typography variant="h1" align="center">
              Search
            </Typography>
            <Typography variant="h5" align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, accusamus.
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Grid container>
              <Grid item md={8}>
                <StyledInput placeholder="Search" fullWidth />
              </Grid>
              <Grid item md={2}>
                <StyledButton fullWidth variant="contained">
                  Search
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* <SearchBar /> */}
    </Layout>
  );
}

export default Search;
