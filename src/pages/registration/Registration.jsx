import { useState } from "react";
import RForm1 from "../../components/registration-ui/registrationFormStep1/RForm1";
import RForm2 from "../../components/registration-ui/registrationFormStep2/RForm2";
import RForm3 from "../../components/registration-ui/registrationFormStep3/RForm3";
import Header from "../../components/shared/Header";

const Registration = () => {
  const [step, setStep] = useState(3);
  return (
    <>
      <Header />
      <div className="max-w-[1000px] mx-auto w-full py-8 px-2">
        <RForm1 step={step} setStep={setStep} show={true} />
        <RForm2 step={step} setStep={setStep} show={true} />
        <RForm3 step={step} setStep={setStep} show={true} />
      </div>
    </>
  );
};

export default Registration;
