import React, { Component } from "react";
import { Box, Drawer } from "@mui/material";
import MenuList from "./common/menuList";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { styled } from "@mui/system";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

class SideDrawer extends Component {
  render() {
    const { drawerWidth, isDrawerOpen, setIsDrawerOpen } = this.props;
    const listItems = [
      {
        _id: "6c13ca3eeb7f6fbccd471818",
        name: "My notes",
        icon: <SubjectOutlinedIcon color="secondary" />,
        path: "/notes",
      },
      {
        _id: "6c13ca3eeb7f6fbccd471814",
        name: "Create a new note",
        icon: <AddCircleOutlinedIcon color="secondary" />,
        path: "/notes/new",
      },
    ];
    const paperProps = {
      sx: {
        width: {
          xs: "100%",
          sm: drawerWidth,
        },
      },
    };

    return (
      <Box>
        <Drawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          variant="persistent"
          PaperProps={paperProps}
        >
          <Offset />
          <MenuList
            data={listItems}
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </Drawer>
      </Box>
    );
  }
}

export default ({ drawerWidth, isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <SideDrawer
      drawerWidth={drawerWidth}
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}
    />
  );
};
