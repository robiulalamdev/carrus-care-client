import React, { useState } from "react";
import RForm1 from "../../components/registration-ui/registrationFormStep1/RForm1";
import RForm2 from "../../components/registration-ui/registrationFormStep2/RForm2";
import RForm3 from "../../components/registration-ui/registrationFormStep3/RForm3";

const Registration = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = () => {
    console.log("Success");
  };

  return (
    <div className="max-w-[1000px] mx-auto w-full py-8 px-2">
      <RForm1 step={step} setStep={setStep} />
      <RForm2 step={step} setStep={setStep} />
      <RForm3 step={step} setStep={setStep} />
      <div className="flex justify-center pt-20 pb-3">
        {step === 3 && (
          <button
            onClick={() => handleSubmit()}
            className="w-32 h-10 bg-green-600 hover:bg-green-700 duration-150 cursor-pointer text-white text-base leading-[18px] tracking-[0.4px] border-none flex justify-center items-center"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Registration;
