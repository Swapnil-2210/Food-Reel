import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  inputClass,
  labelClass,
  errorClass,
  buttonClass,
} from "../styles/formStyles";
import { registerSchema } from "../utils/validation/authSchema";
import axiosInstance from "../api/axiosInstance";
import { errorToast, successToast } from "../utils/toast";
import BackButton from "../components/BackButton";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors ,},
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmit = (data) => {
    console.log(data);

    axiosInstance.post("/api/auth/user/register", data)
    .then((response) => {

      successToast(response?.data?.message || "Registration successful!");
      console.log("Registration successful:", response.data);
      reset();
    })
    .catch((error) => {
      errorToast(
        error?.response?.data?.message || "Registration failed. Please try again."
      );
      console.error("Registration failed:", error);
    });
  };

  return (
    <div className="min-h-screen flex justify-center flex-col items-center bg-gray-950 px-4">
      <div className="flex mb-4">
        <BackButton />
      </div>
      <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">
          User Registration
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={labelClass}>Full Name</label>
          <input {...register("fullname")} className={inputClass} />
          <p className={errorClass}>{errors.fullname?.message}</p>

          <label className={`${labelClass} mt-3 block`}>Email</label>
          <input {...register("email")} className={inputClass} />
          <p className={errorClass}>{errors.email?.message}</p>

          <label className={`${labelClass} mt-3 block`}>Password</label>
          <input
            type="password"
            {...register("password")}
            className={inputClass}
          />
          <p className={errorClass}>{errors.password?.message}</p>

          <button className={buttonClass} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
