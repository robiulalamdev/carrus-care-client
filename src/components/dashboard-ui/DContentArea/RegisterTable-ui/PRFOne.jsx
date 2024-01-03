/* eslint-disable react/prop-types */
import moment from "moment";

const PRFOne = ({ data }) => {
  return (
    <div>
      <div className="flex justify-between flex-wrap gap-4 md:gap-0">
        <div className="flex items-center gap-1">
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">Date:</h1>
          <p className="w-full border-b border-gray-900">
            {moment(data?.date).format("DD MMM YYYY")}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">
            Reason for Visit:
          </h1>
          <div className="border-b border-gray-900">
            {data?.reason_for_visit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRFOne;
