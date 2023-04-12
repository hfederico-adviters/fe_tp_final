import "./App.css";
import User from "./pages/User/User";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Loader from "./pages/Loader/Loader";
import Licenses from "./pages/Licenses/Licenses"

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
        <Route path="/User" element={<User />} />
        <Route path="/Licenses" element={<Licenses/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
