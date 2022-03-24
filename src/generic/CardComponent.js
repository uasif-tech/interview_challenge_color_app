import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardComponent = ({ colorObject, height, handleColorDetails }) => {
  return (
    <Card
      onClick={() => handleColorDetails(colorObject)}
      sx={{
        maxWidth: height ? "100%" : 250,
        marginTop: 5,
        borderRadius: 2,
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        style={{ backgroundColor: colorObject.backgroundColor }}
        height={height || "140"}
      />
      <CardContent>
        <Typography
          sx={{ marginRight: height ? "100%" : 40 }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {colorObject.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
