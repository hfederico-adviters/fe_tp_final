import Layout from "../../components/Layout/Layout";
import { Box, Grid, Typography } from "@mui/material";
import { boxBody, container } from "../Dashboard/style";
import ListEnabledUser from "../../components/ListEnabledUser/ListEnableduser";
import { useUser } from "../../hook/userHook";
import Boton from "../../components/Button/Button";

const EnabledUser = () => {
  const { data, isLoading, isError } = useUser();
  if (isLoading) {
    return <Typography>Cargandooo</Typography>;
  }
  if (isError) {
    return <Typography>error</Typography>;
  }
  console.log(data);
  return (
    <Layout title={""}>
      {/* <container sx={container}> */}

      <Grid container spacing={2}>
        <Grid
          item
          xs={9}
          sx={{ border: "1px solid gray", width: "100%", height: "90vh" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
            }}
          >
            <h1 style={{ color: "#FFA2A2" }}>Usuarios Habilitados</h1>
            <Boton
              name={"Crear usuario"}
              color="tertiary"
              sx={{ maxHeight: "1.5rem", border: "round" }}
            />
          </Box>
          <Box>
            <ListEnabledUser data={data} />
          </Box>

          {/* <Grid item xs={3} sx={{ border: "1px solid black" }}></Grid> */}
        </Grid>
      </Grid>
      {/* </container> */}
    </Layout>
  );
};

export default EnabledUser;
