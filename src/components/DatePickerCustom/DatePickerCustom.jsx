import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import MaskInputDate from "../MaskInputDate/MaskInputDate";
const DatePickerCustom = () => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  console.log(open);
  return (
    <>
      <MaskInputDate
        month={""}
        day={""}
        dayDescription={""}
        onClick={() => setOpen(!open)}
      />
      {open && (
        <DatePicker
          id="dateCustomer"
          isOpen={open}
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setOpen(false);
          }}
          // onCalendarClose={() => open && setOpen(false)}
          value={startDate}
        />
      )}
    </>
  );
};
export default DatePickerCustom;
