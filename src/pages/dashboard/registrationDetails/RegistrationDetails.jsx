import React from "react";
import { useParams } from "react-router-dom";
import { usePatientRegisterQuery } from "../../../redux/features/form/formApi";
import useAuth from "../../../lib/hooks/useAuth";
import LoginPage from "../login/LoginPage";
import Header from "../../../components/shared/Header";
import RForm1 from "../../../components/registration-ui/registrationFormStep1/RForm1";
import RForm2 from "../../../components/registration-ui/registrationFormStep2/RForm2";
import RForm3 from "../../../components/registration-ui/registrationFormStep3/RForm3";

const RegistrationDetails = () => {
  const { isLogged } = useAuth();
  const { id } = useParams();
  const { data } = usePatientRegisterQuery(id);
  console.log(data);
  return (
    <>
      {isLogged ? (
        <div className="max-w-[1000px] mx-auto w-full py-8 px-2">
          <Header />
          <RForm1 step={1} setStep="" show={false} data={data?.data} />
          <RForm2 step={2} setStep="" show={false} data={data?.data} />
          <RForm3 step={3} setStep="" show={false} data={data?.data} />
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default RegistrationDetails;
