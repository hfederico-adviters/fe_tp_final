import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectCustom = ({
  label,
  input: { value, onChange },
  meta,
  options,
  ...rest
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
        error={!!meta.error}
        helpertext={meta.error}
        variant="outlined"
        size="small"
      >
        {options?.map(({ value, label }) => (
          <MenuItem key={`${value} ${label}`} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default SelectCustom;
