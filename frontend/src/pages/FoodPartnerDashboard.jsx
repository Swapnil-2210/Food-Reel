import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "../api/axiosInstance";
import { successToast, errorToast } from "../utils/toast";
import { addFoodSchema } from "../utils/validation/authSchema";

export default function FoodPartnerDashboard() {
  const { state } = useLocation(); // Data coming from navigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(addFoodSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("video", data.video[0]);

      const res = await axiosInstance.post("/api/food", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      successToast("Food added successfully!");
      reset();
    } catch (err) {
      console.error(err);
      errorToast("Failed to add food item!");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-6 flex items-center justify-center lg:flex-row flex-col gap-8">
      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-6 text">🍽 Food Partner Dashboard</h1>

      {/* PARTNER INFO */}
      <div className="bg-gray-800 p-5 rounded-xl shadow-lg mb-8 max-w-xl">
        <h2 className="text-xl font-semibold mb-3">Your Restaurant Details</h2>

        <p className="lg:py-3.5">
          <strong>Restaurant Name:</strong> {state?.foodpartner?.restaurantName}
        </p>
        <p className="lg:py-3.5">
          <strong>Owner Name:</strong> {state?.foodpartner?.ownerName}
        </p>
        <p className="lg:py-3.5">
          <strong>Location:</strong> {state?.foodpartner?.location}
        </p>
        <p className="lg:py-3.5">
          <strong>Phone:</strong> {state?.foodpartner?.phone}
        </p>
        <p className="lg:py-3.5">
          <strong>Email:</strong> {state?.foodpartner?.email}
        </p>
      </div>

      {/* CREATE FOOD ITEM FORM */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-xl">
        <h2 className="text-xl font-bold mb-4">➕ Add New Food Item</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* FOOD NAME */}
          <div>
            <label className="block mb-1">Food Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              placeholder="Enter food name"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block mb-1">Description</label>
            <textarea
              {...register("description")}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              placeholder="Enter description"
            ></textarea>
            {errors.description && (
              <p className="text-red-400 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* VIDEO UPLOAD */}
          <div>
            <label className="block mb-1">Upload Food Video</label>
            <input
              type="file"
              accept="video/*"
              {...register("video")}
              name="video"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
            {errors.video && (
              <p className="text-red-400 text-sm">{errors.video.message}</p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg transition"
          >
            {isSubmitting ? "Uploading..." : "Add Food Item"}
          </button>
        </form>
      </div>
    </div>
  );
}
