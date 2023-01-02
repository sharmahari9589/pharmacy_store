
import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    quantity:{type:Number,required:true,default:1},
    mfgOn:{type:Date,required:true},
    expOn:{type:Date,required:true},
    price:{type:Number,required:true}

    // img added  later
})


export const medicineModel = mongoose.model("medicine",medicineSchema)