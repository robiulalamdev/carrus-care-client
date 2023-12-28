import { useState } from "react";
import { Controller } from "react-hook-form";

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

const RfStepF1 = ({
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
    <div className={`mt-5`}>
      {/* -------1st part start */}
      <div className="bg-gray-900 text-white text-center py-1">
        <h1>PATIENT INFORMATION</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7 border-b border-x border-gray-900 h-fit">
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-7 md:col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Patient’s Last Name:
          </label>
          <input
            {...register("patient_information.last_name", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-7 md:col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            First
          </label>
          <input
            {...register("patient_information.first_name", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Middle
          </label>
          <input
            {...register("patient_information.middle_name", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div className="p-1 md:p-2 md:border-r border-gray-900 col-span-7 md:col-span-1">
          <div className="flex items-center gap-1 ">
            <Controller
              name="patient_information.salutation"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <input
                    type="radio"
                    {...field}
                    id="mr"
                    value="Mr."
                    defaultChecked={field.value === "Mr."}
                  />
                  <label
                    htmlFor="mr"
                    className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]"
                  >
                    Mr.
                  </label>

                  <input
                    type="radio"
                    {...field}
                    id="mrs"
                    value="Mrs."
                    defaultChecked={field.value === "Mrs."}
                  />
                  <label
                    htmlFor="mrs"
                    className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]"
                  >
                    Mrs.
                  </label>
                </>
              )}
            />
          </div>
        </div>
        <div className="p-1 md:p-2 md:border-r border-gray-900">
          <Controller
            name="patient_information.salutation"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <input
                  type="radio"
                  {...field}
                  id="mr"
                  value="Miss."
                  defaultChecked={field.value === "Miss."}
                />
                <label
                  htmlFor="mr"
                  className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]"
                >
                  Miss.
                </label>

                <input
                  type="radio"
                  {...field}
                  id="mr"
                  value="Ms."
                  defaultChecked={field.value === "Ms."}
                />
                <label
                  htmlFor="mr"
                  className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]"
                >
                  Ms.
                </label>
              </>
            )}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 border-b border-x border-gray-900 h-fit">
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Social Security No.:
          </label>
          <input
            {...register("patient_information.social_security_no", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Phone Number:
          </label>
          <input
            {...register("patient_information.phone_number", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Birth Date
          </label>
          <input
            {...register("patient_information.birth_date", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 border-b border-x border-gray-900 h-fit">
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Street Address:
          </label>
          <input
            {...register("patient_information.street_address", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            City/State/Zip:
          </label>
          <input
            {...register("patient_information.city_state_zip", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-x border-gray-900 h-fit">
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Preferred Pharmacy
          </label>
          <input
            {...register("patient_information.preferred_pharmacy", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Pharmacy Phone:
          </label>
          <input
            {...register("patient_information.pharmacy_phone", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Pharmacy Address:
          </label>
          <input
            {...register("patient_information.pharmacy_address", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-x border-gray-900 h-fit">
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Primary Care Physician (PCP):
          </label>
          <input
            {...register("patient_information.primary_care_physician", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Phone Number:
          </label>
          <input
            {...register("patient_information.primary_phone_number", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Preferred method
          </label>
          <div className="flex flex-wrap gap-2">
            <Controller
              name="patient_information.preferred_method"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id="pm"
                      value="Phone"
                      defaultChecked={field.value === "Phone"}
                    />
                    <label
                      htmlFor="pm"
                      className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]"
                    >
                      Phone
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id="pm"
                      value="Work"
                      defaultChecked={field.value === "Work"}
                    />
                    <label
                      htmlFor="pm"
                      className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]"
                    >
                      Work
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id="pm"
                      value="Other"
                      defaultChecked={field.value === "Other"}
                    />
                    <label
                      htmlFor="pm"
                      className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]"
                    >
                      Other
                    </label>
                  </div>
                </>
              )}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-b border-x border-gray-900 h-fit">
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 w-full">
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
            <div className="flex items-end gap-1 flex-wrap my-3 md:my-0">
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
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Please indicate primary insurance:
          </label>
          <div className="flex flex-wrap gap-x-4 cursor-pointer">
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
            <span className="text-gray-950 font-medium text-sm leading-[22px] tracking-[0.18px] mt-2">
              Subscriber’s phone #
            </span>
            <input
              type="text"
              className="h-8 py-0 border-b border-gray-900 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 border-b border-x border-gray-900 h-fit">
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Subscriber’s Last Name:
          </label>
          <input
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            First:
          </label>
          <input
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
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
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Member ID Number:
          </label>
          <input
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Group Number:
          </label>
          <input
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
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
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-1">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Date of Accident:
          </label>
          <input
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
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
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
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
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-1">
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
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-1">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Company Address:
          </label>
          <input
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-1">
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
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Name of Insured:
          </label>
          <input
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
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
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Policy Number:
          </label>
          <input
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
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
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
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
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Name of local Relative/Friend:
          </label>
          <input
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
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

export default RfStepF1;
