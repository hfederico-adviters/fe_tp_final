import { Box } from "@mui/material";
import React from "react";

const CircleColor = ({ color, small = true }) => {
  const vacaciones = "#D45BFF";
  const tramite = "#F7FC00;";
  const licencia = "#5BFF62;";
  const diaDeEstudio = "#5BCEFF;";
  const sx = small
    ? {
        background: vacaciones,
        height: 10,
        width: 10,
        borderRadius: 30,
      }
    : { background: tramite, height: 20, width: 20, borderRadius: 30 };
  return <Box sx={sx}/>;
};

export default CircleColor;
