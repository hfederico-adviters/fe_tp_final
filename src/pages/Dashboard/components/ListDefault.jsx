import { Box, Typography } from "@mui/material";
import { boxBody, card, containerCalender, typografy } from "../style";
import ListLicense from "./ListLicenses";
import Boton from "../../../components/Button/Button";

const ListDefault = ({
  licenceList,
  licenceListAproved,
  setShowDetailsLicenses,
  showDatailsLicenses,
  availableVacationsDays,
  nameUser,
  nameImg,
}) => {
  const widthList = showDatailsLicenses.showProximaLicencia ? 200 : 300;
  return (
    <>
      <Box sx={boxBody}>
        <Typography sx={typografy}>mis solicitudes enviadas</Typography>
        <Box sx={card}>
          {licenceList?.map((item) => (
            <ListLicense
              key={"2" + item}
              onClickCard={() =>
                setShowDetailsLicenses({
                  open: true,
                  userId: item?.id,
                  showProximaLicencia: false,
                  showDiasDispo: false,
                })
              }
              licenceType={item?.licenceType}
              rangeDate={`${item?.startDate} - ${item?.endDate}`}
              nameUser={nameUser}
              nameImg={nameImg}
              sx={{ minWidth: widthList }}
            />
          ))}
        </Box>
      </Box>
      {showDatailsLicenses.showProximaLicencia && (
        <Box sx={boxBody}>
          <Typography sx={typografy}>Mis Proximas licencias</Typography>
          <Box sx={card}>
            {licenceListAproved?.map((item) => (
              <ListLicense
                key={"3" + item}
                onClickCard={() =>
                  setShowDetailsLicenses({
                    open: true,
                    userId: item?.id,
                    showProximaLicencia: false,
                    showDiasDispo: false,
                  })
                }
                sx={{ minWidth: 200 }}
                rangeDate={`${item?.startDate} - ${item?.endDate}`}
                nameUser={nameUser}
                nameImg={nameImg}
                licenceType={item?.licenceType}
              />
            ))}
          </Box>
        </Box>
      )}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={boxBody}>
          <Typography sx={typografy}>Quien está ausente?</Typography>
          <Box sx={card}>
            {[].map((item) => (
              <ListLicense
                key={"3" + item}
                onClickCard={() => console.log(item)}
                withCircleColor={false}
                rangeDate={`${item?.startDate} - ${item?.endDate}`}
                licenceType={item?.licenceType}
                nameUser={nameUser}
                nameImg={nameImg}
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
              {availableVacationsDays}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};
export default ListDefault;
