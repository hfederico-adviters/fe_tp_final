import Avatar from "@mui/material/Avatar";
import {Grid} from "@mui/material";

function FooterLicence() {

return (
    <Grid container alignItems="center" justifyContent="flex-start" >
    <Grid item> 
    
    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
 <span style={{color: 'red'}} >LIONEL SCALONI</span> 
    </Grid>
    <Grid item>
      <Grid container direction="column" >
      <Grid item>
      </Grid>
      </Grid>
    </Grid>
  </Grid>
    );

  }

export default FooterLicence;


// return(
//     <Grid item>
//   <Grid container direction="column" alignItems="center">
//     <Grid item >APROBACION A CARGO DE</Grid>
//     <Grid item>
//       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
//       <span style={{ color: 'red' }}>LIONEL SCALONI</span>
//     </Grid>
//   </Grid>
// </Grid>
// )