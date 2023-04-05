import React from "react";
import { Box, Card, Grid } from "@mui/material";
import { Field, Form } from "react-final-form";
import { InputDate, InputNumber, InputPassword, InputText } from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Layout from "../../components/Layout/Layout";
import Boton from "../../components/Button/Button";
import imagen from "../squirtle.png";
const User = () => {
  return (
    <Layout title={"Gestión de licencias"}>
      <Card sx={{width: "70%", border: "0.2px solid #797979"}}>
        <Box sx={{fontSize: "2rem", color: "#FF7B7B" , margin: "2rem"}}>Mi Perfil</Box>
      <Form 
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={(value) => {
          let error = {};
          if (value.name === "") {
            error.name = "El nombre no puede estar vacio";
          }
          return error;
        }}
        render={({ handleSubmit }) => (
          <Box  sx={{margin: "2rem"}}>
            
            <Grid container spacing={2}>
            <Grid item xs={4}>
                <>
                  <img src={imagen} alt="imagen" style={{width: "10rem"}}/>
                </>
              
              </Grid>
              <Grid item xs={4}>
                <Field name="name"  component={InputText} label="Nombre" />
              
              </Grid>
              
              <Grid item xs={4}>
                <Field name="password" component={InputPassword} label="password nuevo" />
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <Field name="surname" component={InputText} label="Apellido" />
              </Grid>
              <Grid item xs={4}>
                <Field name="passwordconf" component={InputPassword} label="repetir password" />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name="select"
                  component={Select}
                  options={[{ value: 1, label: "fede" }] }
                />
              </Grid>
              <Grid item xs={4}>
                <Field name="date" component={InputDate} />
              </Grid>
              <Grid item xs={4}>
                <Field name="date" component={InputDate} />
              </Grid>
              
              
              <Grid item xs={4}>
                <Field name="dni" component={InputNumber} label="DNI" />
              </Grid>
              
              
              <Grid item xs={4}>
                <Field name="cuil" component={InputNumber} label="CUIL" />
              </Grid>
              <Grid item xs={4}>
                <Field name="email" component={InputText} label="Correo electrónico" />
              </Grid>
              <Grid item xs={4}>
                <Field name="cellphone" component={InputNumber} label="Teléfono" />
              </Grid>
              <Grid item xs={4}>
                <Field name="street" component={InputText} label="Calle" />
              </Grid>
              <Grid item xs={4}>
                <Field name="number" component={InputNumber} label="ALtura" />
              </Grid>
              <Grid item xs={4}>
                <Field name="postalcode" component={InputNumber} label="Código Postal" />
              </Grid>
              <Grid item xs={4}>
                <Field name="tower" component={InputNumber} label="Torre" />
              </Grid>
              <Grid item xs={4}>
                <Field name="floor" component={InputNumber} label="Piso" />
              </Grid>
              <Grid item xs={4}>
                <Field name="flat" component={InputText} label="Departamento" />
              </Grid>
              <Grid item xs={4}>
                <Field name="city" component={InputText} label="Ciudad" />
              </Grid>
              <Grid item xs={4}>
                <Field name="province" component={InputText} label="Provincia" />
              </Grid>
              <Grid item xs={4}>
                <Field name="country" component={InputText} label="País" />
              </Grid>
              <Grid item xs={4}>
                <Field name="holidays" component={InputNumber} label="Días Vacaciones" />
              </Grid>
            </Grid>

            <Boton name="Guardar"  sx={{display: "flex", }}/>
          </Box>
        )}
      />
      </Card>
    </Layout>
  );
};

export default User;
