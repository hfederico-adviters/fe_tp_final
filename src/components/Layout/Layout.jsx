import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Box, ListItemAvatar, Typography } from "@mui/material";
import { body, boxPrincipal, header} from "./style";
const Layout = ({ title, children }) => {
  return (
    <Box sx={boxPrincipal}>
      <Box sx={header}>
        <MenuIcon />
        <Typography variant="h3" sx={title}>
          {title}
        </Typography>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
      </Box>
      <Box sx={body}>{children}</Box>
    </Box>
  );
};
export default Layout;
