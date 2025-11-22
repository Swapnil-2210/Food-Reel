import { Toaster } from "react-hot-toast";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <AppRoutes />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
