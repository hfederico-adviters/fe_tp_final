import { Box, TextField } from "@mui/material";
import React from "react";
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
       error={!!meta?.touched && !!meta?.error}
        label={label}
        value={value}
        onChange={onChange}
       helperText={meta?.touched && meta?.error}
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
