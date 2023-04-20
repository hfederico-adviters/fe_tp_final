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
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
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


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
// import DatePicker from '@mui/lab/DatePicker';
// import { TextField } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import { useState } from 'react';
 

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));
// function BootstrapDialogTitle(props) {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// }

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

// export default function CustomizedDialogs() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedDate, setSelectedDate] = React.useState(null);
//   const [dateValue, setDateValue] = React.useState("");
//   const [motivoValue, setMotivoValue] = React.useState("");

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleConfirm = () => {
//     //Creo un objeto con los vlaores de los estados 

//     const data = {date: dateValue, motivo: motivoValue};

//     //coloca el objeto data con su info en el container

//     // contenedorHoliday.push(data)

//     //Cierro todo

// handleClose();
//   };


//   return (
//     <div>
//       <Button variant="outlined" sx={{bgcolor: 'green', color:'white'}} onClick={handleClickOpen}>
//      Nuevo Feriado
//       </Button>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
//           <h1>Crear nuevo Feriado</h1>
//           <Grid container spacing={2}>
//          <Grid item xs={6}>
//                   <TextField
//                     name="date"
//                     label="Fecha"
//                     type='date'
//                     InputLabelProps={{
//                         shrink: true,
//                         children: 'Fecha',
//                       }}
//                       fullWidth
//                       onChange={(e) => setDateValue(e.target.value)}
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <TextField 
//                     name="motivo"
//                     label="Motivo"
//                     type='text'
//                     InputLabelProps={{
//                         shrink: true,
//                         children: 'text',
//                       }}
//                       fullWidth
//                       onChange={(e) => setMotivoValue(e.target.value)}
//                   />
//                 </Grid>
//                 </Grid>
//         </BootstrapDialogTitle>
//         <DialogContent dividers>
//           <DatePicker
//             label="Select a date"
//             value={selectedDate}
//             onChange={handleDateChange}
//             renderInput={(params) => <TextField {...params} />}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Cancelar
//           </Button>
//           <Button onClick={handleConfirm} color="primary">
//             Confirmar
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </div>
//   );
// }




