/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import logo from "../../../assets/brand/logo.png";
import {
  facilityFees,
  facilityFeesRange,
  patientNotificationArray,
  patientNotificationArraySpanish,
  physicianFees,
} from "../../../utils/data";

const RForm2 = ({ step, setStep }) => {
  const {
    handleSubmit,
    register,
    setError,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const handleSecondForm = (data) => {
    console.log(data);
    setStep(step + 1);
  };
  return (
    <form
      onSubmit={handleSubmit(handleSecondForm)}
      className={`${step === 2 ? "block" : "hidden"}`}
    >
      <div>
        <img className="w-56 mx-auto" src={logo} alt="" />
        <h1 className="text-gray-800 text-sm text-center leading-[18px] tracking-[0.2px] font-medium">
          8111 W. Grand Parkway S.
        </h1>
        <h1 className="text-gray-800 text-sm text-center leading-[18px] tracking-[0.2px] font-medium">
          Richmond, TX 77407
        </h1>
        <h1 className="text-gray-800 text-sm text-center leading-[18px] tracking-[0.2px] font-medium">
          (832) 770-6380
        </h1>
      </div>
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
      <div className="mt-20">
        <h1 className="text-center font-bold text-[18px] underline leading-[22px] tracking-[0.4px]">
          Disclosure Statement/Declaracion de Divulgacion
        </h1>

        <div className="grid grid-cols-1 gap-4 mt-10">
          <h1 className="text-gray-800 font-bold text-base leading-[22px] tracking-[0.4px]">
            Facility fees that may result from the patient’s visit / Tarifas de
            la instalacion que pueden resultar de la visita del paciente
          </h1>
          <h1 className="text-gray-800 font-bold text-base leading-[22px] tracking-[0.4px]">
            Median ER Fees/Tarifas promedio de la sala de emergencias: $3200{" "}
            <br />
            Median Observation Fees/Tarifas de observacion promedio: $7000
          </h1>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="font-bold text-[18px] leading-[22px] tracking-[0.4px] mb-2">
          Facility Fees/TARIFAS:
        </h1>
        <div className="grid grid-cols-2 min-h-8 border border-gray-900 text-center text-gray-800 font-bold text-base leading-[22px] tracking-[0.4px]">
          <div className="w-full border-r border-gray-900 flex justify-center items-center">
            <h1 className="text-sm md:text-base">
              LEVEL OF SERVICE/NIVEL DE SERVICIO
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <h1 className="text-sm md:text-base">FACILITY FEE/TARIFA</h1>
          </div>
        </div>
        {facilityFees?.map((ff, index) => (
          <div
            key={index}
            className="grid grid-cols-2 border-x border-b border-gray-900 h-fit"
          >
            <div className="grid grid-cols-1 gap-1 text-center border-r border-gray-900 p-2">
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px]">
                {ff.levelOfService}
              </h1>
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px]">
                {ff.nivelDeServicio}
              </h1>
            </div>
            <div className="flex justify-center items-center w-full p-2">
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px]">
                {ff.facilityFee}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-2 min-h-8 border border-gray-900 text-center text-gray-800 font-bold text-base leading-[22px] tracking-[0.4px]">
          <div className="w-full border-r border-gray-900 flex justify-center items-center">
            <h1 className="text-sm md:text-base">
              LEVEL OF SERVICE/NIVEL DE SERVICO
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <h1 className="text-sm md:text-base">
              RANGE OF POSSIBLE FACILITY FEES FOR SERVICE/RANGO DE POSIBLES
              CUOTAS POR EL SERVICIO
            </h1>
          </div>
        </div>
        {facilityFeesRange?.map((ff, index) => (
          <div
            key={index}
            className="grid grid-cols-2 border-x border-b border-gray-900 h-fit"
          >
            <div className="grid grid-cols-1 gap-1 text-center border-r border-gray-900 p-2">
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px]">
                {ff.levelOfService}
              </h1>
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px]">
                {ff.nivelDeServicio}
              </h1>
            </div>
            <div className="flex justify-center items-center w-full p-2">
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px]">
                {ff.feeRange}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32">
        <h1 className="font-bold text-[18px] leading-[22px] tracking-[0.4px] mb-2">
          Physician Fees/Cargos del Medico:
        </h1>
        <div className="grid grid-cols-2 min-h-8 border border-gray-900 text-center text-gray-800 font-bold text-base leading-[22px] tracking-[0.4px]">
          <div className="w-full border-r border-gray-900 flex justify-center items-center">
            <h1 className="text-sm md:text-base">
              LEVEL OF CARE/NIVEL DE CUIDADO MEDICO
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <h1 className="text-sm md:text-base">
              PHYSICIAN FEE/ CARGOS DE MEDICO
            </h1>
          </div>
        </div>
        {physicianFees?.map((ff, index) => (
          <div
            key={index}
            className="grid grid-cols-2 border-x border-b border-gray-900 h-fit"
          >
            <div className="grid grid-cols-1 gap-1 text-center border-r border-gray-900 p-2">
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px]">
                {ff.levelOfCare}
              </h1>
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px]">
                {ff.nivelDeCuidado}
              </h1>
            </div>
            <div className="flex justify-center items-center w-full p-2">
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px]">
                {ff.physicianFee}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1 col-span-2 max-w-[350px]">
          <input
            type="text"
            className="border-b outline-none h-8 w-full py-0 border-gray-900"
          />
          <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-medium">
            Patient Signature/Firma
          </h1>
        </div>
        <div className="flex flex-col gap-1 max-w-[350px]">
          <input
            type="text"
            className="border-b outline-none h-8 w-full py-0 border-gray-900"
          />
          <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-medium">
            Date/Fecha
          </h1>
        </div>
      </div>

      <div className="flex justify-center pt-20 pb-3">
        <button
          type="submit"
          className="w-32 h-10 bg-green-600 hover:bg-green-700 duration-150 cursor-pointer text-white text-base leading-[18px] tracking-[0.4px] border-none flex justify-center items-center"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default RForm2;