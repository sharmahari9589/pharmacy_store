import statusCodes from "http-status-codes";
import { orderModel } from "../models/orderModel.js";
import { medicineModel } from "../models/medicineModel.js";

export const pleceOrder = async(req,res)=>{
    const orderOn = new Date(req.body.orderOn);
    req.body["orderOn"] = orderOn;
    const order = await orderModel(req.body);
    let orderquantity = req.body.quantity;
    let medicineid = req.body.medicineid;
    await upadeStock(medicineid,orderquantity)
    const savedOrder = await order.save({validateBeforeSave:false});
    res.send(savedOrder);
} 

const upadeStock = async(id,quan)=>{
    const medicine = await medicineModel.findById(id);
    medicine.quantity-=quan;
    await medicine.save({validateBeforeSave:false})
}