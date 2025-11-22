import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { errorToast } from "../utils/toast";
import { motion } from "framer-motion";
import LogoutButton from "../components/LogoutButton";

export default function UserReelsDashboard() {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await axiosInstance.get("/api/food");
        setReels(response.data.foodItems || []);
      } catch (err) {
        console.error("Error fetching reels:", err);
        errorToast("Failed to load reels. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReels();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white text-xl">
        Loading reels...
      </div>
    );
  }

  return (
    <div
      className="w-full h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white scrollbar-hide"
      style={{ scrollSnapType: "y mandatory" }}
    >
      {reels.map((item, index) => (
        <ReelCard key={index} item={item} />
      ))}
    </div>
  );
}

const ReelCard = ({ item }) => {
  const [muted, setMuted] = useState(true);

  const toggleMute = () => setMuted((prev) => !prev);

  return (
    <div className="relative">
      <LogoutButton />
      <div className="snap-start w-full h-screen flex items-center justify-center relative">
        {/* Video Wrapper for Desktop & Mobile */}
        <div className="w-full h-full flex items-center justify-center">
          <motion.video
            src={item.video}
            autoPlay
            loop
            muted={muted}
            playsInline
            onClick={toggleMute}
            className="
            object-cover 
            w-full h-full 
            md:w-[420px] md:h-[750px] 
            rounded-md md:shadow-xl 
            cursor-pointer
          "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Tap to unmute label */}
        {muted && (
          <div className="absolute top-5 right-5 bg-black/60 px-3 py-1 rounded-full text-xs">
            Tap to Unmute 🔈
          </div>
        )}

        {/* Overlay Text */}
        <div className="absolute bottom-10 left-5 z-10 max-w-[80%]">
          <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
          <p className="text-sm opacity-80">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
