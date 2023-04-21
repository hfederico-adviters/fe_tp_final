import { Box } from "@mui/material";
import React from "react";

const CircleColor = ({ color, small = true }) => {
  const sx = small
    ? {
        background: color,
        height: 10,
        width: 10,
        borderRadius: 30,
      }
    : { background: color, height: 20, width: 20, borderRadius: 30 };
  return <Box sx={sx} />;
};

export default CircleColor;
