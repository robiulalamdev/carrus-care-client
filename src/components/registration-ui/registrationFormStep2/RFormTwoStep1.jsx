import {
  patientNotificationArray,
  patientNotificationArraySpanish,
} from "../../../utils/data";

const RFormTwoStep1 = () => {
  return (
    <>
      <div className="mt-10 max-w-[800px] mx-auto">
        <h1 className="text-center font-bold text-[18px] underline leading-[22px] tracking-[0.4px]">
          In accordance with Texas House Bill No. 2041 – <br /> Patient
          Notification:
        </h1>

        <ul className="list-disc mt-8">
          {patientNotificationArray?.map((value, index) => (
            <li key={index} className="text-sm text-gray-700 mt-3">
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 max-w-[800px] mx-auto">
        <h1 className="text-center font-bold text-[18px] underline leading-[22px] tracking-[0.4px]">
          De acuerdo con el Proyecto de ley de Texas House No. 2041 <br />{" "}
          Notification al Paciente:
        </h1>
        <ul className="list-disc mt-8">
          {patientNotificationArraySpanish?.map((value, index) => (
            <li key={index} className="text-sm text-gray-700 mt-3">
              {value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RFormTwoStep1;
