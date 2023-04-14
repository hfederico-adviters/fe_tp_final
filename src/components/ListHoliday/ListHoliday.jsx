import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import ListItemIcon from "@mui/material/ListItemIcon";
import { dateStyle, list, listItemBlue, textPrimary } from "./style";
// import {dateStyle} from '../../components/ListHoliday/style';

const VacationDetails = () => {
  return (
    <List sx={list}>
      <ListItem sx={listItemBlue}>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography variant="body2">Dia de estudio</Typography>
              <Typography sx={textPrimary}>Dias Totales: 1</Typography>
            </React.Fragment>
          }
          secondary={<Typography>Licencia Medica</Typography>}
        />
        <ListItemText
          primary={<Typography sx={textPrimary}>Dias Tomados: 1</Typography>}
          secondary={<Typography sx={dateStyle}>12/01 - 13/01</Typography>}
        />
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
      </ListItem>
    </List>
  );
};

export default VacationDetails;
