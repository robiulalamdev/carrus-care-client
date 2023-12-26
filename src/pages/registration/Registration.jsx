import React, { useState } from "react";
import RegistrationPolicy from "../../components/registration-ui/RegistrationPolicy";
import PatientBill from "../../components/registration-ui/PatientBill";

const sInsuranceItems = [
  "Aetna",
  "Blue Cross",
  "Blue Shield",
  "Cigna",
  "Great West",
  "Humana",
  "Tricare",
  "United Healthcare",
  "Other",
];

const members = ["Self", "Spouse"];

const Registration = () => {
  const [pm, setPm] = useState(1);
  const [service, setService] = useState(1);
  const [sInsurance, setSInsurance] = useState("");
  return (
    <div className="max-w-[1000px] mx-auto w-full py-8 px-2">
      <div className="grid  md:grid-cols-2 gap-3 md:gap-0">
        <div className="">
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">
            Date: <span className="font-normal"> _______________</span>
          </h1>
          <h1 className="pt-4 font-semibold leading-[18px] tracking-[0.2px]">
            <span className="font-normal">______________________</span>
          </h1>
        </div>
        <h1 className="text-[20px] font-bold leading-[18px] tracking-[0.2px]">
          Reason for Visit:
        </h1>
      </div>
      <div className="mt-5">
        {/* -------1st part start */}
        <div className="bg-gray-900 text-white text-center py-1">
          <h1>PATIENT INFORMATION</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-7 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Patient’s Last Name:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              First
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Middle
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Mr. Mrs.
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r md:border-none border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Miss Ms.
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Social Security No.:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Phone Number:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Birth Date
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Street Address: Apt./Unit#
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              City/State/Zip:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Preferred Pharmacy
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Pharmacy Phone:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Pharmacy Address:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Primary Care Physician (PCP):
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Phone Number:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Preferred method
            </label>
            <div className="flex flex-wrap gap-2">
              <div onClick={() => setPm(1)} className="flex items-center gap-2">
                <input type="radio" checked={pm === 1} name="pm" />
                <p className="font-semibold text-sm">Phone</p>
              </div>
              <div onClick={() => setPm(2)} className="flex items-center gap-2">
                <input type="radio" checked={pm === 2} name="pm" />
                <p className="font-semibold text-sm">Work</p>
              </div>
              <div onClick={() => setPm(3)} className="flex items-center gap-2">
                <input type="radio" checked={pm === 3} name="pm" />
                <p className="font-semibold text-sm">Other</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 w-full">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Please tell us how you learned of our service or whom we may
              thank.
            </label>
            <div className="flex flex-wrap w-full">
              <div className="flex items-end gap-1">
                <span>Doctor’s Office:</span>
                <input
                  type="text"
                  className="h-8 py-0 border-b border-gray-900 focus:outline-none"
                />
              </div>
              <div className="flex items-end gap-1">
                <span>Employer:</span>
                <input
                  type="text"
                  className="h-8 py-0 border-b border-gray-900 focus:outline-none"
                />
              </div>
              <div className="flex items-end gap-1">
                <span>Law Firm:</span>
                <input
                  type="text"
                  className="h-8 py-0 border-b border-gray-900 focus:outline-none"
                />
              </div>
              <div className="flex items-end gap-1">
                <span>Friend/Family Member:</span>
                <input
                  type="text"
                  className="h-8 py-0 border-b border-gray-900 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-end gap-2 min-h-[42px]">
              <div
                onClick={() => setService(1)}
                className="flex items-center gap-2"
              >
                <input type="radio" checked={service === 1} name="service" />
                <p className="font-semibold text-sm">Media</p>
              </div>
              <div
                onClick={() => setService(2)}
                className="flex items-center gap-2"
              >
                <input type="radio" checked={service === 2} name="service" />
                <p className="font-semibold text-sm">Returning</p>
              </div>
              <div
                onClick={() => setService(3)}
                className="flex items-center gap-2"
              >
                <input type="radio" checked={service === 3} name="service" />
                <p className="font-semibold text-sm">Patient</p>
              </div>
              <div
                onClick={() => setService(4)}
                className="flex items-center gap-2"
              >
                <input type="radio" checked={service === 4} name="service" />
                <p className="font-semibold text-sm">Pharmacy</p>
              </div>
              <div className="flex items-end gap-1">
                <div
                  onClick={() => setService(5)}
                  className="flex items-center gap-2"
                >
                  <input type="radio" checked={service === 5} name="service" />
                  <p className="font-semibold text-sm">Other:</p>
                </div>
                {service === 5 && (
                  <input
                    type="text"
                    className="h-8 py-0 border-b border-gray-900 focus:outline-none"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* -----------2nd part start */}
        <div className="bg-gray-900 text-white text-center py-1">
          <h1>INSURANCE INFORMATION</h1>
        </div>
        <div className="border-b border-x border-gray-900 min-h-9 flex justify-center items-center">
          <h1 className="text-gray-950 font-medium text-base">
            We accept all commercial insurance policies.
          </h1>
        </div>
        <div className="border-b border-x border-gray-900 min-h-9 flex gap-3 items-center p-2">
          <div className="text-gray-950 font-medium text-base flex gap-4 items-center flex-wrap">
            Is this visit due to a work or auto accident?
            <div className="flex items-center gap-3">
              <div
                onClick={() => setService(1)}
                className="flex items-center gap-2"
              >
                <input type="radio" checked={service === 1} name="agree" />
                <p className="font-semibold text-sm">Yes</p>
              </div>
              <div
                onClick={() => setService(2)}
                className="flex items-center gap-2"
              >
                <input type="radio" checked={service === 2} name="agree" />
                <p className="font-semibold text-sm">No</p>
              </div>
            </div>
            <h1>If yes, continue to accident related section</h1>
          </div>
        </div>
        <div className="border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Please indicate primary insurance:
            </label>
            <div className="flex flex-wrap md:gap-4 cursor-pointer">
              {sInsuranceItems.map((ins, index) => (
                <div
                  key={index}
                  onClick={() => setSInsurance(ins)}
                  className="flex items-center gap-2"
                >
                  <input
                    type="radio"
                    checked={sInsurance === ins}
                    name="sinsurance"
                    className="cursor-pointer"
                  />
                  <p className="font-semibold text-sm">{ins}</p>
                </div>
              ))}
              {sInsurance === "Other" && (
                <input
                  type="text"
                  className="h-8 py-0 border-b border-gray-900 focus:outline-none"
                />
              )}
            </div>
            <div className="flex items-end gap-1">
              <span>Subscriber’s phone #</span>
              <input
                type="text"
                className="h-8 py-0 border-b border-gray-900 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Subscriber’s Last Name:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              First:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Subscriber’s Social Security:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Member ID Number:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Group Number:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Patient’s relationship to subscriber:
            </label>
            <div className="flex flex-wrap md:gap-4 cursor-pointer">
              {members.map((mb, index) => (
                <div
                  key={index}
                  onClick={() => setSInsurance(mb)}
                  className="flex items-center gap-2"
                >
                  <input
                    type="radio"
                    checked={sInsurance === mb}
                    name="sinsurance"
                    className="cursor-pointer"
                  />
                  <p className="font-semibold text-sm">{mb}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* -----------3rd part start */}
        <div className="bg-gray-900 text-white text-center py-1">
          <h1>Accident Related</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-1">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Date of Accident:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Type of Accident:
            </label>
            <div className="flex flex-wrap md:gap-4 cursor-pointer">
              {["Work", "Auto"].map((value, index) => (
                <div
                  key={index}
                  onClick={() => setSInsurance(value)}
                  className="flex items-center gap-2"
                >
                  <input
                    type="radio"
                    checked={value === value}
                    name="values"
                    className="cursor-pointer"
                  />
                  <p className="font-semibold text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              If auto, involvement in accident:
            </label>
            <div className="flex flex-wrap md:gap-4 cursor-pointer">
              {["Driver", "Passenger", "Pedestrian", "Cyclist"].map(
                (value, index) => (
                  <div
                    key={index}
                    onClick={() => setSInsurance(value)}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      checked={sInsurance === value}
                      name="valued"
                      className="cursor-pointer"
                    />
                    <p className="font-semibold text-sm">{value}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-1">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Name of Worker’s Comp Insurance Company or Auto Insurance:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-1">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Company Address:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-1">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              City/State/Zip:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Name of Insured:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Adjuster Name:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Policy Number:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Reported:
            </label>
            <div className="flex flex-wrap md:gap-4 cursor-pointer">
              {["Yes", "No"].map((value, index) => (
                <div
                  key={index}
                  onClick={() => setSInsurance(value)}
                  className="flex items-center gap-2"
                >
                  <input
                    type="radio"
                    checked={sInsurance === value}
                    name="agreePolicy"
                    className="cursor-pointer"
                  />
                  <p className="font-semibold text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Claim Number:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>

        {/* -----------4th part start */}
        <div className="bg-gray-900 text-white text-center py-1">
          <h1>IN CASE OF EMERGENCY</h1>
        </div>
        <div className="grid md:grid-cols-2 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Name of local Relative/Friend:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Relationship to Patient:
            </label>
            <input
              type="text"
              className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <RegistrationPolicy />

      {/* signeture 1st part */}
      <div className="max-w-[450px] mt-12">
        <h1 className="text-sm leading-[18px] tracking-[0.2px] font-semibold">
          Acknowledge: _______________________________ (Initial)
        </h1>
        <h1 className="text-center text-sm leading-[18px] tracking-[0.2px] font-semibold">
          Patient ID Sticker
        </h1>
      </div>

      <div className="flex justify-between items-center h-fit border border-gray-900 mt-12">
        <div className="w-[200px] h-12 border-r border-gray-900"></div>
        <div className="w-full flex-grow h-12"></div>
      </div>

      <div className="flex flex-col gap-4 mt-16">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          ACCIDENTAL BODILY FLUID EXPOSURE TO HEALTHCARE WORKER
        </h1>
        <p className="text-justify text-sm text-gray-900">
          This consent includes testing for communicable of blood-borne
          diseases, including, without limitation, Human Immunodeficiency Virus
          (HIV), Acquired Immunodeficiency Virus (AIDS), and Hepatitis if a
          physician orders such test(s) for diagnostic or treatment purposes. I
          understand that in the case of an accidental exposure to blood or
          other body fluids, state law allows the Emergency Room to test a
          patient that has exposed healthcare worker to HIV without obtaining
          the person’s consent. I understand the potential side effects and
          complications of this testing are generally minor and are comparable
          to the routine collections of blood specimens, including discomfort
          from the needle stick and/or slight burning, bleeding, or soreness at
          the puncture site. The results of this test will become part of my
          confidential medical record.
        </p>
      </div>
      {/* signeture 2nt part */}
      <div className="max-w-[450px] mt-12">
        <h1 className="text-sm leading-[18px] tracking-[0.2px] font-semibold">
          Acknowledge: _______________________________ (Initial)
        </h1>
      </div>

      <div className="flex flex-col gap-4 mt-16">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          SMOKING POLICY
        </h1>
        <p className="text-justify text-sm text-gray-900">
          To maintain the health and safety of patients, visitors, and staff,
          Care Plus ER is a strictly enforced smoke-free environment Care Plus
          ER is not responsible for any claim or harm arising from smoking, or
          from my leaving the facility for the purpose of smoking or consuming
          tobacco products.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          PERSONAL VALUABLES
        </h1>
        <p className="text-justify text-sm text-gray-900">
          Although the facility will make all reasonable efforts in safeguarding
          my valuables, I understand that Care Plus ER is not responsible for
          the loss or damage of personal valuables.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          ASSIGNMENT OF INSURANCE BENEFITS
        </h1>
        <p className="text-justify text-sm text-gray-900">
          I assign Care Plus ER all rights, title, and interest in any and all
          health insurance and/or health plan proceeds/benefits from any plan(s)
          arising from the provision of any goods and services provided by Care
          Plus ER and/or physicians/healthcare providers thereof. This
          assignment is made in accordance with §1204.054, Texas Insurance Code.
        </p>
      </div>

      {/* signeture 3rd part */}
      <div className="max-w-[450px] mt-12">
        <h1 className="text-sm leading-[18px] tracking-[0.2px] font-semibold">
          Acknowledge: _______________________________ (Initial)
        </h1>
        <h1 className="text-center text-sm leading-[18px] tracking-[0.2px] font-semibold">
          Patient ID Sticker
        </h1>
      </div>

      <section className="mt-[100px]">
        <div className="flex justify-between items-center h-fit border border-gray-900 mt-12">
          <div className="w-[200px] h-12 border-r border-gray-900"></div>
          <div className="w-full flex-grow h-12"></div>
        </div>

        <div className="grid grid-cols-1 gap-3 mt-2">
          <p className="text-justify text-sm text-gray-900">
            I also assign and transfer to Care Plus ER all rights, title, and
            interest in any claims against any health insurers, sponsors and/or
            plan administrators of any of my health benefit plan(s) arising from
            or pertaining to any wrongful acts and/or omission pertaining to any
            of said health/benefit plan(s) or health insurance policy (ies)
            including, but not limited to, claims for a non-payment or
            underpayment of health provider invoices and claims. I further
            expressly and knowingly assign all rights under my insurer and/or
            benefit plan. I understand that any payment received from these
            policies and/or plans will be applied to the payments I have agreed
            to pay for services rendered during this emergency room visit.
          </p>
          <p className="text-justify text-sm text-gray-900">
            Care Plus ER file primary and secondary insurance claims for insured
            patients. I authorize the facility and/or physicians indicated above
            to release medical information about me as may be necessary for the
            completion of my insurance claims for this occasion of service to
            any insurance carrier or health plan.
          </p>
          <p className="text-justify text-sm text-gray-900">
            I have read and been given the opportunity to ask questions about
            this assignment of benefits, and I have signed this document freely
            and without inducement.
          </p>
        </div>
        {/* signeture 4th part */}
        <div className="max-w-[450px] mt-12">
          <h1 className="text-sm leading-[18px] tracking-[0.2px] font-semibold">
            Acknowledge: _______________________________ (Initial)
          </h1>
        </div>
      </section>

      <section className="mt-32">
        <div className="flex flex-col gap-4">
          <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
            FINANCIAL AGREEMENT AND PATIENT GUARANTEE
          </h1>
          <p className="text-justify text-sm text-gray-900">
            I agree, whether signing as agent or a patient, that in
            consideration of the services to be rendered, I hereby am
            responsible for paying facility copayments, deductibles, estimated
            facility coinsurance amounts, and any balances deemed not to be a
            covered benefit of the insurance policy. Monthly statements will be
            sent to guarantors for patient balances. Acceptable means of
            payments are cash, money order, cashier’s check, credit card, or
            personal checks.
          </p>
          <p className="text-justify text-sm text-gray-900">
            <strong>
              {" "}
              Self-pay balances must be paid in full prior to discharge unless
              other arrangements have been made with Care Plus ER.
            </strong>{" "}
            If the balance due is referred to a collection agency or attorney, I
            understand that there may be additional fees, interest, and expenses
            that I will be responsible for.
          </p>
          <p className="text-justify text-sm text-gray-900">
            Care Plus ER will provide a medical screening as required to all
            patients who are seeking medical services to determine if there is
            an emergency medical condition, without regard to patient’s ability
            to pay. If there is an emergency medical condition, the facility
            will provide stabilizing treatment and/or transfer to another
            facility within its capacity.{" "}
          </p>
        </div>
        {/* signeture 5th part */}
        <div className="max-w-[450px] mt-12">
          <h1 className="text-sm leading-[18px] tracking-[0.2px] font-semibold">
            Acknowledge: _______________________________ (Initial)
          </h1>
          <h1 className="text-center text-sm leading-[18px] tracking-[0.2px] font-semibold">
            Patient ID Sticker
          </h1>
        </div>
      </section>

      <div className="flex flex-col gap-4 mt-32">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          NON-COVERED SERVICES
        </h1>
        <p className="text-justify text-sm text-gray-900">
          If any of the provided services are not covered by my insurance
          company, or if Care Plus ER is not able to verify eligibility, I am
          responsible for all charges incurred for services rendered.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          PATIENTS RIGHTS AND RESPONSIBILITIES
        </h1>
        <p className="text-justify text-sm text-gray-900">
          Patient has received a copy of patient’s right and responsibilities.
        </p>
      </div>
      {/* signeture 6th part */}
      <div className="max-w-[450px] mt-12">
        <h1 className="text-sm leading-[18px] tracking-[0.2px] font-semibold">
          Acknowledge: _______________________________ (Initial)
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-16">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          COMPLAINTS AGAINST Care Plus ER
        </h1>
        <p className="text-justify text-sm text-gray-900">
          For any questions or concerns regarding Care Plus ER please contact
          our facility and ask for our Administrator at (832)770-6380 or the
          Department of State Health Services at 1 (888) 973-0222.
        </p>
      </div>

      <section>
        <div className="flex flex-col gap-4 mt-16">
          <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
            ACKNOWLEDGEMENT AND SIGNATURE
          </h1>
          <p className="text-justify text-sm text-gray-900">
            I have read, understand, and accept the consents, policies, and
            terms as set forth above. All information provided is true to the
            best of my knowledge.
          </p>
        </div>
        <h1 className="mt-3">_______________________________________</h1>
        <h1 className="mt-3">_____________________________________________</h1>

        <div className="mt-5 grid md:grid-cols-2 gap-4">
          <div>
            <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-semibold">
              Patient Signature
            </h1>
            <h1>Signature: __________________</h1>
          </div>
          <div>
            <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-semibold">
              Responsible Party Witness
            </h1>
            <h1>______________________</h1>
          </div>
          <div>
            <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-semibold">
              Date:{" "}
              <span className="font-normal">
                __________________________________
              </span>
            </h1>
            <h1>________________________________________</h1>
          </div>
          <div>
            <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-semibold">
              Date:{" "}
            </h1>
          </div>
          <div></div>
          <div>
            <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-semibold">
              Relationship to Patient:
            </h1>
          </div>
          <div>
            <h1>__________________________</h1>
          </div>
        </div>

        <div className="max-w-[450px] mt-16">
          <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-semibold text-center">
            Patient ID Sticker
          </h1>
        </div>
      </section>

      <PatientBill />

      <section className="mt-32">
        <h1 className="text-base text-left text-gray-900 font-medium">
          If your complaint or grievance is not resolved to your satisfaction,
          you may contact:
        </h1>

        <div className="grid grid-cols-1 gap-3 mt-8">
          <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-semibold">
            Department of State Health Services Complaint Hotline
          </h1>
          <h1 className="text-base">
            Health Facility Compliance Group (MC 1979) (888) 973-0022
          </h1>
          <h1 className="text-base">
            Texas Department of State Health Services
          </h1>
          <h1 className="text-base mt-5">P.O. Box 149347</h1>
          <h1 className="text-base mt-3">Austin, TX. 78714-9347</h1>
        </div>
        <p className="mt-12">
          Presentation of a complaint will not compromise your care under any
          circumstances.
        </p>

        <div className="mt-16 max-w-[450px] text-center">
          <h1>______________________________</h1>
          <h1 className="mt-2">______________________________</h1>
          <h1 className="text-center font-semibold text-gray-900">
            Patient’s Signature
          </h1>
          <h1 className="text-center font-semibold text-gray-900">Date</h1>
        </div>
      </section>
    </div>
  );
};

export default Registration;
