import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircleColor from "../../../components/CircleColor/CircleColor";
import { Avatar, Chip, Box, Typography } from "@mui/material";
import { chipTableMissing } from "../style";

const TableMissing = ({ headersName, listUserMissing }) => {
  console.log(listUserMissing);
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        maxWidth: "70%",
        "@media (max-width:600px)": {
          maxWidth: "100%",
        },
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 400,

          border: "0.5px solid #797979",
        }}
      >
        <Table>
          <TableHead
            sx={{
              borderBottom: "0.5px solid #797979",
              backgroundColor: "#ffffff",
              position: "sticky",
              top: "0px",
              zIndex: 999,
            }}
          >
            <TableRow>
              {headersName.map((name) => (
                <TableCell sx={{}}>
                  <Typography variant="body2">{name}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {listUserMissing?.map((row) => (
              <TableRow>
                <TableCell sx={{ display: "flex", alignItems: "center" }}>
                  <CircleColor small={false} />
                  <Box sx={{ ml: 1 }}>
                    <Avatar alt={row?.fkUser?.firstName} src="/" />
                  </Box>
                </TableCell>
                <TableCell>{row?.fkUser?.firstName}</TableCell>
                <TableCell>{`${row?.startDate} - ${row?.endDate}`}</TableCell>
                <TableCell>8</TableCell>
                <TableCell>
                  <Chip
                    label={row?.licenceStatus?.description}
                    sx={chipTableMissing}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default TableMissing;
