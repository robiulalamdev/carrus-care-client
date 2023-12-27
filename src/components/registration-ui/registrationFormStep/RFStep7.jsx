import React from "react";

const RFStep7 = ({
  step,
  handleSubmit,
  register,
  setError,
  setValue,
  watch,
  control,
}) => {
  return (
    <div className={`mt-10 ${step === 7 ? "block" : "hidden"}`}>
      <p className="text-justify text-sm text-gray-900">
        The physicians, nurses and the entire staff at Care Plus ER are
        committed to assure you safe and reasonable care. To file or voice a
        complaint, grievance about the organization, the care provided, or
        patient rights; and to receive a timely response without reprisal or
        prejudicial treatment contact:{" "}
      </p>
      <ul className="list-disc ml-10 mt-5">
        <li>Patient Advocate (832) 770-6380</li>
      </ul>

      <div className="mt-20">
        <h1 className="text-base text-left text-gray-900 font-medium">
          If your complaint or grievance is not resolved to your satisfaction,
          you may contact:
        </h1>

        <div className="grid grid-cols-1 gap-3 mt-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-semibold">
                Department of State Health Services Complaint Hotline
              </h1>
              <h1 className="text-base mt-3">
                Health Facility Compliance Group (MC 1979) (888) 973-0022
              </h1>
            </div>
            <div>
              <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-semibold">
                Complaint Hotline
              </h1>
              <h1 className="text-base mt-3">(888) 973-0022</h1>
            </div>
          </div>

          <h1 className="text-base">
            Texas Department of State Health Services
          </h1>
          <h1 className="text-base mt-5">P.O. Box 149347</h1>
          <h1 className="text-base mt-3">Austin, TX. 78714-9347</h1>
        </div>
        <p className="mt-12">
          Presentation of a complaint will not compromise your care under any
          circumstances.
        </p>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1 col-span-2 max-w-[350px]">
          <input
            type="text"
            className="border-b outline-none h-8 w-full py-0 border-gray-900"
          />
          <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-medium">
            Patient’s Signature
          </h1>
        </div>
        <div className="flex flex-col gap-1 max-w-[350px]">
          <input
            type="text"
            className="border-b outline-none h-8 w-full py-0 border-gray-900"
          />
          <h1 className="text-gray-950 text-base leading-[22px] tracking-[0.18px] font-medium">
            Date
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RFStep7;
