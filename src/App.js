import { Box } from "@mui/material";
import "./App.css";
import { principal } from "./style";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Loader from "./pages/Loader/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User/User";
import { useContext } from "react";
import { AutenticacionContext } from "./context/AutenticacionProvider";
import Licenses from "./pages/Licenses/Licenses";
import EnabledUser from "./pages/EnabledUser/EnabledUser";
import ListDani from "./components/ListDani/ListDani";
import CalendarH from "./pages/CalendarH/CalendarH";

function App() {
  const { usuario } = useContext(AutenticacionContext);
  console.log(usuario);
  return (
    <>
      {/* <Box sx={principal}>
        <Dashboard />
      </Box> */}
      <BrowserRouter>
        <Routes>
          {usuario ? (
            <Route path="/" element={<User />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}

          <Route path="/Loader" element={<Loader />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/User" element={<User/>} />
          <Route path="/Licenses" element={<Licenses/>}/>     
          <Route path="/EnabledUser" element={<EnabledUser/>}/>
          <Route path="/ListDani" element={<ListDani/>}/>
          <Route path="/CalendarH" element={<CalendarH/>}/>
          <Route path="*" element={<h1>Error, ruta no especificada</h1>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
