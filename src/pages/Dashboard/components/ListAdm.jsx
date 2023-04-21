import { Box, Typography } from "@mui/material";
import { boxBody, card, typografy } from "../style";
import ListLicense from "./ListLicenses";
import { putLicense } from "../../../services/licenseService";

const ListAdministrator = ({
  licenceList,
  ListLicenseAproved,
  setShowDetailsLicenses,
}) => {
  console.log(ListLicenseAproved);
  return (
    <>
      <Box sx={boxBody}>
        <Typography sx={typografy}>solicitudes pendientes</Typography>
        <Box sx={card}>
          {licenceList?.map((item) => (
            <ListLicense
              key={"2" + item}
              onClickCard={() =>
                setShowDetailsLicenses({ open: true, userId: item?.id })
              }
              rangeDate={`${item?.startDate} - ${item?.endDate}`}
              nameUser={item?.fkUser?.firstName}
              nameImg={item?.fkUser?.image ? item?.fkUser?.image : "/"}
              licenceType={item?.licenceType}
              onClickButtonAccept={() => {
                putLicense(item?.id, {
                  ...item,
                  licenceStatus: { ...item?.licenceStatus, id: 3 },
                });
              }}
              onClickButtonDecline={() => {
                putLicense(item?.id, {
                  ...item,
                  licenceStatus: { ...item?.licenceStatus, id: 2 },
                });
              }}
            />
          ))}
        </Box>
      </Box>
      <Box sx={boxBody}>
        <Typography sx={typografy}>proximas licencias aprobadas</Typography>
        <Box sx={card}>
          {ListLicenseAproved?.map((item) => (
            <ListLicense
              key={"3" + item}
              onClickCard={() =>
                setShowDetailsLicenses({ open: true, userId: item?.id })
              }
              rangeDate={`${item?.startDate} - ${item?.endDate}`}
              nameUser={item?.fkUser?.firstName}
              nameImg={item?.fkUser?.image ? item?.fkUser?.image : "/"}
              licenceType={item?.licenceType}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
export default ListAdministrator;
