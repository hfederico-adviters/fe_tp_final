import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import {
  list,
  textPrimary,
  textSecondary,
  dateStyle,
  listItemBlue,
  listItemGreen,
  listItemRed,
} from "../ListCustom/style";
import EditIcon from "@mui/icons-material/Edit";
import ListItemIcon from "@mui/material/ListItemIcon";
//import {dateStyle} from '../../components/ListHoliday/style';

const VacationDetails = ({ typeLicense, rangeDate, onClick }) => {
  return (
    <List sx={list}>
      <ListItem sx={listItemBlue}>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography sx={textPrimary}>Dia de estudio</Typography>
              <Typography variant="subtitle2" sx={{ color: "#888" }}>
                Dias Totales: 1
              </Typography>
            </React.Fragment>
          }
          secondary={<Typography sx={textSecondary}>{typeLicense}</Typography>}
        />
        <ListItemText
          primary={<Typography sx={textPrimary}>Dias Tomados: 1</Typography>}
          secondary={<Typography sx={dateStyle}>{rangeDate}</Typography>}
        />
        <ListItemIcon>
          <EditIcon onClick={onClick} />
        </ListItemIcon>
      </ListItem>
      <Divider />
    </List>
  );
};

export default VacationDetails;
