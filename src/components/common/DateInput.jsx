/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { useLocation } from "react-router-dom";

const DateInput = ({ value, setValue, error, className }) => {
  const dateRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (error || !value) {
      dateRef.current.focus();
    }
  }, [error, !value]);

  return (
    <div ref={dateRef} tabIndex={0}>
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={(date) => setValue(date)}
        isClearable
        showTimeSelect={false}
        dateFormat="dd/MM/yyyy"
        className={`border-b outline-none focus:outline-none h-9 py-0 border-gray-900 w-full ${
          className && className
        } ${error && "border-b border-red-600"}`}
        disabled={pathname?.includes("/dashboard") ? true : false}
      />
    </div>
  );
};

export default DateInput;
