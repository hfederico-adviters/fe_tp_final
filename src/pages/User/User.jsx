import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { Field, Form } from "react-final-form";
import { InputDate, InputText } from "../../components/Input/Input";
import Select from "../../components/SelectCustom/Select";
import Layout from "../../components/Layout/Layout";
const User = () => {
  return (
    <Layout title={"Gestión de licencias"}>
      <Form
        onSubmit={(values) => {}}
        validate={(value) => {
          let error = {};
          if (value.name === "fede") {
            error.name = "El nombre no puede ser fede";
          }
          return error;
        }}
        render={({ handleSubmit }) => (
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Field name="name" component={InputText} label="Nombre" />
              </Grid>
              <Grid item xs={4}>
                <Field name="date" component={InputDate} />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name="select"
                  component={Select}
                  options={[{ value: 1, label: "fede" }]}
                />
              </Grid>
              <Grid item xs={8}>
                <Box>xs=8</Box>
              </Grid>
            </Grid>

            <Button onClick={handleSubmit}>onclick</Button>
          </Box>
        )}
      />
    </Layout>
  );
};

export default User;
