import mongoose from "mongoose";

const foodPartnerSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const foodPartnerModel = mongoose.model("foodpartner", foodPartnerSchema);

export default foodPartnerModel;
