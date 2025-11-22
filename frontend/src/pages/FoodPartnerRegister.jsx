import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { inputClass, labelClass, errorClass, buttonClass } from "../styles/formStyles";
import { foodPartnerSchema } from "../utils/validation/authSchema";
import axiosInstance from "../api/axiosInstance";
import { errorToast, successToast } from "../utils/toast";
import BackButton from "../components/BackButton";

export default function FoodPartnerRegister() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(foodPartnerSchema) });

  const onSubmit = (data) => {
    console.log(data);
    axiosInstance.post("/api/auth/food-partner/register", data)
    .then((response) => {
      console.log("Registration successful:", response.data);
      successToast(response.data.message || "Registered successfully!");
      reset();
      // You can add further actions here, like redirecting the user
    })
    .catch((error) => {
      errorToast(error.response?.data?.message || "Registration failed!");
      console.error("Registration failed:", error.response?.data || error.message);
    });

  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-gray-950 px-4">
      <div className="flex mb-4">
        <BackButton />
      </div>
      <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">
          Food Partner Registration
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={labelClass}>Restaurant Name</label>
          <input {...register("restaurantName")} className={inputClass} />
          <p className={errorClass}>{errors.restaurantName?.message}</p>

          <label className={`${labelClass} mt-3 block`}>Owner Name</label>
          <input {...register("ownerName")} className={inputClass} />
          <p className={errorClass}>{errors.ownerName?.message}</p>

          <label className={`${labelClass} mt-3 block`}>Location</label>
          <input {...register("location")} className={inputClass} />
          <p className={errorClass}>{errors.location?.message}</p>

          <label className={`${labelClass} mt-3 block`}>Phone</label>
          <input {...register("phone")} className={inputClass} />
          <p className={errorClass}>{errors.phone?.message}</p>

          <label className={`${labelClass} mt-3 block`}>Email</label>
          <input {...register("email")} className={inputClass} />
          <p className={errorClass}>{errors.email?.message}</p>

          <label className={`${labelClass} mt-3 block`}>Password</label>
          <input type="password" {...register("password")} className={inputClass} />
          <p className={errorClass}>{errors.password?.message}</p>

          <button className={buttonClass} type="submit">
            Register Partner
          </button>
        </form>
      </div>
    </div>
  );
}
