import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';


// function Avatarlicence() {
//   return (
//     <div className='avatar'></div>
//   )
// }

// export default Avatarlicence
function AvatarLicence() {
    return (
    //   <nav className="nav-simple">
    //     <div className="avatar">
    //     <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
    //     </div>
    //     <div className="estado">
    //       Estado
    //     </div>
    //     <div className="boton">
    //       <button>AUN NO ENVIADO</button>
    //     </div>
    //   </nav>
    <Grid container alignItems="center" justifyContent="space-between" padding={1}>
    <Grid item> 
    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
    <Grid item >Travis</Grid>
    </Grid>
    <Grid item>
      <Grid container direction="column" alignItems="center">
        <Grid item>ESTADO</Grid>
        <Grid item>
          <button style={{backgroundColor: '#98FB98', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px' }}>AUN NO ENVIADO</button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
    );
  }

export default AvatarLicence;