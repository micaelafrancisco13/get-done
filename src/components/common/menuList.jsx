import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const MenuList = ({ data, isDrawerOpen, setIsDrawerOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const sxList = {
    py: 30 / 8,
    pl: 35 / 8,
    pr: 1,
  };

  const sxListItemButton = {
    px: 0,
    py: 0.5,
  };

  return (
    <List sx={sxList}>
      {data.map((item) => (
        <ListItemButton
          selected={location.pathname === item.path}
          key={item._id}
          onClick={() => {
            navigate(item.path);
            {
              isSmallScreen && setIsDrawerOpen(!isDrawerOpen);
            }
          }}
          sx={sxListItemButton}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default MenuList;
