import { Button } from "@mui/material";

const Boton = ({ name, onclick, color = "primary", sx = {} }) => {
  return (
    <Button
      sx={{ color: "#fafafa", ...sx }}
      variant="contained"
      onClick={onclick}
      color={color}
    >
      {name}
    </Button>
  );
};

export default Boton;
