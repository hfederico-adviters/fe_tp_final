import React, { useState } from "react";
import '../../components/ListF/ListF.css'
import { Divider } from "@mui/material";
import CustomizedDialogs from "../ModalHoliday/ModalHoliday";
const ListF = () => {

    const [holidays, setHolidays] = useState([]);

    const addHoliday = (date, motivo) => {
        setHolidays([...holidays, { date, motivo }]);
    }


    return(
        <div className="contenedorHoliday">
            <CustomizedDialogs onConfirm={addHoliday}/>
            <h1> Feriados</h1>
            {holidays.map(holiday =>(

            <div key={holiday.date} className="fila">
                <div className="fecha">{holiday.date}</div>
                <div className="descripcion">{holiday.motivo}</div>            
                <Divider/>
            </div>
            ))}
            <div className="fila">
                <div className="fecha">21/11/2022</div>
                <div className="descripcion">Feriado con fines Turisticos</div>            
            </div>
            <Divider/>
            <div className="fila">
                <div className="fecha">21/11/2022</div>
                <div className="descripcion">Feriado con fines Turisticos</div>            
            </div>   
          
          

           
        </div>
    );
}

export default ListF;

