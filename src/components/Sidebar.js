import React from "react";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import { colorArray } from "../dummyData/dummyData";
import { getRandomColor } from "../utils/getRandomColor";
import "./Sidebar.css";

const drawerWidth = 240;

const Sidebar = ({ activeColors, handleColorDetails }) => {
  const handleClickColor = (color) => {
    console.log("click item");
    handleColorDetails(color);
  };

  const chooseRandomColorForDetails = () => {
    handleColorDetails(getRandomColor(colorArray));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List sx={{ marginTop: 5, marginLeft: -5 }}>
        <Button
          onClick={chooseRandomColorForDetails}
          sx={{ marginRight: -1, marginBottom: 3, marginTop: 2 }}
          variant="contained"
        >
          Random color
        </Button>
        {activeColors.map((color, index) => (
          <ListItem button key={color.title + index}>
            <ListItemIcon></ListItemIcon>
            <ListItemText
              primary={color.title}
              onClick={() => handleClickColor(color)}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
