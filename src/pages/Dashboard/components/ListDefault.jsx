import { Box, Typography } from "@mui/material";
import { boxBody, card, containerCalender, typografy } from "../style";
import ListLicense from "./ListLicenses";
import Boton from "../../../components/Button/Button";

const ListDefault = ({
  array,
  setShowDetailsLicenses,
  showDatailsLicenses,
}) => {
  const widthList = showDatailsLicenses.showProximaLicencia ? 200 : 300;
  return (
    <>
      <Box sx={boxBody}>
        <Typography sx={typografy}>mis solicitudes enviadas</Typography>
        <Box sx={card}>
          {array?.map((item) => (
            <ListLicense
              key={"2" + item}
              onClickCard={() =>
                setShowDetailsLicenses({
                  open: true,
                  userId: 1,
                  showProximaLicencia: false,
                  showDiasDispo: false,
                })
              }
              sx={{ minWidth: widthList }}
            />
          ))}
        </Box>
      </Box>
      {showDatailsLicenses.showProximaLicencia && (
        <Box sx={boxBody}>
          <Typography sx={typografy}>Mis Proximas licencias</Typography>
          <Box sx={card}>
            {array?.map((item) => (
              <ListLicense
                key={"3" + item}
                onClickCard={() => console.log(item)}
                sx={{ minWidth: 200 }}
              />
            ))}
          </Box>
        </Box>
      )}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={boxBody}>
          <Typography sx={typografy}>Quien está ausente?</Typography>
          <Box sx={card}>
            {array?.map((item) => (
              <ListLicense
                key={"3" + item}
                onClickCard={() => console.log(item)}
                withCircleColor={false}
              />
            ))}
          </Box>
        </Box>
        {showDatailsLicenses.showProximaLicencia && (
          <Box
            sx={{
              ...containerCalender,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              p: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#797979",
              }}
            >
              Dias Disponibles
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#F85B5B",
              }}
            >
              25
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};
export default ListDefault;
