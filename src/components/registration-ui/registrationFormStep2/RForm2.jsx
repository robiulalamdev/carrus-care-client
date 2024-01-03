/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import RFormTwoStep1 from "./RFormTwoStep1";
import RFormTwoStep2 from "./RFormTwoStep2";
import RFormTwoStep3 from "./RFormTwoStep3";
import { Spinner } from "@material-tailwind/react";
import { usePostPatientRegisterMutation } from "../../../redux/features/form/formApi";

const RForm2 = ({ step, setStep, data }) => {
  const [postPatientRegister, { isLoading }] = usePostPatientRegisterMutation();
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
  const [form2Step, setForm2Step] = useState(1);
  const dispatch = useDispatch();

  const handleSecondForm = async (data) => {
    if (data) {
      if (form2Step >= 3) {
        const options = {
          data: data,
        };
        const result = await postPatientRegister(options);
        if (result?.data?.success) {
          reset();
          toast.success("Form Submit Success");
          setStep(3);
        } else {
          toast.error("Form Submit Failed");
        }
      } else {
        setForm2Step(form2Step + 1);
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
      onSubmit={handleSubmit(handleSecondForm)}
      className={`${step === 2 ? "block" : "hidden"}`}
    >
      {form2Step === 1 && <RFormTwoStep1 />}
      {form2Step === 2 && <RFormTwoStep2 />}
      {form2Step === 3 && (
        <RFormTwoStep3
          setValue={setValue}
          control={control}
          errors={errors}
          register={register}
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
            <>{form2Step >= 3 ? "Submit" : "Next"}</>
          )}
        </button>
      </div>
    </form>
  );
};

export default RForm2;
