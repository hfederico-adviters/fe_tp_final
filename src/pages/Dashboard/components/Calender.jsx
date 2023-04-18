import { Box, Container, Typography } from "@mui/material";
import { images } from "../../../assets/images/Images";
import { containerCalender } from "../style";

const Calender = ({ data }) => {
  return (
    <Box sx={containerCalender}>
      <>
        <img src={images.dashboard.calender} />
      </>
      <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
        {data?.map(({ date, description }) => (
          <Typography
            key={`${date} ${description}`}
            variant="h4"
          >{`${date} (${description})`}</Typography>
        ))}
      </Box>
    </Box>
  );
};
export default Calender;
