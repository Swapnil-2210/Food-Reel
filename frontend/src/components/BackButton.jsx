import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BackButton({ label = "Back" }) {
  const navigate = useNavigate();

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate(-1)}
      className="
        flex items-center gap-2
        px-4 py-2
        bg-gray-100/80 dark:bg-gray-800
        hover:bg-gray-200 dark:hover:bg-gray-700
        text-gray-700 dark:text-gray-200
        rounded-full shadow-md
        transition-all duration-200
      "
    >
      <ArrowLeft size={18} />
      {label}
    </motion.button>
  );
}
