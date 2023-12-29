import React from "react";

const RFStepF4 = ({
  step,
  handleSubmit,
  register,
  setError,
  setValue,
  watch,
  control,
}) => {
  return (
    <section className={`mt-[60px]`}>
      <div className="">
        <div className="grid grid-cols-1 gap-3 mt-2">
          <p className="text-justify text-sm text-gray-900">
            I also assign and transfer to Care Plus ER all rights, title, and
            interest in any claims against any health insurers, sponsors and/or
            plan administrators of any of my health benefit plan(s) arising from
            or pertaining to any wrongful acts and/or omission pertaining to any
            of said health/benefit plan(s) or health insurance policy (ies)
            including, but not limited to, claims for a non-payment or
            underpayment of health provider invoices and claims. I further
            expressly and knowingly assign all rights under my insurer and/or
            benefit plan. I understand that any payment received from these
            policies and/or plans will be applied to the payments I have agreed
            to pay for services rendered during this emergency room visit.
          </p>
          <p className="text-justify text-sm text-gray-900">
            Care Plus ER file primary and secondary insurance claims for insured
            patients. I authorize the facility and/or physicians indicated above
            to release medical information about me as may be necessary for the
            completion of my insurance claims for this occasion of service to
            any insurance carrier or health plan.
          </p>
          <p className="text-justify text-sm text-gray-900">
            I have read and been given the opportunity to ask questions about
            this assignment of benefits, and I have signed this document freely
            and without inducement.
          </p>
        </div>
        {/* signeture 4th part */}
        <div className="flex justify-between items-end flex-wrap gap-4 mt-10">
          <div className="flex items-center gap-1 flex-wrap">
            <h1 className="font-bold leading-[18px] tracking-[0.2px]">
              Acknowledge:
            </h1>
            <input
              {...register("acknowledge_d", {
                required: true,
              })}
              type="text"
              className="border-b outline-none h-9 py-0 border-gray-900"
            />
            <h1 className="font-bold leading-[18px] tracking-[0.2px]">
              (Initial)
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-sm md:text-base font-semibold leading-[18px] tracking-[0.2px]">
            FINANCIAL AGREEMENT AND PATIENT GUARANTEE
          </h1>
          <p className="text-justify text-sm text-gray-900">
            I agree, whether signing as agent or a patient, that in
            consideration of the services to be rendered, I hereby am
            responsible for paying facility copayments, deductibles, estimated
            facility coinsurance amounts, and any balances deemed not to be a
            covered benefit of the insurance policy. Monthly statements will be
            sent to guarantors for patient balances. Acceptable means of
            payments are cash, money order, cashier’s check, credit card, or
            personal checks.
          </p>
          <p className="text-justify text-sm text-gray-900">
            <strong>
              {" "}
              Self-pay balances must be paid in full prior to discharge unless
              other arrangements have been made with Care Plus ER.
            </strong>{" "}
            If the balance due is referred to a collection agency or attorney, I
            understand that there may be additional fees, interest, and expenses
            that I will be responsible for.
          </p>
          <p className="text-justify text-sm text-gray-900">
            Care Plus ER will provide a medical screening as required to all
            patients who are seeking medical services to determine if there is
            an emergency medical condition, without regard to patient’s ability
            to pay. If there is an emergency medical condition, the facility
            will provide stabilizing treatment and/or transfer to another
            facility within its capacity.{" "}
          </p>
        </div>
        {/* signeture 5th part */}
        <div className="flex justify-between items-end flex-wrap gap-4 mt-16">
          <div className="flex items-center gap-1 flex-wrap">
            <h1 className="font-bold leading-[18px] tracking-[0.2px]">
              Acknowledge:
            </h1>
            <input
              {...register("acknowledge_e", {
                required: true,
              })}
              type="text"
              className="border-b outline-none h-9 py-0 border-gray-900"
            />
            <h1 className="font-bold leading-[18px] tracking-[0.2px]">
              (Initial)
            </h1>
          </div>
          <h1 className="text-center text-sm leading-[18px] tracking-[0.2px] font-semibold">
            Patient ID Sticker
          </h1>
        </div>
      </div>
    </section>
  );
};

export default RFStepF4;
