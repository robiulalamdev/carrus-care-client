/* eslint-disable react/prop-types */
import moment from "moment";
import "./pdfstyle.css";

const PdfFOne = ({ data }) => {
  //   console.log(data);
  return (
    <div className="text-current w-full p-5">
      <div className="form_header">
        <div className="flex_container">
          <h1 className="date_label">Date:</h1>
          <p className="label_value">
            {moment(data?.date).format("DD-MM-YYYY")}
          </p>
        </div>
        <div className="flex_container">
          <h1 className="date_label">Reason for Visit:</h1>
          <p className="label_value">{data?.reason_for_visit}</p>
        </div>
      </div>
      <div className={`mt-5`}>
        {/* -------1st part start */}
        <div className="bg-gray-900 text-white text-center flex justify-center items-center py-1">
          <h1>PATIENT INFORMATION</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-7 md:col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Patient’s Last Name:
            </label>
            <p>{data?.patient_information.last_name}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-7 md:col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              First
            </label>
            <p>{data?.patient_information.first_name}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Middle
            </label>
            <p>{data?.patient_information.middle_name}</p>
          </div>

          <div className="p-1 md:p-2 md:border-r border-gray-900 col-span-7 md:col-span-1">
            <div className="flex items-center gap-3">
              <p>{data?.patient_information.salutation}</p>
            </div>
          </div>
          <div className="p-1 md:p-2 border-gray-900">
            <div className="flex gap-3">
              <p>{data?.patient_information.salutation}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Social Security No.:
            </label>
            <p>{data?.patient_information.social_security_no}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Phone Number:
            </label>
            <p>{data?.patient_information.phone_number}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Birth Date
            </label>

            <p>
              {moment(data?.patient_information.birth_date).format(
                "DD-MM-YYYY"
              )}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Street Address:
            </label>
            <p>{data?.patient_information.street_address}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              City/State/Zip:
            </label>
            <p>{data?.patient_information.city_state_zip}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Preferred Pharmacy
            </label>
            <p>{data?.patient_information.preferred_pharmacy}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Pharmacy Phone:
            </label>
            <p>{data?.patient_information.pharmacy_phone}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Pharmacy Address:
            </label>
            <p>{data?.patient_information.pharmacy_address}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Primary Care Physician (PCP):
            </label>
            <p>{data?.patient_information.primary_care_physician}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Phone Number:
            </label>
            <p>{data?.patient_information.primary_phone_number}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Preferred method
            </label>
            <div className="flex flex-wrap gap-2">
              <p>{data?.patient_information.preferred_method}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 border-gray-900 w-full">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Please tell us how you learned of our service or whom we may
              thank.
            </label>
            <div className="flex flex-wrap w-full">
              <div className="flex items-end gap-1">
                <span>Doctor’s Office:</span>
                <p>{data?.patient_information.Doctor_Office}</p>
              </div>
              <div className="flex items-end gap-1">
                <span>Employer:</span>
                <p>{data?.patient_information.employer}</p>
              </div>
              <div className="flex items-end gap-1">
                <span>Law Firm:</span>
                <p>{data?.patient_information.law_firm}</p>
              </div>
              <div className="flex items-end gap-1 flex-wrap my-3 md:my-0">
                <span>Friend/Family Member:</span>
                <p>{data?.patient_information.family_member}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-end gap-2 min-h-[42px]">
              <>
                {/* patient_information.service */}
                <div className="flex items-center gap-2">
                  <input type="radio" />
                  <label htmlFor="s1" className="font-semibold text-sm">
                    Media
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" />
                  <label htmlFor="s2" className="font-semibold text-sm">
                    Returning
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" value="Patient" />
                  <label htmlFor="s3" className="font-semibold text-sm">
                    Patient
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" value="Pharmacy" />
                  <label htmlFor="s4" className="font-semibold text-sm">
                    Pharmacy
                  </label>
                </div>
                <div className="flex items-end gap-1">
                  <label htmlFor="s5" className="font-semibold text-sm">
                    Other:
                  </label>
                  {data?.patient_information.service === "Other" && (
                    <p>{data?.patient_information.other_service}</p>
                  )}
                </div>
              </>
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
              <p>{data?.insurance_information.auto_accident}</p>
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
              <p>{data?.sInsuranceItems}</p>

              {data?.insurance_information.primary_insurance === "Other" && (
                <p>{data?.insurance_information.other_primary_insurance}</p>
              )}
            </div>
            <div className="flex items-end gap-1">
              <span className="text-gray-950 font-medium text-sm leading-[22px] tracking-[0.18px] mt-2">
                Subscriber’s phone #
              </span>
              <p>{data?.insurance_information.subscriber_phone}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Subscriber’s Last Name:
            </label>
            <p>{data?.insurance_information.subscriber_last_name}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              First:
            </label>
            <p>{data?.insurance_information.subscriber_first_name}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Subscriber’s Social Security:
            </label>
            <p>{data?.insurance_information.subscriber_social_security}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Member ID Number:
            </label>
            <p>{data?.insurance_information.member_id_number}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Group Number:
            </label>
            <p>{data?.insurance_information.group_number}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Patient’s relationship to subscriber:
            </label>
            <div className="flex flex-wrap md:gap-4 cursor-pointer">
              <p>
                {data?.insurance_information.patient_relationship_subscriber}
              </p>
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

            <p>{data?.accident_related.date_of_accident}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Type of Accident:
            </label>
            <div className="flex flex-wrap md:gap-4 cursor-pointer">
              <p>{data?.accident_related.type_of_accident}</p>
            </div>
          </div>
          {data?.accident_related.type_of_accident === "Auto" && (
            <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
              <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
                If auto, involvement in accident:
              </label>
              <div className="flex flex-wrap md:gap-4 cursor-pointer">
                <p>{data?.accident_related.involvement_in_accident}</p>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-1">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Name of Worker’s Comp Insurance Company or Auto Insurance:
            </label>
            <p>{data?.accident_related.name_of_worker}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-1">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Company Address:
            </label>
            <p>{data?.accident_related.company_address}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-1">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              City/State/Zip:
            </label>
            <p>{data?.accident_related.city_state_zip}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Name of Insured:
            </label>
            <p>{data?.accident_related.name_of_insured}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Adjuster Name:
            </label>
            <p>{data?.accident_related.adjuster_name}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 border-b border-x border-gray-900 h-fit">
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900 col-span-2">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Policy Number:
            </label>
            <p>{data?.accident_related.policy_number}</p>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Reported:
            </label>
            <div className="flex flex-wrap md:gap-4 cursor-pointer">
              <p>{data?.accident_related.report}</p>
            </div>
          </div>
          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Claim Number:
            </label>
            <p>{data?.accident_related.claim_number}</p>
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
            <p>{data?.in_case_of_emergency.name_of_local_relative}</p>
          </div>

          <div className="flex flex-col gap-0 md:gap-1 p-1 md:p-2 md:border-r border-gray-900">
            <label className="text-gray-950 font-medium text-base leading-[22px] tracking-[0.18px]">
              Relationship to Patient:
            </label>
            <p>{data?.in_case_of_emergency.relationship_to_patient}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfFOne;
