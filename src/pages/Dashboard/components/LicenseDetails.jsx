import { Box, Grid, TextField, Typography } from "@mui/material";
import AvatarLicense from "../../../components/AvatarLicence/Avatarlicence";
import LicenceRangeDate from "../../../components/LicenceRangeDate/LicenceRangeDate";
import TableMissing from "./TableMissing";
import Boton from "../../../components/Button/Button";
import { textSecondaryListLicenses } from "../style";
import { listUserMissing } from "../contants/dataTest";

const LicenseDetails = ({ onClose }) => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        border: "0.5px solid #797979",
        borderRadius: "8px",
        width: "100%",
        mt: 3,
        px: 2,
      }}
    >
      <AvatarLicense onClose={onClose} nameUser="Ricky" />
      <Grid container>
        <Grid item xs={12} sm={6} sx={{ p: 2 }}>
          <LicenceRangeDate
            startDate={"2022/04/03"}
            endDate={"2022/04/03"}
            workDays={"8"}
            isFormulario={false}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Fecha Solicitada</Typography>
            <Typography>30/08/2022</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 2,
            }}
          >
            <Typography>Archivo adjunto</Typography>
            <Typography>No hay archivos adjuntos todavia</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
          flexDirection: "column",
        }}
      >
        <Typography variant="subtitle2" gutterBottom color="text.secondary">
          DESCRIPCIÓN
        </Typography>
        <TextField
          value={""}
          rows={7}
          sx={{ width: "80%" }}
          fullWidth
          multiline
        />
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography sx={textSecondaryListLicenses} variant="body2">
          ¿Quien Mas estará ausente?
        </Typography>
        <TableMissing
          headersName={["", "NOMBRE", "PERIODO", "DIAS", "ESTADO"]}
          listUserMissing={listUserMissing}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end", my: 2, mb: 5 }}>
        <Boton name="Rechazar" color="error" />
        <Boton name="Aprobar" color="tertiary" sx={{ ml: 2 }} />
      </Box>
    </Box>
  );
};
export default LicenseDetails;
