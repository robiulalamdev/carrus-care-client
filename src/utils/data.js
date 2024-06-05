export const patientNotificationArray = [
  "This facility is a freestanding emergency medical care facility.",
  "This facility charges rates comparable to a hospital emergency room and may charge a facility fee for medical treatment.",
  "Either the facility or a physician providing services at the facility may be an out-of-network provider for the patient’s health benefit plan provider network.",
  "The physician providing medical care at this facility may bill separately from this facility for the medical care provided to a patient.",
  "This facility is out-of-network for all benefit plans at this time.",
];

export const patientNotificationArraySpanish = [
  "Esta instalación es una atención médica de emergencia independiente.",
  "Esta instalación cobra tarifas comparables a la sala de emergencias de un hospital y puede cobrar una tarifa de instalación por tratamiento médico.",
  "Ya sea la instalación o el médico que brinda servicios a la instalación pueden estar fuera de la red para el plan de beneficios de salud del paciente.",
  "El médico que brinda atención médica en el centro puede facturar por separado de este centro por la atención médica brindada a un paciente.",
  "Esta instalación está fuera de la red para todos los planes de beneficios en este momento.",
];

export const facilityFees = [
  {
    levelOfService: "EMERGENCY DEPT VISIT – LEVEL 1",
    nivelDeServicio: "VISITA DE EMERGENCIA – NIVEL 1",
    facilityFee: "$394.90",
  },
  {
    levelOfService: "EMERGENCY DEPT VISIT – LEVEL 2",
    nivelDeServicio: "VISITA DE EMERGENCIA – NIVEL 2",
    facilityFee: "$954.49",
  },
  {
    levelOfService: "EMERGENCY DEPT VISIT – LEVEL 3",
    nivelDeServicio: "VISITA DE EMERGENCIA – NIVEL 3",
    facilityFee: "$1,763.85",
  },
  {
    levelOfService: "EMERGENCY DEPT VISIT – LEVEL 4",
    nivelDeServicio: "VISITA DE EMERGENCIA – NIVEL 4",
    facilityFee: "$3,232.38",
  },
  {
    levelOfService: "EMERGENCY DEPT VISIT – LEVEL 5",
    nivelDeServicio: "VISITA DE EMERGENCIA – NIVEL 5",
    facilityFee: "$4,070.86",
  },
];

export const facilityFeesRange = [
  {
    levelOfService: "EMERGENCY DEPT VISIT – LEVEL 1",
    nivelDeServicio: "VISITA DE EMERGENCIA – NIVEL 1",
    feeRange: "LESS THAN $650",
  },
  {
    levelOfService: "EMERGENCY DEPT VISIT – LEVEL 2",
    nivelDeServicio: "VISITA DE EMERGENCIA – NIVEL 2",
    feeRange: "$650 - $2,500",
  },
  {
    levelOfService: "EMERGENCY DEPT VISIT – LEVEL 3",
    nivelDeServicio: "VISITA DE EMERGENCIA – NIVEL 3",
    feeRange: "$2,500 - $13,000",
  },
  {
    levelOfService: "EMERGENCY DEPT VISIT – LEVEL 4",
    nivelDeServicio: "VISITA DE EMERGENCIA – NIVEL 4",
    feeRange: "$4,500 - $35,00",
  },
  {
    levelOfService: "EMERGENCY DEPT VISIT – LEVEL 5",
    nivelDeServicio: "VISITA DE EMERGENCIA – NIVEL 5",
    feeRange: "$5,000 - $65,000",
  },
];

export const physicianFees = [
  {
    levelOfCare: "EMERGENCY DEPT VISIT – LEVEL 1",
    nivelDeCuidado: "VISITA DE EMERGENCIA – NIVEL 1",
    physicianFee: "$220.00",
  },
  {
    levelOfCare: "EMERGENCY DEPT VISIT – LEVEL 2",
    nivelDeCuidado: "VISITA DE EMERGENCIA – NIVEL 2",
    physicianFee: "$310.04",
  },
  {
    levelOfCare: "EMERGENCY DEPT VISIT – LEVEL 3",
    nivelDeCuidado: "VISITA DE EMERGENCIA – NIVEL 3",
    physicianFee: "$590.40",
  },
  {
    levelOfCare: "EMERGENCY DEPT VISIT – LEVEL 4",
    nivelDeCuidado: "VISITA DE EMERGENCIA – NIVEL 4",
    physicianFee: "$820.40",
  },
  {
    levelOfCare: "EMERGENCY DEPT VISIT – LEVEL 5",
    nivelDeCuidado: "VISITA DE EMERGENCIA – NIVEL 5",
    physicianFee: "$1,020.60",
  },
  {
    levelOfCare: "INITIAL OBSERVATION CARE – LEVEL 1",
    nivelDeCuidado: "CUIDADO DE OBSERVACION INICIAL – NIVEL 1",
    physicianFee: "$866.80",
  },
  {
    levelOfCare: "INITIAL OBSERVATION CARE – LEVEL 2",
    nivelDeCuidado: "CUIDADO DE OBSERVACION INICIAL – NIVEL 2",
    physicianFee: "$898.70",
  },
  {
    levelOfCare: "INITIAL OBSERVATION CARE – LEVEL 3",
    nivelDeCuidado: "CUIDADO DE OBSERVACION INICIAL – NIVEL 3",
    physicianFee: "$917.40",
  },
  {
    levelOfCare: "OBSERVATION CARE DISCHARGE",
    nivelDeCuidado: "ALTA DE OBSERVACION",
    physicianFee: "$1,145.36",
  },
  {
    levelOfCare: "OBSERVATION ADMIT/DISCHARGE – LEVEL 1",
    nivelDeCuidado: "ADMISION DE OBSERVACION/DISCARGA – NIVEL 1",
    physicianFee: "$1,169.17",
  },
  {
    levelOfCare: "OBSERVATION ADMIT/DISCHARGE – LEVEL 2",
    nivelDeCuidado: "ADMISION DE OBSERVACION/DISCARGA – NIVEL 2",
    physicianFee: "$1,190.39",
  },
  {
    levelOfCare: "OBSERVATION ADMIT/DISCHARGE – LEVEL 3",
    nivelDeCuidado: "ADMISION DE OBSERVACION/DISCARGA – NIVEL 3",
    physicianFee: "$1,198.28",
  },
];

export const h7formData = {
  patientId: 0,
  date: "2024-06-01T10:30:25.934Z",
  reasonForVisit: "string",
  patientInformationId: 0,
  insuranceInformationId: 0,
  accidentRelatedInformationId: 0,
  emergencyContactName: "string",
  emergencyContactPhone: "string",
  accidentRelatedInformation: {
    accidentRelatedInformationId: 0,
    dateOfAccident: "2024-06-01T10:30:25.934Z",
    typeOfAccident: "string",
    autoInvolvement: "string",
    workersCompOrAutoInsurance: "string",
    insurancePhoneNumber: "string",
    insuranceFaxNumber: "string",
    insuranceCompanyAddress: "string",
    insuranceCompanyCityStateZip: "string",
    nameOfInsured: "string",
    adjusterName: "string",
    policyNumber: "string",
    reported: true,
    claimNumber: "string",
  },
  insuranceInformation: {
    insuranceInformationId: 0,
    isAccidentRelated: true,
    insuranceCardFront: "string",
    insuranceCardBack: "string",
    subscriberPhone: "string",
    insuranceDetail: "string",
  },
  patientInformation: {
    patientInformationId: 0,
    patientLastName: "string",
    patientFirstName: "string",
    patientMiddleName: "string",
    maritalStatus: "string",
    governmentId: "string",
    gender: "string",
    socialSecurityNumber: "string",
    phoneNumber: "string",
    dateOfBirth: "2024-06-01T10:30:25.934Z",
    streetAddress: "string",
    cityStateZip: "string",
    preferredPharmacy: "string",
    pharmacyPhone: "string",
    pharmacyAddress: "string",
    primaryCarePhysician: "string",
    pcpPhoneNumber: "string",
    preferredMethod: "string",
    referralSource: "string",
    doctorOffice: "string",
    employer: "string",
    lawFirm: "string",
    familyMember: "string",
  },
};

export const resH7From =
  '<?xml version="1.0" encoding="utf-8"?>\r\n<ADT_A05 xmlns="urn:hl7-org:v2xml">\r\n  <MSH>\r\n    <MSH.1>|</MSH.1>\r\n    <MSH.2>^~\\&amp;</MSH.2>\r\n    <MSH.3>\r\n      <HD.1>SYSTEMCODE</HD.1>\r\n      <HD.2>SYSTEMCODE</HD.2>\r\n    </MSH.3>\r\n    <MSH.4>\r\n      <HD.1>SYSTEMCODE</HD.1>\r\n      <HD.2>SYSTEMCODE</HD.2>\r\n    </MSH.4>\r\n    <MSH.5>\r\n      <HD.1>Rhapsody</HD.1>\r\n      <HD.2>MALAFFI</HD.2>\r\n    </MSH.5>\r\n    <MSH.6>\r\n      <HD.1>ADHIE</HD.1>\r\n    </MSH.6>\r\n    <MSH.7>\r\n      <TS.1>20240604213137+0400</TS.1>\r\n    </MSH.7>\r\n    <MSH.9>\r\n      <MSG.1>ADT</MSG.1>\r\n      <MSG.2>A04</MSG.2>\r\n    </MSH.9>\r\n    <MSH.10>12349013</MSH.10>\r\n    <MSH.11>\r\n      <PT.1>P</PT.1>\r\n    </MSH.11>\r\n    <MSH.12>\r\n      <VID.1>2.5</VID.1>\r\n    </MSH.12>\r\n  </MSH>\r\n  <EVN>\r\n    <EVN.1>A04</EVN.1>\r\n    <EVN.2>\r\n      <TS.1>20240604213137</TS.1>\r\n    </EVN.2>\r\n  </EVN>\r\n  <PID>\r\n    <PID.1>1</PID.1>\r\n    <PID.3>\r\n      <CX.1>123456</CX.1>\r\n      <CX.4>\r\n        <HD.2>SYSTEMCODE</HD.2>\r\n      </CX.4>\r\n    </PID.3>\r\n    <PID.5>\r\n      <XPN.1>\r\n        <FN.1>string</FN.1>\r\n      </XPN.1>\r\n      <XPN.2>string</XPN.2>\r\n      <XPN.3>TestMname</XPN.3>\r\n      <XPN.7>p</XPN.7>\r\n    </PID.5>\r\n    <PID.7>\r\n      <TS.1>20240604</TS.1>\r\n    </PID.7>\r\n    <PID.8>F</PID.8>\r\n    <PID.10>\r\n      <CE.1>GCC</CE.1>\r\n      <CE.2>GA</CE.2>\r\n      <CE.3>MALAFFI</CE.3>\r\n    </PID.10>\r\n    <PID.11>\r\n      <XAD.1>\r\n        <SAD.1>street1</SAD.1>\r\n      </XAD.1>\r\n      <XAD.3>Al Ain</XAD.3>\r\n      <XAD.5>152662</XAD.5>\r\n      <XAD.6>ARE</XAD.6>\r\n      <XAD.7>H</XAD.7>\r\n    </PID.11>\r\n    <PID.12>ARE</PID.12>\r\n    <PID.13>\r\n      <XTN.1>009712323423432</XTN.1>\r\n      <XTN.3>CH</XTN.3>\r\n    </PID.13>\r\n    <PID.14>\r\n      <XTN.1>string</XTN.1>\r\n      <XTN.3>CC</XTN.3>\r\n    </PID.14>\r\n    <PID.15>\r\n      <CE.1>ARA</CE.1>\r\n      <CE.2>Arabic</CE.2>\r\n      <CE.3>MALAFFI</CE.3>\r\n    </PID.15>\r\n    <PID.16>\r\n      <CE.1>S</CE.1>\r\n      <CE.2>string</CE.2>\r\n      <CE.3>MALAFFI</CE.3>\r\n    </PID.16>\r\n    <PID.17>\r\n      <CE.1>MU</CE.1>\r\n      <CE.2>Muslim</CE.2>\r\n      <CE.3>MALAFFI</CE.3>\r\n    </PID.17>\r\n    <PID.19>78419123123123</PID.19>\r\n    <PID.26>\r\n      <CE.1>IND</CE.1>\r\n      <CE.2>Indian</CE.2>\r\n      <CE.3>MALAFFI</CE.3>\r\n    </PID.26>\r\n    <PID.28>\r\n      <CE.1>ARE</CE.1>\r\n      <CE.2>Emirati</CE.2>\r\n      <CE.3>MALAFFI</CE.3>\r\n    </PID.28>\r\n  </PID>\r\n  <NK1>\r\n    <NK1.1>1</NK1.1>\r\n    <NK1.2>\r\n      <XPN.1>\r\n        <FN.1>string</FN.1>\r\n      </XPN.1>\r\n      <XPN.2>string</XPN.2>\r\n    </NK1.2>\r\n    <NK1.3>\r\n      <CE.1>FTH</CE.1>\r\n      <CE.2>Father</CE.2>\r\n      <CE.3>MALAFFI</CE.3>\r\n    </NK1.3>\r\n    <NK1.4>\r\n      <XAD.1>\r\n        <SAD.1>Al Matar</SAD.1>\r\n      </XAD.1>\r\n      <XAD.5>29123</XAD.5>\r\n      <XAD.6>ARE</XAD.6>\r\n      <XAD.7>H</XAD.7>\r\n    </NK1.4>\r\n    <NK1.5>\r\n      <XTN.1>00971505123123</XTN.1>\r\n      <XTN.3>CC</XTN.3>\r\n    </NK1.5>\r\n    <NK1.7>\r\n      <CE.1>N</CE.1>\r\n      <CE.2>Next-of-Kin</CE.2>\r\n      <CE.3>MALAFFI</CE.3>\r\n    </NK1.7>\r\n  </NK1>\r\n  <AL1>\r\n    <AL1.1>1</AL1.1>\r\n    <AL1.2>\r\n      <CE.1>DA</CE.1>\r\n      <CE.2>Drug allergy</CE.2>\r\n      <CE.3>MALAFFI</CE.3>\r\n    </AL1.2>\r\n    <AL1.3>\r\n      <CE.1>04324</CE.1>\r\n      <CE.2>Paracetamol</CE.2>\r\n      <CE.3>DOHDRUG</CE.3>\r\n    </AL1.3>\r\n    <AL1.4>\r\n      <CE.1>MO</CE.1>\r\n      <CE.2>Moderate</CE.2>\r\n      <CE.3>MALAFFI</CE.3>\r\n    </AL1.4>\r\n    <AL1.5>Cough</AL1.5>\r\n    <AL1.6>20240604</AL1.6>\r\n  </AL1>\r\n  <AL1>\r\n    <AL1.1>2</AL1.1>\r\n    <AL1.2>\r\n      <CE.1>FA</CE.1>\r\n      <CE.2>Food</CE.2>\r\n      <CE.3>MALAFFI</CE.3>\r\n    </AL1.2>\r\n    <AL1.3>\r\n      <CE.1>45123</CE.1>\r\n      <CE.2>Penut</CE.2>\r\n      <CE.3>SYSTEMCODE</CE.3>\r\n    </AL1.3>\r\n    <AL1.4>\r\n      <CE.1>MO</CE.1>\r\n      <CE.2>Moderate</CE.2>\r\n      <CE.3>MALAFFI</CE.3>\r\n    </AL1.4>\r\n    <AL1.5>Hives</AL1.5>\r\n    <AL1.6>20240604</AL1.6>\r\n  </AL1>\r\n  <ADT_A05.INSURANCE>\r\n    <IN1>\r\n      <IN1.1>1</IN1.1>\r\n      <IN1.3>\r\n        <CX.1>A001</CX.1>\r\n      </IN1.3>\r\n      <IN1.4>\r\n        <XON.1>string</XON.1>\r\n      </IN1.4>\r\n      <IN1.49>\r\n        <CX.1>abc1234</CX.1>\r\n      </IN1.49>\r\n    </IN1>\r\n  </ADT_A05.INSURANCE>\r\n  <ADT_A05.INSURANCE>\r\n    <IN1>\r\n      <IN1.1>2</IN1.1>\r\n      <IN1.3>\r\n        <CX.1>A002</CX.1>\r\n      </IN1.3>\r\n      <IN1.4>\r\n        <XON.1>Abu Dhabi National Insurance Co.</XON.1>\r\n      </IN1.4>\r\n      <IN1.49>\r\n        <CX.1>abc123</CX.1>\r\n      </IN1.49>\r\n    </IN1>\r\n  </ADT_A05.INSURANCE>\r\n</ADT_A05>';
