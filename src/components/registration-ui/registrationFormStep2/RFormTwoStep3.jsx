/* eslint-disable react/prop-types */
import React from "react";
import { facilityFeesRange, physicianFees } from "../../../utils/data";
import { Controller } from "react-hook-form";
import SignatureInput from "../../common/SignatureInput";
import DateInput from "../../common/DateInput";

const RFormTwoStep3 = ({ setValue, control, errors, register }) => {
  return (
    <>
      <div className="mt-10">
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

      <div className="mt-16">
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

      <div className="mt-8 grid md:grid-cols-3 items-end gap-4">
        <div className="flex flex-col gap-1 col-span-2 max-w-[350px]">
          <Controller
            name="patient_statement_signature"
            control={control}
            // rules={{ required: "Signature is required" }}
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
                required={true}
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
    </>
  );
};

export default RFormTwoStep3;
