/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { rfInput_label_class } from "../../lib/constants";

const tick = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="5"
    stroke="currentColor"
    class="w-3 h-3"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);

const CheckInput = ({ value, label, setValue }) => {
  return (
    <div
      onClick={() => setValue(label)}
      className="flex items-center gap-1 cursor-pointer"
    >
      <div
        className={`bg-gray-300 border border-gray-400 size-[15px] rounded text-darkPrimary flex justify-center items-center ${
          value === label && "bg-primary bg-opacity-20"
        }`}
      >
        {value === label && tick}
      </div>
      {label && <p className={` ${rfInput_label_class} !mb-0`}>{label}</p>}
    </div>
  );
};

export default CheckInput;
