import * as React from "react";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
export const AlertCustom = ({
  open,
  onclick,
  severity,
  title,
  message,
  children = null,
}) => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={onclick}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          onClose={onclick}
          severity={severity}
          sx={{ width: "100%", zIndex: 999 }}
        >
          <AlertTitle>
            <Typography variant="subtitle1">{title}</Typography>
          </AlertTitle>
          <Box> {message}</Box>
          {children && <Box> {children}</Box>}
        </MuiAlert>
      </Snackbar>
    </Stack>
  );
};
