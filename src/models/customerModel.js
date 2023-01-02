
import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name:{type:String, required:true},
    phone:{type:String, required:true},
    age:{type:Number, required:true},
    password:{type:String, required:true}
})

export const customerModel = mongoose.model("customer",customerSchema)
