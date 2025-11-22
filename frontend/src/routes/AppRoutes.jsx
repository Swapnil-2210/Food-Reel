import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";
import FoodPartnerRegister from "../pages/FoodPartnerRegister";
import FoodPartnerLogin from "../pages/FoodPartnerLogin";
import Home from "../pages/Home";
import MotionWrapper from "../components/MotionWrapper";
const AppRoutes = () => {
  return (
    <Router>
      <MotionWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route
            path="/food-partner/register"
            element={<FoodPartnerRegister />}
          />
          <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
        </Routes>
      </MotionWrapper>
    </Router>
  );
};

export default AppRoutes;
