/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Controller, useForm } from "react-hook-form";
import logo from "../../../assets/brand/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { usePostPatientRegisterMutation } from "../../../redux/features/form/formApi";
import { setRForm1, setRForm2 } from "../../../redux/features/form/formSlice";
import SignatureInput from "../../common/SignatureInput";
import { Spinner } from "@material-tailwind/react";
import useInputPattern from "../../../lib/hooks/useInputPattern";
import { toast } from "react-toastify";
import { useEffect } from "react";

const RForm3 = ({ step, setStep, show, data }) => {
  const [postPatientRegister, { isLoading }] = usePostPatientRegisterMutation();
  const { rForm1, rForm2 } = useSelector((state) => state.form);
  const {
    handleSubmit,
    register,
    setError,
    setValue,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { handleNumber, getValueDate } = useInputPattern();

  const handleSaveData = async (data) => {
    const formData = {
      ...rForm1,
      ...rForm2,
      ...data,
    };
    const options = {
      data: formData,
    };
    const result = await postPatientRegister(options);
    if (result?.data?.success) {
      dispatch(setRForm1(null));
      dispatch(setRForm2(null));
      reset();
      toast.success("Form Submit Success");
      window.location.reload();
      setStep(1);
    } else {
      toast.error("Form Submit Failed");
    }
  };

  const setNestedValues = (obj) => {
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === "object") {
        for (const nkey in value) {
          const nvalue = value[nkey]; // Corrected line
          setValue(`${key}.${nkey}`, nvalue);
        }
      } else {
        setValue(key, value);
      }
    }
  };

  useEffect(() => {
    setNestedValues(data);
  }, [setValue, data]);

  return (
    <form
      onSubmit={handleSubmit(handleSaveData)}
      className={`${step === 3 ? "block" : "hidden"}`}
    >
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
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Date of Birth:
                </h1>
                <input
                  {...register(
                    "patient_information_for_authorization.date_of_birth",
                    { required: true }
                  )}
                  type={show ? "date" : "text"}
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
                  {...register(
                    "patient_information_for_authorization.address",
                    { required: true }
                  )}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  City:
                </h1>
                <input
                  {...register("patient_information_for_authorization.city", {
                    required: true,
                  })}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  State:
                </h1>
                <input
                  {...register("patient_information_for_authorization.state", {
                    required: true,
                  })}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Phone:
                </h1>
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Name:
              </h1>
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  City:
                </h1>
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  State:
                </h1>
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Phone:
                </h1>
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Fax:
                </h1>
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
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Name:
              </h1>
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  City:
                </h1>
                <input
                  {...register("information_regarding_person.city", {
                    required: true,
                  })}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  State:
                </h1>
                <input
                  {...register("information_regarding_person.state", {
                    required: true,
                  })}
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Phone:
                </h1>
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
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Fax:
                </h1>
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
                        className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap"
                      >
                        Medical Record
                      </label>
                    </>
                  )}
                  {...register("specific_information.type", {
                    required: true,
                  })}
                />

                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  from (insert date)
                </h1>
                {watch("specific_information.type") === "medical_record" && (
                  <input
                    {...register(
                      "specific_information.medical_record_from_date",
                      {
                        required: true,
                      }
                    )}
                    type={show ? "date" : "text"}
                    className="border-b outline-none h-8 text-sm w-full border-gray-900"
                  />
                )}
              </div>

              {watch("specific_information.type") === "medical_record" && (
                <div className="flex items-center md:gap-1 flex-wrap md:flex-nowrap">
                  <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                    to (insert date)
                  </h1>
                  <input
                    {...register(
                      "specific_information.medical_record_to_date",
                      {
                        required: true,
                      }
                    )}
                    type={show ? "date" : "text"}
                    className="border-b outline-none h-8 text-sm w-full border-gray-900"
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
                      className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap"
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
                    <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                    <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                    <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                    <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                    <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                    <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                    <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                    <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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
                      <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
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

      <section className="mt-16">
        <h1 className="font-bold text-base md:text-[18px] leading-[22px] tracking-[0.4px] underline">
          The individual signing this form agrees and acknowledges as follows:
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-4">
          <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
            (i)
            <span className="text-gray-950 font-bold ml-3 mr-2 underline">
              Voluntarv Authorization:
            </span>
            This authorization is voluntary. Treatment, payment, enrollment or
            eligibility for benefits (as applicable) will not be conditioned
            upon my signing of this authorization form.
          </h1>
          <div>
            <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
              (ii)
              <span className="text-gray-950 font-bold ml-3 mr-2 underline">
                Effective Time Period:
              </span>
              This authorization shall be in effect until the earlier of two (2)
              years after the death of the patient for whom this authorization
              is made or the following specified date:
            </h1>
            <div className="flex flex-wrap items-start gap-2 w-full mt-2">
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Month:
                </h1>
                <input
                  {...register("effective_time_period.month", {
                    required: true,
                  })}
                  onInput={handleNumber}
                  maxLength={2}
                  type="number"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Day:
                </h1>
                <input
                  {...register("effective_time_period.day", {
                    required: true,
                  })}
                  onInput={handleNumber}
                  maxLength={2}
                  type="number"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Year:
                </h1>
                <input
                  {...register("effective_time_period.year", {
                    required: true,
                  })}
                  onInput={handleNumber}
                  maxLength={10}
                  type="number"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
            </div>
          </div>
          <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
            (iii)
            <span className="text-gray-950 font-bold ml-3 mr-2 underline">
              Right to Revoke:
            </span>
            I understand that I have the right to revoke this authorization at
            any time by writing to the health care provider or health care
            entity listed above. I understand that I may revoke this
            authorization except to the extent that action has already been
            taken based on this authorization.
          </h1>

          <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
            (iv)
            <span className="text-gray-950 font-bold ml-3 mr-2 underline">
              Special Information:
            </span>
            This authorization may include disclosure of information relating to
            <span className="text-base mx-1 font-bold">DRUG, ALCOHOL</span> and
            <span className="text-base mx-1 font-bold">
              SUBSTANCE ABUSE, MENTAL HEALTH INFORMATION
            </span>
            , except psychotherapy notes,
            <span className="text-base mx-1 font-bold">
              CONFIDENTIAL HIV/AIDS-RELATED INFORMATION
            </span>
            , and
            <span className="text-base mx-1 font-bold">
              GENETIC INFORMATION
            </span>
            only if I place my initials on the appropriate lines above. In the
            event the health information described above includes any of these
            types of information, and I initial the corresponding lines in the
            box above, I specifically authorize release of such information to
            the person or entity indicated herein.
          </h1>

          <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
            (v)
            <span className="text-gray-950 font-bold ml-3 mr-2 underline">
              Signature Authorization:
            </span>
            I have read this form and agree to the uses and disclosure of the
            information as described. I understand that refusing to sign this
            form does not stop disclosure of health information that has
            occurred prior to revocation or that is otherwise permitted by law
            without my specific authorization or permission. I understand that
            information disclosed pursuant to this authorization may be subject
            to redisclosure by the recipient and may no longer be protected by
            federal or state privacy laws.
          </h1>
        </div>

        <h1 className="text-gray-950 font-bold mt-10">SIGNATURES:</h1>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="flex flex-wrap">
            <div className="flex items-center gap-1 flex-grow flex-wrap md:flex-nowrap">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Patient/Legal Representative
              </h1>
              <Controller
                name="signatures.patient_representative_signature"
                control={control}
                rules={{ required: "Signature is required" }}
                render={({ field }) => (
                  <SignatureInput
                    img={field.value}
                    setValue={(value) => {
                      setValue(
                        "signatures.patient_representative_signature",
                        value
                      );
                      field.onChange(value);
                    }}
                  />
                )}
              />
            </div>
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Date:
              </h1>
              <input
                {...register(
                  "signatures.patient_representative_signature_date",
                  {
                    required: true,
                  }
                )}
                type={show ? "date" : "text"}
                className="border-b outline-none h-8 text-sm w-full max-w-[300px] border-gray-900"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 flex-grow flex-wrap md:flex-nowrap">
            <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
              If Legal Representative, relationship to Patient:
            </h1>
            <Controller
              name="signatures.legal_representative_relationship_to_patient_signature"
              control={control}
              rules={{ required: "Signature is required" }}
              render={({ field }) => (
                <SignatureInput
                  img={field.value}
                  setValue={(value) => {
                    setValue(
                      "signatures.legal_representative_relationship_to_patient_signature",
                      value
                    );
                    field.onChange(value);
                  }}
                />
              )}
            />
          </div>
          <div className="flex flex-wrap">
            <div className="flex items-center gap-1 flex-grow flex-wrap md:flex-nowrap">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Witness (optional):
              </h1>
              <Controller
                name="signatures.witness_signature"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <SignatureInput
                    img={field.value}
                    setValue={(value) => {
                      setValue("signatures.witness_signature", value);
                      field.onChange(value);
                    }}
                  />
                )}
              />
            </div>
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Date:
              </h1>
              <input
                {...register("signatures.witness_signature_date", {
                  required: true,
                })}
                type={show ? "date" : "text"}
                className="border-b outline-none h-8 text-sm w-full max-w-[300px] border-gray-900"
              />
            </div>
          </div>

          <p className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
            A minor individual's signature is required for the release of
            certain types of information, including for example, the release of
            information related to certain types of reproductive care, sexually
            transmitted diseases, and drug, alcohol or substance abuse, and
            mental health treatment.
          </p>
          <div className="flex flex-wrap">
            <div className="flex items-center gap-1 flex-grow flex-wrap md:flex-nowrap">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Signature of Minor (if applicable):
              </h1>
              <Controller
                name="signatures.signature_of_minor"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <SignatureInput
                    img={field.value}
                    setValue={(value) => {
                      setValue("signatures.signature_of_minor", value);
                      field.onChange(value);
                    }}
                  />
                )}
              />
            </div>
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Date:
              </h1>
              <input
                {...register("signatures.signature_of_minor_date", {
                  required: true,
                  valueAsDate: true,
                })}
                type={show ? "date" : "text"}
                className="border-b outline-none h-8 text-sm w-full max-w-[300px] border-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center pt-20 pb-3">
        {step === 3 && show && (
          <button
            type="submit"
            className="w-32 h-10 bg-green-600 hover:bg-green-700 duration-150 cursor-pointer text-white text-base leading-[18px] tracking-[0.4px] border-none flex justify-center items-center"
          >
            {isLoading ? <Spinner color="white" /> : "Submit"}
          </button>
        )}
      </div>
    </form>
  );
};

export default RForm3;
