/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import RfStepF1 from "./RfStepF1";
import RFStepF2 from "./RFStepF2";
import RFStepF3 from "./RFStepF3";
import RFStepF4 from "./RFStepF4";
import RFStepF5 from "./RFStepF5";
import RFStepF6 from "./RFStepF6";
import RFStepF7 from "./RFStepF7";
import DateInput from "../../common/DateInput";
import { toast } from "react-toastify";
import { Spinner } from "@material-tailwind/react";
import { usePostPROneMutation } from "../../../redux/features/form/formApi";

const RForm1 = ({ step, setStep, show, data }) => {
  const [postPROne, { isLoading }] = usePostPROneMutation();
  const {
    handleSubmit,
    register,
    setError,
    setValue,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const [form1Step, setForm1Step] = useState(1);

  const handleFirstForm = async (data) => {
    if (data) {
      if (form1Step >= 7) {
        const options = {
          data: data,
        };
        console.log(data);
        const result = await postPROne(options);
        if (result?.data?.success) {
          reset();
          toast.success("Form Submit Success");
          setStep(2);
        } else {
          toast.error("Form Submit Failed");
        }
      } else {
        setForm1Step(form1Step + 1);
      }
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
      onSubmit={handleSubmit(handleFirstForm)}
      className={`${step === 1 ? "block" : "hidden"}`}
    >
      <div className="flex justify-between flex-wrap gap-4 md:gap-0">
        <div className="flex items-center gap-1">
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">Date:</h1>
          <Controller
            name="date"
            control={control}
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <DateInput
                value={field.value}
                setValue={(value) => {
                  setValue("date", value);
                  field.onChange(value);
                }}
                error={errors.date}
              />
            )}
            {...register("date", { required: true })}
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

      {form1Step === 1 && (
        <RfStepF1
          step={form1Step}
          handleSubmit={handleSubmit}
          register={register}
          setError={setError}
          setValue={setValue}
          watch={watch}
          control={control}
          errors={errors}
          show={show}
        />
      )}
      {form1Step === 2 && (
        <RFStepF2
          step={form1Step}
          handleSubmit={handleSubmit}
          register={register}
          setError={setError}
          setValue={setValue}
          watch={watch}
          control={control}
          errors={errors}
          show={show}
        />
      )}

      {form1Step === 3 && (
        <RFStepF3
          step={form1Step}
          handleSubmit={handleSubmit}
          register={register}
          setError={setError}
          setValue={setValue}
          watch={watch}
          control={control}
          errors={errors}
          show={show}
        />
      )}

      {form1Step === 4 && (
        <RFStepF4
          step={form1Step}
          handleSubmit={handleSubmit}
          register={register}
          setError={setError}
          setValue={setValue}
          watch={watch}
          control={control}
          errors={errors}
          show={show}
        />
      )}

      {form1Step === 5 && (
        <RFStepF5
          step={form1Step}
          handleSubmit={handleSubmit}
          register={register}
          setError={setError}
          setValue={setValue}
          watch={watch}
          control={control}
          errors={errors}
          show={show}
        />
      )}

      {form1Step === 6 && (
        <RFStepF6
          step={form1Step}
          handleSubmit={handleSubmit}
          register={register}
          setError={setError}
          setValue={setValue}
          watch={watch}
          control={control}
          errors={errors}
          show={show}
        />
      )}

      {form1Step === 7 && (
        <RFStepF7
          step={form1Step}
          handleSubmit={handleSubmit}
          register={register}
          setError={setError}
          setValue={setValue}
          watch={watch}
          control={control}
          errors={errors}
          show={show}
        />
      )}

      <div className="flex justify-center pt-20 pb-3">
        <button
          type="submit"
          className="w-32 h-10 bg-green-600 hover:bg-green-700 duration-150 cursor-pointer text-white text-base leading-[18px] tracking-[0.4px] border-none flex justify-center items-center"
        >
          {isLoading ? (
            <Spinner color="white" />
          ) : (
            <>{form1Step >= 7 ? "Submit" : "Next"}</>
          )}
        </button>
      </div>
    </form>
  );
};

export default RForm1;
