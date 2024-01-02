/* eslint-disable no-unused-vars */
import React from "react";

const RFStepF3 = ({
  step,
  handleSubmit,
  register,
  setError,
  setValue,
  watch,
  control,
  show,
}) => {
  return (
    <div className={`${step === 3 ? "block" : "hidden"}`}>
      <div className="flex flex-col gap-4 mt-16">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          ACCIDENTAL BODILY FLUID EXPOSURE TO HEALTHCARE WORKER
        </h1>
        <p className="text-justify text-sm text-gray-900">
          This consent includes testing for communicable of blood-borne
          diseases, including, without limitation, Human Immunodeficiency Virus
          (HIV), Acquired Immunodeficiency Virus (AIDS), and Hepatitis if a
          physician orders such test(s) for diagnostic or treatment purposes. I
          understand that in the case of an accidental exposure to blood or
          other body fluids, state law allows the Emergency Room to test a
          patient that has exposed healthcare worker to HIV without obtaining
          the person’s consent. I understand the potential side effects and
          complications of this testing are generally minor and are comparable
          to the routine collections of blood specimens, including discomfort
          from the needle stick and/or slight burning, bleeding, or soreness at
          the puncture site. The results of this test will become part of my
          confidential medical record.
        </p>
      </div>
      {/* signeture 2nt part */}
      <div className="flex justify-between items-end flex-wrap gap-4 mt-16">
        <div className="flex items-center gap-1 flex-wrap">
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">
            Acknowledge:
          </h1>
          <input
            {...register("acknowledge_b", {
              required: true,
            })}
            type="text"
            className="border-b outline-none h-9 py-0 border-gray-900"
          />
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">
            (Initial)
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-16">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          SMOKING POLICY
        </h1>
        <p className="text-justify text-sm text-gray-900">
          To maintain the health and safety of patients, visitors, and staff,
          Care Plus ER is a strictly enforced smoke-free environment Care Plus
          ER is not responsible for any claim or harm arising from smoking, or
          from my leaving the facility for the purpose of smoking or consuming
          tobacco products.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          PERSONAL VALUABLES
        </h1>
        <p className="text-justify text-sm text-gray-900">
          Although the facility will make all reasonable efforts in safeguarding
          my valuables, I understand that Care Plus ER is not responsible for
          the loss or damage of personal valuables.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          ASSIGNMENT OF INSURANCE BENEFITS
        </h1>
        <p className="text-justify text-sm text-gray-900">
          I assign Care Plus ER all rights, title, and interest in any and all
          health insurance and/or health plan proceeds/benefits from any plan(s)
          arising from the provision of any goods and services provided by Care
          Plus ER and/or physicians/healthcare providers thereof. This
          assignment is made in accordance with §1204.054, Texas Insurance Code.
        </p>
      </div>

      <div className="flex justify-between items-end flex-wrap gap-4 mt-16">
        <div className="flex items-center gap-1 flex-wrap">
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">
            Acknowledge:
          </h1>
          <input
            {...register("acknowledge_c", {
              required: true,
            })}
            type="text"
            className="border-b outline-none h-9 py-0 border-gray-900"
          />
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">
            (Initial)
          </h1>
        </div>
        <h1 className="text-center text-sm leading-[18px] tracking-[0.2px] font-semibold">
          Patient ID Sticker
        </h1>
      </div>
    </div>
  );
};

export default RFStepF3;
