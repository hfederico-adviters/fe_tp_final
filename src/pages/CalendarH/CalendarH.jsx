import Layout from "../../components/Layout/Layout";
import { Grid, Box, Typography } from "@mui/material";
import { boxBody } from "../Dashboard/style";
import Calendar from "../../components/Calendar/Calendar";
import ListF from "../../components/ListF/ListF";
// import ModalJo from "../../components/ModalJo/ModalJo";
import ModalHoliday from "../../components/ModalHoliday/ModalHoliday";
import { strings } from "../../assets/strings/Strings";
const CalendarH = () => {
  return (
    <Layout title={"Holidays"}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Typography variant="h1">
            {strings.calendar.calendar.label}
          </Typography>
          <Calendar />
        </Grid>
        <Grid item xs={5}>
          <ListF />
          {/* <ModalHoliday/> */}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CalendarH;
