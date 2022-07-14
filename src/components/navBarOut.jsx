import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { resize } from "./utils/sizing";
import GetDone from "../images/GetDone.png";
import logo from "../images/logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBarOut = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const sxNavBarOut = {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
  };
  const sxAppBar = {
    bgcolor: "white",
  };
  const sxNavLink = {
    py: 0,
    px: `${resize(16)}rem`,
    textTransform: "none",
    color: "#575757",
    minHeight: {
      xs: "48px",
      md: "64px",
    },
    fontSize: {
      xs: `${resize(14)}rem`,
      sm: `${resize(15)}rem`,
      md: `${resize(16)}rem`,
    },
  };
  const sxNavLinkContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: 2,
    "&:hover": {
      color: "primary.main",
    },
  };

  return (
    <Container fixed sx={{ px: 0 }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position="sticky" sx={sxAppBar}>
          <Toolbar>
            <Box sx={sxNavBarOut}>
              <Box
                onClick={() => navigate("/")}
                sx={{ px: 0, py: 1.5, cursor: "pointer" }}
              >
                <img
                  src={isSmallScreen === true ? logo : GetDone}
                  className="brand"
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  onClick={() => navigate("/auth/login")}
                  sx={sxNavLinkContainer}
                >
                  <Button sx={sxNavLink}>Log in</Button>
                </Box>
                <Box
                  onClick={() => navigate("/auth/signup")}
                  sx={sxNavLinkContainer}
                >
                  <Button sx={sxNavLink}>Sign up</Button>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default NavBarOut;
