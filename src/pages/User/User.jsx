import React from "react";
import { Box, Button, Card, Grid} from "@mui/material";
import { Field, Form } from "react-final-form";
import {
  InputDate,
  InputNumber,
  InputPassword,
  InputText,
} from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import Boton from "../../components/Button/Button";

import { initialValues } from "./constants";
import SelectCustom from "../../components/SelectCustom/SelectCustom";
import File from "../../components/File/File";
import { postAddUser } from "../../services/usuariosServices";
import SwitchCustom from "../../components/SwitchCustom/SwitchCustom";
import { strings } from "../../assets/strings/Strings";
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
            const body={...values, image:"", administration:true}
            postAddUser(values);
            console.log(values);
          }}
          initialValues={initialValues}
          validate={(value) => {
            let error = {};
            if(value.password !== value.passwordconf){
              error.password = "El password no coincide";
              error.passwordconf = "El password no coincide";
            }
            return error;
          }}
          
          render={({ handleSubmit, values }) => (

             console.log(values),
            <Box sx={{ margin: "2rem" }}>
              <Grid container spacing={2}>
                
                  <Grid item xs={4}  >
                    {/* <>
                      <img src={imagen} alt="imagen"  style={{ width: "8rem" }} />
                      <input accept="image/*" type="file" />                
                    </> */}
                    <Field name={strings.pageUser.formulario.file.name} component={File}/>
                  </Grid>

                  <Grid item xs={4}>
                    <Field name={strings.pageUser.formulario.firstName.name} component={InputText} label={strings.pageUser.formulario.firstName.label} validate={validar} />
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
                    name={strings.pageUser.formulario.idUserSupervice.name}
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
                  <Field name={strings.pageUser.formulario.dni.name} component={InputText} label={strings.pageUser.formulario.dni.label} validate={validar}/>
                  
                  </Grid>

                  <Grid item xs={4}>
                  <Field name={strings.pageUser.formulario.cuil.name} component={InputText} label={strings.pageUser.formulario.cuil.label} validate={validar}/>

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
                  <Field name={strings.pageUser.formulario.address.name} component={InputText} label={strings.pageUser.formulario.address.label} validate={validar}/>
                  </Grid>

                  <Grid item xs={4}>
                    <Field name={strings.pageUser.formulario.addressNumber.name} component={InputNumber} label={strings.pageUser.formulario.addressNumber.label} validate={validar}/>
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
                  <Field name={strings.pageUser.formulario.tower.name} component={InputText} label={strings.pageUser.formulario.tower.label}/>
                  </Grid>
                  
                  
                  <Grid item xs={4}>
                  <Field name={strings.pageUser.formulario.floor.name} component={InputNumber} label={strings.pageUser.formulario.floor.label}/>
                  </Grid>

                 <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.flat.name}
                    component={InputText}
                    label={strings.pageUser.formulario.flat.label}
                    
                  />
                 </Grid>


                  

                  <Grid item xs={4}>
                    <Field name={strings.pageUser.formulario.city.name} component={InputText} label={strings.pageUser.formulario.city.label} validate={validar}/>
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
                  <Field name={strings.pageUser.formulario.country.name} component={InputText} label={strings.pageUser.formulario.country.label} validate={validar}/>
                 </Grid>

                  <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.holidays.name}
                    component={InputNumber}
                    label={strings.pageUser.formulario.holidays.label}
                    validate={validar}
                  />
                  </Grid>

                  <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.studydays.name}
                    component={InputNumber}
                    label={strings.pageUser.formulario.studydays.label}
                    validate={validar}
                  />
                  </Grid>

                  <Grid item xs={4}>
                  <Field
                    name={strings.pageUser.formulario.administrator.name}
                    component={SwitchCustom}
                    type="checkbox"
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
                <Boton name={strings.pageUser.formulario.button.name} onclick={handleSubmit} />
              </Box>
            </Box>
          )}
        />
      </Card>
    </Layout>
  );
};

export default User;
