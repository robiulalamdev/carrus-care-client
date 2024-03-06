/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
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
import { useDispatch } from "react-redux";
import { setPrfId } from "../../../redux/features/form/formSlice";
import NextModal from "../../common/NextModal";

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
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [pictureFile, setPictureFile] = useState(null);
  const [frontPictureFile, setFrontPictureFile] = useState(null);
  const [backPictureFile, setBackPictureFile] = useState(null);

  const pictureRef = useRef();
  const frontPictureRef = useRef();
  const backPictureRef = useRef();

  const handlePictureFile = (file) => {
    if (file) {
      setPictureFile(file);
    } else {
      pictureRef.current.value = null;
    }
  };

  const handleFrontPictureFile = (file) => {
    if (file) {
      setFrontPictureFile(file);
    } else {
      frontPictureRef.current.value = null;
    }
  };

  const handleBackPictureFile = (file) => {
    if (file) {
      setBackPictureFile(file);
    } else {
      backPictureRef.current.value = null;
    }
  };

  const handleFirstForm = async (data) => {
    if (!pictureFile) {
      pictureRef.current.focus();
      return;
    }
    // if (
    //   !frontPictureFile &&
    //   watch("insurance_information.auto_accident") === "Yes"
    // ) {
    //   frontPictureRef.current.focus();
    //   return;
    // }
    // if (
    //   !backPictureFile &&
    //   watch("insurance_information.auto_accident") === "Yes"
    // ) {
    //   backPictureRef.current.focus();
    //   return;
    // }
    if (data) {
      if (form1Step >= 7) {
        const formData = new FormData();
        formData.append("picture", pictureFile);
        formData.append("front_picture", frontPictureFile);
        formData.append("back_picture", backPictureFile);
        formData.append("storeData", JSON.stringify(data));
        const options = {
          data: formData,
        };
        const result = await postPROne(options);
        if (result?.data?.success) {
          reset();
          setOpen(true);
          dispatch(setPrfId(result?.data?.data?._id));
          // setStep(2);
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
    if (data) {
      var form = document.getElementById("myform");
      var elements = form.elements;
      for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].readOnly = true;
      }
    }
  }, [setValue, data]);

  // console.log(errors);

  const handleClose = () => {
    setStep(1);
    setOpen(false);
  };
  const handleNext = () => {
    setOpen(false);
    setStep(2);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [form1Step]);

  useEffect(() => {
    setValue("insurance_information.auto_accident", "Yes");
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFirstForm)}
        className={`${step === 1 ? "block" : "hidden"}`}
        id="myform"
      >
        <div className="flex justify-between flex-wrap gap-4 md:gap-0">
          <div className="flex items-center gap-1">
            <h1 className="font-bold leading-[18px] tracking-[0.2px]">Date:</h1>
            <Controller
              name="date"
              control={control}
              // rules={{ required: "Date is required" }}
              render={({ field }) => (
                <DateInput
                  value={field.value}
                  setValue={(value) => {
                    setValue("date", value);
                    field.onChange(value);
                  }}
                  error={errors.date}
                  required={true}
                />
              )}
              required
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
              required
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
            handlePictureFile={handlePictureFile}
            pictureFile={pictureFile}
            pictureRef={pictureRef}
            // front and back
            handleFrontPictureFile={handleFrontPictureFile}
            handleBackPictureFile={handleBackPictureFile}
            // files
            frontPictureFile={frontPictureFile}
            backPictureFile={backPictureFile}
            // refs
            frontPictureRef={frontPictureRef}
            backPictureRef={backPictureRef}
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

        <i className="text-xs text-red-600 font-semibold">
          *** Remember, fields marked with * must be filled.
        </i>
        <div className="flex justify-center pt-10 pb-20">
          <button
            type="submit"
            className="w-32 h-10 bg-primary hover:bg-hp duration-150 cursor-pointer text-white text-base leading-[18px] tracking-[0.4px] border-none flex justify-center items-center"
          >
            {isLoading ? (
              <Spinner color="white" />
            ) : (
              <>{form1Step >= 7 ? "Submit" : "Next"}</>
            )}
          </button>
        </div>
      </form>
      <NextModal
        open={open}
        handleClose={handleClose}
        handleNext={handleNext}
      />
    </>
  );
};

export default RForm1;
