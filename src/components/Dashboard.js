import React, { useCallback, useState } from "react";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { colorArray } from "../dummyData/dummyData";
import ColorDetailPage from "./ColorDetailPage";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function Dashboard() {
  const [colors, setColors] = useState(colorArray.slice(0, 12));
  const [colorDetails, setColorDetails] = useState();

  const paginatedColors = useCallback(
    (_, value) => {
      const page = 12 * value;
      setColors(colorArray.slice(page - 12, page));
    },
    [setColors, colorArray]
  );

  const handleColorDetails = useCallback(
    (selectedColor) => {
      setColorDetails(selectedColor);
    },
    [setColorDetails]
  );

  const handleClear = useCallback((clear) => {
    setColorDetails(clear);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar onSearchColors={setColors} />
      <Sidebar activeColors={colors} handleColorDetails={handleColorDetails} />
      {!colorDetails && (
        <MainContent
          colorArray={colors}
          count={colorArray.length / 10}
          onChangeColorsPagination={paginatedColors}
        />
      )}
      {colorDetails && (
        <ColorDetailPage
          colorDetails={colorDetails}
          handleClear={handleClear}
        />
      )}
    </Box>
  );
}
