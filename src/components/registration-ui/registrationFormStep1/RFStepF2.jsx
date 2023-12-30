import React from "react";

const RFStepF2 = ({
  step,
  handleSubmit,
  register,
  setError,
  setValue,
  watch,
  control,
  show,
}) => {
  return (
    <div className={`mt-8`}>
      <h1 className="text-center font-bold md:text-xl leading-[22px] tracking-[0.4px] mb-8">
        CONSENTS, TERMS, AND POLICIES
      </h1>
      <div className="flex flex-col gap-2">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          CONSENT TO TREATMENT
        </h1>
        <p className="text-justify text-sm text-gray-900">
          I consent to the procedures that may be performed during this visit
          including emergency treatment and/or services which may include, but
          are not limited to, laboratory services, x-ray examinations,
          diagnostic procedures, physician, nursing, or services rendered to me
          as ordered by my physician or other health care professional. I
          voluntarily request and consent for independently contracted
          physicians (via Care Plus ER) to order all necessary tests and
          treatments while I am a patient at Care Plus ER. I understand that
          medical care is not an exact science and that no guarantee or
          warrantee is being made as to my examination, treatment, result, or
          outcome. I understand that I am free to withdraw my consent and to
          discontinue participation in these procedures at any time. However, I
          understand that doing so may hinder my treatment and/or medical
          outcome.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          CONSENT TO PHOTOGRAPH
        </h1>
        <p className="text-justify text-sm text-gray-900">
          I consent to photographs, videotapes, digital or audio recording,
          and/or images of me being recorded for security purpose and/or Care
          Plus ER healthcare treatment and/or operations purposes (e.g. quality
          improvement activities). I understand that the facility retain the
          ownership rights to the images and/or recordings. I will be allowed to
          request access to or copies of the images and/or recording when
          technologically feasible unless otherwise prohibited by law. I
          understand that these images and/or recordings will be securely stored
          and protected. Images and/or recordings in which I am identified will
          not be released and/or used outside of the facility without a specific
          written authorization from me or my legal representatives unless
          otherwise required by law.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          CONSENT TO USE AND DISCLOSE INFORMATION
        </h1>
        <p className="text-justify text-sm text-gray-900">
          I agree and consent to the use and disclose of my health information
          for the purpose of treatment, payment from third party payers, and
          other healthcare operations, such as the maintenance of medical
          records, communication of health information with other health
          professional who contribute to my care, and quality peer reviews and
          assessments.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
          NOTICE OF PRIVACY PRACTICES
        </h1>
        <p className="text-justify text-sm text-gray-900">
          I acknowledge that I have received Care Plus ER Notice of Privacy
          Practices, which describes the way in which emergency room may use and
          disclose my healthcare information for its treatment, payment,
          healthcare operations and other described and permitted uses and
          disclosures, I understand that I may contact Care Plus ER at
          (832)770-6380 if I have questions or complaints.
        </p>
      </div>
      CONSENTS, TERMS, AND POLICIES
      <div className="flex justify-between items-end flex-wrap gap-4 mt-16">
        <div className="flex items-center gap-1 flex-wrap">
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">
            Acknowledge:
          </h1>
          <input
            {...register("acknowledge_a", {
              required: true,
            })}
            type="text"
            className="border-b outline-none h-9 py-0 border-gray-900"
          />
          <h1 className="font-bold leading-[18px] tracking-[0.2px]">
            (Initial)
          </h1>
        </div>
        <h1 className="text-center text-sm leading-[18px] tracking-[0.2px] font-semibold">
          Patient ID Sticker
        </h1>
      </div>
    </div>
  );
};

export default RFStepF2;
