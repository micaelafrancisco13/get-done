import React, { useState } from "react";
import { Box } from "@mui/material";
import SideDrawer from "./sideDrawer";
import NavBarIn from "./navBarIn";

const LayoutIn = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerWidth = 285;

  const sxMovedOuterBox = {
    display: "flex",
    justifyContent: isDrawerOpen === true ? "flex-end" : "flex-start",
    width: "100%",
  };

  const sxMovedInnerBox = {
    width: {
      xs: "100%",
      md: isDrawerOpen === true ? `calc(100% - ${drawerWidth}px)` : "100%",
    },
    bgcolor: "#f9f9f9",
    p: 3,
  };

  return (
    <Box>
      <NavBarIn
        label="GetDone"
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <SideDrawer
          sx={{ position: "sticky" }}
          drawerWidth={drawerWidth}
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <Box sx={sxMovedOuterBox}>
          <Box sx={sxMovedInnerBox}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutIn;
