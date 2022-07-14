import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { resize } from "./utils/sizing";

const NavBarIn = ({ label, isDrawerOpen, setIsDrawerOpen }) => {
  const navigate = useNavigate();

  const sxIconButton = {
    mr: {
      md: 2,
    },
  };
  const sxButton = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
  };
  const sxAppBar = {
    fontFamily: (theme) => theme.typography.nunito,
    zIndex: (theme) => theme.zIndex.drawer + 1,
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={sxAppBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={sxIconButton}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={sxButton}>
            <Box>
              <Typography
                sx={{
                  p: 0,
                  fontSize: { xs: `${resize(14)}rem`, md: `${resize(16)}rem` },
                }}
                color="inherit"
              >
                {label}
              </Typography>
            </Box>
            <Box>
              <Button
                onClick={() => navigate("/")}
                sx={{
                  p: 0,
                  cursor: "pointer",
                  fontSize: { xs: `${resize(13)}rem`, md: `${resize(15)}rem` },
                  textTransform: "none",
                }}
                color="inherit"
              >
                Log out
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBarIn;
