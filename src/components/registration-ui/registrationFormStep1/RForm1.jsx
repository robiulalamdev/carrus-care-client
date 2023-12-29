/* eslint-disable react/prop-types */
import React from "react";
import { useForm } from "react-hook-form";
import RfStepF1 from "./RfStepF1";
import RFStepF2 from "./RFStepF2";
import RFStepF3 from "./RFStepF3";
import RFStepF4 from "./RFStepF4";
import RFStepF5 from "./RFStepF5";
import RFStepF6 from "./RFStepF6";
import RFStepF7 from "./RFStepF7";
import { useDispatch } from "react-redux";
import { setRForm1 } from "../../../redux/features/form/formSlice";

const RForm1 = ({ step, setStep }) => {
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
  const handleFirstForm = (data) => {
    if (data) {
      dispatch(setRForm1(data));
      setStep(2);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleFirstForm)}
      className={`${step === 1 ? "block" : "hidden"}`}
    >
      <div className="flex justify-between flex-wrap gap-4 md:gap-0">
        <div className="flex items-center gap-1">
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">Date:</h1>
          <input
            {...register("date", { required: true })}
            type="date"
            className="border-b outline-none h-9 py-0 border-gray-900"
          />
        </div>
        <div className="flex items-center gap-1">
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">
            Reason for Visit:
          </h1>
          <input
            {...register("reason_for_visit", { required: true })}
            type="text"
            className="border-b outline-none h-9 py-0 border-gray-900"
          />
        </div>
      </div>
      <RfStepF1
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />
      <RFStepF2
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />
      <RFStepF3
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />
      <RFStepF4
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />
      <RFStepF5
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />
      <RFStepF6
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />
      <RFStepF7
        step={step}
        handleSubmit={handleSubmit}
        register={register}
        setError={setError}
        setValue={setValue}
        watch={watch}
        control={control}
      />

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

export default RForm1;
