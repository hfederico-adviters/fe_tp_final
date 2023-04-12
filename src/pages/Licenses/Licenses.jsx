import Layout from "../../components/Layout/Layout";
import { Box, Divider, Grid, Typography } from "@mui/material";
import VacationDetails from "../../components/ListHoliday/ListHoliday";
import { boxBody, container, typografy } from "../Dashboard/style";
import AvatarLicence from "../../components/AvatarLicence/Avatarlicence";
import DetailsLicence from "../../components/DetailsLicence/DetailsLicence";
import DescriptionLicence from "../../components/DescriptionLicence/DescriptionLicence";
import FooterLicence from "../../FooterLicence/FooterLicence";
import DatePickerCustom from "../../components/DatePickerCustom/DatePickerCustom";
import MaskInputDate from "../../components/MaskInputDate/MaskInputDate";
const Licenses = () => {
  return (
    <Layout title={"Carga de Licencias"}>
      <DatePickerCustom />

      <container sx={container}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Box sx={boxBody}>
              <Typography sx={typografy}></Typography>
              {/* <Box sx={card}>
                            </Box>  */}
              <AvatarLicence />
              <Divider />
              <Box sx={{ marginBottom: 20, marginTop: 4 }}>
                <DetailsLicence />
              </Box>
              <Divider />
              <Box>
                <DescriptionLicence />
              </Box>
              <Box padding={7}></Box>
              {/* <Divider />
                           <Box sx={{marginBottom: 20, marginTop: 4}}>
                           </Box> */}
              <FooterLicence />
              <Box padding={14}></Box>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={boxBody}>
              <Typography sx={typografy}>Detalle de Vacaciones</Typography>
              {/* <Box sx={card}>
                                {/* {array.map((item) => (<ListCustom key={"3" + item} onClick={() => console.log(item)} />
                                ))}
                                 </Box> */}
              <VacationDetails />
            </Box>
          </Grid>
        </Grid>
      </container>
    </Layout>
  );
};

export default Licenses;
