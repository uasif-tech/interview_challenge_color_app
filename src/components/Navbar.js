import React, { useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import debounce from "lodash.debounce";
import { colorArray } from "../dummyData/dummyData";
import logo from "../logo-symbol.svg";

const Navbar = ({ onSearchColors }) => {
  const changeHandler = (event) => {
    const query = event.target.value;
    if (query !== "") {
      const filteredColors = colorArray.filter((color) => {
        return color.title.toLowerCase().includes(query.toLowerCase());
      });

      onSearchColors(filteredColors);
    } else onSearchColors(colorArray.slice(0, 12));
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 1000), []);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "black",
      }}
    >
      <Toolbar>
        <Typography style={{ margin: 10 }} variant="h6" noWrap component="div">
          <img src={logo} />
        </Typography>
        <TextField
          onChange={debouncedChangeHandler}
          sx={{ backgroundColor: "white", borderRadius: 2, marginLeft: "auto" }}
          color="primary"
          label={"Search ..."}
          id="margin-dense"
          margin="dense"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
