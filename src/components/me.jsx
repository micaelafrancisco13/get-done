import React from "react";
import NavBarOut from "./navBarOut";
import Grid from "@mui/material/Grid";
import Ela from "../images/Ela.png";
import { Box, Button, Typography } from "@mui/material";
import { resize } from "./utils/sizing";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useMediaQuery from "@mui/material/useMediaQuery";

const Me = () => {
  const nunitoFont = { fontFamily: (theme) => theme.typography.nunito };
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const centerComponent = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Box>
      <NavBarOut />
      <Grid container sx={{ pb: 4 }}>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }} sx={{ p: 0 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              mb: { xs: `${resize(55)}rem`, sm: 0 },
            }}
          >
            <Box className="block--skewed-left" sx={centerComponent}>
              <Box sx={{ textAlign: "center" }}>
                <img src={Ela} className="img-fluid ela" />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          order={{ xs: 2, sm: 1 }}
          sx={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              textAlign: { xs: "center", sm: "left" },
              px: {
                xs: `${resize(25)}rem`,
                sm: 0,
              },
              pl: { sm: `${resize(100)}rem` },
            }}
          >
            <Typography
              sx={{
                ...nunitoFont,
                fontSize: { xs: `${resize(19)}rem`, lg: `${resize(28)}rem` },
                mb: 0.5,
              }}
            >
              Hello,
            </Typography>
            <Typography
              sx={{
                ...nunitoFont,
                fontWeight: "700",
                fontSize: { xs: `${resize(23)}rem`, lg: `${resize(50)}rem` },
                mb: 1,
              }}
            >
              I'm <span className="my-name">Micaela Francisco</span>
            </Typography>
            <Typography
              sx={{
                ...nunitoFont,
                fontSize: { xs: `${resize(18)}rem`, lg: `${resize(24)}rem` },
              }}
            >
              {`I am a 3rd year undergraduate student taking Bachelor of Science in Information Technology. 
                I like to build things for the web. Solid and scalable full-stack apps with exceptional user experiences.`}
            </Typography>
            <Box
              sx={{
                my: { xs: 4, lg: 6 },
                display: "flex",
                justifyContent: { xs: "space-evenly", sm: "flex-start" },
              }}
            >
              <Button
                href="https://www.facebook.com/micaelafrancisco13"
                target="_blank"
                variant="outlined"
                endIcon={
                  isSmallScreen === true ? null : <FacebookOutlinedIcon />
                }
                sx={{ mr: { xs: 2 } }}
              >
                {isSmallScreen === true ? <FacebookOutlinedIcon /> : "Facebook"}
              </Button>
              <Button
                href="https://www.linkedin.com/in/micaelafrancisco13/"
                target="_blank"
                variant="outlined"
                endIcon={isSmallScreen === true ? null : <LinkedInIcon />}
              >
                {isSmallScreen === true ? <LinkedInIcon /> : "LinkedIn"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Me;
