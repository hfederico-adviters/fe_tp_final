import { Box, Container, Grid, Typography } from "@mui/material";
import Layout from "../../components/Layout/Layout";
import ListCustom from "../../components/ListCustom/ListCustom";
import { boxBody, card, container, typografy } from "./style";

const Dashboard = () => {
  const array = [1, 2, 3, 4, 5];
  return (
    <Layout title={"Inicio"}>
      <Container sx={container}>
        <Box sx={boxBody}>
          <Typography sx={typografy}></Typography>
          <Box sx={card}>
            {array.map((item) => (
              <ListCustom key={"1" + item} onClick={() => console.log(item)} />
            ))}
          </Box>
        </Box>
        <Box sx={boxBody}>
          <Typography sx={typografy}>solicitudes pendientes</Typography>
          <Box sx={card}>
            {array.map((item) => (
              <ListCustom key={"2" + item} onClick={() => console.log(item)} />
            ))}
          </Box>
        </Box>
        <Box sx={boxBody}>
          <Typography sx={typografy}>proximas licencias aprobadas</Typography>
          <Box sx={card}>
            {array.map((item) => (
              <ListCustom key={"3" + item} onClick={() => console.log(item)} />
            ))}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};
export default Dashboard;
