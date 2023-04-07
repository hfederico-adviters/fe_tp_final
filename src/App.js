import { Box } from "@mui/material";
import "./App.css";
import User from "./pages/User/User";
import { principal } from "./style";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Loader from "./pages/Loader/Loader"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    // <Box sx={principal}>
    //  <Dashboard />
    // </Box>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/User" element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
