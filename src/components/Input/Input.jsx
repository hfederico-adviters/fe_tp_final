import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { images } from "../../assets/images/Images";
import MaskInputDate from "../MaskInputDate/MaskInputDate";
import { day, days, months } from "../DatePickerCustom/contants/date";
export const InputText = ({
  label,
  input: { value, onChange },
  meta,
  sx = {},
  ...props
}) => {
  return (
    <Box sx={sx}>
      <TextField
        fullWidth
        error={!!meta?.touched && !!meta?.error}
        label={label}
        value={value}
        onChange={onChange}
        helperText={meta?.touched && meta?.error}
        variant="outlined"
        size="small"
        {...props}
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
        error={!!meta?.touched && !!meta?.error}
        label={label}
        value={value}
        onChange={onChange}

        helperText={meta?.touched && meta?.error}

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

        error={!!meta?.touched && !!meta.error}
        label={label}
        value={value}
        onChange={onChange}
        helperText={meta?.touched && meta.error}

        variant="outlined"
        size="small"
        InputProps={{
          inputProps: {
            style: { textAlign: "right" },
          },
        }}
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

        error={!!meta?.touched && !!meta?.error}
        label={label}
        value={value}
        onChange={onChange}
        helperText={meta?.touched && meta?.error}

        variant="outlined"
        size="small"
        focused
      />
    </Box>
  );
};
