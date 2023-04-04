import React from "react";
import { Box, Button } from "@mui/material";
import { Field, Form } from "react-final-form";
import { InputDate, InputText } from "../../components/Input/Input";
const User = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Form
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={(value) => {
          console.log(value);
          let error = {};
          if (value.name === "fede") {
            error.name = "El nombre no puede ser fede";
          }
          return error;
        }}
        render={({ handleSubmit }) => (
          <Box>
            <Field name="name" component={InputText} label="Mathias" />
            <Field name="date" component={InputDate} />
            <Button onClick={handleSubmit}>onclick</Button>
          </Box>
        )}
      />
    </Box>
  );
};

export default User;
