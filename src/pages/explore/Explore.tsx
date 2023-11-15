import { Box, Container, Grid } from "@mui/material";
import InfluencerCard from "../../components/InfluencerCard";
import { makeStyles } from "@mui/styles";
import { influencers } from "../../local-data/influencers";
import Layout from "../../layout/Layout";
import { TabContext, TabList } from "@mui/lab";
import { ProfileStyledTab } from "../../styled-components/styledTab";
import { useState } from "react";

const useStyles = makeStyles(() => {
  return {
    explore: {
      backgroundColor: "#f8f8ff",
      padding: "5rem 0rem",
      height: "auto",
      borderTopRightRadius: "3rem",
      borderTopLeftRadius: "3rem",
    },
  };
});

function Explore() {
  const [value, setValue] = useState("1");
  const handleChange = (event: Event, newValue: any) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TabContext value={value}>
              <Box sx={{ backgroundColor: "white", margin: "0rem 0rem", borderRadius: "1rem" }}>
                <TabList onChange={handleChange} sx={{ padding: 0, minHeight: "4rem !important", width: "100%" }} className="justify-space-btw">
                  <ProfileStyledTab label="Explore" value="1" sx={{ padding: "0 0" }} />
                  <ProfileStyledTab label="Popular" value="2" />
                </TabList>
              </Box>
            </TabContext>
          </Grid>
          {influencers.map((influencer) => {
            return (
              <Grid item md={4} sx={{ paddingLeft: 0 }}>
                <InfluencerCard
                  name={influencer.name}
                  loc={influencer.location}
                  fol={influencer.followers}
                  img={influencer.img}
                  // price={influencer.price}
                  category={influencer.category}
                  categoryColor={influencer.color}
                  categorybgColor={influencer.bgColor}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
}

export default Explore;
