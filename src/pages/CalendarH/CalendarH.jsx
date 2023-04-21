
import Layout from "../../components/Layout/Layout";
import {Grid, Box} from "@mui/material";
import { boxBody } from "../Dashboard/style";
import Calendar from "../../components/Calendar/Calendar";
import ListF from "../../components/ListF/ListF";
// import ModalJo from "../../components/ModalJo/ModalJo";
import ModalHoliday from "../../components/ModalHoliday/ModalHoliday"
const CalendarH = () => {
    return(
        <Layout title={"Holidays"}>
                  <Grid container sx={{ flexDirection: { xs: "column", md: "row" }, gap: { xs: 2, md: 4 } }}>
        {/* <Grid container spacing={2}> */}
            <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: { xs: "center", md: "left" } }}>
            <Box sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}>
                <h4 style={{color: "#FFA1A1"}}>Calendario</h4>
</Box>
<Calendar/>
</Box>
            </Grid>
            <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: { xs: "center", md: "right" } }}>

<ListF/>
{/* <ModalHoliday/> */}
</Box>
            </Grid>
        </Grid>
        </Layout>

    );
};

export default CalendarH;