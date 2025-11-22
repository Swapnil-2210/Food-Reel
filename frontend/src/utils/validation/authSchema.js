import * as Yup from "yup";

export const registerSchema = Yup.object({
  fullname: Yup.string()
    .required("Name is required")
    .min(3, "Minimum 3 characters"),

  email: Yup.string().required("Email is required").email("Invalid email"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Min 6 characters"),
});

export const loginSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Invalid email"),

  password: Yup.string().required("Password is required"),
});

// Food Partner Registration
export const foodPartnerSchema = Yup.object({
  restaurantName: Yup.string().required("Restaurant name is required"),
  ownerName: Yup.string().required("Owner name is required"),
  phone: Yup.string()
    .required("Phone number required")
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  location: Yup.string().required("Location required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
});

// Food Partner Login
export const foodPartnerLoginSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password required"),
});
