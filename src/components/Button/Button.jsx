import { Button } from "@mui/material";

const Boton = ({name, onclick}) => {
  return (
    <Button sx={{background: "blue", color: "#fafafa",}} variant="contained" onClick={onclick}>{name}
    </Button>
  )
}

export default Boton