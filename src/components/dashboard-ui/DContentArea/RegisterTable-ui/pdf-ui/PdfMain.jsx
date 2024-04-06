/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Dialog } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import RfStepF1 from "../../../../registration-ui/registrationFormStep1/RfStepF1";
import RFStepF2 from "../../../../registration-ui/registrationFormStep1/RFStepF2";
import RFStepF3 from "../../../../registration-ui/registrationFormStep1/RFStepF3";
import RFStepF4 from "../../../../registration-ui/registrationFormStep1/RFStepF4";
import RFStepF5 from "../../../../registration-ui/registrationFormStep1/RFStepF5";
import RFStepF6 from "../../../../registration-ui/registrationFormStep1/RFStepF6";
import RFStepF7 from "../../../../registration-ui/registrationFormStep1/RFStepF7";
import { Controller, useForm } from "react-hook-form";
import RFormTwoStep1 from "../../../../registration-ui/registrationFormStep2/RFormTwoStep1";
import RFormTwoStep2 from "../../../../registration-ui/registrationFormStep2/RFormTwoStep2";
import RFormTwoStep3 from "../../../../registration-ui/registrationFormStep2/RFormTwoStep3";
import RFormThreeStep1 from "../../../../registration-ui/registrationFormStep3/RFormThreeStep1";
import RFormThreeStep2 from "../../../../registration-ui/registrationFormStep3/RFormThreeStep2";

import logo from "../../../../../assets/brand/logo.png";
import { RingLoader } from "react-spinners";
import DateInput from "../../../../common/DateInput";
import { useReactToPrint } from "react-to-print";

const PdfMain = ({ data, setData, printOrder }) => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
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

  const handlePrint = useReactToPrint({
    content: () => formRef.current,
    pageStyle: `
      @media print {
        .myform {
          page-break-after: always;
          size: tabloid;
          margin: 20px 0px;
          transform: scale(0.6);
        }
      }
    `,
    onAfterPrint: () => {
      setIsLoading(false);
      setData(null);
    },
    removeAfterPrint: true,
  });

  useEffect(() => {
    setIsLoading(true);
    setNestedValues(data?.prfOneData);
    setNestedValues(data?.prfTwoData);
    setNestedValues(data?.prfThreeData);
    if (data) {
      var form = document.getElementById("myform");
      var elements = form.elements;
      for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].readOnly = true;
      }
    }

    if (data && printOrder) {
      setTimeout(() => {
        handlePrint();
      }, 2000);
    }
  }, [data]);

  console.log(printOrder);

  const isF1 = printOrder === "F1" || printOrder === "All";
  const isF2 = printOrder === "F2" || printOrder === "All";
  const isF3 = printOrder === "F3" || printOrder === "All";

  return (
    <>
      <Dialog
        open={data ? true : false}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="mx-auto w-full text-current max-h-screen overflow-y-auto"
        size="xxl"
      >
        {isLoading && (
          <div className="min-h-screen w-full flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 z-50 bg-gray-900 bg-opacity-30">
            <div className="w-72 h-72 bg-white shadow-xl rounded-md flex flex-col justify-center items-center gap-4">
              <RingLoader color="#993132" />
              <h1 className="font-bold">PDF Creating</h1>
            </div>
          </div>
        )}

        <form
          className="max-w-[1200px] w-full mx-auto p-2 pb-16"
          id="myform"
          ref={formRef}
        >
          {isF1 && (
            <>
              <div className="p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <img className="w-[180px] pb-5" src={logo} alt="" />
                    <h1 className="text-2xl font-bold text-black">
                      Patient Registration Form
                    </h1>
                  </div>
                  <div className="flex flex-col gap-1 w-[140px] h-fit py-2 px-2 border-2 border-gray-900 text-gray-900">
                    <h1>Patient</h1>
                    <h1>ID</h1>
                    <h1>Sticker</h1>
                  </div>
                </div>

                <div className="flex justify-between gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <h1 className="font-bold leading-[18px] tracking-[0.2px]">
                      Date:
                    </h1>
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
                    />
                  </div>
                </div>
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
              </div>
              <div className="p-8">
                <img className="w-[180px] pb-5" src={logo} alt="" />
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
              </div>
              <div className="p-8">
                <img className="w-[180px] pb-5" src={logo} alt="" />
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
              </div>

              <div className="p-8">
                <img className="w-[180px] pb-5" src={logo} alt="" />
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
              </div>
              <div className="p-8">
                <img className="w-[180px] pb-5" src={logo} alt="" />
                <RFStepF5
                  step={5}
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
              <div className="p-8">
                <img className="w-[180px] pb-5" src={logo} alt="" />
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
              </div>
              <div className="p-8">
                <img className="w-[180px] pb-5" src={logo} alt="" />
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
            </>
          )}

          {isF2 && (
            <>
              <div className="p-8">
                <img className="w-[180px] pb-5" src={logo} alt="" />
                <RFormTwoStep1 />
              </div>
              <div className="p-8">
                <img className="w-[180px] pb-5" src={logo} alt="" />
                <RFormTwoStep2 />
              </div>

              <div className="p-8">
                <img className="w-[180px] pb-5" src={logo} alt="" />
                <RFormTwoStep3
                  setValue={setValue}
                  control={control}
                  errors={errors}
                  register={register}
                />
              </div>
            </>
          )}

          {isF3 && (
            <>
              <div className="p-8">
                <img className="w-[180px] pb-5" src={logo} alt="" />
                <RFormThreeStep1
                  register={register}
                  watch={watch}
                  control={control}
                  setValue={setValue}
                  errors={errors}
                />
              </div>
              <div className="p-8">
                <img className="w-[180px] pb-5" src={logo} alt="" />
                <RFormThreeStep2
                  register={register}
                  watch={watch}
                  control={control}
                  setValue={setValue}
                  errors={errors}
                />
              </div>
            </>
          )}
        </form>
      </Dialog>
    </>
  );
};

export default PdfMain;
