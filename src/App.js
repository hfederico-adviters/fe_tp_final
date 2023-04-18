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
import CalendarH from "./pages/CalendarH/CalendarH";
import EnabledUser from "./pages/EnabledUser/EnabledUser";

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
              <Route path="/User" element={<User />} />
              <Route path="/CalendarH" element={<CalendarH />} />
              <Route path="/EnabledUser" element={<EnabledUser />} />
              <Route
                path="*"
                element={<h1>Error, ruta no especificada ☹️</h1>}
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
