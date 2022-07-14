import React from "react";
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
import GetDone from "../images/GetDone.png";
import { Link } from "react-router-dom";
import AuthForm from "./common/authForm";

class ResetPassword extends AuthForm {
  state = {
    account: {
      email: "",
    },
    errors: [],
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
  };

  // this method varies from one form to another
  doSubmit = () => {
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
        <Box
          sx={{
            flexGrow: 1,
            mb: `${resize(108)}rem`,
          }}
        >
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
          Forgot your password?
        </Typography>
        <Typography
          sx={{
            color: (theme) => theme.palette.authText.main,
            fontSize: {
              xs: `${resize(13)}rem`,
            },
            "&:hover": {
              color: (theme) => theme.palette.authText.main,
            },
          }}
        >
          To reset your password, please enter the email address of your Todoist
          account.
        </Typography>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <Box sx={sxBox}>
            {this.renderTextField("email", "field", "Email", 1, false)}
            {this.renderButton(sxButton, "primary", "Reset my password")}
          </Box>
        </form>
        <Typography
          component={Link}
          to="/auth/login"
          sx={{
            color: (theme) => theme.palette.authText.main,
            fontSize: {
              xs: `${resize(13)}rem`,
            },
            textDecoration: "underline",
            cursor: "pointer",
            "&:hover": {
              color: (theme) => theme.palette.authText.main,
            },
          }}
        >
          Go to log in
        </Typography>
      </>
    );
  }
}

export default withHOC(ResetPassword);
