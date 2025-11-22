import { useEffect, memo } from "react";
import { X } from "lucide-react";

function FoodReelsModal({ isOpen, onClose, reels = [] }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-500"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-md bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-700 rounded-full p-2 z-50"
        >
          <X size={26} />
        </button>

        <div className="snap-y snap-mandatory overflow-y-scroll h-full w-full">
          {reels.map((item, index) => (
            <div
              key={index}
              className="snap-start h-screen relative flex items-center justify-center bg-black"
            >
              <video
                src={item.video}
                // controls
                autoPlay
                loop
                muted
                className="w-full h-full object-contain"
              />

  <div className="absolute bottom-0 left-0 w-full p-5 bg-linear-to-t from-black/80 to-transparent z-40">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(FoodReelsModal);
