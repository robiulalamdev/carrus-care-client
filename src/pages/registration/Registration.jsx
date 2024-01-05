import { useEffect, useState } from "react";
import RForm1 from "../../components/registration-ui/registrationFormStep1/RForm1";
import RForm2 from "../../components/registration-ui/registrationFormStep2/RForm2";
import RForm3 from "../../components/registration-ui/registrationFormStep3/RForm3";
import Header from "../../components/shared/Header";

const Registration = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);
  return (
    <>
      <Header />
      <div className="w-full min-h-screen py-8">
        <div className="max-w-[1400px] mx-auto w-full pt-8 px-2 md:px-8 md:shadow md:rounded-md">
          <RForm1 step={step} setStep={setStep} show={true} />
          <RForm2 step={step} setStep={setStep} show={true} />
          <RForm3 step={step} setStep={setStep} show={true} />
        </div>
      </div>
    </>
  );
};

export default Registration;
