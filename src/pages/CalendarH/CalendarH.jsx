import Layout from "../../components/Layout/Layout";
import { Grid, Box } from "@mui/material";
import { boxBody } from "../Dashboard/style";
import Calendar from "../../components/Calendar/Calendar";
import ListF from "../../components/ListF/ListF";
// import ModalJo from "../../components/ModalJo/ModalJo";
import ModalHoliday from "../../components/ModalHoliday/ModalHoliday";
const CalendarH = () => {
  return (
    <Layout title={"Holidays"}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <h1>Calendario</h1>
          <Calendar />
        </Grid>
        <Grid item xs={5}>
          <ListF />
          {/* <ModalHoliday/> */}
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <ListF />
        {/* <ModalHoliday/> */}
      </Grid>
    </Layout>
  );
};

export default CalendarH;
