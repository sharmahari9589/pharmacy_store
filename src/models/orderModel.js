import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerid:{type:mongoose.Types.ObjectId,ref:"customer",required:true},
    medicineid:{type:mongoose.Types.ObjectId,ref:"medicine",required:true},
    quantity:{type:Number,required:true},
    orderOn:{type:Date,required:true},
    orderPrice:{type:Number,required:true}
})

export const orderModel = mongoose.model("Order", orderSchema)