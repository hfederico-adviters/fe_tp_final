import React, {useState} from 'react';
import { Typography, TextField } from '@mui/material';



function Description(){
    const [description, setDescription] = useState('Viaje al centro de la Tierra.');

    const handleChange = (event) => {
        setDescription(event.target.value)
    };


    return(
        <div>
            <Typography variant="h6" gutterBottom color="text.secondary"> DESCRIPCIÓN</Typography>
                <TextField
                  id="description"
                  value={description}
                  onChange={handleChange}
                  multiline
                  rows={8}
                  fullWidth
                  sx={{backgroundColor: "#f2f2f2"}}
                />
        </div>
    );
}

export default Description;







