import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Chip, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { boxAvatar, boxChip, chip, container, typografy } from "./style";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
function AvatarLicense({ nameUser, state, currentBalance, onClose }) {
  return (
    <Box className="container" sx={container}>
      <Box sx={boxAvatar}>
        <Avatar alt="Nombre user" src="/static/images/avatar/2.jpg" />
        <Typography variant="subtitle2" sx={typografy}>
          {nameUser}
        </Typography>
      </Box>
      {currentBalance && (
        <Box sx={boxAvatar}>
          <Typography variant="caption" sx={typografy}>
            Balance actual:
          </Typography>
          <Typography variant="h5" sx={typografy}>
            {`${currentBalance} dias`}
          </Typography>
        </Box>
      )}
      {onClose && (
        <HighlightOffTwoToneIcon
          sx={{
            color: "#FF8B8B",
            cursor: "pointer",
          }}
          onClick={onClose}
        />
      )}
      {state && (
        <Box sx={boxChip}>
          <Typography variant="subtitle2">Estado</Typography>
          <Chip size="small" sx={chip} label={state} />
        </Box>
      )}
    </Box>
  );
}
export default AvatarLicense;
