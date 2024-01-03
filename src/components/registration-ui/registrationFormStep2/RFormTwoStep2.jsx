import React from "react";
import { facilityFees } from "../../../utils/data";

const RFormTwoStep2 = () => {
  return (
    <>
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
    </>
  );
};

export default RFormTwoStep2;
