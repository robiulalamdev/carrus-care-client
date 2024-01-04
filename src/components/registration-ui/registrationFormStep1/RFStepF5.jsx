/* eslint-disable react/prop-types */
import React from "react";
import { Controller } from "react-hook-form";
import SignatureInput from "../../common/SignatureInput";
import DateInput from "../../common/DateInput";

const RFStepF5 = ({
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
  return (
    <div className={`mt-10 ${step === 5 ? "block" : "hidden"}`}>
      <div className="flex flex-col gap-4">
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
      <div className="flex justify-between items-end flex-wrap gap-4 mt-10">
        <div className="flex items-center gap-1 flex-wrap">
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">
            Acknowledge:
          </h1>
          <input
            {...register("acknowledge_f", {
              required: true,
            })}
            required
            type="text"
            className="border-b outline-none h-9 py-0 border-gray-900"
          />
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">
            (Initial)
          </h1>
        </div>
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

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-3 h-fit">
            <div className="flex flex-col gap-1">
              <Controller
                name="acknowledgement_patient_signature"
                control={control}
                rules={{ required: "Signature is required" }}
                render={({ field }) => (
                  <SignatureInput
                    img={field.value}
                    setValue={(value) => {
                      setValue("acknowledgement_patient_signature", value);
                      field.onChange(value);
                    }}
                  />
                )}
              />
              <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-medium">
                Patient Signature
              </h1>
            </div>
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-medium">
                Date:
              </h1>

              <Controller
                name="acknowledgement_patient_signature_date"
                control={control}
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <DateInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("acknowledgement_patient_signature_date", value);
                      field.onChange(value);
                    }}
                    error={errors?.acknowledgement_patient_signature_date}
                  />
                )}
                {...register("acknowledgement_patient_signature_date", {
                  required: true,
                })}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex flex-col gap-1">
              <Controller
                name="responsible_party_witness_signature"
                control={control}
                rules={{ required: "Signature is required" }}
                render={({ field }) => (
                  <SignatureInput
                    img={field.value}
                    setValue={(value) => {
                      setValue("responsible_party_witness_signature", value);
                      field.onChange(value);
                    }}
                  />
                )}
              />
              <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-medium">
                Responsible Party Witness Signature
              </h1>
            </div>
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-medium">
                Date:
              </h1>

              <Controller
                name="responsible_party_witness_signature_date"
                control={control}
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <DateInput
                    value={field.value}
                    setValue={(value) => {
                      setValue(
                        "responsible_party_witness_signature_date",
                        value
                      );
                      field.onChange(value);
                    }}
                    error={errors?.responsible_party_witness_signature_date}
                  />
                )}
                {...register("responsible_party_witness_signature_date", {
                  required: true,
                })}
                required
              />
            </div>
            <div className="flex items-center gap-1 w-full">
              <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-medium text-nowrap">
                Relationship to Patient:
              </h1>
              <input
                {...register("relationship_to_patient", {
                  required: true,
                })}
                required
                type="text"
                className="border-b outline-none h-8 w-full py-0 border-gray-900"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-16">
          <h1 className="text-center text-sm leading-[18px] tracking-[0.2px] font-semibold">
            Patient ID Sticker
          </h1>
        </div>
      </section>
    </div>
  );
};

export default RFStepF5;
