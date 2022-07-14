import React from "react";
import { Box, Typography } from "@mui/material";
import NavBarOut from "./navBarOut";
import { resize } from "./utils/sizing";
import Button from "@mui/material/Button";
import background from "../images/background.png";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  return (
    <Box>
      <NavBarOut />
      <Box
        sx={{
          textAlign: "center",
          pt: { xs: `${resize(96)}rem`, md: `${resize(128)}rem` },
          px: { xs: `${resize(16)}rem` },
          whiteSpace: "pre-line",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: `${resize(30)}rem`,
              sm: `${resize(38)}rem`,
              md: `${resize(48)}rem`,
              lg: `${resize(52)}rem`,
            },
            fontWeight: 600,
          }}
          variant="h1"
        >
          {`Organize your\nwork and life, finally.`}
        </Typography>
        <Typography
          sx={{
            width: {
              xs: "90%",
              md: "57%",
              lg: "42%",
              xl: "32%",
            },
            mt: { xs: `${resize(16)}rem` },
            fontSize: {
              xs: `${resize(16)}rem`,
              sm: `${resize(18)}rem`,
              md: `${resize(19)}rem`,
            },
          }}
          variant="body2"
        >
          {`Become focused, organized, and calm with GetDone. The world’s #1 task manager and to-do list app.`}
        </Typography>
        <Button
          sx={{
            mt: { xs: `${resize(24)}rem` },
            px: { xs: `${resize(16)}rem`, md: `${resize(24)}rem` },
            fontSize: {
              xs: `${resize(15)}rem`,
              sm: `${resize(16)}rem`,
              md: `${resize(18)}rem`,
            },
            py: `${resize(8)}rem`,
            borderRadius: "10px",
            fontWeight: 600,
            textTransform: "none",
          }}
          variant="contained"
          onClick={() => navigate("/developer")}
        >
          View Developer
        </Button>
        <img src={background} className="img-fluid" />
      </Box>
    </Box>
  );
};
