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
import { colorCircle } from "../../../utils/colorCircle";

const ListLicense = ({
  onClickCard,
  onClickButtonAccept,
  onClickButtonDecline,
  withCircleColor = true,
  licenceType,
  rangeDate,
  nameUser,
  nameImg,
  sx = {},
}) => {
  return (
    <List sx={{ ...listListLicenses, ...sx }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={nameUser} src={nameImg} />
        </ListItemAvatar>
        <Box sx={containerListLicenses}>
          <Box sx={boxTextListLicenses} onClick={onClickCard}>
            <Typography sx={textPrimaryListLicenses}>{nameUser}</Typography>
            <Typography sx={textSecondaryListLicenses}>{rangeDate}</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {withCircleColor && (
                <CircleColor color={colorCircle(licenceType?.id)} />
              )}
              <Typography sx={textThirdListLicenses}>
                {licenceType?.description}
              </Typography>
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
