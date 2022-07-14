import React from "react";
import { Box, Typography } from "@mui/material";
import { resize } from "./utils/sizing";
import GetDone from "../images/GetDone.png";
import AuthForm from "./common/authForm";
import withHOC from "./withHOC";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

class Signup extends AuthForm {
  state = {
    account: {
      email: "",
      password: "",
    },
    errors: [],
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(8).required().label("Password"),
  };

  // this method varies from one form to another
  doSubmit = () => {
    const { navigate } = this.props;
    navigate("/notes");
    // call the server
    // const email = this.email.current.value;
  };
  render() {
    const { navigate } = this.props;

    const sxBox = {
      "& > :not(style)": { my: 2.5, display: "flex" },
    };

    const sxButton = {
      borderRadius: `${resize(8)}rem`,
      fontSize: `${resize(18)}rem`,
      fontWeight: 600,
      textTransform: "none",
      width: {
        xs: "100%",
      },
    };
    return (
      <>
        <Box sx={{ flexGrow: 1, mb: `${resize(108)}rem` }}>
          <Box
            onClick={() => navigate("/")}
            sx={{ px: 0, py: 1.5, cursor: "pointer" }}
          >
            <img src={GetDone} className="logoName" />
          </Box>
        </Box>
        <Typography
          sx={{
            mb: `${resize(38)}rem`,
            fontSize: {
              xs: `${resize(28)}rem`,
            },
            fontWeight: 600,
          }}
          variant="h1"
        >
          Sign up
        </Typography>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <Box sx={sxBox}>
            {this.renderTextField("email", "field", "Email", 1, false)}
            {this.renderPasswordField("field")}
            {this.renderButton(sxButton, "primary", "Sign up")}
          </Box>
        </form>
        <Typography
          sx={{
            color: "#000000e0",
            fontSize: {
              xs: `${resize(13)}rem`,
            },
            mt: 2,
            mb: 3,
          }}
        >
          {`By continuing with your email address, you agree to GetDone’s `}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Terms of Service
          </span>
          {` and `}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Privacy Policy
          </span>
          .
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              mr: 0.5,
              color: "#000000e0",
              fontSize: {
                xs: `${resize(13)}rem`,
              },
            }}
          >
            Already signed up?
          </Typography>
          <Typography
            component={Link}
            to="/auth/login"
            sx={{
              color: "#000000e0",
              fontSize: {
                xs: `${resize(13)}rem`,
              },
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Go to log in
          </Typography>
        </Box>
      </>
    );
  }
}

export default withHOC(Signup);
