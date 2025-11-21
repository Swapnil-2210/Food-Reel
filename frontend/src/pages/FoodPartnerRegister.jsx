import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { inputClass, labelClass, errorClass, buttonClass } from "../styles/formStyles";
import { foodPartnerSchema } from "../utils/validation/authSchema";

export default function FoodPartnerRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(foodPartnerSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-950 px-4">
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

          <label className={`${labelClass} mt-3 block`}>Phone</label>
          <input {...register("phone")} className={inputClass} />
          <p className={errorClass}>{errors.phone?.message}</p>

          <label className={`${labelClass} mt-3 block`}>Location</label>
          <input {...register("location")} className={inputClass} />
          <p className={errorClass}>{errors.location?.message}</p>

          <button className={buttonClass} type="submit">
            Register Partner
          </button>
        </form>
      </div>
    </div>
  );
}
