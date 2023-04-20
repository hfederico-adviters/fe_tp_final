import React, { useState } from "react";
import "../../components/ListF/ListF.css";
import { Divider, Typography } from "@mui/material";
import CustomizedDialogs from "../ModalHoliday/ModalHoliday";
import { strings } from "../../assets/strings/Strings";
const ListF = () => {
  const [holidays, setHolidays] = useState([]);

  const addHoliday = (date, motivo) => {
    setHolidays([...holidays, { date, motivo }]);
  };

  return (
    <div className="contenedorHoliday">
      <CustomizedDialogs onConfirm={addHoliday} />
      <Typography variant="h1"> {strings.listF.holidays.label}</Typography>
      {holidays.map((holiday) => (
        <div key={holiday.date} className="fila">
          <div className="fecha">{holiday.date}</div>
          <div className="descripcion">{holiday.motivo}</div>
          <Divider />
        </div>
      ))}
      <div className="fila">
        <div className="fecha">21/11/2022</div>
        <div className="descripcion">Feriado con fines Turisticos</div>
      </div>
      <Divider />
      <div className="fila">
        <div className="fecha">21/11/2022</div>
        <div className="descripcion">Feriado con fines Turisticos</div>
      </div>
    </div>
  );
};

export default ListF;
