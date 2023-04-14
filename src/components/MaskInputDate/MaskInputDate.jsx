import { Box, Typography } from "@mui/material";
const MaskInputDate = ({ month, day, dayDescription, onClick, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#FFFFFF",
        borderRadius: "8px",
        border: "0.5px solid #797979",
        width: 100,
        height: 80,
      }}
      onClick={onClick}
    >
      <Typography
        sx={{
          display: "flex",
          width: "100%",
          background: "#FF4646",
          justifyContent: "center",
          py: 1,
          display: "flex",
          justifyContent: "center",
          color: "#ffffff",
        }}
      >
        {month}
      </Typography>
      <Box
        sx={{
          display: "flex",
          background: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          {day}
        </Typography>
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          {dayDescription}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};
export default MaskInputDate;
