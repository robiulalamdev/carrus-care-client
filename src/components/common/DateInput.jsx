/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import DatePicker from "react-datepicker";

const DateInput = ({ value, setValue, error, className }) => {
  const dateRef = useRef();

  useEffect(() => {
    if (error || !value) {
      dateRef.current.focus();
    }
  }, [error, !value]);
  return (
    <div ref={dateRef} tabIndex={0}>
      <DatePicker
        selected={value}
        onChange={(date) => setValue(date)}
        isClearable
        showTimeSelect={false}
        dateFormat="dd/MM/yyyy"
        className={`border-b outline-none focus:outline-none h-9 py-0 border-gray-900 w-full ${
          className && className
        } ${error && "border-b border-red-600"}`}
      />
    </div>
  );
};

export default DateInput;
