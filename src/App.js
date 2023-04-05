import { Box } from "@mui/material";
import "./App.css";
import User from "./pages/User/User";
import { principal } from "./style";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Box sx={principal}>
      <Dashboard />
    </Box>
  );
}

export default App;
