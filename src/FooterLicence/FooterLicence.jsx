import Avatar from "@mui/material/Avatar";
import { Typography, Box } from "@mui/material";

const FooterLicence = ({ nameUser, img }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        m: 1,
      }}
    >
      <Avatar alt={nameUser} src={img ? img : "/"} />
      <Typography sx={{ ml: 1, color: "red" }}>{nameUser}</Typography>
    </Box>
  );
};
export default FooterLicence;
