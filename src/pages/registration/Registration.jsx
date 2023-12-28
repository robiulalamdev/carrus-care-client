import { useState } from "react";
import RForm1 from "../../components/registration-ui/registrationFormStep1/RForm1";
import RForm2 from "../../components/registration-ui/registrationFormStep2/RForm2";
import RForm3 from "../../components/registration-ui/registrationFormStep3/RForm3";
import useAuth from "../../lib/hooks/useAuth";
import LoginPage from "../dashboard/login/LoginPage";

const Registration = () => {
  const { user, isLogged } = useAuth();
  const [step, setStep] = useState(1);
  // const { data } = useMyPatientRegistersQuery();
  // console.log(data);

  return (
    <>
      {isLogged ? (
        <div className="max-w-[1000px] mx-auto w-full py-8 px-2">
          <RForm1 step={step} setStep={setStep} />
          <RForm2 step={step} setStep={setStep} />
          <RForm3 step={step} setStep={setStep} />
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default Registration;
