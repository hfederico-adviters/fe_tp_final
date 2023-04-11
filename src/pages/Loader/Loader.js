
import { CircularProgress } from "@mui/material";
import './Loader.css';
import logo from '../../assets/logoadv.png'

function MyComponent() {
  return (
    <body className="body-login">
    <div style={{
      height:'100vh',
      width:'100%',
      display: 'flex',  
      justifyContent:'center',
      alignItems: 'center',
    }}>
  
       
      <h1>Loading...</h1>
      <CircularProgress  size={200} classes={{ root: "MuiCircularProgress-root"}}/>
    </div>
       <img src={logo} alt="logo"/>
      
       </body>
  );
}


export default MyComponent;