/* eslint-disable react/prop-types */
import { useState } from "react";
import { Controller } from "react-hook-form";
import useInputPattern from "../../../lib/hooks/useInputPattern";
import DateInput from "../../common/DateInput";

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
  errors,
  show,
}) => {
  const { handleNumber } = useInputPattern();
  return (
    <div className={`mt-5 ${step === 1 ? "block" : "hidden"}`}>
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
              required: false,
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
              required: false,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div className="p-1 md:p-2 md:border-r border-gray-900 col-span-7 md:col-span-1">
          <div className="flex items-center gap-3">
            <Controller
              name="patient_information.salutation"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <div className="flex items-center gap-1">
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
                  </div>

                  <div className="flex items-center gap-1">
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
                  </div>
                </>
              )}
              {...register("patient_information.salutation", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="p-1 md:p-2 border-gray-900">
          <div className="flex gap-3">
            <Controller
              name="patient_information.salutation"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <div className="flex gap-1">
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
                  </div>

                  <div className="flex gap-1">
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
                  </div>
                </>
              )}
              {...register("patient_information.salutation", {
                required: true,
              })}
            />
          </div>
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
            onInput={handleNumber}
            type="number"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Birth Date
          </label>

          <Controller
            name="patient_information.birth_date"
            control={control}
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <DateInput
                value={field.value}
                setValue={(value) => {
                  setValue("patient_information.birth_date", value);
                  field.onChange(value);
                }}
                error={errors?.patient_information?.birth_date}
              />
            )}
            {...register("patient_information.birth_date", {
              required: true,
            })}
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
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-gray-900">
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
            onInput={handleNumber}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-gray-900">
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
            onInput={handleNumber}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Preferred method
          </label>
          <div className="flex flex-wrap gap-2">
            <Controller
              name="patient_information.preferred_method"
              control={control}
              defaultValue="Phone"
              render={({ field }) => (
                <>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id="pm1"
                      value="Phone"
                      defaultChecked={field.value === "Phone"}
                    />
                    <label
                      htmlFor="pm1"
                      className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]"
                    >
                      Phone
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id="pm2"
                      value="Work"
                      defaultChecked={field.value === "Work"}
                    />
                    <label
                      htmlFor="pm2"
                      className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]"
                    >
                      Work
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id="pm3"
                      value="Other"
                      defaultChecked={field.value === "Other"}
                    />
                    <label
                      htmlFor="pm3"
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
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-gray-900 w-full">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Please tell us how you learned of our service or whom we may thank.
          </label>
          <div className="flex flex-wrap w-full">
            <div className="flex items-end gap-1">
              <span>Doctor’s Office:</span>
              <input
                {...register("patient_information.Doctor_Office", {
                  required: true,
                })}
                type="text"
                className="h-8 py-0 border-b border-gray-900 focus:outline-none"
              />
            </div>
            <div className="flex items-end gap-1">
              <span>Employer:</span>
              <input
                {...register("patient_information.employer", {
                  required: true,
                })}
                type="text"
                className="h-8 py-0 border-b border-gray-900 focus:outline-none"
              />
            </div>
            <div className="flex items-end gap-1">
              <span>Law Firm:</span>
              <input
                {...register("patient_information.law_firm", {
                  required: true,
                })}
                type="text"
                className="h-8 py-0 border-b border-gray-900 focus:outline-none"
              />
            </div>
            <div className="flex items-end gap-1 flex-wrap my-3 md:my-0">
              <span>Friend/Family Member:</span>
              <input
                {...register("patient_information.family_member", {
                  required: true,
                })}
                type="text"
                className="h-8 py-0 border-b border-gray-900 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-end gap-2 min-h-[42px]">
            <Controller
              name="patient_information.service"
              control={control}
              defaultValue="Media"
              render={({ field }) => (
                <>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id="s1"
                      value="Media"
                      defaultChecked={field.value === "Media"}
                    />
                    <label htmlFor="s1" className="font-semibold text-sm">
                      Media
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id="s2"
                      value="Returning"
                      defaultChecked={field.value === "Returning"}
                    />
                    <label htmlFor="s2" className="font-semibold text-sm">
                      Returning
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id="s3"
                      value="Patient"
                      defaultChecked={field.value === "Patient"}
                    />
                    <label htmlFor="s3" className="font-semibold text-sm">
                      Patient
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id="s4"
                      value="Pharmacy"
                      defaultChecked={field.value === "Pharmacy"}
                    />
                    <label htmlFor="s4" className="font-semibold text-sm">
                      Pharmacy
                    </label>
                  </div>
                  <div className="flex items-end gap-1">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        {...field}
                        id="s5"
                        value="Other"
                        defaultChecked={field.value === "Other"}
                      />
                      <label htmlFor="s5" className="font-semibold text-sm">
                        Other:
                      </label>
                    </div>
                    {watch("patient_information.service") === "Other" && (
                      <input
                        {...register("patient_information.other_service", {
                          required: true,
                        })}
                        type="text"
                        className="h-8 py-0 border-b border-gray-900 focus:outline-none"
                      />
                    )}
                  </div>
                </>
              )}
            />
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
            <Controller
              name="insurance_information.auto_accident"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id="agree1"
                      value={true}
                      defaultChecked={field.value === true}
                    />
                    <label htmlFor="agree1" className="font-semibold text-sm">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id="agree2"
                      value={false}
                      defaultChecked={field.value === false}
                    />
                    <label htmlFor="agree2" className="font-semibold text-sm">
                      No
                    </label>
                  </div>
                </>
              )}
            />
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
            <Controller
              name="insurance_information.primary_insurance"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  {sInsuranceItems.map((value, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="radio"
                        {...field}
                        id={index}
                        value={value}
                        defaultChecked={field.value === value}
                      />
                      <label htmlFor={index} className="font-semibold text-sm">
                        {value}
                      </label>
                    </div>
                  ))}
                </>
              )}
            />

            {watch("insurance_information.primary_insurance") === "Other" && (
              <input
                {...register("insurance_information.other_primary_insurance", {
                  required:
                    watch("insurance_information.primary_insurance") ===
                    "Other",
                })}
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
              {...register("insurance_information.subscriber_phone", {
                required: true,
              })}
              onInput={handleNumber}
              type="number"
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
            {...register("insurance_information.subscriber_last_name", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            First:
          </label>
          <input
            {...register("insurance_information.subscriber_first_name", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Subscriber’s Social Security:
          </label>
          <input
            {...register("insurance_information.subscriber_social_security", {
              required: true,
            })}
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
            {...register("insurance_information.member_id_number", {
              required: true,
            })}
            onInput={handleNumber}
            type="number"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Group Number:
          </label>
          <input
            {...register("insurance_information.group_number", {
              required: true,
            })}
            onInput={handleNumber}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Patient’s relationship to subscriber:
          </label>
          <div className="flex flex-wrap md:gap-4 cursor-pointer">
            <Controller
              name="insurance_information.patient_relationship_subscriber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  {members.map((value, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="radio"
                        {...field}
                        id={`prs${index}`}
                        value={value}
                        defaultChecked={field.value === value}
                      />
                      <label
                        htmlFor={`prs${index}`}
                        className="font-semibold text-sm"
                      >
                        {value}
                      </label>
                    </div>
                  ))}
                </>
              )}
            />
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

          <Controller
            name="accident_related.date_of_accident"
            control={control}
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <DateInput
                value={field.value}
                setValue={(value) => {
                  setValue("accident_related.date_of_accident", value);
                  field.onChange(value);
                }}
                error={errors?.accident_related?.date_of_accident}
              />
            )}
            {...register("accident_related.date_of_accident", {
              required: true,
            })}
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Type of Accident:
          </label>
          <div className="flex flex-wrap md:gap-4 cursor-pointer">
            <Controller
              name="accident_related.type_of_accident"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  {["Work", "Auto"].map((value, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="radio"
                        {...field}
                        id={`toa${index}`}
                        value={value}
                        defaultChecked={field.value === value}
                      />
                      <label
                        htmlFor={`toa${index}`}
                        className="font-semibold text-sm"
                      >
                        {value}
                      </label>
                    </div>
                  ))}
                </>
              )}
            />
          </div>
        </div>
        {watch("accident_related.type_of_accident") === "Auto" && (
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              If auto, involvement in accident:
            </label>
            <div className="flex flex-wrap md:gap-4 cursor-pointer">
              <Controller
                name="accident_related.involvement_in_accident"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    {["Driver", "Passenger", "Pedestrian", "Cyclist"].map(
                      (value, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <input
                            type="radio"
                            {...field}
                            id={`ia${index}`}
                            value={value}
                            defaultChecked={field.value === value}
                          />
                          <label
                            htmlFor={`ia${index}`}
                            className="font-semibold text-sm"
                          >
                            {value}
                          </label>
                        </div>
                      )
                    )}
                  </>
                )}
              />
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 border-b border-x border-gray-900 h-fit">
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-1">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Name of Worker’s Comp Insurance Company or Auto Insurance:
          </label>
          <input
            {...register("accident_related.name_of_worker", {
              required: true,
            })}
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
            {...register("accident_related.company_address", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-1">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            City/State/Zip:
          </label>
          <input
            {...register("accident_related.city_state_zip", {
              required: true,
            })}
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
            {...register("accident_related.name_of_insured", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Adjuster Name:
          </label>
          <input
            {...register("accident_related.adjuster_name", {
              required: true,
            })}
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
            {...register("accident_related.policy_number", {
              required: true,
            })}
            onInput={handleNumber}
            type="number"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Reported:
          </label>
          <div className="flex flex-wrap md:gap-4 cursor-pointer">
            <Controller
              name="accident_related.report"
              control={control}
              defaultValue="Yes"
              render={({ field }) => (
                <>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id={`re1`}
                      value="Yes"
                      defaultChecked={field.value === "Yes"}
                    />
                    <label htmlFor={`re1`} className="font-semibold text-sm">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      {...field}
                      id={`re2`}
                      value="No"
                      defaultChecked={field.value === "No"}
                    />
                    <label htmlFor={`re2`} className="font-semibold text-sm">
                      No
                    </label>
                  </div>
                </>
              )}
              {...register("accident_related.report", {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Claim Number:
          </label>
          <input
            {...register("accident_related.claim_number", {
              required: true,
            })}
            onInput={handleNumber}
            type="number"
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
            {...register("in_case_of_emergency.name_of_local_relative", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
          <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
            Relationship to Patient:
          </label>
          <input
            {...register("in_case_of_emergency.relationship_to_patient", {
              required: true,
            })}
            type="text"
            className="w-full h-8 border-none focus:border-blue-600 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default RfStepF1;
