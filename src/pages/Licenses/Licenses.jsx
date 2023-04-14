import Layout from "../../components/Layout/Layout";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import VacationDetails from "../../components/ListHoliday/ListHoliday";
import { boxBody, container, typografy } from "../Dashboard/style";
import AvatarLicence from "../../components/AvatarLicence/Avatarlicence";
import LicenceRangeDate from "../../components/LicenceRangeDate/LicenceRangeDate";
import { Field, Form } from "react-final-form";
import SelectCustom from "../../components/SelectCustom/SelectCustom";
import { InputText } from "../../components/Input/Input";
import FooterLicence from "../../FooterLicence/FooterLicence";
const Licenses = () => {
  return (
    <Layout title={"Carga de Licencias"}>
      <Container sx={container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={8}>
            <Form
              onSubmit={(values) => {
                console.log(values);
              }}
              initialValues={{ description: "Viaje al centro de la Tierra." }}
              render={({ handleSubmit, values }) => (
                <Grid container>
                  <AvatarLicence nameUser="Federico" state="Aun No enviado" />
                  <Divider />
                  <Grid item xs={6}>
                    <Box sx={{ p: 1 }}>
                      <Field
                        name="licenceId"
                        label="Licencia"
                        component={SelectCustom}
                        sx={{ maxWidth: "150px" }}
                        size="large"
                        options={[
                          { value: 1, label: "Vacaciones" },
                          { value: 2, label: "Enfermedad" },
                          { value: 3, label: "Examen" },
                        ]}
                      />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <LicenceRangeDate workDays="8 días laborales" />
                    </Box>
                  </Grid>
                  <Grid item xs={6}></Grid>

                  <Box sx={{ width: "100%", p: 1, mt: 2 }}>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      color="text.secondary"
                    >
                      DESCRIPCIÓN
                    </Typography>
                    <Field
                      name="description"
                      component={InputText}
                      multiline
                      rows={8}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <FooterLicence />
                  </Box>
                </Grid>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={boxBody}>
              <Typography sx={typografy}>Detalle de Vacaciones</Typography>
              <VacationDetails />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Licenses;
