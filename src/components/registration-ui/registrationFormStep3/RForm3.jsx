/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../../assets/brand/logo.png";

const RForm3 = ({ step, setStep }) => {
  const {
    handleSubmit,
    register,
    setError,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const handleSecondForm = (data) => {
    console.log(data);
    setStep(step + 1);
  };
  return (
    <form
      onSubmit={handleSubmit(handleSecondForm)}
      className={`${step === 3 ? "block" : "hidden"}`}
    >
      <div>
        <img className="w-56 mx-auto" src={logo} alt="" />
        <h1 className="text-gray-800 text-sm text-center leading-[18px] tracking-[0.2px] font-medium">
          8111 W. Grand Parkway S.
        </h1>
        <h1 className="text-gray-800 text-sm text-center leading-[18px] tracking-[0.2px] font-medium">
          Richmond, TX 77407
        </h1>
        <h1 className="text-gray-800 text-sm text-center leading-[18px] tracking-[0.2px] font-medium">
          (832) 770-6380
        </h1>
      </div>
      <h1 className="text-center font-bold text-[18px] leading-[22px] tracking-[0.4px] mt-16">
        AUTHORIZATION TO USE OR DISCLOSE PROTECTED HEALTH INFORMATION
      </h1>
      <p className="text-sm italic text-gray-900 mt-3">
        This authorization may be used to permit a covered entity (as such term
        is defined by HIPAA and applicable Texas law) to use or disclose an
        individual's protected health information. Individuals completing this
        form should read the form in its entirety before signing and complete
        all the sections that apply to their decisions relating to the use or
        disclosure of their protected health information.{" "}
      </p>
      <div className="h-[2px] bg-black mt-2"></div>

      <div className="border border-gray-900 mt-3">
        <div className="p-2">
          <h1 className="font-semibold text-gray-900 text-sm leading-[22px] tracking-[0.2px]">
            Information regarding patient for whom authorization is made:
          </h1>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Full Name:
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Other Name(s) Used:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Date of Birth:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Address:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  City:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  State:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Zip Code:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
            </div>
            <div className="flex justify-between flex-wrap items-start gap-2 w-full">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Phone:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Email: (Optional):
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-x border-b border-gray-900">
        <div className="p-2">
          <h1 className="font-semibold text-gray-900 text-sm leading-[22px] tracking-[0.2px]">
            Information regarding the health care provider of health care entity
            authorized to disclose this information:
          </h1>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Name: Care Plus Emergency Room
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Address:
                </h1>
                <input
                  type="text"
                  value="8111 W Grand Parkway S  "
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  City: Richmond
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  State:
                </h1>
                <input
                  type="text"
                  value="_TX__"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Zip Code:
                </h1>
                <input
                  type="text"
                  value="_77407"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
            </div>

            <div className="flex justify-between flex-wrap items-start gap-2 w-full">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Phone:
                </h1>
                <input
                  type="text"
                  value="(832) _770-6380"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Fax:
                </h1>
                <input
                  type="text"
                  value="(832) _770-6460"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-x border-b border-gray-900">
        <div className="p-2">
          <h1 className="font-semibold text-gray-900 text-sm leading-[22px] tracking-[0.2px]">
            Information regarding person(s)/entity who can receive and use this
            information other than patient:
          </h1>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Name:
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Address:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  City:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  State:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Zip Code:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
            </div>

            <div className="flex justify-between flex-wrap items-start gap-2 w-full">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Phone:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Fax:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RForm3;
