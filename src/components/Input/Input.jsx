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
      />
    </Box>
  );
};
