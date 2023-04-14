import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import MaskInputDate from "../MaskInputDate/MaskInputDate";
import { days, months } from "./contants/date";
const DatePickerCustom = ({
  label,
  input: { value, onChange },
  meta,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const fecha = new Date(value);
  const day = fecha.getDate();
  const dayDescription = days[fecha.getDay()];
  const month = months[fecha.getDay()];

  return (
    <>
      <MaskInputDate
        month={month ? month : label}
        day={day ? day : ""}
        dayDescription={dayDescription ? dayDescription : ""}
        onClick={() => setOpen(!open)}
      >
        <div className="class1">
          <DatePicker
            id="dateCustomer"
            isOpen={open}
            onChange={(date) => {
              onChange(date);
              setOpen(false);
            }}
            value={value}
          />
        </div>
      </MaskInputDate>
    </>
  );
};
export default DatePickerCustom;
