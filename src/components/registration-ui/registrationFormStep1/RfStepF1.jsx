/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";
import useInputPattern from "../../../lib/hooks/useInputPattern";
import DateInput from "../../common/DateInput";
import { rfInput_class, rfInput_label_class } from "../../../lib/constants";
import CheckInput from "../../common/CheckInput";
import { iUpload } from "../../../lib/icons";
import useViewImage from "../../../lib/hooks/useViewImage";

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

const members = ["Self", "Spouse", "Child", "Other"];

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
  handlePictureFile,
  pictureFile,
  pictureRef,

  // front and back
  handleFrontPictureFile,
  handleBackPictureFile,
  frontPictureFile,
  backPictureFile,
  frontPictureRef,
  backPictureRef,
}) => {
  const { handleNumber } = useInputPattern();
  const { viewImg } = useViewImage();

  // console.log(errors);

  return (
    <div className={`mt-5`}>
      {/* -------1st part start */}
      <div className="bg-darkPrimary text-white text-center py-1">
        <h1>PATIENT INFORMATION</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-7 md:col-span-2">
          <label className={`${rfInput_label_class}`}>
            Patient’s Last Name:
            <span className="text-red-600 font-semibold text-xl">*</span>
          </label>
          <input
            {...register("patient_information.last_name", {
              required: true,
            })}
            type="text"
            required
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-7 md:col-span-2">
          <label className={`${rfInput_label_class}`}>
            First <span className="text-red-600 font-semibold text-xl">*</span>
          </label>
          <input
            {...register("patient_information.first_name", {
              required: true,
            })}
            type="text"
            required
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary ">
          <label className={`${rfInput_label_class}`}>Middle</label>
          <input
            {...register("patient_information.middle_name", {
              required: false, // old
            })}
            type="text"
            className={`${rfInput_class}`}
          />
        </div>

        <div className="p-1 md:p-2 border-darkPrimary col-span-7 md:col-span-2">
          <label className={`${rfInput_label_class}`}>Martial Status</label>
          <div className="flex items-center gap-3 flex-wrap">
            <Controller
              name="patient_information.martial_status"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.martial_status", value);
                      field.onChange(value);
                    }}
                    label="Married"
                    error={errors?.patient_information?.martial_status}
                  />

                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.martial_status", value);
                      field.onChange(value);
                    }}
                    label="Single"
                    error={errors?.patient_information?.martial_status}
                  />

                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.martial_status", value);
                      field.onChange(value);
                    }}
                    label="Divorced"
                    error={errors?.patient_information?.martial_status}
                  />

                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.martial_status", value);
                      field.onChange(value);
                    }}
                    label="Separated"
                    error={errors?.patient_information?.martial_status}
                  />

                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.martial_status", value);
                      field.onChange(value);
                    }}
                    label="Widowed"
                    error={errors?.patient_information?.martial_status}
                  />
                </>
              )}
              {...register("patient_information.martial_status", {
                required: false,
              })}
              // required
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7 border-b border-x border-darkPrimary h-fit">
        <div className="p-1 md:p-2 border-darkPrimary col-span-2">
          <label className={`${rfInput_label_class}`}>
            Upload a Government Issued ID
            <span className="text-red-600 font-semibold text-xl">*</span>
          </label>
          <div className="bg-gray-100 w-[100px] h-[100px] rounded relative cursor-pointer flex justify-center items-center">
            {watch("patient_information.picture") || pictureFile ? (
              <img
                src={viewImg(
                  watch("patient_information.picture") || pictureFile
                )}
                alt=""
                className="w-full h-full object-contain"
              />
            ) : (
              <div>{iUpload}</div>
            )}
            <input
              ref={pictureRef}
              onChange={(e) => handlePictureFile(e.target.files[0])}
              type="file"
              required
              accept=".png, .jpg, .jpeg"
              multiple={false}
              className="w-full h-full absolute opacity-0 cursor-pointer"
            />
          </div>
        </div>
        <div className="p-1 md:p-2 border-darkPrimary col-span-5">
          <label className={`${rfInput_label_class}`}>Gender</label>
          <div className="flex items-center gap-3 flex-wrap">
            <Controller
              name="patient_information.gender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.gender", value);
                      field.onChange(value);
                    }}
                    label="Male"
                    error={errors?.patient_information?.gender}
                  />

                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.gender", value);
                      field.onChange(value);
                    }}
                    label="Female"
                    error={errors?.patient_information?.gender}
                  />

                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.gender", value);
                      field.onChange(value);
                    }}
                    label="Prefer not to specify"
                    error={errors?.patient_information?.gender}
                  />

                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.gender", value);
                      field.onChange(value);
                    }}
                    label="other"
                    error={errors?.patient_information?.gender}
                  />
                </>
              )}
              {...register("patient_information.gender", {
                required: false,
              })}
              // required
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-2">
          <label className={`${rfInput_label_class}`}>
            Social Security No.:
          </label>
          <input
            {...register("patient_information.social_security_no", {
              required: false,
            })}
            type="text"
            // required
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-2">
          <label className={`${rfInput_label_class}`}>
            Phone Number:
            <span className="text-red-600 font-semibold text-xl">*</span>
          </label>
          <input
            {...register("patient_information.phone_number", {
              required: true,
            })}
            onInput={handleNumber}
            type="number"
            required
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-darkPrimary">
          <label className={`${rfInput_label_class}`}>
            Date Of Birth
            <span className="text-red-600 font-semibold text-xl">*</span>
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
                required={true}
              />
            )}
            {...register("patient_information.birth_date", {
              required: true,
            })}
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary">
          <label className={`${rfInput_label_class}`}>
            Street Address:
            <span className="text-red-600 font-semibold text-xl">*</span>
          </label>
          <input
            {...register("patient_information.street_address", {
              required: true,
            })}
            required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-darkPrimary">
          <label className={`${rfInput_label_class}`}>City/State/Zip:</label>
          <input
            {...register("patient_information.city_state_zip", {
              required: false,
            })}
            // required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary">
          <label className={`${rfInput_label_class}`}>
            Preferred Pharmacy
            <span className="text-red-600 font-semibold text-xl">*</span>
          </label>
          <input
            {...register("patient_information.preferred_pharmacy", {
              required: true,
            })}
            required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary">
          <label className={`${rfInput_label_class}`}>
            Pharmacy Phone:
            <span className="text-red-600 font-semibold text-xl">*</span>
          </label>
          <input
            {...register("patient_information.pharmacy_phone", {
              required: true,
            })}
            required
            onInput={handleNumber}
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-darkPrimary">
          <label className={`${rfInput_label_class}`}>
            Pharmacy Address:
            <span className="text-red-600 font-semibold text-xl">*</span>
          </label>
          <input
            {...register("patient_information.pharmacy_address", {
              required: true,
            })}
            required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary">
          <label className={`${rfInput_label_class}`}>
            Primary Care Physician (PCP):
          </label>
          <input
            {...register("patient_information.primary_care_physician", {
              required: false,
            })}
            // required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary">
          <label className={`${rfInput_label_class}`}>
            Phone Number:
            <span className="text-red-600 font-semibold text-xl">*</span>
          </label>
          <input
            {...register("patient_information.primary_phone_number", {
              required: true,
            })}
            required
            onInput={handleNumber}
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-darkPrimary">
          <label className={`${rfInput_label_class}`}>Preferred method</label>
          <div className="flex flex-wrap gap-2">
            <Controller
              name="patient_information.preferred_method"
              control={control}
              defaultValue="Phone"
              render={({ field }) => (
                <>
                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.preferred_method", value);
                      field.onChange(value);
                    }}
                    label="Phone"
                  />

                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.preferred_method", value);
                      field.onChange(value);
                    }}
                    label="Work"
                  />
                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.preferred_method", value);
                      field.onChange(value);
                    }}
                    label="Other"
                  />
                </>
              )}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-darkPrimary w-full">
          <label className={`${rfInput_label_class}`}>
            Please tell us how you learned of our service or whom we may thank.
          </label>
          <div className="flex flex-wrap w-full">
            <div className="flex items-end gap-1">
              <span>Doctor’s Office:</span>
              <input
                {...register("patient_information.Doctor_Office", {
                  required: false,
                })}
                // required
                type="text"
                className="h-8 py-0 border-b border-darkPrimary focus:outline-none"
              />
            </div>
            <div className="flex items-end gap-1">
              <span>Employer:</span>
              <input
                {...register("patient_information.employer", {
                  required: false,
                })}
                // required
                type="text"
                className="h-8 py-0 border-b border-darkPrimary focus:outline-none"
              />
            </div>
            <div className="flex items-end gap-1">
              <span>Law Firm:</span>
              <input
                {...register("patient_information.law_firm", {
                  required: false,
                })}
                // required
                type="text"
                className="h-8 py-0 border-b border-darkPrimary focus:outline-none"
              />
            </div>
            <div className="flex items-end gap-1 flex-wrap my-3 md:my-0">
              <span>Friend/Family Member:</span>
              <input
                {...register("patient_information.family_member", {
                  required: false,
                })}
                // required
                type="text"
                className="h-8 py-0 border-b border-darkPrimary focus:outline-none"
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
                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.service", value);
                      field.onChange(value);
                    }}
                    label="Media"
                  />
                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.service", value);
                      field.onChange(value);
                    }}
                    label="Returning"
                  />
                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.service", value);
                      field.onChange(value);
                    }}
                    label="Patient"
                  />
                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("patient_information.service", value);
                      field.onChange(value);
                    }}
                    label="Pharmacy"
                  />

                  <div className="flex items-end gap-1">
                    <CheckInput
                      value={field.value}
                      setValue={(value) => {
                        setValue("patient_information.service", value);
                        field.onChange(value);
                      }}
                      label="Other"
                    />
                    {watch("patient_information.service") === "Other" && (
                      <input
                        {...register("patient_information.other_service", {
                          required: false,
                        })}
                        type="text"
                        className="h-8 py-0 border-b border-darkPrimary focus:outline-none"
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
      <div className="bg-darkPrimary text-white text-center py-1">
        <h1>INSURANCE INFORMATION</h1>
      </div>
      <div className="border-b border-x border-darkPrimary min-h-9 flex justify-center items-center">
        <h1 className="text-gray-950 font-medium text-base">
          We accept all commercial insurance policies.
        </h1>
      </div>
      <div className="border-b border-x border-darkPrimary min-h-9 flex gap-3 items-center p-2">
        <div>
          <div className="text-gray-950 font-medium text-base flex gap-4 items-center flex-wrap">
            Is this visit due to a work or auto accident?
            <div className="flex items-center gap-3">
              <Controller
                name="insurance_information.auto_accident"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <CheckInput
                      value={field.value}
                      setValue={(value) => {
                        setValue("insurance_information.auto_accident", value);
                        field.onChange(value);
                      }}
                      label="Yes"
                    />
                    <CheckInput
                      value={field.value}
                      setValue={(value) => {
                        setValue("insurance_information.auto_accident", value);
                        field.onChange(value);
                      }}
                      label="No"
                    />
                  </>
                )}
              />
            </div>
            <h1>If yes, continue to accident related section</h1>
          </div>
          <div className=" border-darkPrimary col-span-7 md:col-span-3">
            <label className={`${rfInput_label_class}`}>
              Upload a Picture of Insurance Card Front and Back
              <span className="text-red-600 font-semibold text-xl">*</span>
            </label>
            <div className="flex items-start gap-3">
              <div className="w-fit flex flex-col items-center">
                <div className="bg-gray-100 w-[100px] h-[100px] rounded relative cursor-pointer flex justify-center items-center">
                  {watch("insurance_information.front_picture") ||
                  frontPictureFile ? (
                    <img
                      src={viewImg(
                        watch("insurance_information.front_picture") ||
                          frontPictureFile
                      )}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div>{iUpload}</div>
                  )}
                  <input
                    ref={frontPictureRef}
                    onChange={(e) => handleFrontPictureFile(e.target.files[0])}
                    type="file"
                    required={
                      watch("insurance_information.auto_accident") === "Yes"
                    }
                    accept=".png, .jpg, .jpeg"
                    multiple={false}
                    className="w-full h-full absolute opacity-0 cursor-pointer"
                  />
                </div>
                <label
                  className={`${rfInput_label_class} text-center text-xs font-semibold`}
                >
                  Front
                </label>
              </div>
              <div className="w-fit flex flex-col items-center">
                <div className="bg-gray-100 w-[100px] h-[100px] rounded relative cursor-pointer flex justify-center items-center">
                  {watch("insurance_information.back_picture") ||
                  backPictureFile ? (
                    <img
                      src={viewImg(
                        watch("insurance_information.back_picture") ||
                          backPictureFile
                      )}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div>{iUpload}</div>
                  )}
                  <input
                    ref={backPictureRef}
                    onChange={(e) => handleBackPictureFile(e.target.files[0])}
                    type="file"
                    required={
                      watch("insurance_information.auto_accident") === "Yes"
                    }
                    accept=".png, .jpg, .jpeg"
                    multiple={false}
                    className="w-full h-full absolute opacity-0 cursor-pointer"
                  />
                </div>
                <label
                  className={`${rfInput_label_class} text-center text-xs font-semibold`}
                >
                  Back
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary">
          <label className={`${rfInput_label_class}`}>
            Please indicate primary insurance:
          </label>
          <div className="flex flex-wrap gap-x-4 cursor-pointer">
            <Controller
              name="insurance_information.primary_insurance"
              control={control}
              defaultValue="Aetna"
              render={({ field }) => (
                <>
                  {sInsuranceItems.map((iValue, index) => (
                    <CheckInput
                      key={index}
                      value={field.value}
                      setValue={(value) => {
                        setValue(
                          "insurance_information.primary_insurance",
                          value
                        );
                        field.onChange(value);
                      }}
                      label={iValue}
                    />
                  ))}
                </>
              )}
            />

            {watch("insurance_information.primary_insurance") === "Other" && (
              <input
                {...register("insurance_information.other_primary_insurance", {
                  required: false,
                  // watch("insurance_information.primary_insurance") ===
                  // "Other",
                })}
                type="text"
                className="h-8 py-0 border-b border-darkPrimary focus:outline-none"
              />
            )}
          </div>
          <div className="flex items-end gap-1">
            <span className="text-gray-950 font-medium text-sm leading-[22px] tracking-[0.18px] mt-2">
              Subscriber’s phone #
            </span>
            <input
              {...register("insurance_information.subscriber_phone", {
                required: false,
              })}
              // required
              onInput={handleNumber}
              type="number"
              className="h-8 py-0 border-b border-darkPrimary focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-2">
          <label className={`${rfInput_label_class}`}>
            Subscriber’s Last Name:
          </label>
          <input
            {...register("insurance_information.subscriber_last_name", {
              required: false,
            })}
            // required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-2">
          <label className={`${rfInput_label_class}`}>First:</label>
          <input
            {...register("insurance_information.subscriber_first_name", {
              required: false,
            })}
            // required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary">
          <label className={`${rfInput_label_class}`}>
            Subscriber’s Social Security:
          </label>
          <input
            {...register("insurance_information.subscriber_social_security", {
              required: false,
            })}
            // required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
      </div>
      <div className="grid col-span-1 md:grid-cols-7 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary w-full col-span-2">
          <label className={`${rfInput_label_class}`}>Member ID Number:</label>
          <input
            {...register("insurance_information.member_id_number", {
              required: false,
            })}
            // required
            onInput={handleNumber}
            type="number"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary w-full col-span-2">
          <label className={`${rfInput_label_class}`}>Group Number:</label>
          <input
            {...register("insurance_information.group_number", {
              required: false,
            })}
            // required
            onInput={handleNumber}
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary w-full col-span-3">
          <label className={`${rfInput_label_class}`}>
            Patient’s relationship to subscriber:
          </label>
          <div className="flex items-center flex-wrap gap-4 cursor-pointer">
            <Controller
              name="insurance_information.patient_relationship_subscriber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  {members.map((iValue, index) => (
                    <CheckInput
                      key={index}
                      value={field.value}
                      setValue={(value) => {
                        setValue(
                          "insurance_information.patient_relationship_subscriber",
                          value
                        );
                        field.onChange(value);
                      }}
                      label={iValue}
                    />
                  ))}
                </>
              )}
            />
            {watch("insurance_information.patient_relationship_subscriber") ===
              "Other" && (
              <input
                {...register(
                  "insurance_information.patient_relationship_subscriber_other",
                  {
                    required: false,
                    // watch("insurance_information.patient_relationship_subscriber") ===
                    // "Other",
                  }
                )}
                type="text"
                className="h-8 py-0 border-b border-darkPrimary focus:outline-none"
              />
            )}
          </div>
        </div>
      </div>

      {/* -----------3rd part start */}
      <div className="bg-darkPrimary text-white text-center py-1">
        <h1>Accident Related</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-1">
          <label className={`${rfInput_label_class}`}>Date of Accident:</label>

          <Controller
            name="accident_related.date_of_accident"
            control={control}
            rules={{ required: false }}
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
              required: false,
            })}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-2">
          <label className={`${rfInput_label_class}`}>Type of Accident:</label>
          <div className="flex flex-wrap gap-4 cursor-pointer">
            <Controller
              name="accident_related.type_of_accident"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  {["Work", "Auto"].map((iValue, index) => (
                    <CheckInput
                      key={index}
                      value={field.value}
                      setValue={(value) => {
                        setValue(
                          "insurance_information.patient_relationship_subscriber",
                          value
                        );
                        field.onChange(value);
                      }}
                      label={iValue}
                    />
                  ))}
                </>
              )}
            />
          </div>
        </div>
        {watch("accident_related.type_of_accident") === "Auto" && (
          <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-2">
            <label className={`${rfInput_label_class}`}>
              If auto, involvement in accident:
            </label>
            <div className="flex flex-wrap gap-4 cursor-pointer">
              <Controller
                name="accident_related.involvement_in_accident"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    {["Driver", "Passenger", "Pedestrian", "Cyclist"].map(
                      (iValue, index) => (
                        <CheckInput
                          key={index}
                          value={field.value}
                          setValue={(value) => {
                            setValue(
                              "accident_related.involvement_in_accident",
                              value
                            );
                            field.onChange(value);
                          }}
                          label={iValue}
                        />
                      )
                    )}
                  </>
                )}
              />
            </div>
          </div>
        )}
      </div>
      <div className="w-full border-b border-x border-darkPrimary h-fit">
        <div className="items-start gap-2 grid grid-cols-1 md:grid-cols-4">
          <div className="flex flex-col p-1 md:p-2 md:col-span-2">
            <label className={`${rfInput_label_class}`}>
              Name of Worker’s Comp Insurance Company or Auto Insurance:
            </label>
            <input
              {...register("accident_related.name_of_worker", {
                required: false,
              })}
              // required
              type="text"
              className={`${rfInput_class}`}
            />
          </div>
          <div className="flex flex-col p-1 md:p-2 md:col-span-1">
            <label className={`${rfInput_label_class}`}>Phone Number</label>
            <input
              {...register("accident_related.insurance_phone_number", {
                required: false,
              })}
              type="text"
              className={`${rfInput_class}`}
            />
          </div>
          <div className="flex flex-col p-1 md:p-2 md:col-span-1">
            <label className={`${rfInput_label_class}`}>Fax Number</label>
            <input
              {...register("accident_related.insurance_fax_number", {
                required: false,
              })}
              type="text"
              className={`${rfInput_class}`}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-1">
          <label className={`${rfInput_label_class}`}>Company Address:</label>
          <input
            {...register("accident_related.company_address", {
              required: false,
            })}
            // required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-1">
          <label className={`${rfInput_label_class}`}>City/State/Zip:</label>
          <input
            {...register("accident_related.city_state_zip", {
              required: false,
            })}
            // required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-2">
          <label className={`${rfInput_label_class}`}>Name of Insured:</label>
          <input
            {...register("accident_related.name_of_insured", {
              required: false,
            })}
            // required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary">
          <label className={`${rfInput_label_class}`}>Adjuster Name:</label>
          <input
            {...register("accident_related.adjuster_name", {
              required: false,
            })}
            // required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary col-span-2">
          <label className={`${rfInput_label_class}`}>Policy Number:</label>
          <input
            {...register("accident_related.policy_number", {
              required: false,
            })}
            // required
            onInput={handleNumber}
            type="number"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary">
          <label className={`${rfInput_label_class}`}>Reported:</label>
          <div className="flex flex-wrap md:gap-4 cursor-pointer">
            <Controller
              name="accident_related.report"
              control={control}
              defaultValue="Yes"
              render={({ field }) => (
                <>
                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("accident_related.report", value);
                      field.onChange(value);
                    }}
                    label="Yes"
                  />
                  <CheckInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("accident_related.report", value);
                      field.onChange(value);
                    }}
                    label="No"
                  />
                </>
              )}
              {...register("accident_related.report", {
                required: false,
              })}
            />
          </div>
        </div>
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary">
          <label className={`${rfInput_label_class}`}>Claim Number:</label>
          <input
            {...register("accident_related.claim_number", {
              required: false,
            })}
            // required
            onInput={handleNumber}
            type="number"
            className={`${rfInput_class}`}
          />
        </div>
      </div>

      {/* -----------4th part start */}
      <div className="bg-darkPrimary text-white text-center py-1">
        <h1>IN CASE OF EMERGENCY</h1>
      </div>
      <div className="grid md:grid-cols-3 border-b border-x border-darkPrimary h-fit">
        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary">
          <label className={`${rfInput_label_class}`}>
            Name of local Relative/Friend:
          </label>
          <input
            {...register("in_case_of_emergency.name_of_local_relative", {
              required: false,
            })}
            // required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>

        <div className="flex flex-col p-1 md:p-2 md:border-r border-darkPrimary">
          <label className={`${rfInput_label_class}`}>
            Relationship to Patient:
          </label>
          <input
            {...register("in_case_of_emergency.relationship_to_patient", {
              required: false,
            })}
            // required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
        <div className="flex flex-col p-1 md:p-2 ">
          <label className={`${rfInput_label_class}`}>Phone Number</label>
          <input
            {...register("in_case_of_emergency.phone_number", {
              required: false,
            })}
            // required
            type="text"
            className={`${rfInput_class}`}
          />
        </div>
      </div>
    </div>
  );
};

export default RfStepF1;
