import { useState } from "react";

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

const RfStep1 = ({
  step,
  handleSubmit,
  register,
  setError,
  setValue,
  watch,
  control,
}) => {
  const [pm, setPm] = useState(1);
  const [service, setService] = useState(1);
  const [sInsurance, setSInsurance] = useState("");
  return (
    <div className={`mt-5 ${step === 1 ? "block" : "hidden"}`}>
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
            Please tell us how you learned of our service or whom we may thank.
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
  );
};

export default RfStep1;
