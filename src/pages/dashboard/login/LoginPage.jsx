/* eslint-disable react/no-unknown-property */

import { useForm } from "react-hook-form";
import { usePostLoginMutation } from "../../../redux/features/form/formApi";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [postLogin, { isLoading }] = usePostLoginMutation();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const options = {
      data: data,
    };
    const result = await postLogin(options);
    if (result?.data?.success) {
      localStorage.setItem("carrus_care", result?.data?.accessToken);
      toast.success("Login Successful");
      window.location.reload();
    }
    if (
      result?.error?.data?.success === false &&
      result?.error?.data?.type === "email"
    ) {
      setError("email", {
        type: "manual",
        message: result?.error?.data?.message,
      });
    }
  };
  return (
    <div className="bg-green-600 hover:bg-green-700 duration-700 h-screen flex items-center justify-center px-3">
      <div className="bg-white w-full max-w-[400px] mx-auto shadow-3xl rounded-xl">
        <div className="bg-white shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-14 h-14 text-pm bg-white rounded-full"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="px-3 pb-3 pt-16 md:!p-12"
        >
          <div className="flex items-center text-lg ">
            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
            </svg>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className={`bg-gray-200 rounded italic text-sm pl-12 py-3 md:py-4 focus:outline-none w-full ${
                errors.email &&
                "!border !border-red-600 focus:!border focus:!border-red-600"
              }`}
              placeholder="Email"
            />
          </div>
          {errors.email && (
            <small className="text-red-500 text-xs italic block">
              {errors.email.message}
            </small>
          )}

          <button
            type="submit"
            className="bg-gradient-to-b from-green-600 to-green-700 font-medium hover:bg-green-600 h-10 text-white uppercase  mt-6 md:mt-8 w-full rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
