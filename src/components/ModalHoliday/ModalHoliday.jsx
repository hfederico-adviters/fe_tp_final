import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid  from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import CloseIcon from  "@mui/icons-material/Close";


const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 500,
    width: "90%",
    minHeight: 150,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    // justifyContent: "space-between" 
    "& .close-icon":{
        position:"absolute",
        top: "0",
        right: "0",
        margin: "10px",
        cursor: "pointer",
    }
  };
  

export default function ModalJo({}) {
  const [open, setOpen] = React.useState(false);
  const [dateValue, setDateValue] = React.useState("");
  const [motivoValue, setMotivoValue] = React.useState("");


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    //Guardo los valores ingresados en las variables
    const date = dateValue;
    const motivo = motivoValue;

    //Cierro el modal
    handleClose();
  };

  return (
    <div>
        <div style={{display: "flex", justifyContent:"flex-end" }} >
      <Button variant="contained" color="success" size="small" onClick={handleOpen}>
        Crear Nuevo Feriado
      </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={boxStyle}>
            <CloseIcon className="close-icon" onClick={handleClose}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Crear Nuevo Feriado
          </Typography>
          <Divider/>
          {/* <h1>Crear nuevo Feriado</h1> */}
           <Grid container spacing={2}>
         <Grid item xs={6}>
                  <TextField
                    name="date"
                     label="Fecha"
                     type='date'
                     InputLabelProps={{
                         shrink: true,
                         children: 'Fecha',
                       }}
                       fullWidth
                      onChange={(e) => setDateValue(e.target.value)}
                  />                
                   </Grid>
                 <Grid item xs={6}>
                   <TextField 
                     name="motivo"
                     label="Motivo"
                     type='text'
                     InputLabelProps={{
                        shrink: true,
                         children: 'text',
                       }}
                      fullWidth
                      onChange={(e) => setMotivoValue(e.target.value)}
                   />
                 </Grid>
                 <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end"}}>
                 <Button variant="contained" color="error" onClick={handleClose}>
            Cancelar
          </Button>
<Button variant="contained" sx={{ml: 1}}onClick={handleConfirm} color="success">
            Confirmar
          </Button>
          </Grid>
                 </Grid>
        </Box>
      </Modal>
    </div>
  );
}





