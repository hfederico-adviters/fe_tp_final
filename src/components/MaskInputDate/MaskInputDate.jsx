import { Box, Typography } from "@mui/material";
const MaskInputDate = ({ month, day, dayDescription, onClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#FFFFFF",
        borderRadius: "8px",
        border: "0.5px solid #797979",
        width: 120,
        height: 90,
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
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          variant="body3"
        >
          {day}
        </Typography>
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          variant="body3"
        >
          {dayDescription}
        </Typography>
      </Box>
    </Box>
  );
};
export default MaskInputDate;
