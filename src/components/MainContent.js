import React from "react";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import CardComponent from "../generic/CardComponent";
import "./MainContent.css";

const MainContent = ({ colorArray, onChangeColorsPagination, handleColorDetails, count }) => {
  return (
    <div className="main-content">
      <Grid container spacing={3}>
        {colorArray.map((data, index) => {
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
              <CardComponent colorObject={data} handleColorDetails={handleColorDetails} />
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        onChange={onChangeColorsPagination}
        sx={{marginBottom: 5}}
        className="pagination-content"
        count={Math.ceil(count)}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default MainContent;
