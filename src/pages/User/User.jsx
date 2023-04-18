import React from "react";
import { Box, Card, Grid } from "@mui/material";
import { Field, Form } from "react-final-form";
import {
  InputDate,
  InputNumber,
  InputPassword,
  InputText,
} from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import Boton from "../../components/Button/Button";
import imagen from "../squirtle.png";
import { initialValues } from "./constants";
import SelectCustom from "../../components/SelectCustom/SelectCustom";
import DatePicker from "react-date-picker";
const User = () => {
  const arrayDeOption = [
    { value: "Pepito", label: "fede" },
    { value: 2, label: "mathi" },
  ];
  return (
    <Layout title={"Gestión de licencias"}>
      <Card sx={{ width: "70%", border: "0.2px solid #797979" }}>
        <Box sx={{ fontSize: "2rem", color: "#FF7B7B", margin: "2rem" }}>
          Mi Perfil
        </Box>
        <Form
          onSubmit={(values) => {
            console.log(values);
          }}
          initialValues={initialValues}
          validate={(values) => {
            let error = {};
            if (!values?.apellido) {
              error.apellido = "Este campo no puede estar vacio";
            }
            return error;
          }}
          render={({ handleSubmit, values }) => (
            <Box sx={{ margin: "2rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <>
                    <img src={imagen} alt="imagen" style={{ width: "8rem" }} />
                  </>
                </Grid>

                <Grid item xs={4}>
                  <Field name="name" component={InputText} label="Nombre" />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="password"
                    component={InputPassword}
                    label="password nuevo"
                  />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <Field
                    name="apellido"
                    component={InputText}
                    label="Apellido"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="passwordconf"
                    component={InputPassword}
                    label="repetir password"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="select"
                    component={SelectCustom}
                    options={[{ value: 1, label: "fede" }]}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="date"
                    component={InputDate}
                    label="Fecha Nacimiento"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="date"
                    component={InputDate}
                    label="Fecha Ingreso"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field name="dni" component={InputNumber} label="DNI" />
                </Grid>
                <Grid item xs={4}>
                  <Field name="cuil" component={InputNumber} label="CUIL" />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <Field
                    name="email"
                    component={InputText}
                    label="Correo electrónico"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="cellphone"
                    component={InputNumber}
                    label="Teléfono"
                  />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <Field name="street" component={InputText} label="Calle" />
                </Grid>
                <Grid item xs={4}>
                  <Field name="number" component={InputNumber} label="Altura" />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="postalcode"
                    component={InputNumber}
                    label="Código Postal"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field name="tower" component={InputNumber} label="Torre" />
                </Grid>
                <Grid item xs={4}>
                  <Field name="floor" component={InputNumber} label="Piso" />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="flat"
                    component={InputText}
                    label="Departamento"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field name="city" component={InputText} label="Ciudad" />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="province"
                    component={InputText}
                    label="Provincia"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field name="country" component={InputText} label="País" />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="holidays"
                    component={InputNumber}
                    label="Días Vacaciones"
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
                <Boton name="Guardar" onclick={handleSubmit} />
              </Box>
            </Box>
          )}
        />
      </Card>
    </Layout>
  );
};

export default User;
