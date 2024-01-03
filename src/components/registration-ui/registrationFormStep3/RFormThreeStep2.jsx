/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Controller } from "react-hook-form";
import DateInput from "../../common/DateInput";
import SignatureInput from "../../common/SignatureInput";
import useInputPattern from "../../../lib/hooks/useInputPattern";

const RFormThreeStep2 = ({ register, control, setValue, errors }) => {
  const { handleNumber } = useInputPattern();
  return (
    <>
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
              <Controller
                name="signatures.patient_representative_signature_date"
                control={control}
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <DateInput
                    value={field.value}
                    setValue={(value) => {
                      setValue(
                        "signatures?.patient_representative_signature_date",
                        value
                      );
                      field.onChange(value);
                    }}
                    error={
                      errors.signatures?.patient_representative_signature_date
                    }
                    className="h-8 text-sm w-full max-w-[300px]"
                  />
                )}
                {...register(
                  "signatures?.patient_representative_signature_date",
                  {
                    required: true,
                  }
                )}
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
              <Controller
                name="signatures.witness_signature_date"
                control={control}
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <DateInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("signatures?.witness_signature_date", value);
                      field.onChange(value);
                    }}
                    error={errors.signatures?.witness_signature_date}
                    className="h-8 text-sm w-full max-w-[300px]"
                  />
                )}
                {...register("signatures?.witness_signature_date", {
                  required: true,
                })}
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
              <Controller
                name="signatures.signature_of_minor_date"
                control={control}
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <DateInput
                    value={field.value}
                    setValue={(value) => {
                      setValue("signatures?.signature_of_minor_date", value);
                      field.onChange(value);
                    }}
                    error={errors.signatures?.signature_of_minor_date}
                    className="h-8 text-sm w-full max-w-[300px]"
                  />
                )}
                {...register("signatures?.signature_of_minor_date", {
                  required: true,
                })}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RFormThreeStep2;
