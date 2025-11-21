import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  withCredentials: true, // 🔥 SEND COOKIES WITH EVERY REQUEST
  headers: {
    "Content-Type": "application/json",
  },
});

// ================= Interceptor: Request =================
axiosInstance.interceptors.request.use(
  (config) => {
    // no need to attach token manually when using HttpOnly cookies
    return config;
  },
  (error) => Promise.reject(error)
);

// ================= Interceptor: Response =================
axiosInstance.interceptors.response.use(
  (response) => response, // success
  async (error) => {
    const originalRequest = error.config;

    // 🔥 If token expired → server returns 401
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt refresh token
        await axiosInstance.get("/auth/refresh-token");

        // Retry original request
        return axiosInstance(originalRequest);
      } catch (err) {
        console.log("Refresh token failed:", err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
