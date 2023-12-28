/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../../assets/brand/logo.png";

const RForm3 = ({ step, setStep }) => {
  const {
    handleSubmit,
    register,
    setError,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const handleSecondForm = (data) => {
    console.log(data);
    setStep(step + 1);
  };
  return (
    <form
      onSubmit={handleSubmit(handleSecondForm)}
      className={`${step === 3 ? "block" : "hidden"}`}
    >
      <div>
        <img className="w-56 mx-auto" src={logo} alt="" />
        <h1 className="text-gray-800 text-sm text-center leading-[18px] tracking-[0.2px] font-medium">
          8111 W. Grand Parkway S.
        </h1>
        <h1 className="text-gray-800 text-sm text-center leading-[18px] tracking-[0.2px] font-medium">
          Richmond, TX 77407
        </h1>
        <h1 className="text-gray-800 text-sm text-center leading-[18px] tracking-[0.2px] font-medium">
          (832) 770-6380
        </h1>
      </div>
      <h1 className="text-center font-bold text-[18px] leading-[22px] tracking-[0.4px] mt-16">
        AUTHORIZATION TO USE OR DISCLOSE PROTECTED HEALTH INFORMATION
      </h1>
      <p className="text-sm italic text-gray-900 mt-3">
        This authorization may be used to permit a covered entity (as such term
        is defined by HIPAA and applicable Texas law) to use or disclose an
        individual's protected health information. Individuals completing this
        form should read the form in its entirety before signing and complete
        all the sections that apply to their decisions relating to the use or
        disclosure of their protected health information.{" "}
      </p>
      <div className="h-[2px] bg-black mt-2"></div>

      <div className="border border-gray-900 mt-3">
        <div className="p-2">
          <h1 className="font-semibold text-gray-900 text-sm leading-[22px] tracking-[0.2px]">
            Information regarding patient for whom authorization is made:
          </h1>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Full Name:
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Other Name(s) Used:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Date of Birth:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Address:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  City:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  State:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Zip Code:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
            </div>
            <div className="flex justify-between flex-wrap items-start gap-2 w-full">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Phone:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Email: (Optional):
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-x border-b border-gray-900">
        <div className="p-2">
          <h1 className="font-semibold text-gray-900 text-sm leading-[22px] tracking-[0.2px]">
            Information regarding the health care provider of health care entity
            authorized to disclose this information:
          </h1>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Name: Care Plus Emergency Room
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Address:
                </h1>
                <input
                  type="text"
                  value="8111 W Grand Parkway S  "
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  City: Richmond
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  State:
                </h1>
                <input
                  type="text"
                  value="_TX__"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Zip Code:
                </h1>
                <input
                  type="text"
                  value="_77407"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
            </div>

            <div className="flex justify-between flex-wrap items-start gap-2 w-full">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Phone:
                </h1>
                <input
                  type="text"
                  value="(832) _770-6380"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Fax:
                </h1>
                <input
                  type="text"
                  value="(832) _770-6460"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-x border-b border-gray-900">
        <div className="p-2">
          <h1 className="font-semibold text-gray-900 text-sm leading-[22px] tracking-[0.2px]">
            Information regarding person(s)/entity who can receive and use this
            information other than patient:
          </h1>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Name:
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Address:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  City:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  State:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Zip Code:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
            </div>

            <div className="flex justify-between flex-wrap items-start gap-2 w-full">
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Phone:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1 flex-grow">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Fax:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-x border-b border-gray-900">
        <div className="p-2">
          <h1 className="font-semibold text-gray-900 text-sm leading-[22px] tracking-[0.2px]">
            Specific information to be disclosed:
          </h1>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-wrap items-start gap-2">
              <div className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" />
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Medical Record from (insert date)
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>

              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  to (insert date)
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
            </div>

            <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
              X Entire Medical record, including patient histories, office notes
              (except psychotherapy notes), test results, radiology studies,
              films, referrals, consults, billing records, insurance records,
              and records received from other health care providers.
            </h1>

            <div className="flex items-center gap-1">
              <input type="checkbox" className="cursor-pointer" />
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Other
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-x border-b border-gray-900">
        <div className="">
          <div className="grid md:grid-cols-5">
            <div className="col-span-3 border-r border-gray-900 p-2">
              <h1 className="font-semibold text-gray-900 text-sm leading-[22px] tracking-[0.2px]">
                Include: (Indicate by Initialing)
              </h1>
              <div className="grid grid-cols-1 gap-2 h-fit">
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    className="border-b outline-none h-8 text-sm max-w-[200px] border-gray-900"
                  />
                  <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
                    Drug, Alcohol or Substance Abuse Records
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    className="border-b outline-none h-8 text-sm max-w-[200px] border-gray-900"
                  />
                  <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
                    Mental Health Records <i>(Except Psychotherapy Notes)</i>
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    className="border-b outline-none h-8 text-sm max-w-[200px] border-gray-900"
                  />
                  <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
                    HIV/AIDS-Related Information{" "}
                    <i>(Including HIV/AIDS Test Results)</i>
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    className="border-b outline-none h-8 text-sm max-w-[200px] border-gray-900"
                  />
                  <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
                    Genetic Information <i>(Including Genetic Test Results)</i>
                  </h1>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 p-2 col-span-2">
              <h1 className="font-semibold text-gray-900 text-sm leading-[22px] tracking-[0.2px]">
                Reason for release of information: (Choose all that Apply)
              </h1>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" />
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Treatment/Continuing Medical Care
                </h1>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" />
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Personal Use
                </h1>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" />
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Billing or Claims
                </h1>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" />
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Insurance
                </h1>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" />
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Legal Purposes
                </h1>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" />
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Disability Determination
                </h1>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" />
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  School
                </h1>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" />
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Employment
                </h1>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" />
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Other <i>(Specify)</i>:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full border-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1.5px] bg-black mt-10"></div>

      <section className="mt-16">
        <h1 className="font-bold text-base md:text-[18px] leading-[22px] tracking-[0.4px] underline">
          The individual signing this form agrees and acknowledges as follows:
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-4">
          <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
            (i)
            <span className="text-gray-950 font-bold ml-3 mr-2 underline">
              Voluntarv Authorization:
            </span>
            This authorization is voluntary. Treatment, payment, enrollment or
            eligibility for benefits (as applicable) will not be conditioned
            upon my signing of this authorization form.
          </h1>
          <div>
            <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
              (ii)
              <span className="text-gray-950 font-bold ml-3 mr-2 underline">
                Effective Time Period:
              </span>
              This authorization shall be in effect until the earlier of two (2)
              years after the death of the patient for whom this authorization
              is made or the following specified date:
            </h1>
            <div className="flex flex-wrap items-start gap-2 w-full mt-2">
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Month:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Day:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
              <div className="flex items-center gap-1">
                <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                  Year:
                </h1>
                <input
                  type="text"
                  className="border-b outline-none h-8 text-sm w-full max-w-[100px] border-gray-900"
                />
              </div>
            </div>
          </div>
          <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
            (iii)
            <span className="text-gray-950 font-bold ml-3 mr-2 underline">
              Right to Revoke:
            </span>
            I understand that I have the right to revoke this authorization at
            any time by writing to the health care provider or health care
            entity listed above. I understand that I may revoke this
            authorization except to the extent that action has already been
            taken based on this authorization.
          </h1>

          <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
            (iv)
            <span className="text-gray-950 font-bold ml-3 mr-2 underline">
              Special Information:
            </span>
            This authorization may include disclosure of information relating to
            <span className="text-base mx-1 font-bold">DRUG, ALCOHOL</span> and
            <span className="text-base mx-1 font-bold">
              SUBSTANCE ABUSE, MENTAL HEALTH INFORMATION
            </span>
            , except psychotherapy notes,
            <span className="text-base mx-1 font-bold">
              CONFIDENTIAL HIV/AIDS-RELATED INFORMATION
            </span>
            , and
            <span className="text-base mx-1 font-bold">
              GENETIC INFORMATION
            </span>
            only if I place my initials on the appropriate lines above. In the
            event the health information described above includes any of these
            types of information, and I initial the corresponding lines in the
            box above, I specifically authorize release of such information to
            the person or entity indicated herein.
          </h1>

          <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
            (v)
            <span className="text-gray-950 font-bold ml-3 mr-2 underline">
              Signature Authorization:
            </span>
            I have read this form and agree to the uses and disclosure of the
            information as described. I understand that refusing to sign this
            form does not stop disclosure of health information that has
            occurred prior to revocation or that is otherwise permitted by law
            without my specific authorization or permission. I understand that
            information disclosed pursuant to this authorization may be subject
            to redisclosure by the recipient and may no longer be protected by
            federal or state privacy laws.
          </h1>
        </div>

        <h1 className="text-gray-950 font-bold mt-10">SIGNATURES:</h1>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="flex flex-wrap">
            <div className="flex items-center gap-1 flex-grow">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Patient/Legal Representative
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Date:
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full max-w-[300px] border-gray-900"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 flex-grow">
            <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
              If Legal Representative, relationship to Patient:
            </h1>
            <input
              type="text"
              className="border-b outline-none h-8 text-sm w-full border-gray-900"
            />
          </div>
          <div className="flex flex-wrap">
            <div className="flex items-center gap-1 flex-grow">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Witness (optional):
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Date:
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full max-w-[300px] border-gray-900"
              />
            </div>
          </div>

          <p className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium">
            A minor individual's signature is required for the release of
            certain types of information, including for example, the release of
            information related to certain types of reproductive care, sexually
            transmitted diseases, and drug, alcohol or substance abuse, and
            mental health treatment.
          </p>
          <div className="flex flex-wrap">
            <div className="flex items-center gap-1 flex-grow">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Signature of Minor (if applicable):
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full border-gray-900"
              />
            </div>
            <div className="flex items-center gap-1">
              <h1 className="text-gray-950 text-sm leading-[22px] tracking-[0.2px] font-medium text-nowrap">
                Date:
              </h1>
              <input
                type="text"
                className="border-b outline-none h-8 text-sm w-full max-w-[300px] border-gray-900"
              />
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default RForm3;
