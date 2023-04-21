import React, { useEffect, useState } from "react";
import '../../components/ListF/ListF.css'
import { Divider } from "@mui/material";
import CustomizedDialogs from "../ModalHoliday/ModalHoliday";
import { getHolidays } from "../../services/holidaysServices";
const ListF = () => {

    //intentom de confirmar..
    const [holidays, setHolidays] = useState([]);
    const [refreshHolidays, setRefreshHolidays] = useState(true);
    useEffect( () => {
        if(refreshHolidays){
            console.log(refreshHolidays)
        getHolidays(setHolidays)
        setRefreshHolidays(false)
    }
    },[refreshHolidays, holidays])


    return (
        <div className="contenedorHoliday">
            <CustomizedDialogs setRefreshHolidays={setRefreshHolidays}/>
            <h1>Feriados</h1>
            {holidays.map(holiday => (

                <div key = {holiday.id}className="fila">
                    <div className="fecha">{holiday.date}</div>
                    <div className="descripcion">{holiday.description}</div>
                    <Divider />
                </div>
            ))}
            {/* <div className="fila">
                <div className="fecha">21/11/2022</div>
                <div className="descripcion">Feriado con fines Turisticos</div>
            </div>
            <Divider />
            <div className="fila">
                <div className="fecha">21/11/2022</div>
                <div className="descripcion">Feriado con fines Turisticos</div>
            </div> */}
        </div>
    );
}

export default ListF;

