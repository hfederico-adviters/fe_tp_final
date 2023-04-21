import Layout from "../../components/Layout/Layout";
import { Box, Divider, Grid, Typography } from "@mui/material";
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
import AvatarLicense from "../../components/AvatarLicence/Avatarlicence";
import { convertDateAAAAMMDD } from "../../utils/convertDateAAAAMMDD";
import { useLicenseDetails, useTypeLicense } from "../../hook/useLicense";
import { AutenticacionContext } from "../../context/AutenticacionProvider";
import { useContext, useState } from "react";
import { useUserDetails } from "../../hook/userHook";
import { postLicense, putLicense } from "../../services/licenseService";
const Licenses = () => {
  const [licenseId, setLicenseId] = useState(null);
  const { usuario } = useContext(AutenticacionContext);
  const {
    data: listTypeLicense,
    isLoading: isLoadingListTypeLicense,
    isError: isErrorListTypeLicense,
  } = useTypeLicense();
  const {
    data: dataUser,
    isLoading: isLoadingUser,
    isError: isErrorDateUser,
  } = useUserDetails(usuario?.id);
  const {
    data: licenseDetails,
    isLoading: isLoadingLicenseDetails,
    isError: isErrorDateLicenseDetails,
  } = useLicenseDetails(licenseId);

  if (isLoadingUser || isLoadingListTypeLicense || isLoadingLicenseDetails) {
    return <Box>Loading</Box>;
  }
  if (isErrorDateUser || isErrorListTypeLicense || isErrorDateLicenseDetails) {
    return <Box>Error</Box>;
  }
  console.log(licenseDetails);
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
              const body = {
                ...values,
                endDate: convertDateAAAAMMDD(values?.endDate),
                startDate: convertDateAAAAMMDD(values?.startDate),
                fkUserSupervice: {
                  id: dataUser?.userSupervicer,
                },
                fkUser: {
                  id: dataUser?.id,
                },
                licenceStatus: { id: 1 },
              };
              if (licenseId) {
                putLicense(licenseId, {
                  ...body,
                  licenceStatus: licenseDetails.licenceStatus,
                });
              } else {
                console.log("crear");
                postLicense(body);
              }
            }}
            initialValues={licenseDetails}
            render={({ handleSubmit, values }) => (
              <Box>
                <Grid container>
                  ?
                  <AvatarLicense
                    nameUser={dataUser.firstName}
                    state={
                      licenseDetails?.licenceStatus?.description
                        ? licenseDetails?.licenceStatus?.description
                        : "AUN NO ENVIADO"
                    }
                    currentBalance={dataUser.availableVacationsDays}
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
                        name="licenceType.id"
                        label="Licencia"
                        component={SelectCustom}
                        sx={{ maxWidth: "150px" }}
                        size="large"
                        options={listTypeLicense.map((typeLicense) => {
                          return {
                            value: typeLicense?.id,
                            label: typeLicense?.description,
                          };
                        })}
                      />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <LicenceRangeDate
                        workDays="8"
                        daysAvailable={dataUser?.availableVacationsDays}
                      />
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
                    <FooterLicence
                      nameUser={dataUser?.userSupervicerFirstNameUser}
                      img={dataUser.userSupervicerFirstImage}
                    />
                  </Box>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "end", m: 2 }}>
                  <Boton
                    name="Solicitar Aprobacion"
                    onclick={handleSubmit}
                    color={"tertiary"}
                  />
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
            {dataUser.licenceList?.map((license) => (
              <VacationDetails
                typeLicense={license?.licenceType?.description}
                rangeDate={`${license?.startDate} - ${license?.endDate}`}
                onClick={() =>
                  setLicenseId(licenseId === license?.id ? null : license?.id)
                }
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Licenses;
