import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Chip, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
function AvatarLicence({ nameUser, state }) {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        <Avatar alt="Nombre user" src="/static/images/avatar/2.jpg" />
        <Typography variant="subtitle2" sx={{ ml: 1 }}>
          {nameUser}
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="subtitle2">Estado</Typography>
        <Chip
          size="small"
          sx={{
            backgroundColor: "#05CB3C",
            color: "white",
            borderRadius: "16px",
          }}
          label={state}
        />
      </Box>
    </Container>
  );
}
export default AvatarLicence;
