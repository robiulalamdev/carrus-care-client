import React from "react";

const PatientBill = () => {
  return (
    <div className="mt-32">
      <h1 className="text-center font-bold text-[18px] underline leading-[22px] tracking-[0.4px]">
        PATIENTS’ BILL OF RIGHTS AND RESPONSIBILITIES
      </h1>
      <div className="mt-5">
        <h1 className="text-gray-900 text-base font-semibold">
          Patients have the right to:
        </h1>
        <ul className="list-disc ml-10">
          <li>
            Be informed of your patient rights in advance of receiving or
            discontinuing care{" "}
          </li>
          <li>
            Have impartial access to care, no one is denied care based on sex,
            disability, national origin, culture, age, color, or sexual
            orientation.
          </li>
          <li>
            Receive humane care and treatment, with respect and consideration{" "}
          </li>
          <li>
            Privacy and confidentiality when seeking or receiving care except
            for life-threatening conditions or situations
          </li>
          <li>Confidentiality of health records</li>
          <li>
            Be informed of and to exercise the option to refuses to participate
            in any research aspect of care without compromising access to
            medical care and treatment
          </li>
          <li>
            Receive accurate information concerning diagnosis, treatment, risks
            involved, and prognosis of an illness or health-related condition
          </li>
          <li>Ask about reasonable alternatives to care</li>
          <li>
            A second professional opinion regarding one’s health care and
            treatment
          </li>
          <li>
            Participate actively I decisions regarding one’s health care and
            treatment{" "}
          </li>
          <li>
            Accessible information regarding the scope and availability of
            services
          </li>
          <li>
            Be informed about any legal reporting requirements regarding any
            aspect of screening or care
          </li>
          <li>Appropriate assessment and management of your pain</li>
          <li>Access interpreter services when language barriers exist</li>
          <li>Know the names, professional’s status prior to receiving care</li>
          <li>
            Timely resolution of complaints, with an understanding of our
            grievance policy and whom to contact to file a complaint
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <h1 className="text-gray-900 text-base font-semibold">
          Patients have the responsibility to:
        </h1>
        <ul className="list-disc ml-10">
          <li>
            Provide complete information about one’s illness/problem, to enable
            proper evaluation and treatment
          </li>
          <li>
            Ask questions so that an understanding of the condition or problem
            is ensured
          </li>
          <li>Show respect to health personnel and other patients</li>
          <li>
            Reschedule/cancel an appointment so that another person may be given
            that time slot
          </li>
          <li>Pay bills or file health claims in a timely manner</li>
          <li>Use prescription or medical devices for oneself only</li>
          <li>
            Inform the practitioner if one’s condition worsens, or an expected
            reaction occurs from a medication
          </li>
          <li>Read and understand “Patient Discharge Instruction”</li>
          <li>
            Agree to follow up with primary care physician or specialist as
            directed
          </li>
        </ul>
      </div>

      <p className="mt-16 text-justify text-sm text-gray-900">
        The physicians, nurses and the entire staff at Care Plus ER are
        committed to assure you safe and reasonable care. To file or voice a
        complaint, grievance about the organization, the care provided, or
        patient rights; and to receive a timely response without reprisal or
        prejudicial treatment contact:{" "}
      </p>
      <ul className="list-disc ml-10 mt-5">
        <li>Patient Advocate (832) 770-6380</li>
      </ul>
    </div>
  );
};

export default PatientBill;
