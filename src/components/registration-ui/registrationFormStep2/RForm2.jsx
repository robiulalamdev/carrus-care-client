/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import RFormTwoStep1 from "./RFormTwoStep1";
import RFormTwoStep2 from "./RFormTwoStep2";
import RFormTwoStep3 from "./RFormTwoStep3";
import { Spinner } from "@material-tailwind/react";
import { usePostPRTwoMutation } from "../../../redux/features/form/formApi";
import { useSelector } from "react-redux";

const RForm2 = ({ step, setStep, data }) => {
  const [postPRTwo, { isLoading }] = usePostPRTwoMutation();
  const { prfId } = useSelector((state) => state.form);
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

  const handleSecondForm = async (data) => {
    if (data) {
      if (form2Step >= 3) {
        const options = {
          data: { ...data, prfOne: prfId },
        };
        const result = await postPRTwo(options);
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
    if (data) {
      var form = document.getElementById("myform");
      var elements = form.elements;
      for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].readOnly = true;
      }
    }
  }, [setValue, data]);
  return (
    <form
      onSubmit={handleSubmit(handleSecondForm)}
      className={`${step === 2 ? "block" : "hidden"}`}
      id="myform"
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

      <div className="flex justify-center pt-10 pb-20">
        <button
          type="submit"
          className="w-32 h-10 bg-primary hover:bg-hp duration-150 cursor-pointer text-white text-base leading-[18px] tracking-[0.4px] border-none flex justify-center items-center"
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
