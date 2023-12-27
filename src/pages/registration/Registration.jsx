import React, { useState } from "react";
import RFStep2 from "../../components/registration-ui/registrationFormStep/RFStep2";
import RfStep1 from "../../components/registration-ui/registrationFormStep/RfStep1";
import { useForm } from "react-hook-form";
import RFStep3 from "../../components/registration-ui/registrationFormStep/RFStep3";
import RFStep4 from "../../components/registration-ui/registrationFormStep/RFStep4";
import RFStep5 from "../../components/registration-ui/registrationFormStep/RFStep5";
import RFStep6 from "../../components/registration-ui/registrationFormStep/RFStep6";
import RFStep7 from "../../components/registration-ui/registrationFormStep/RFStep7";

const Registration = () => {
  const {
    handleSubmit,
    register,
    setError,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);
  return (
    <form className="max-w-[1000px] mx-auto w-full py-8 px-2">
      <div className="flex justify-between flex-wrap gap-4 md:gap-0">
        <div className="flex items-center gap-1">
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">Date:</h1>
          <input
            type="text"
            className="border-b outline-none h-9 py-0 border-gray-900"
          />
        </div>
        <div className="flex items-center gap-1">
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">
            Reason for Visit:
          </h1>
          <input
            type="text"
            className="border-b outline-none h-9 py-0 border-gray-900"
          />
        </div>
      </div>
      <RfStep1
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
      />
      <RFStep2
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />
      <RFStep3
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />
      <RFStep4
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />
      <RFStep5
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />
      <RFStep6
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />
      <RFStep7
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />

      <div className="flex justify-center pt-20 pb-3">
        {step === 9 ? (
          <button
            type="submit"
            className="w-32 h-10 bg-green-600 hover:bg-green-700 duration-150 cursor-pointer text-white text-base leading-[18px] tracking-[0.4px] border-none flex justify-center items-center"
          >
            Submit
          </button>
        ) : (
          <div
            onClick={() => setStep(step + 1)}
            className="w-32 h-10 bg-green-600 hover:bg-green-700 duration-150 cursor-pointer text-white text-base leading-[18px] tracking-[0.4px] border-none flex justify-center items-center"
          >
            Next
          </div>
        )}
      </div>
    </form>
  );
};

export default Registration;
