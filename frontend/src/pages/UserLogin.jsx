import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { inputClass, labelClass, errorClass, buttonClass } from "../styles/formStyles";
import { loginSchema } from "../utils/validation/authSchema";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-950 px-4">
      <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">
          User Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={labelClass}>Email</label>
          <input {...register("email")} className={inputClass} />
          <p className={errorClass}>{errors.email?.message}</p>

          <label className={`${labelClass} mt-3 block`}>Password</label>
          <input type="password" {...register("password")} className={inputClass} />
          <p className={errorClass}>{errors.password?.message}</p>

          <button className={buttonClass} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
