import { Link } from "react-router-dom";
import MotionWrapper from "../components/MotionWrapper";

const Home = () => {
  return (
    <MotionWrapper>
      <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-br from-gray-900 to-gray-700 text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center drop-shadow-lg">
          Welcome to FoodReel 🍽️
        </h1>

        <p className="text-lg md:text-xl text-gray-200 text-center max-w-xl mb-10">
          Join as a User or Food Partner and enjoy a seamless food ordering and delivery experience.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <Link
            to="/user/login"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold shadow-lg transition-all transform hover:scale-105"
          >
            User Login
          </Link>

          <Link
            to="/food-partner/login"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-semibold shadow-lg transition-all transform hover:scale-105"
          >
            Partner Login
          </Link>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <Link
            to="/user/register"
            className="underline text-blue-300 hover:text-white transition"
          >
            Create User Account
          </Link>

          <Link
            to="/food-partner/register"
            className="underline text-green-300 hover:text-white transition"
          >
            Create Food Partner Account
          </Link>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Home;
