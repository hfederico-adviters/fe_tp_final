import { Box, Container, Typography } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import ListCustom from "../../components/ListCustom/ListCustom";
import { boxBody, card, container, typografy } from "./style";
import Calender from "./components/Calender";
import CircleColor from "../../components/CircleColor/CircleColor";

const Dashboard = () => {
  const array = ["card1", "card2", "card3", "card4"];
  const proxFeriado = [
    { date: "24 - Febrero", description: "Carnaval" },
    { date: "25 - Febrero", description: "Carnaval" },
  ];
  return (
    <Layout title={"Inicio"}>
      <Container sx={container}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Calender data={proxFeriado} />
          <Calender data={proxFeriado} />
        </Box>
        <Box sx={boxBody}>
          <Typography sx={typografy}>solicitudes pendientes</Typography>
          <Box sx={card}>
            {array.map((item) => (
              <ListCustom
                key={"2" + item}
                onClickCard={() => console.log(item)}
                onClickButtonAccept={() => console.log("aceptar")}
                onClickButtonDecline={() => console.log("rechazar")}
              />
            ))}
          </Box>
        </Box>
        <Box sx={boxBody}>
          <Typography sx={typografy}>proximas licencias aprobadas</Typography>
          <Box sx={card}>
            {array.map((item) => (
              <ListCustom
                key={"3" + item}
                onClickCard={() => console.log(item)}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};
export default Dashboard;
