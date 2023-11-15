import { Box, Button, Card, Divider, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { StyledButton } from "../styled-components/styledButton";
const useStyles = makeStyles(() => {
  return {
    influencerCard: {
      height: "auto",
      borderRadius: "3rem !important",
      padding: "2rem",
      boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !important",
    },
    influencerImage: {
      height: "27rem",
      width: "100%",
      borderRadius: "2rem",
      objectFit: "cover",
    },
    basicInfo: {
      display: "flex",
      justifyContent: "space-between",
    },
    iconContainer: {
      height: "4rem",
      width: "4rem",
      borderRadius: "1rem !important",
      border: "1px solid #0000001f !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    socials: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      gap: "1rem",
      marginTop: "1.5rem",
    },
    socialIcons: {
      display: "flex",
      gap: "1rem",
    },
    socialIcon: {
      width: "2rem",
      objectFit: "contain",
    },
    pill: {
      height: "2.7rem",
      width: "6rem",
      borderRadius: "2rem !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});
interface influencerCardProps {
  img: string;
  name: string;
  loc: string;
  fol: string;
  price?: string;
  category: string;
  categoryColor: string;
  categorybgColor: string;
}
function InfluencerCard({ img, name, loc, fol, category, categoryColor, categorybgColor }: influencerCardProps) {
  const classes = useStyles();
  return (
    <Card className={classes.influencerCard} elevation={0}>
      {/* <Container> */}
      <Box>
        <img src={img} className={classes.influencerImage} alt="" />
      </Box>
      <Box className={classes.basicInfo}>
        <Box>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">{loc}</Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5">{fol}</Typography>
          <Typography variant="h6">Followers</Typography>
        </Box>
      </Box>
      <Divider sx={{ margin: "2rem 0rem" }} />
      {/* </Container> */}
      <Box className={classes.socials}>
        <Box className={classes.socialIcons}>
          <IconButton className={classes.iconContainer}>
            <img src="./icons/instagram.png" className={classes.socialIcon} alt="" />
          </IconButton>
          <IconButton className={classes.iconContainer}>
            <img src="./icons/youtube.png" className={classes.socialIcon} alt="" />
          </IconButton>
          <IconButton className={classes.iconContainer}>
            <img src="./icons/tik-tok.png" className={classes.socialIcon} alt="" />
          </IconButton>
        </Box>
        <Box className={classes.pill} sx={{ backgroundColor: categorybgColor }}>
          <Typography variant="h6" sx={{ fontSize: "1rem", textAlign: "center", color: categoryColor }}>
            {category}
          </Typography>
        </Box>
      </Box>
      {/* <Box className={classes.basicInfo} sx={{ padding: "2rem 0rem" }}>
        <Box>
          <Typography variant="h6">Advertising Price</Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5">{price}</Typography>
        </Box>
      </Box> */}
      <Box className={classes.socials}>
        <Box className={classes.socialIcons} sx={{ Width: "30%" }}>
          <IconButton className={classes.iconContainer}>
            <img src="./icons/mail.png" className={classes.socialIcon} alt="" />
          </IconButton>
          <IconButton className={classes.iconContainer}>
            <img src="./icons/save.png" className={classes.socialIcon} alt="" />
          </IconButton>
        </Box>
        <Box sx={{ width: "60%" }}>
          <Button variant="contained" disableElevation sx={{ color: "#f8f8ff", borderRadius: "1.2rem", width: "100%", height: "4rem", fontSize: "1.3rem", textTransform: "none" }} color="primary">
            View Profile
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default InfluencerCard;
