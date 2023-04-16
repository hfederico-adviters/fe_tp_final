import { Box, Typography } from "@mui/material";
import { boxBody, card, typografy } from "../style";
import ListLicense from "./ListLicenses";

const ListAdministrator = ({ array, setShowDetailsLicenses }) => {
  return (
    <>
      <Box sx={boxBody}>
        <Typography sx={typografy}>solicitudes pendientes</Typography>
        <Box sx={card}>
          {array?.map((item) => (
            <ListLicense
              key={"2" + item}
              onClickCard={() =>
                setShowDetailsLicenses({ open: true, userId: 1 })
              }
              onClickButtonAccept={() => console.log("aceptar")}
              onClickButtonDecline={() => console.log("rechazar")}
            />
          ))}
        </Box>
      </Box>
      <Box sx={boxBody}>
        <Typography sx={typografy}>proximas licencias aprobadas</Typography>
        <Box sx={card}>
          {array?.map((item) => (
            <ListLicense
              key={"3" + item}
              onClickCard={() => console.log(item)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
export default ListAdministrator;
