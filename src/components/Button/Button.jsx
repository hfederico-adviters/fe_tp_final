import { Button } from "@mui/material";

const Boton = ({name}) => {
  return (
    <Button sx={{background: "blue", color: "#fafafa",}} variant="contained">{name}
    </Button>
  )
}

export default Boton