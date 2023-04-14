import { Box, Card, Chip, Container } from "@mui/material";
import DatePickerCustom from "../DatePickerCustom/DatePickerCustom";
import { Field } from "react-final-form";

const LicenceRangeDate = ({ daysAvailable, workDays }) => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", width: 300 }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ m: 1 }}>
          <Field name="Inicio" component={DatePickerCustom} label="Desde" />
        </Box>
        <Box sx={{ m: 1 }}>
          <Field name="Fin" component={DatePickerCustom} label="Hasta" />
        </Box>
      </Box>
      <Box sx={{ width: 250 }}>
        {daysAvailable ? (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Chip
              sx={{
                background: "#FAFAFA",
                border: "0.5px solid #797979",
                borderRadius: "48px 0px 0px 48px",
                color: "#06B80D",
                width: "100%",
              }}
              size="small"
              label={workDays}
            />
            <Chip
              sx={{
                background: "#FAFAFA",
                border: "0.5px solid #797979",
                borderRadius: "0px 48px 48px 0px",
                width: "100%",
                color: "#797979",
              }}
              size="small"
              label={daysAvailable}
            />
          </Box>
        ) : (
          <Chip
            sx={{
              background: "#FAFAFA",
              border: "0.5px solid #797979",
              color: "#06B80D",
              width: "100%",
            }}
            size="small"
            label={workDays}
          />
        )}
      </Box>
    </Container>
  );
};

export default LicenceRangeDate;
