import {v4 as uuid} from "uuid";
import {uplodFile} from "../services/storage.service.js"
import foodModel from "../models/food.model.js";


export async function createFood(req, res) {

    
    const fileUploadResult = await uplodFile(req.file.buffer, uuid());
   
    const foodItem = await foodModel.create({
        name: req.body.name,
        video: fileUploadResult.url,
        description: req.body.description,
        foodPartner: req.foodPartner._id
    })

    res.status(201).json({
        message: "Radhe Radhe: food item created",
        food: foodItem
    })
}


export async function getFoodItems(req, res) {
    const foodItems = await foodModel.find({});

    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems
    })
}