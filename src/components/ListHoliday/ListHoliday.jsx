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

const VacationDetails = () => {
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
          secondary={
            <Typography sx={textSecondary}>Licencia Medica</Typography>
          }
        />

        <ListItemText
          primary={<Typography sx={textPrimary}>Dias Tomados: 1</Typography>}
          secondary={<Typography sx={dateStyle}>12/01 - 13/01</Typography>}
        />
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
      </ListItem>
      <Divider />
      <ListItem sx={listItemGreen}>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography sx={textPrimary}>Periodo 2022</Typography>
              <Typography variant="subtitle2" sx={{ color: "#888" }}>
                Dias Totales: 21
              </Typography>
            </React.Fragment>
          }
          secondary={<Typography sx={textSecondary}>Vacaciones</Typography>}
        />
        <ListItemText
          primary={<Typography sx={textPrimary}>Dias Tomados: 1</Typography>}
        />
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
      </ListItem>
      <Divider />
      <ListItem sx={listItemRed}>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography sx={textPrimary}>Periodo 2021</Typography>
              <Typography variant="subtitle2" sx={{ color: "#888" }}>
                Dias Totales: 10
              </Typography>
            </React.Fragment>
          }
          secondary={<Typography sx={textSecondary}>Vacaciones</Typography>}
        />
        <ListItemText
          primary={<Typography sx={textPrimary}>Dias Tomados: 3</Typography>}
        />
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
      </ListItem>
      <Divider />
      <ListItem sx={listItemBlue}>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography sx={textPrimary}>Dia de estudio</Typography>
              <Typography variant="subtitle2" sx={{ color: "#888" }}>
                Dias Totales: 2
              </Typography>
            </React.Fragment>
          }
          secondary={<Typography sx={textSecondary}>Vacaciones</Typography>}
        />
        <ListItemText
          primary={<Typography sx={textPrimary}>Dias Tomados: 3</Typography>}
          secondary={<Typography sx={dateStyle}>19/10 - 20/10</Typography>}
        />
      </ListItem>
    </List>
  );
};

export default VacationDetails;
