import { Box } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import { boxContainer } from "./style";
import Calender from "./components/Calender";
import { useContext, useState } from "react";
import LicenseDetails from "./components/LicenseDetails";
import ListAdministrator from "./components/ListAdm";
import { roles } from "../../contants/roles";
import ListDefault from "./components/ListDefault";
import Boton from "../../components/Button/Button";
import { useProvince } from "../../hook/useDirections";
import CalenderWeather from "./components/CalenderWeather";
import { AutenticacionContext } from "../../context/AutenticacionProvider";
import { useUserDetails } from "../../hook/userHook";
import { useLicense, useLicenseDetails } from "../../hook/useLicense";
import { putLicense } from "../../services/licenseService";
const Dashboard = () => {
  const { usuario } = useContext(AutenticacionContext);
  const rol = usuario?.userRol;
  const [showDatailsLicenses, setShowDetailsLicenses] = useState({
    open: false,
    userId: null,
    showProximaLicencia: true,
    showDiasDispo: true,
  });
  const {
    data: dataUser,
    isLoading: isLoadingUser,
    isError: isErrorDateUser,
  } = useUserDetails(usuario?.id);
  const {
    data: licenseDetails,
    isLoading: isLoadingLicenseDetails,
    isError: isErrorDateLicenseDetails,
  } = useLicenseDetails(showDatailsLicenses?.userId);
  const {
    data: listLicense,
    isLoading: isLoadingListLicense,
    isError: isErrorDateListLicense,
  } = useLicense();
  if (isLoadingUser || isLoadingLicenseDetails || isLoadingListLicense) {
    return <Box>Loading</Box>;
  }
  if (isErrorDateUser || isErrorDateLicenseDetails || isErrorDateListLicense) {
    return <Box>Error</Box>;
  }
  const array = ["card1", "card2", "card3", "card4"];
  const proxFeriado = [
    { date: "24 - Febrero", description: "Carnaval" },
    { date: "25 - Febrero", description: "Carnaval" },
  ];

  return (
    <Layout title={"Inicio"}>
      {rol !== roles.administrator && (
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Boton name="Crear Nueva Solicitud" color="tertiary" />
        </Box>
      )}
      <Box sx={boxContainer}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CalenderWeather />
          {/* <Calender data={proxFeriado} /> */}
          <Calender data={proxFeriado} />
        </Box>
        {rol === roles.administrator ? (
          <ListAdministrator
            licenceList={listLicense?.filter(
              (license) => license?.licenceStatus?.id === 1
            )}
            ListLicenseAproved={listLicense?.filter(
              (license) => license?.licenceStatus?.id === 3
            )}
            setShowDetailsLicenses={setShowDetailsLicenses}
          />
        ) : (
          <ListDefault
            licenceList={dataUser?.licenceList.filter(
              (license) => license?.licenceStatus?.id !== 3
            )}
            licenceListAproved={dataUser?.licenceList.filter(
              (license) => license?.licenceStatus?.id === 3
            )}
            nameUser={dataUser?.firstName}
            nameImg={dataUser?.image ? dataUser?.image : "/"}
            setShowDetailsLicenses={setShowDetailsLicenses}
            showDatailsLicenses={showDatailsLicenses}
            availableVacationsDays={dataUser?.availableVacationsDays}
          />
        )}
      </Box>
      {showDatailsLicenses.open && (
        <LicenseDetails
          onClose={() =>
            setShowDetailsLicenses({
              open: false,
              userId: null,
              showProximaLicencia: true,
              showDiasDispo: true,
            })
          }
          startDate={licenseDetails?.startDate}
          endDate={licenseDetails?.endDate}
          workDays={"8"}
          nameUser={licenseDetails?.fkUser?.firstName}
          description={licenseDetails.description}
          listUserMissing={listLicense}
          isAdmin={""}
        />
      )}
    </Layout>
  );
};
export default Dashboard;
