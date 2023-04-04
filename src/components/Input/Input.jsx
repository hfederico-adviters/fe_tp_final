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
        error={meta.error && "error"}
        label={label}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        helperText={meta.error}
        variant="outlined"
        size="small"
      />
    </Box>
  );
};
export const InputDate = ({ input: { value, onChange }, ...rest }) => {
  return (
    <Box>
      <TextField
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        type="date"
        variant="outlined"
        size="small"
      />
    </Box>
  );
};
