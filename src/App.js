import "./App.css";
import { principal } from "./style";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Loader from "./pages/Loader/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User/User";
import { useContext } from "react";
import { AutenticacionContext } from "./context/AutenticacionProvider";
import CalendarH from "./pages/CalendarH/CalendarH";
import EnabledUser from "./pages/EnabledUser/EnabledUser";
import Licenses from "./pages/Licenses/Licenses";
import { Typography } from "@mui/material";
import { strings } from "./assets/strings/Strings";

function App() {
  const { usuario } = useContext(AutenticacionContext);
  return (
    <>
      {/* <Box sx={principal}>
        <Dashboard />
      </Box> */}
      <BrowserRouter>
        <Routes>
          {usuario ? (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/licenses" element={<Licenses />} />
              <Route path="/loader" element={<Loader />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/User?/:idUser" element={<User />} />
              <Route path="/CalendarH" element={<CalendarH />} />
              <Route path="/EnabledUser" element={<EnabledUser />} />
              <Route
                path="*"
                element={
                  <Typography variant="h1">
                    {strings.appJs.notFound.label}
                  </Typography>
                }
              />
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
