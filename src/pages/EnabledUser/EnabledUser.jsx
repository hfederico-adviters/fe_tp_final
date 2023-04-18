import Layout from "../../components/Layout/Layout";
import { Box, Grid} from "@mui/material";
import { boxBody, container} from "../Dashboard/style";
import ListEnabledUser from "../../components/ListEnabledUser/ListEnableduser";


const EnabledUser = () => {
    return (
        <Layout title={""}>
            {/* <container sx={container}> */}
            <Grid container spacing={2} >
                <Grid item xs={9} sx={{ border: "1px solid gray", width: "100%", height: "90vh"}}>
                    <Box>
                        <ListEnabledUser/>
                    </Box>

                    <Grid item xs={3} sx={{ border: "1px solid black" }}>
                    
                    </Grid>
                </Grid>

            </Grid>
            {/* </container> */}
        </Layout>
    );
};

export default EnabledUser;