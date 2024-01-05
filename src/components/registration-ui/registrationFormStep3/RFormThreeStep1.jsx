/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Controller } from "react-hook-form";
import DateInput from "../../common/DateInput";
import useInputPattern from "../../../lib/hooks/useInputPattern";
import { rfInput_label_class } from "../../../lib/constants";

const RFormThreeStep1 = ({ register, watch, control, setValue, errors }) => {
  const { handleNumber } = useInputPattern();
  return (
    <>
      <h1 className="text-center font-bold text-[18px] leading-[22px] tracking-[0.4px] mt-16">
        AUTHORIZATION TO USE OR DISCLOSE PROTECTED HEALTH INFORMATION
      </h1>
      <p className="text-sm italic text-gray-900 mt-3 text-justify md:text-start">
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
              <h1 className={`${rfInput_label_class} text-nowrap`}>
                Full Name:
              </h1>
              <input
                {...register(
                  "patient_information_for_authorization.full_name",
                  { required: true }
                )}
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className={`${rfInput_label_class} text-nowrap`}>
                  Other Name(s) Used:
                </h1>
                <input
                  {...register(
                    "patient_information_for_authorization.other_name",
                    { required: false }
                  )}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className={`${rfInput_label_class} text-nowrap`}>
                  Date of Birth:
                </h1>

                <Controller
                  name="patient_information_for_authorization.date_of_birth"
                  control={control}
                  rules={{ required: "Date is required" }}
                  render={({ field }) => (
                    <DateInput
                      value={field.value}
                      setValue={(value) => {
                        setValue(
                          "patient_information_for_authorization.date_of_birth",
                          value
                        );
                        field.onChange(value);
                      }}
                      error={
                        errors?.patient_information_for_authorization
                          ?.date_of_birth
                      }
                    />
                  )}
                  {...register(
                    "patient_information_for_authorization.date_of_birth",
                    {
                      required: true,
                    }
                  )}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className={`${rfInput_label_class} text-nowrap`}>
                  Address:
                </h1>
                <input
                  {...register(
                    "patient_information_for_authorization.address",
                    { required: true }
                  )}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className={`${rfInput_label_class} text-nowrap`}>City:</h1>
                <input
                  {...register("patient_information_for_authorization.city", {
                    required: true,
                  })}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className={`${rfInput_label_class} text-nowrap`}>State:</h1>
                <input
                  {...register("patient_information_for_authorization.state", {
                    required: true,
                  })}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className={`${rfInput_label_class} text-nowrap`}>
                  Zip Code:
                </h1>
                <input
                  {...register("patient_information_for_authorization.zip", {
                    required: true,
                  })}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
            </div>
            <div className="flex justify-between flex-wrap items-start gap-2 w-full">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className={`${rfInput_label_class} text-nowrap`}>Phone:</h1>
                <input
                  {...register("patient_information_for_authorization.phone", {
                    required: true,
                  })}
                  onInput={handleNumber}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1 flex-grow">
                <h1 className={`${rfInput_label_class} text-nowrap`}>
                  Email: (Optional):
                </h1>
                <input
                  {...register("patient_information_for_authorization.email", {
                    required: false,
                  })}
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
            <div className="flex items-center md:gap-1 flex-wrap md:flex-nowrap">
              <h1 className={`${rfInput_label_class} text-nowrap`}>Name:</h1>
              <input
                {...register("health_care_entity_authorized_information.name", {
                  required: true,
                })}
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className={`${rfInput_label_class} text-nowrap`}>
                  Address:
                </h1>
                <input
                  {...register(
                    "health_care_entity_authorized_information.address",
                    {
                      required: true,
                    }
                  )}
                  type="text"
                  defaultValue="8111 W Grand Parkway S"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className={`${rfInput_label_class} text-nowrap`}>City:</h1>
                <input
                  {...register(
                    "health_care_entity_authorized_information.city",
                    {
                      required: true,
                    }
                  )}
                  type="text"
                  defaultValue={"Richmond"}
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className={`${rfInput_label_class} text-nowrap`}>State:</h1>
                <input
                  {...register(
                    "health_care_entity_authorized_information.state",
                    {
                      required: true,
                    }
                  )}
                  type="text"
                  defaultValue="_TX__"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className={`${rfInput_label_class} text-nowrap`}>
                  Zip Code:
                </h1>
                <input
                  {...register(
                    "health_care_entity_authorized_information.zip_code",
                    {
                      required: true,
                    }
                  )}
                  type="text"
                  defaultValue="_77407"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
            </div>

            <div className="flex justify-between flex-wrap items-start gap-2 w-full">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className={`${rfInput_label_class} text-nowrap`}>Phone:</h1>
                <input
                  {...register(
                    "health_care_entity_authorized_information.phone",
                    {
                      required: true,
                    }
                  )}
                  onInput={handleNumber}
                  type="text"
                  defaultValue="(832) _770-6380"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1 flex-grow">
                <h1 className={`${rfInput_label_class} text-nowrap`}>Fax:</h1>
                <input
                  {...register(
                    "health_care_entity_authorized_information.fax",
                    {
                      required: true,
                    }
                  )}
                  type="text"
                  defaultValue="(832) _770-6460"
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
              <h1 className={`${rfInput_label_class} text-nowrap`}>Name:</h1>
              <input
                {...register("information_regarding_person.name", {
                  required: true,
                })}
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className={`${rfInput_label_class} text-nowrap`}>
                  Address:
                </h1>
                <input
                  {...register("information_regarding_person.address", {
                    required: true,
                  })}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className={`${rfInput_label_class} text-nowrap`}>City:</h1>
                <input
                  {...register("information_regarding_person.city", {
                    required: true,
                  })}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className={`${rfInput_label_class} text-nowrap`}>State:</h1>
                <input
                  {...register("information_regarding_person.state", {
                    required: true,
                  })}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className={`${rfInput_label_class} text-nowrap`}>
                  Zip Code:
                </h1>
                <input
                  {...register("information_regarding_person.zip_code", {
                    required: true,
                  })}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
            </div>

            <div className="flex justify-between flex-wrap items-start gap-2 w-full">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className={`${rfInput_label_class} text-nowrap`}>Phone:</h1>
                <input
                  {...register("information_regarding_person.phone", {
                    required: true,
                  })}
                  onInput={handleNumber}
                  type="number"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1 flex-grow">
                <h1 className={`${rfInput_label_class} text-nowrap`}>Fax:</h1>
                <input
                  {...register("information_regarding_person.fax", {
                    required: true,
                  })}
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
            Specific information to be disclosed:
          </h1>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-wrap md:flex-nowrap">
                <Controller
                  name="specific_information.type"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <>
                      <input
                        type="radio"
                        {...field}
                        id="Other"
                        value="medical_record"
                        defaultChecked={field.value === "medical_record"}
                      />
                      <label
                        htmlFor="Other"
                        className={`${rfInput_label_class} text-nowrap`}
                      >
                        Medical Record
                      </label>
                    </>
                  )}
                  {...register("specific_information.type", {
                    required: true,
                  })}
                />

                <h1 className={`${rfInput_label_class} text-nowrap`}>
                  from (insert date)
                </h1>
                {watch("specific_information.type") === "medical_record" && (
                  <Controller
                    name="specific_information.medical_record_from_date"
                    control={control}
                    rules={{ required: "Date is required" }}
                    render={({ field }) => (
                      <DateInput
                        value={field.value}
                        setValue={(value) => {
                          setValue(
                            "specific_information?.medical_record_from_date",
                            value
                          );
                          field.onChange(value);
                        }}
                        error={
                          errors?.specific_information?.medical_record_from_date
                        }
                      />
                    )}
                    {...register(
                      "specific_information.medical_record_from_date",
                      {
                        required: true,
                      }
                    )}
                  />
                )}
              </div>

              {watch("specific_information.type") === "medical_record" && (
                <div className="flex items-center md:gap-1 flex-wrap md:flex-nowrap">
                  <h1 className={`${rfInput_label_class} text-nowrap`}>
                    to (insert date)
                  </h1>

                  <Controller
                    name="specific_information.medical_record_to_date"
                    control={control}
                    rules={{ required: "Date is required" }}
                    render={({ field }) => (
                      <DateInput
                        value={field.value}
                        setValue={(value) => {
                          setValue(
                            "specific_information?.medical_record_to_date",
                            value
                          );
                          field.onChange(value);
                        }}
                        error={
                          errors?.specific_information?.medical_record_to_date
                        }
                      />
                    )}
                    {...register(
                      "specific_information?.medical_record_to_date",
                      {
                        required: true,
                      }
                    )}
                  />
                </div>
              )}
            </div>

            <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
              X Entire Medical record, including patient histories, office notes
              (except psychotherapy notes), test results, radiology studies,
              films, referrals, consults, billing records, insurance records,
              and records received from other health care providers.
            </h1>

            <div className="flex items-center gap-1">
              <Controller
                name="specific_information.type"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <input
                      type="radio"
                      {...field}
                      id="Other"
                      value="Other"
                      defaultChecked={field.value === "Other"}
                    />
                    <label
                      htmlFor="Other"
                      className={`${rfInput_label_class} text-nowrap`}
                    >
                      Other
                    </label>
                    {watch("specific_information.type") === "Other" && (
                      <input
                        {...register("specific_information.other_value", {
                          required: true,
                        })}
                        type="text"
                        className="border-b outline-none h-8 text-sm w-full border-gray-900"
                      />
                    )}
                  </>
                )}
                {...register("specific_information.type", {
                  required: true,
                })}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-x border-b border-gray-900">
        <div className="">
          <div className="grid md:grid-cols-5">
            <div className="col-span-3 md:border-r border-gray-900 p-2">
              <h1 className="font-semibold text-gray-900 text-sm leading-[22px] tracking-[0.2px]">
                Include: (Indicate by Initialing)
              </h1>
              <div className="grid grid-cols-1 gap-2 h-fit">
                <div className="flex items-center gap-1 flex-wrap md:flex-nowrap">
                  <input
                    {...register(
                      "include.drug_alcohol_or_substance_abuse_record",
                      {
                        required: true,
                      }
                    )}
                    type="text"
                    className="border-b outline-none h-8 text-sm w-full md:max-w-[200px] border-gray-900"
                  />
                  <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
                    Drug, Alcohol or Substance Abuse Records
                  </h1>
                </div>
                <div className="flex items-center gap-1 flex-wrap md:flex-nowrap">
                  <input
                    {...register("include.mental_health_record", {
                      required: true,
                    })}
                    type="text"
                    className="border-b outline-none h-8 text-sm w-full md:max-w-[200px] border-gray-900"
                  />
                  <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
                    Mental Health Records <i>(Except Psychotherapy Notes)</i>
                  </h1>
                </div>
                <div className="flex items-center gap-1 flex-wrap md:flex-nowrap">
                  <input
                    {...register("include.hiv_aids_information", {
                      required: true,
                    })}
                    type="text"
                    className="border-b outline-none h-8 text-sm w-full md:max-w-[200px] border-gray-900"
                  />
                  <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
                    HIV/AIDS-Related Information{" "}
                    <i>(Including HIV/AIDS Test Results)</i>
                  </h1>
                </div>
                <div className="flex items-center gap-1 flex-wrap md:flex-nowrap">
                  <input
                    {...register("include.genetic_information", {
                      required: true,
                    })}
                    type="text"
                    className="border-b outline-none h-8 text-sm w-full md:max-w-[200px] border-gray-900"
                  />
                  <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
                    Genetic Information <i>(Including Genetic Test Results)</i>
                  </h1>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 p-2 col-span-3 md:col-span-2">
              <h1 className="font-semibold text-gray-900 text-sm leading-[22px] tracking-[0.2px]">
                Reason for release of information: (Choose all that Apply)
              </h1>
              <Controller
                name="reason_for_release_information.treatment_medical_care"
                control={control}
                render={({ field }) => (
                  <div
                    onClick={() => {
                      field.onChange(!field.value);
                    }}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <input type="checkbox" checked={field.value} />
                    <h1 className={`${rfInput_label_class} text-nowrap`}>
                      Treatment/Continuing Medical Care
                    </h1>
                  </div>
                )}
              />
              <Controller
                name="reason_for_release_information.personal_use"
                control={control}
                render={({ field }) => (
                  <div
                    onClick={() => {
                      field.onChange(!field.value);
                    }}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <input type="checkbox" checked={field.value} />
                    <h1 className={`${rfInput_label_class} text-nowrap`}>
                      Personal Use
                    </h1>
                  </div>
                )}
              />
              <Controller
                name="reason_for_release_information.billing_or_claims"
                control={control}
                render={({ field }) => (
                  <div
                    onClick={() => {
                      field.onChange(!field.value);
                    }}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <input type="checkbox" checked={field.value} />
                    <h1 className={`${rfInput_label_class} text-nowrap`}>
                      Billing or Claims
                    </h1>
                  </div>
                )}
              />
              <Controller
                name="reason_for_release_information.insurance"
                control={control}
                render={({ field }) => (
                  <div
                    onClick={() => {
                      field.onChange(!field.value);
                    }}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <input type="checkbox" checked={field.value} />
                    <h1 className={`${rfInput_label_class} text-nowrap`}>
                      Insurance
                    </h1>
                  </div>
                )}
              />
              <Controller
                name="reason_for_release_information.legal_purposes"
                control={control}
                render={({ field }) => (
                  <div
                    onClick={() => {
                      field.onChange(!field.value);
                    }}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <input type="checkbox" checked={field.value} />
                    <h1 className={`${rfInput_label_class} text-nowrap`}>
                      Legal Purposes
                    </h1>
                  </div>
                )}
              />
              <Controller
                name="reason_for_release_information.disability_determination"
                control={control}
                render={({ field }) => (
                  <div
                    onClick={() => {
                      field.onChange(!field.value);
                    }}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <input type="checkbox" checked={field.value} />
                    <h1 className={`${rfInput_label_class} text-nowrap`}>
                      Disability Determination
                    </h1>
                  </div>
                )}
              />
              <Controller
                name="reason_for_release_information.school"
                control={control}
                render={({ field }) => (
                  <div
                    onClick={() => {
                      field.onChange(!field.value);
                    }}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <input type="checkbox" checked={field.value} />
                    <h1 className={`${rfInput_label_class} text-nowrap`}>
                      School
                    </h1>
                  </div>
                )}
              />
              <Controller
                name="reason_for_release_information.employment"
                control={control}
                render={({ field }) => (
                  <div
                    onClick={() => {
                      field.onChange(!field.value);
                    }}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <input type="checkbox" checked={field.value} />
                    <h1 className={`${rfInput_label_class} text-nowrap`}>
                      Employment
                    </h1>
                  </div>
                )}
              />
              <Controller
                name="reason_for_release_information.other.status"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center gap-1 cursor-pointer">
                    <div
                      onClick={() => {
                        field.onChange(!field.value);
                      }}
                      className="flex items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        checked={field.value}
                        className="cursor-pointer"
                      />
                      <h1 className={`${rfInput_label_class} text-nowrap`}>
                        Other <i>(Specify)</i>
                      </h1>
                    </div>
                    {watch("reason_for_release_information.other.status") && (
                      <input
                        {...register(
                          "reason_for_release_information.other.message",
                          {
                            required: true,
                          }
                        )}
                        type="text"
                        className="border-b outline-none h-8 text-sm w-full border-gray-900"
                      />
                    )}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1.5px] bg-black mt-10"></div>
    </>
  );
};

export default RFormThreeStep1;
