import React, { useState } from "react";
import "../../components/Calendar/Calendar.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const renderCalendar = () => {
    const currentMonth = selectedDate.getMonth();
    const currentYear = selectedDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const lastDayIndex = new Date(currentYear, currentMonth, daysInMonth).getDay();

    const days = [];

    //Agrego celdas para los dias antest del dia primero del mes
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<div className="calendar-day blank"></div>);
    }

    //Agrego celdas para cada dia del mes 
    for (let i = 1; i <= daysInMonth; i++) {
      const selected = selectedDate.getDate() === i ? "selected" : "";
      days.push(
        <div
          className={`calendar-day ${selected}`}
          onClick={() => handleDateClick(new Date(currentYear, currentMonth, i))}
        >
          {i}
        </div>
      );
    }

    //Celdas que se agregan para el despues del ultimo dia del mes
    for (let i = lastDayIndex; i < 6; i++) {
      days.push(<div className="calendar-day blank"></div>);
    }

    return days;
  };

  return <div className="calendar-container">{renderCalendar()}</div>;
};

export default Calendar;








//2DA FORMAA

// import React, { useState } from "react";
// import { TextField } from "@mui/material";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import '../../components/Calendar/Calendar.css';

// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <StaticDatePicker
//         value={selectedDate}
//         onChange={handleDateChange}
//         renderInput={(params) => <TextField {...params} />}
//         renderDay={(date, _selectedDate, DayComponentProps) => {
//           return (
//             <div
//               {...DayComponentProps}
//               className={`calendar-day ${DayComponentProps.inRange && "calendar-day-in-range"} ${DayComponentProps.selected && "calendar-day-selected"}`}
//             >
//               {date.getDate()}
//             </div>
//           );
//         }}
//       />
//     </LocalizationProvider>
//   );
// };

// export default Calendar;



//FORMA UNO]]]


// import React, {useState} from "react";
// import { TextField } from "@mui/material";
// import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import Badge  from "@mui/material/Badge";
// import { PickersDay } from "@mui/x-date-pickers/PickersDay";
// import CheckIcon from '@mui/icons-material/Check';
// // import '../../components/Calendar/Calendar.css';
// import './Calendar.css';
// const Calendar = () => { 
//     const [value, setValue] = useState(new Date());
//     const [highlighedDays, setHighlightedDays] = useState([1, 2, 13]);
//     return(
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <div className="calendar-container">
//             <StaticDatePicker
//             variant='static'
//             // orientation='portrait'
//             value={value}
//             // disableFuture
//             onChange={(newValue => setValue(newValue))}
//             renderInput={(params) => {
//                 <div{...params} />;
//             }}
//             renderDay ={(day, _value, DayComponentProps) => {
//                 const isSelected = 
//                 !DayComponentProps.outsideCurrentMonth && 
//                 highlighedDays.indexOf(day.getDate()) >= 0;

//         return(
//             <Badge
//             key={day.toString()}
//             overlap='rectangular'
//             badgeContent={isSelected ? <CheckIcon color="red"/> : undefined}>
           
//                 <PickersDay {...DayComponentProps}
//                 className="MuiPickersDay-day"/>
//                 </Badge>
//         );
//             }}
// />
//             </div>
//         </LocalizationProvider>
//     );
// };

// export default Calendar;

 




// 2DA FORMA ---- 

// import { CalendarPicker } from "@mui/lab";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from "@mui/lab/LocalizationProvider";

// const Calendar = () => {
//     return(
// <LocalizationProvider dateAdapter={AdapterDateFns}>
//     <CalendarPicker/>
// </LocalizationProvider>
//     );
// };

// export default Calendar;



