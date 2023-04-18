import Layout from "../../components/Layout/Layout";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import VacationDetails from "../../components/ListHoliday/ListHoliday";
import LicenceRangeDate from "../../components/LicenceRangeDate/LicenceRangeDate";
import { Field, Form } from "react-final-form";
import SelectCustom from "../../components/SelectCustom/SelectCustom";
import { InputText } from "../../components/Input/Input";
import FooterLicence from "../../FooterLicence/FooterLicence";
import {
  boxBodyVacation,
  container,
  gridBodyVacation,
  typografyVacation,
} from "./style";
import UploadFile from "../../components/UploadFile/UploadFile";
import Boton from "../../components/Button/Button";
import AvatarLicense from "../../components/AvatarLicense/Avatarlicense";
const Licenses = () => {
  return (
    <Layout title={"Carga de Licencias"}>
      <Grid container spacing={2} sx={container}>
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          sx={{
            background: "#FFFFFF",
            border: "0.5px solid #797979",
            borderRadius: "8px",
            p: 0,
            mt: 2,
          }}
        >
          <Form
            onSubmit={(values) => {
              console.log(values);
            }}
            initialValues={{ description: "Viaje al centro de la Tierra." }}
            render={({ handleSubmit, values }) => (
              <Box>
                <Grid container>
                  <AvatarLicense
                    nameUser="Federico"
                    state="AUN NO ENVIADO"
                    currentBalance="24"
                  />
                  <Divider />
                  <Grid item xs={6} sx={{ p: 1 }}>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      color="text.secondary"
                    >
                      Tipo de licencia
                    </Typography>
                    <Box sx={{ py: 1 }}>
                      <Field
                        name="licenseId"
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
                      <LicenceRangeDate workDays="8" daysAvailable={"24"} />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <UploadFile />
                  </Grid>

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
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      color="text.secondary"
                      sx={{ ml: 2 }}
                    >
                      Aprobacion a cargo de:
                    </Typography>
                    <FooterLicence />
                  </Box>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "end", m: 2 }}>
                  <Boton name="Solicitar Aprobacion" color={"tertiary"} />
                </Box>
              </Box>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={gridBodyVacation}>
          <Box sx={boxBodyVacation}>
            <Typography sx={typografyVacation}>
              Detalle de Vacaciones
            </Typography>
            <VacationDetails />
            <VacationDetails />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Licenses;
