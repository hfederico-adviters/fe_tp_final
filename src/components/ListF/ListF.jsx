import React from "react";
import '../../components/ListF/ListF.css'
import { Divider } from "@mui/material";
import CustomizedDialogs from "../ModalHoliday/ModalHoliday";

const ListF = () => {
    return(
        <div className="contenedor">
            <CustomizedDialogs/>
            <h1> Feriados</h1>
            <div className="fila">
                <div className="fecha">21/11/2022</div>
                <div className="descripcion">Feriado con fines Turisticos</div>            
            </div>
            <Divider/>
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