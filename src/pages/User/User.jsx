import React, { useContext, useState } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import { Field, Form } from "react-final-form";
import {
  InputDate,
  InputNumber,
  InputPassword,
  InputText,
} from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import Boton from "../../components/Button/Button";
import SelectCustom from "../../components/SelectCustom/SelectCustom";
import File from "../../components/File/File";
import { postAddUser, putUser } from "../../services/usuariosServices";
import SwitchCustom from "../../components/SwitchCustom/SwitchCustom";
import { strings } from "../../assets/strings/Strings";
import { useParams } from "react-router";
import { useUserDetails } from "../../hook/userHook";
import { AlertCustom } from "../../components/AlertCustom/AlertCustom";
import { AutenticacionContext } from "../../context/AutenticacionProvider";

const User = () => {
  const { idUser } = useParams();
  const { usuario } = useContext(AutenticacionContext);
  const [open, setOpen] = useState(false);
  const {
    data: dataUser,
    isLoading: isLoadingUser,
    isError,
  } = useUserDetails(idUser);
  if (isLoadingUser) {
    return <Typography>Cargando</Typography>;
  }
  if (isError) {
    return <Typography>Error</Typography>;
  }
  console.log();
  return (
    <Layout title={"Gestión de licencias"}>
      <Card sx={{ width: "70%", border: "0.2px solid #797979" }}>
        <Box sx={{ fontSize: "2rem", color: "#FF7B7B", margin: "2rem" }}>
          {Number(idUser) > 0 ? "Mi Perfil" : "Crear usuario"}
        </Box>
        <Form
          onSubmit={(values) => {
            if (Number(idUser) > 0) {
              putUser(idUser, values);
              setOpen(true);
            } else {
              postAddUser(values);
              setOpen(true);
            }
          }}
          initialValues={dataUser}
          validate={(value) => {
            let error = {};
            if (value.password !== value.passwordconf) {
              error.password = "El password no coincide";
              error.passwordconf = "El password no coincide";
            }
            return error;
          }}
          render={({ handleSubmit, values }) => (
            <Box sx={{ margin: "2rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.file.name}
                    component={File}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.firstName.name}
                    component={InputText}
                    label={strings.pageUser.formulario.firstName.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.password.name}
                    component={InputPassword}
                    label={strings.pageUser.formulario.password.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}></Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.lastName.name}
                    component={InputText}
                    label={strings.pageUser.formulario.lastName.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.passwordconf.name}
                    component={InputPassword}
                    label={strings.pageUser.formulario.passwordconf.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.userSupervicer.name}
                    component={SelectCustom}
                    options={[{ value: 1, label: "fede" }]}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.birthday.name}
                    component={InputDate}
                    label={strings.pageUser.formulario.birthday.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.arriveDate.name}
                    component={InputDate}
                    label={strings.pageUser.formulario.arriveDate.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.dni.name}
                    component={InputText}
                    label={strings.pageUser.formulario.dni.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.cuil.name}
                    component={InputText}
                    label={strings.pageUser.formulario.cuil.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}></Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.email.name}
                    component={InputText}
                    label={strings.pageUser.formulario.email.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.cellphone.name}
                    component={InputText}
                    label={strings.pageUser.formulario.cellphone.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}></Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.address.name}
                    component={InputText}
                    label={strings.pageUser.formulario.address.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.addressNumber.name}
                    component={InputNumber}
                    label={strings.pageUser.formulario.addressNumber.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.postalCode.name}
                    component={InputNumber}
                    label={strings.pageUser.formulario.postalCode.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.tower.name}
                    component={InputText}
                    label={strings.pageUser.formulario.tower.label}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.floor.name}
                    component={InputNumber}
                    label={strings.pageUser.formulario.floor.label}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.flat.name}
                    component={InputText}
                    label={strings.pageUser.formulario.flat.label}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.city.name}
                    component={InputText}
                    label={strings.pageUser.formulario.city.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.province.name}
                    component={InputText}
                    label={strings.pageUser.formulario.province.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.country.name}
                    component={InputText}
                    label={strings.pageUser.formulario.country.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={
                      strings.pageUser.formulario.availableVacationsDays.name
                    }
                    component={InputNumber}
                    label={
                      strings.pageUser.formulario.availableVacationsDays.label
                    }
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.availableStudyDays.name}
                    component={InputNumber}
                    label={strings.pageUser.formulario.availableStudyDays.label}
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.administrator.name}
                    component={SwitchCustom}
                    label={strings.pageUser.formulario.administrator.label}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "1rem",
                }}
              >
                <Boton
                  name={strings.pageUser.formulario.button.name}
                  onclick={handleSubmit}
                />
              </Box>
            </Box>
          )}
        />
      </Card>
      <AlertCustom
        open={open}
        title={"Información"}
        message={"Perfil creado con éxito"}
        severity="success"
      />
    </Layout>
  );
};

export default User;
const validar = (valor) => {
  if (!valor) {
    return "Campo requerido";
  }
  return undefined;
};
