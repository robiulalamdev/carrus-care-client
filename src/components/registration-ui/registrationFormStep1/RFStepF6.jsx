import React from "react";

const patientRights = [
  "Be informed of your patient rights in advance of receiving or discontinuing care",
  "Have impartial access to care, no one is denied care based on sex, disability, national origin, culture, age, color, or sexual orientation.",
  "Receive humane care and treatment, with respect and consideration",
  "Privacy and confidentiality when seeking or receiving care except for life-threatening conditions or situations",
  "Confidentiality of health records",
  "Be informed of and to exercise the option to refuse to participate in any research aspect of care without compromising access to medical care and treatment",
  "Receive accurate information concerning diagnosis, treatment, risks involved, and prognosis of an illness or health-related condition",
  "Ask about reasonable alternatives to care",
  "A second professional opinion regarding one’s health care and treatment",
  "Participate actively in decisions regarding one’s health care and treatment",
  "Accessible information regarding the scope and availability of services",
  "Be informed about any legal reporting requirements regarding any aspect of screening or care",
  "Appropriate assessment and management of your pain",
  "Access interpreter services when language barriers exist",
  "Know the names, professional’s status prior to receiving care",
  "Timely resolution of complaints, with an understanding of our grievance policy and whom to contact to file a complaint",
];

// Array for Patient Responsibilities
const patientResponsibilities = [
  "Provide complete information about one’s illness/problem, to enable proper evaluation and treatment",
  "Ask questions so that an understanding of the condition or problem is ensured",
  "Show respect to health personnel and other patients",
  "Reschedule/cancel an appointment so that another person may be given that time slot",
  "Pay bills or file health claims in a timely manner",
  "Use prescription or medical devices for oneself only",
  "Inform the practitioner if one’s condition worsens, or an expected reaction occurs from a medication",
  "Read and understand “Patient Discharge Instruction”",
  "Agree to follow up with the primary care physician or specialist as directed",
];

const RFStepF6 = ({
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
    <div className={`mt-10 ${step === 6 ? "block" : "hidden"}`}>
      <h1 className="text-center font-bold text-[18px] underline leading-[22px] tracking-[0.4px]">
        PATIENTS’ BILL OF RIGHTS AND RESPONSIBILITIES
      </h1>
      <div className="mt-5">
        <h1 className="text-gray-800 text-base font-semibold">
          Patients have the right to:
        </h1>
        <ul className="list-disc ml-10">
          {patientRights?.map((value, index) => (
            <li key={index} className="text-sm text-gray-700">
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5">
        <h1 className="text-gray-900 text-base font-semibold">
          Patients have the responsibility to:
        </h1>
        <ul className="list-disc ml-10">
          {patientResponsibilities?.map((value, index) => (
            <li key={index} className="text-sm text-gray-700">
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RFStepF6;
