import Avatar from "@mui/material/Avatar";
import { Typography, Box } from "@mui/material";

const FooterLicence = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        m: 1,
      }}
    >
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Typography sx={{ ml: 1, color: "red" }}>LIONEL SCALONI</Typography>
    </Box>
  );
};
export default FooterLicence;
