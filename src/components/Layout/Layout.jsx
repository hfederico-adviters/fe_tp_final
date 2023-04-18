import { Avatar, Box, Typography } from "@mui/material";
import { body, boxPrincipal, header } from "./style";
import MenuCustom from "../MenuCustom/MenuCustom";
import { MenuNavigation, MenuNotification } from "./constants";
import { useContext } from "react";
import { AutenticacionContext } from "../../context/AutenticacionProvider";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Layout = ({ title, children }) => {
  const { setUsuario, usuario } = useContext(AutenticacionContext);
  return (
    <Box sx={boxPrincipal}>
      <Box sx={header}>
        <MenuCustom
          sx={{ color: "#C8C7C7", fontSize: 50 }}
          datos={MenuNavigation}
        />
        <Typography variant="h3">{title}</Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <MenuCustom
            badge={true}
            datos={MenuNotification}
            IconCustom={NotificationsIcon}
            notifications={3}
            sx={{ color: "#C8C7C7", fontSize: 30 }}
          />
          <MenuCustom
            sx={{ borderRadius: 0 }}
            datos={[{ name: "Mi pefil", href: `/user/${usuario?.id}` }]}
            IconCustom={Avatar}
            signOut={() => setUsuario(null)}
          />
        </Box>
      </Box>
      <Box sx={body}>{children}</Box>
    </Box>
  );
};
export default Layout;
