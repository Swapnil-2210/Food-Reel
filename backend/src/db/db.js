import mongoose from "mongoose";



const connectDB =()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("MongoDB connected");
    })
    .catch((err)=>{
        console.log("Got some error while connecting to MongoDB",err);
        
    })
}

export default connectDB;