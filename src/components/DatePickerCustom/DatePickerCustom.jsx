import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from "date-fns";
import MaskInputDate from "../MaskInputDate/MaskInputDate";
import { days, months } from "./contants/date";
const DatePickerCustom = ({ label, input, meta, date, ...rest }) => {
  const value = date ? date : input?.value;
  const fecha = new Date(value);
  const day = fecha.getDate();
  const dayDescription = days[fecha.getDay()];
  const month = months[fecha.getMonth() + 1];
  return (
    <>
      <div className="class1">
        <label for={label}>
          <MaskInputDate
            month={month ? month : label}
            day={day ? day : ""}
            dayDescription={dayDescription ? dayDescription : ""}
          />
        </label>
        <DatePicker
          id={label}
          onChange={(date) => {
            input?.onChange(date);
          }}
          minDate={new Date()}
          value={value}
          highlightDates={[new Date("2023/04/25")]}
          {...rest}
        />
      </div>
    </>
  );
};
export default DatePickerCustom;
