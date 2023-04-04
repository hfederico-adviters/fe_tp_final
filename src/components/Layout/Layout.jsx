import MenuIcon from "@mui/icons-material/Menu";
import { Box, Typography } from "@mui/material";
import { body, boxPrincipal, header, title } from "./style";
const Layout = ({ title, children }) => {
  return (
    <Box sx={boxPrincipal}>
      <Box sx={header}>
        <MenuIcon />
        <Typography variant="h3" sx={title}>
          {title}
        </Typography>
        <MenuIcon />
      </Box>
      <Box sx={body}>{children}</Box>
    </Box>
  );
};
export default Layout;
