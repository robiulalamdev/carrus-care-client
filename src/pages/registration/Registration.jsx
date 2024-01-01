import { useState } from "react";
import RForm1 from "../../components/registration-ui/registrationFormStep1/RForm1";
import RForm2 from "../../components/registration-ui/registrationFormStep2/RForm2";
import RForm3 from "../../components/registration-ui/registrationFormStep3/RForm3";
import Header from "../../components/shared/Header";
import ReCAPTCHA from "react-google-recaptcha";

const Registration = () => {
  const [step, setStep] = useState(1);
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <>
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
      />
      <div className="max-w-[1000px] mx-auto w-full py-8 px-2">
        <Header />
        <RForm1 step={step} setStep={setStep} show={true} />
        <RForm2 step={step} setStep={setStep} show={true} />
        <RForm3 step={step} setStep={setStep} show={true} />
      </div>
    </>
  );
};

export default Registration;
