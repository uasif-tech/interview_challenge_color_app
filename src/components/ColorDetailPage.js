import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardComponent from "../generic/CardComponent";
import "./ColorDetailPage.css";

const ColorDetailPage = ({ colorDetails, handleClear }) => {
  const handleClearDetails = () => {
    handleClear(false);
  };

  return (
    <div className="detail-content-container">
      <CardComponent colorObject={colorDetails} height={500} />
      <Grid container spacing={4}>
        {colorDetails.shades.map((data, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              key={data.title + index}
            >
              <CardComponent colorObject={data} />
            </Grid>
          );
        })}
      </Grid>
      <Button
        sx={{ marginTop: 5 }}
        onClick={handleClearDetails}
        variant="contained"
      >
        CLEAR
      </Button>
    </div>
  );
};

export default ColorDetailPage;
