import Layout from "../../components/Layout/Layout";
import { Box, Divider, Grid, Typography } from "@mui/material";
import VacationDetails from "../../components/ListHoliday/ListHoliday";
import { boxBody, container, typografy } from "../Dashboard/style";
import AvatarLicence from "../../components/AvatarLicence/AvatarLicence";
import DetailsLicence from "../../components/DetailsLicence/DetailsLicence";
import DescriptionLicence from "../../components/DescriptionLicence/DescriptionLicence";
import FooterLicence from "../../components/FooterLicence/FooterLicence";
import ListDani from "../../components/ListDani/ListDani";


const Licenses = () => {
    return (
        <Layout title={"Carga de Licencias"}>
             <container sx={container}>
                <Grid container spacing={2}>
                   <Grid item xs={9} sx={{ border: "1px solid gray",borderRadius:"9px" }}>
                   <ListDani/>
                    </Grid>
                    <Grid item xs={3} sx={{ border: "1px solid gray", borderRadius:"9px" }}>
                        <Box sx={boxBody}>
                            <Typography sx={typografy}>Detalle de Vacaciones</Typography>
                    
                                {/* <VacationDetails/> */}
                        </Box>
                    </Grid>
                </Grid>
            </container> 
        </Layout>
    );
};

export default Licenses;