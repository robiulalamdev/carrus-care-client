import { baseQuery } from "./api";

export const handleDownload = (endpoint) => {
  const imageUrl = `${baseQuery}/uploads/${endpoint}`;
  fetch(imageUrl)
    .then((response) => response.blob())
    .then((blob) => {
      // Create a blob URL for the image
      const blobUrl = URL.createObjectURL(blob);

      // Create a temporary anchor element
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = "image"; // You can set the default name of the downloaded file here

      // Append the anchor element to the body and trigger the download
      document.body.appendChild(a);
      a.click();

      // Remove the anchor element from the body
      document.body.removeChild(a);

      // Revoke the blob URL to free up memory
      URL.revokeObjectURL(blobUrl);
    })
    .catch((error) => {
      console.error("Error downloading image:", error);
    });
};
// export const handleDownload = (endpoint) => {
//   const fileUrl = `${baseQuery}/uploads/${endpoint}`;
//   const link = document.createElement("a");
//   link.href = fileUrl;
//   link.download = "downloaded.ext";
//   //   link.target = "_blank";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

export const a7FormDataReady = async (data = null) => {
  const accidentInfo = data?.prfOneData?.accident_related;
  const insuranceInfo = data?.prfOneData?.insurance_information;
  const patientInfo = data?.prfOneData?.patient_information;
  const result = {
    patientId: data?.prfOneData?._id,
    date: data?.prfOneData?.createdAt,
    reasonForVisit: data?.prfOneData?.reason_for_visit,
    patientInformationId: 0, // not found
    insuranceInformationId: 0, // not found
    accidentRelatedInformationId: 0, // not found
    emergencyContactName:
      data?.prfOneData?.in_case_of_emergency?.name_of_local_relative,
    emergencyContactPhone: data?.prfOneData?.in_case_of_emergency?.phone_number,
    accidentRelatedInformation: {
      accidentRelatedInformationId: 0, // not found
      dateOfAccident: accidentInfo?.date_of_accident,
      typeOfAccident: accidentInfo?.type_of_accident,
      autoInvolvement: accidentInfo?.involvement_in_accident,
      workersCompOrAutoInsurance: accidentInfo?.name_of_worker,
      insurancePhoneNumber: accidentInfo?.insurance_phone_number,
      insuranceFaxNumber: accidentInfo?.insurance_fax_number,
      insuranceCompanyAddress: accidentInfo?.company_address,
      insuranceCompanyCityStateZip: accidentInfo?.city_state_zip,
      nameOfInsured: accidentInfo?.name_of_insured,
      adjusterName: accidentInfo?.adjuster_name,
      policyNumber: accidentInfo?.policy_number,
      reported: accidentInfo?.report === "Yes",
      claimNumber: accidentInfo?.claim_number,
    },
    insuranceInformation: {
      insuranceInformationId: 0, // not found
      isAccidentRelated: insuranceInfo?.auto_accident === "Yes",
      insuranceCardFront:
        `${baseQuery}/uploads/${insuranceInfo?.front_picture}` || "",
      insuranceCardBack:
        `${baseQuery}/uploads/${insuranceInfo?.back_picture}` || "",
      subscriberPhone: insuranceInfo?.subscriber_phone,
      insuranceDetail: `Name: ${insuranceInfo?.subscriber_first_name} ${
        insuranceInfo?.subscriber_last_name || ""
      } Group: ${insuranceInfo?.group_number} Subscriber social security: ${
        insuranceInfo?.subscriber_social_security
      } patient relationship subscriber: ${
        insuranceInfo?.patient_relationship_subscriber
      } primary insurance: ${insuranceInfo?.primary_insurance}`,
    },
    patientInformation: {
      patientInformationId: 0, // not found
      patientLastName: patientInfo?.last_name,
      patientFirstName: patientInfo?.first_name,
      patientMiddleName: patientInfo?.middle_name,
      maritalStatus: patientInfo?.martial_status,
      governmentId: `${baseQuery}/uploads/${patientInfo?.picture}` || "",
      gender: patientInfo?.gender,
      socialSecurityNumber: patientInfo?.social_security_no,
      phoneNumber: patientInfo?.phone_number,
      dateOfBirth: patientInfo?.birth_date,
      streetAddress: patientInfo?.street_address,
      cityStateZip: patientInfo?.city_state_zip,
      preferredPharmacy: patientInfo?.preferred_pharmacy,
      pharmacyPhone: patientInfo?.pharmacy_phone,
      pharmacyAddress: patientInfo?.pharmacy_address,
      primaryCarePhysician: patientInfo?.primary_care_physician,
      pcpPhoneNumber: patientInfo?.primary_phone_number,
      preferredMethod: patientInfo?.preferred_method,
      referralSource: null, // not found
      doctorOffice: patientInfo?.Doctor_Office,
      employer: patientInfo?.employer,
      lawFirm: patientInfo?.law_firm,
      familyMember: patientInfo?.family_member,
    },
  };

  return result;
};
