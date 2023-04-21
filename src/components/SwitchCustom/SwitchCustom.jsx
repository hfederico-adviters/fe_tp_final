import React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { Label } from "@mui/icons-material";

const SwitchCustom = ({
  label,
  input: { value, onChange },
  meta,
  options,
  ...rest
}) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={value} onChange={onChange} />}
        label={"Administrador"}
      />
    </FormGroup>
  );
};

export default SwitchCustom;
