import { Box, TextField } from "@mui/material";
import React from "react";
export const InputText = ({
  label,
  input: { value, onChange },
  meta,
  ...rest
}) => {
  const error = meta ? meta.error: undefined;
  return (
    // <Box>
    //   <TextField
    //     fullWidth
    //     error={!!meta.error}
    //     label={label}
    //     value={value}
    //     onChange={onChange}
    //     helperText={meta.error}
    //     variant="outlined"
    //     size="small"
    //   />
    // </Box>
    <Box>
      <TextField
      fullWidth
      error={!!error}
      label={label}
      value={value}
      onChange={onChange}
      helperText={error}
      variant="outlined"
      size="small"/>
    </Box>
  );
};
export const InputDate = ({
  label,
  input: { value, onChange },
  meta,
  ...rest
}) => {

  const error = meta ? meta.error : undefined;
  return (
    // <Box>
    //   <TextField
    //     fullWidth
    //     type="date"
    //     error={!!meta.error}
    //     label={label}
    //     value={value}
    //     onChange={onChange}
    //     helperText={meta.error}
    //     variant="outlined"
    //     size="small"
    //   />
    // </Box>
    <Box>
    <TextField
      fullWidth
      type="date"
      error={!!error}
      label={label}
      value={value}
      onChange={onChange}
      helperText={error}
      variant="outlined"
      size="small"
    />
  </Box>
  );
};
