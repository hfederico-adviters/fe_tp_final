import { Avatar, Box, ListItemAvatar, Typography } from "@mui/material";
import { body, boxPrincipal, header } from "./style";
import MenuCustom from "../MenuCustom/MenuCustom";
import { MenuNavigation } from "./constants";
const Layout = ({ title, children }) => {
  return (
    <Box sx={boxPrincipal}>
      <Box sx={header}>
        <MenuCustom
          sx={{ color: "#C8C7C7", fontSize: 50 }}
          datos={MenuNavigation}
        />
        <Typography variant="h3">{title}</Typography>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
      </Box>
      <Box sx={body}>{children}</Box>
    </Box>
  );
};
export default Layout;
