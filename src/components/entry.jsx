import React, { Component } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../images/logo.png";
import withHOC from "./withHOC";
import { resize } from "./utils/sizing";
import Joi from "joi-browser";
import Grid from "@mui/material/Grid";
import Login from "./login";
import authDisplay from "../images/authDisplay.png";
import ResetPassword from "./resetPassword";
import Signup from "./signup";

class Entry extends Component {
  render() {
    const { authId, isExtraSmallScreen } = this.props;

    const sxImage = { display: "flex", alignItems: "center" };
    return (
      <Container maxWidth="md" sx={{ px: 4 }}>
        <Grid container spacing={0}>
          <Grid sx={{ p: { sm: 2 } }} item xs={12} sm={6}>
            {authId === "login" && <Login />}
            {authId === "signup" && <Signup />}
            {authId === "password" && <ResetPassword />}
          </Grid>
          <Box
            item
            component={Grid}
            xs={12}
            sm={6}
            display={isExtraSmallScreen && "none"}
            sx={!isExtraSmallScreen && sxImage}
          >
            <img src={authDisplay} class="img-fluid" alt="Responsive image" />
          </Box>
        </Grid>
      </Container>
    );
  }
}

export default withHOC(Entry);
