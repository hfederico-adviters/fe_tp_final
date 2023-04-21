import React, { useEffect, useState } from "react";
import '../../components/ListF/ListF.css'
import {Divider } from "@mui/material";
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
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            <h1 style={{color:"#FFA1A1", marginRight: "1rem"}}>Feriados</h1>
            <CustomizedDialogs setRefreshHolidays={setRefreshHolidays}/>
            </div>
            {holidays.map(holiday => (

                <div key = {holiday.id}className="fila">
                    <div className="fecha">{holiday.date}</div>
                    <div className="descripcion">{holiday.description}</div>
                    <Divider/>
                </div>
                
            ))}
        </div>
    );
}

export default ListF;

