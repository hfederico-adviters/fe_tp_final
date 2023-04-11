import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { boxText, list, textPrimary, textSecondary, textThird } from "./style";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
const ListCustom = ({ onClick }) => {
  return (
    <List sx={list} onClick={onClick}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={boxText}>
            <Typography sx={textPrimary}>Jennifer</Typography>
            <Typography sx={textSecondary}>25/09 - 31/09</Typography>
            <Typography sx={textThird}>vacaciones</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CheckCircleIcon color="success" />
            <DoNotDisturbOnIcon color="error" />
          </Box>
        </Box>
      </ListItem>

      <Divider variant="inset" component="li" />
    </List>
  );
};
export default ListCustom;
