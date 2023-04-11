import { Box } from "@mui/material";
import React from "react";

const CircleColor = ({ color }) => {
  const vacaciones = "#D45BFF";
  const tramite = "#F7FC00;";
  const licencia = "#5BFF62;";
  const diaDeEstudio = "#5BCEFF;";

  return (
    <Box
      sx={{
        background: vacaciones,
        height: 10,
        width: 10,
        borderRadius: 30,
      }}
    />
  );
};

export default CircleColor;
