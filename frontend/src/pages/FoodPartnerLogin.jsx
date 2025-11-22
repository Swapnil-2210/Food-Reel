import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  inputClass,
  labelClass,
  errorClass,
  buttonClass,
} from "../styles/formStyles";
import { foodPartnerLoginSchema } from "../utils/validation/authSchema";
import BackButton from "../components/BackButton";
import axiosInstance from "../api/axiosInstance";
import { errorToast, successToast } from "../utils/toast";
import { useNavigate } from "react-router-dom";

export default function FoodPartnerLogin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(foodPartnerLoginSchema) });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    axiosInstance
      .post("/api/auth/food-partner/login", data)
      .then((response) => {
        console.log("Login successful:", response.data);
        successToast(response.data.message || "Login successful");
        localStorage.setItem("auth", "true");
        localStorage.setItem("role", "partner");

        // You can add further actions here, like redirecting the user
        reset();
        navigate("/food-partner/dashboard");
      })
      .catch((error) => {
        errorToast(
          error.response?.data?.message || "Login failed. Please try again."
        );
        console.error("Login failed:", error.response?.data || error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-gray-950 px-4">
      <div className="flex mb-4">
        <BackButton />
      </div>
      <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">
          Food Partner Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={labelClass}>Email ID</label>
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
            Login Partner
          </button>
        </form>
      </div>
    </div>
  );
}
