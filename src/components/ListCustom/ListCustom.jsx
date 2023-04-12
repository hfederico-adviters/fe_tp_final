import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {
  boxText,
  list,
  textPrimary,
  textSecondary,
  textThird,
  container,
} from "./style";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import CircleColor from "../CircleColor/CircleColor";

const ListCustom = ({
  onClickCard,
  onClickButtonAccept,
  onClickButtonDecline,
}) => {
  return (
    <List sx={list}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Box sx={container}>
          <Box sx={boxText} onClick={onClickCard}>
            <Typography sx={textPrimary}>Jennifer</Typography>
            <Typography sx={textSecondary}>25/09 - 31/09</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CircleColor color="red" />
              <Typography sx={textThird}>vacaciones</Typography>
            </Box>
          </Box>
          {onClickButtonAccept && onClickButtonDecline && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CheckCircleIcon
                sx={{ color: "#86FF73" }}
                onClick={onClickButtonAccept}
              />
              <HighlightOffTwoToneIcon
                sx={{
                  color: "#FF8B8B",
                }}
                onClick={onClickButtonDecline}
              />
            </Box>
          )}
        </Box>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};
export default ListCustom;
