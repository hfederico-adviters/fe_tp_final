import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { AutenticacionProvider } from "./context/AutenticacionProvider";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 0,
      staleTime: 0,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AutenticacionProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AutenticacionProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();
