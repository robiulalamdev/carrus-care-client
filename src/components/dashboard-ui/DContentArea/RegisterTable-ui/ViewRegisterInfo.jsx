/* eslint-disable react/prop-types */
import { Dialog } from "@material-tailwind/react";
import { useEffect, useRef } from "react";
import RfStepF1 from "../../../registration-ui/registrationFormStep1/RfStepF1";
import { useForm } from "react-hook-form";
import RFStepF2 from "../../../registration-ui/registrationFormStep1/RFStepF2";
import RFStepF3 from "../../../registration-ui/registrationFormStep1/RFStepF3";
import RFStepF4 from "../../../registration-ui/registrationFormStep1/RFStepF4";
import RFStepF5 from "../../../registration-ui/registrationFormStep1/RFStepF5";
import RFStepF6 from "../../../registration-ui/registrationFormStep1/RFStepF6";
import RFStepF7 from "../../../registration-ui/registrationFormStep1/RFStepF7";
import RFormTwoStep1 from "../../../registration-ui/registrationFormStep2/RFormTwoStep1";
import RFormTwoStep2 from "../../../registration-ui/registrationFormStep2/RFormTwoStep2";
import RFormTwoStep3 from "../../../registration-ui/registrationFormStep2/RFormTwoStep3";
import RFormThreeStep1 from "../../../registration-ui/registrationFormStep3/RFormThreeStep1";
import RFormThreeStep2 from "../../../registration-ui/registrationFormStep3/RFormThreeStep2";

const ViewRegisterInfo = ({
  prfData,
  isClose,
  isPrfOne,
  isPrfTwo,
  isPrfThree,
}) => {
  const {
    handleSubmit,
    register,
    setError,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();

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
    setNestedValues(prfData?.prfOneData);
    setNestedValues(prfData?.prfTwoData);
    setNestedValues(prfData?.prfThreeData);
    if (prfData) {
      var form = document.getElementById("myform");
      var elements = form.elements;
      for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].readOnly = true;
      }
    }
  }, [prfData]);

  return (
    <>
      <Dialog
        open={prfData ? true : false}
        handler={() => isClose()}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className=" mx-auto w-full text-current max-h-screen overflow-y-auto"
        size="xl"
      >
        <form className=" max-w-[1200px] mx-auto p-2 pb-16" id="myform">
          {isPrfOne && (
            <div>
              <RfStepF1
                step={1}
                handleSubmit={handleSubmit}
                register={register}
                setError={setError}
                setValue={setValue}
                watch={watch}
                control={control}
                errors={errors}
                show={false}
              />
              <RFStepF2
                step={2}
                handleSubmit={handleSubmit}
                register={register}
                setError={setError}
                setValue={setValue}
                watch={watch}
                control={control}
                errors={errors}
                show={false}
              />
              <RFStepF3
                step={3}
                handleSubmit={handleSubmit}
                register={register}
                setError={setError}
                setValue={setValue}
                watch={watch}
                control={control}
                errors={errors}
                show={false}
              />
              <RFStepF4
                step={4}
                handleSubmit={handleSubmit}
                register={register}
                setError={setError}
                setValue={setValue}
                watch={watch}
                control={control}
                errors={errors}
                show={false}
              />
              <RFStepF5
                step={4}
                handleSubmit={handleSubmit}
                register={register}
                setError={setError}
                setValue={setValue}
                watch={watch}
                control={control}
                errors={errors}
                show={false}
              />
              <RFStepF6
                step={6}
                handleSubmit={handleSubmit}
                register={register}
                setError={setError}
                setValue={setValue}
                watch={watch}
                control={control}
                errors={errors}
                show={false}
              />
              <RFStepF7
                step={7}
                handleSubmit={handleSubmit}
                register={register}
                setError={setError}
                setValue={setValue}
                watch={watch}
                control={control}
                errors={errors}
                show={false}
              />
            </div>
          )}
          {isPrfTwo && (
            <div>
              <RFormTwoStep1 />
              <RFormTwoStep2 />
              <RFormTwoStep3
                setValue={setValue}
                control={control}
                errors={errors}
                register={register}
              />
            </div>
          )}
          {isPrfThree && (
            <div>
              <RFormThreeStep1
                register={register}
                watch={watch}
                control={control}
                setValue={setValue}
                errors={errors}
              />
              <RFormThreeStep2
                register={register}
                watch={watch}
                control={control}
                setValue={setValue}
                errors={errors}
              />
            </div>
          )}
        </form>
      </Dialog>
    </>
  );
};

export default ViewRegisterInfo;
