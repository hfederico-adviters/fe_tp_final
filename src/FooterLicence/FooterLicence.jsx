import Avatar from "@mui/material/Avatar";
import { Container, Typography } from "@mui/material";

const FooterLicence = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Typography sx={{ ml: 1, color: "red" }}>LIONEL SCALONI</Typography>
    </Container>
  );
};
export default FooterLicence;
