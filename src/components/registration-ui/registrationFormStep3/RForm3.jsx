/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { usePostPRThreeMutation } from "../../../redux/features/form/formApi";
import { Spinner } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import RFormThreeStep1 from "./RFormThreeStep1";
import RFormThreeStep2 from "./RFormThreeStep2";
import { useSelector } from "react-redux";

const RForm3 = ({ step, setStep, data }) => {
  const [postPRThree, { isLoading }] = usePostPRThreeMutation();
  const { prfId } = useSelector((state) => state.form);
  const {
    handleSubmit,
    register,
    setError,
    setValue,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const [form3Step, setForm3Step] = useState(1);

  const handleSaveData = async (data) => {
    if (data) {
      if (form3Step >= 2) {
        const options = {
          data: { ...data, prfOne: prfId },
        };
        const result = await postPRThree(options);
        if (result?.data?.success) {
          reset();
          toast.success("Form Submit Success");
          setStep(1);
          window.location.reload();
        } else {
          toast.error("Form Submit Failed");
        }
      } else {
        setForm3Step(form3Step + 1);
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
      onSubmit={handleSubmit(handleSaveData)}
      className={`${step === 3 ? "block" : "hidden"}`}
    >
      {form3Step === 1 && (
        <RFormThreeStep1
          register={register}
          watch={watch}
          control={control}
          setValue={setValue}
          errors={errors}
        />
      )}
      {form3Step === 2 && (
        <RFormThreeStep2
          register={register}
          watch={watch}
          control={control}
          setValue={setValue}
          errors={errors}
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
            <>{form3Step >= 2 ? "Submit" : "Next"}</>
          )}
        </button>
      </div>
    </form>
  );
};

export default RForm3;
