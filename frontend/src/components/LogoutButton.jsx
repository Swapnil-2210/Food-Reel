import { useNavigate } from "react-router-dom";
import { successToast, errorToast } from "../utils/toast";
import axiosInstance from "../api/axiosInstance";
import { LogOutIcon } from "lucide-react";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    axiosInstance
      .get("/user/logout")
      .then((response) => {
        successToast(response.data.message || "Logged out successfully");
        navigate("/user/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        errorToast("Failed to logout. Please try again.");
      });
  };

  return (
    <button
      onClick={handleLogout}
      className="
        fixed top-5 left-5 
        bg-red-600 text-white 
        px-4 py-2 rounded-full 
        shadow-lg 
        text-sm font-semibold
        hover:bg-red-700 
        active:scale-95 
        transition-all
        z-50
      "
    >
      <LogOutIcon className="inline-block mr-2" /> Logout
    </button>
  );
}
