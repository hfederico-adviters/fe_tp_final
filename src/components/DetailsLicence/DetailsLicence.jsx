import { Button  } from "@mui/material";
import { useState } from "react";
import {Grid} from '@mui/material';
import {Typography} from "@mui/material";

function UploadFile() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFiles([...files, file]);
    // falta function para que el archivo subido se envie al servidor
  };

  return (
    <Grid item>
    <Grid container direction="column" alignItems="center">
      <Grid item>ARCHIVO ADJUNTO</Grid>
      <Typography variant="subtitle2" sx={{ color: "#888" }}>No hay archivos subidos</Typography>
      <Grid item>
      <Button
                variant="contained"
                component="label"
                sx={{ bgcolor: '#ccc' }}
              >
                Subir archivo
                <input
                  type="file"
                  hidden
                  onChange={handleFileUpload}
                />
              </Button>
      </Grid>
    </Grid>
  </Grid>
                    
  );
}

export default UploadFile;