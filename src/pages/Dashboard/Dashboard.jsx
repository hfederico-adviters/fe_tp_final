import { Box } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import { boxContainer } from "./style";
import Calender from "./components/Calender";
import { useState } from "react";
import LicenseDetails from "./components/LicenseDetails";
import ListAdministrator from "./components/ListAdm";
import { roles } from "../../contants/roles";
import ListDefault from "./components/ListDefault";
import Boton from "../../components/Button/Button";
import { useProvince } from "../../hook/useDirections";
const Dashboard = () => {
  const {
    data: province,
    isLoading: isLoadingProvince,
    isError: isErrorProvince,
  } = useProvince();

  const rol = "administrator";
  const [showDatailsLicenses, setShowDetailsLicenses] = useState({
    open: false,
    userId: null,
    showProximaLicencia: true,
    showDiasDispo: true,
  });
  const array = ["card1", "card2", "card3", "card4"];
  const proxFeriado = [
    { date: "24 - Febrero", description: "Carnaval" },
    { date: "25 - Febrero", description: "Carnaval" },
  ];
  console.log(province);
  return (
    <Layout title={"Inicio"}>
      {rol !== roles.administrator && (
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Boton name="Crear Nueva Solicitud" color="tertiary" />
        </Box>
      )}
      <Box sx={boxContainer}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Calender data={proxFeriado} />
          <Calender data={proxFeriado} />
        </Box>
        {rol === roles.administrator ? (
          <ListAdministrator
            array={array}
            setShowDetailsLicenses={setShowDetailsLicenses}
          />
        ) : (
          <ListDefault
            array={array}
            setShowDetailsLicenses={setShowDetailsLicenses}
            showDatailsLicenses={showDatailsLicenses}
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
        />
      )}
    </Layout>
  );
};
export default Dashboard;
