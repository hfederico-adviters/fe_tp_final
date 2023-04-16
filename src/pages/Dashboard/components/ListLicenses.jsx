import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {
  boxTextListLicenses,
  listListLicenses,
  textPrimaryListLicenses,
  textSecondaryListLicenses,
  textThirdListLicenses,
  containerListLicenses,
} from "../style";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import CircleColor from "../../../components/CircleColor/CircleColor";

const ListLicense = ({
  onClickCard,
  onClickButtonAccept,
  onClickButtonDecline,
  withCircleColor = true,
  sx = {},
}) => {
  return (
    <List sx={{ ...listListLicenses, ...sx }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Box sx={containerListLicenses}>
          <Box sx={boxTextListLicenses} onClick={onClickCard}>
            <Typography sx={textPrimaryListLicenses}>Jennifer</Typography>
            <Typography sx={textSecondaryListLicenses}>
              25/09 - 31/09
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {withCircleColor && <CircleColor color="red" />}
              <Typography sx={textThirdListLicenses}>vacaciones</Typography>
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
export default ListLicense;
