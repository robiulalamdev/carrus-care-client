/* eslint-disable react/prop-types */
import { Controller, useForm } from "react-hook-form";

import {
  facilityFees,
  facilityFeesRange,
  patientNotificationArray,
  patientNotificationArraySpanish,
  physicianFees,
} from "../../../utils/data";
import { useDispatch } from "react-redux";
import { setRForm2 } from "../../../redux/features/form/formSlice";
import SignatureInput from "../../common/SignatureInput";
import { useEffect } from "react";
import DateInput from "../../common/DateInput";

const RForm2 = ({ step, setStep, show, data }) => {
  const {
    handleSubmit,
    register,
    setError,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const handleSecondForm = (data) => {
    if (data) {
      dispatch(setRForm2(data));
      setStep(3);
    }
  };

  const setNestedValues = (obj) => {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === "object") {
        for (const nkey in value) {
          const nvalue = value[nkey];
          setValue(`${key}.${nkey}`, nvalue);
        }
      } else {
        setValue(key, value);
      }
    }
  };

  useEffect(() => {
    setNestedValues(data);
  }, [setValue, data]);
  return (
    <form
      onSubmit={handleSubmit(handleSecondForm)}
      className={`${step === 2 ? "block" : "hidden"}`}
    >
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
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px] break-all">
                {ff.levelOfService}
              </h1>
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px] break-all">
                {ff.nivelDeServicio}
              </h1>
            </div>
            <div className="flex justify-center items-center w-full p-2">
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px] break-all">
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
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px] break-all">
                {ff.levelOfService}
              </h1>
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px] break-all">
                {ff.nivelDeServicio}
              </h1>
            </div>
            <div className="flex justify-center items-center w-full p-2">
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px] break-all">
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
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px] break-all">
                {ff.levelOfCare}
              </h1>
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px] break-all">
                {ff.nivelDeCuidado}
              </h1>
            </div>
            <div className="flex justify-center items-center w-full p-2">
              <h1 className="text-gray-800 font-medium md:font-bold text-sm md:text-base leading-[22px] tracking-[0.4px] break-all">
                {ff.physicianFee}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1 col-span-2 max-w-[350px]">
          <Controller
            name="patient_statement_signature"
            control={control}
            rules={{ required: "Signature is required" }}
            render={({ field }) => (
              <SignatureInput
                img={field.value}
                setValue={(value) => {
                  setValue("patient_statement_signature", value);
                  field.onChange(value);
                }}
              />
            )}
          />
          <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-medium">
            Patient Signature/Firma
          </h1>
        </div>
        <div className="flex flex-col gap-1 max-w-[350px]">
          <Controller
            name="patient_statement_signature_date"
            control={control}
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <DateInput
                value={field.value}
                setValue={(value) => {
                  setValue("patient_statement_signature_date", value);
                  field.onChange(value);
                }}
                error={errors.patient_statement_signature_date}
              />
            )}
            {...register("patient_statement_signature_date", {
              required: true,
            })}
          />
          <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-medium">
            Date/Fecha
          </h1>
        </div>
      </div>

      {show && (
        <div className="flex justify-center pt-20 pb-3">
          <button
            type="submit"
            className="w-32 h-10 bg-green-600 hover:bg-green-700 duration-150 cursor-pointer text-white text-base leading-[18px] tracking-[0.4px] border-none flex justify-center items-center"
          >
            Next
          </button>
        </div>
      )}
    </form>
  );
};

export default RForm2;
