import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { images } from "../../assets/images/Images";
import MaskInputDate from "../MaskInputDate/MaskInputDate";
import { day, days, months } from "./constants/date";
export const InputText = ({
  label,
  input: { value, onChange },
  meta,
  ...rest
}) => {
  return (
    <Box>
      <TextField
        fullWidth
        error={!!meta.touched && !!meta.error}
        label={label}
        value={value}
        onChange={onChange}
        helperText={meta.touched && meta.error}
        variant="outlined"
        size="small"
      />
    </Box>
  );
};

export const InputPassword = ({
  label,
  input: { value, onChange },
  meta,
  ...rest
}) => {
  return (
    <Box>
      <TextField
        fullWidth
        error={!!meta.touched && !!meta.error}
        label={label}
        value={value}
        onChange={onChange}
        helperText={!!meta.touched && meta.error}
        variant="outlined"
        size="small"
        type="password"
      />
    </Box>
  );
};
export const InputNumber = ({
  label,
  input: { value, onChange },
  meta,
  ...rest
}) => {
  return (
    <Box>
      <TextField
        fullWidth
        type="number"
        error={!!meta.error}
        label={label}
        value={value}
        onChange={onChange}
        helperText={meta.error}
        variant="outlined"
        size="small"
      />
    </Box>
  );
};
export const InputDate = ({
  label,
  input: { value, onChange },
  meta,
  ...rest
}) => {
  return (
    <Box>
      <TextField
        fullWidth
        type="date"
        error={!!meta.error}
        label={label}
        value={value}
        onChange={onChange}
        helperText={meta.error}
        variant="outlined"
        size="small"
        focused
      />
    </Box>
  );
};
export const InputDateCustom = ({
  label,
  input: { value, onChange },
  meta,
  ...rest
}) => {
  const fecha = new Date(value);
  const day = fecha.getDate();
  const dayDescription = days[fecha.getDay()];
  const month = months[fecha.getDay()];

  return (
    <>
      <label for="dateCustomer">
        <>
          {value ? (
            <MaskInputDate
              day={day}
              dayDescription={dayDescription}
              month={month}
            />
          ) : (
            <MaskInputDate day={""} dayDescription={""} month={"Sin fecha"} />
          )}
        </>
      </label>
      <input
        className="inputDate form-control"
        id="dateCustomer"
        type="date"
        onChange={onChange}
      />
    </>
  );
};
