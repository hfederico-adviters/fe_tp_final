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
import { postAddUser } from "../../services/usuariosServices";
const User = () => {
  const arrayDeOption = [
    { value: "Pepito", label: "fede" },
    { value: 2, label: "mathi" },
  ];
  const validar = (valor) =>{
    if(!valor){
      return "Campo requerido";
    } return undefined;
  }
  return (
    <Layout title={"Gestión de licencias"}>
      <Card sx={{ width: "70%", border: "0.2px solid #797979" }}>
        <Box sx={{ fontSize: "2rem", color: "#FF7B7B", margin: "2rem" }}>
          Mi Perfil
        </Box>
        <Form
          onSubmit={(values) => {
            postAddUser(values);
            console.log(values);
          }}
          initialValues={initialValues}
          
          render={({ handleSubmit, values }) => (
            <Box sx={{ margin: "2rem" }}>
              
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <>
                    <img src={imagen} alt="imagen" style={{ width: "8rem" }} />
                  </>
                </Grid>
                <Grid item xs={4}>
                  <Field name="username" component={InputText} label="Nombre" validate={validar} />
                </Grid>

                <Grid item xs={4}>
                  <Field
                    name="password"
                    component={InputPassword}
                    label="password nuevo"
                    validate={validar}
                  />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <Field
                    name="lastname"
                    component={InputText}
                    label="Apellido"
                    validate={validar}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="passwordconf"
                    component={InputPassword}
                    label="repetir password"
                    validate={validar}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="supervice"
                    component={SelectCustom}
                    options={[{ value: 1, label: "fede" }]}
                    validate={validar}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="birthday"
                    component={InputDate}
                    label="Fecha Nacimiento"
                    validate={validar}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="arriveDate"
                    component={InputDate}
                    label="Fecha Ingreso"
                    validate={validar}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Field name="dni" component={InputNumber} label="DNI" validate={validar}/>
                  
                </Grid>

                <Grid item xs={4}>
                  <Field name="cuil" component={InputNumber} label="CUIL" validate={validar}/>
                  
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <Field
                    name="email"
                    component={InputText}
                    label="Correo electrónico"
                    validate={validar}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="cellphone"
                    component={InputNumber}
                    label="Teléfono"
                    validate={validar}
                  />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <Field name="address" component={InputText} label="Calle" validate={validar}/>
                </Grid>
                <Grid item xs={4}>
                  <Field name="addressNumber" component={InputNumber} label="Altura" validate={validar}/>
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="postalCode"
                    component={InputNumber}
                    label="Código Postal"
                    validate={validar}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field name="tower" component={InputNumber} label="Torre" validate={validar}/>
                </Grid>
                <Grid item xs={4}>
                  <Field name="floor" component={InputNumber} label="Piso" validate={validar}/>
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="flat"
                    component={InputText}
                    label="Departamento"
                    validate={validar}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field name="city" component={InputText} label="Ciudad" validate={validar}/>
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="province"
                    component={InputText}
                    label="Provincia"
                    validate={validar}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field name="country" component={InputText} label="País" validate={validar}/>
                </Grid>
                <Grid item xs={4}>
                  <Field
                    name="holidays"
                    component={InputNumber}
                    label="Días Vacaciones"
                    validate={validar}
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
