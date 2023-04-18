import Layout from "../../components/Layout/Layout";
import { Box, Divider, Grid, Typography } from "@mui/material";
import VacationDetails from "../../components/ListHoliday/ListHoliday";
import { boxBody, container, typografy } from "../Dashboard/style";
import AvatarLicence from "../../components/AvatarLicense/AvatarLicence";
import DetailsLicence from "../../components/DetailsLicence/DetailsLicence";
import DescriptionLicence from "../../components/DescriptionLicence/DescriptionLicence";
import FooterLicence from "../../components/FooterLicence/FooterLicence";


const Licenses = () => {
    return (
        <Layout title={"Carga de Licencias"}>
            <container sx={container}>
                <Grid container spacing={2}>
                    <Grid item xs={9} sx={{ border: "1px solid gray",borderRadius:"9px" }}>
                        <Box sx={boxBody}>
                             {/* <Box sx={card}>
                            </Box>  */}
                           <AvatarLicence/>
                           <Divider/>
                           <Box sx={{marginBottom: 20, marginTop: 4}}>
                           <DetailsLicence/>
                           </Box>
                           <Divider/>
                           <Box>
                            <DescriptionLicence/>
                           </Box>
                           <Box padding={7}></Box>
                        <FooterLicence/>
                           <Box padding={14}></Box>
                        </Box>
                    </Grid>

                    <Grid item xs={3} sx={{ border: "1px solid gray", borderRadius:"9px" }}>
                        <Box sx={boxBody}>
                            <Typography sx={typografy}>Detalle de Vacaciones</Typography>
                            {/* <Box sx={card}>
                                {/* {array.map((item) => (<ListCustom key={"3" + item} onClick={() => console.log(item)} />
                                ))}
                                 </Box> */}
                                <VacationDetails/>
                        </Box>
                    </Grid>
                </Grid>
            </container>
        </Layout>
    );
};

export default Licenses;