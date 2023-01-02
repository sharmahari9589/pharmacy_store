import statusCodes from "http-status-codes";
import { medicineModel } from "../models/medicineModel.js";

// save medicine
export const save = async(req,res) => {
    try {
        const mfgOn = new Date(req.body.mfgOn);
        req.body["mfgOn"] = mfgOn;
        const expOn = new Date(req.body.expOn);
        req.body["expOn"] = expOn;
        const medicine = await medicineModel(req.body);
        const savedMedicine = await medicine.save();
        res.status(statusCodes.CREATED).json(savedMedicine);
    } catch (error) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            massage:"something went wrong"
        })
    }
}


// get medicine by id

export const getById = async(req,res)=>{
    const medicine = await medicineModel.findById(req.params.id);
    if(!medicine){
        res.status(statusCodes.NOT_FOUND).json({
            massage:"no medicine found"
        })
    }
    else{
        res.status(statusCodes.OK).json(medicine)
    }
}

//  get by name

export const getByName = async(req,res)=>{
    const text = req.query.name
    const medicine = await medicineModel.find(
       { name:{  $regex: text,
            $options: "i", }})
        if(medicine){
            res.status(statusCodes.OK).json(medicine);
        }
        else{
            res.status(statusCodes.NOT_FOUND).json({
                massage:"not found"
            })
        }
}

//delete medicine

export const deleteById = async(req,res)=>{
    const medicine = await medicineModel.findByIdAndDelete(req.params.id);
    if(!medicine){
        res.status(statusCodes.NOT_FOUND).json({
            massage:"no medicine found"
        })
    }
    else{
        res.status(statusCodes.OK).json({
            massage:"deleted succesfully"
        })
    }
}

//sort medicine by price 

export const sortMedicine = async(req,res)=>{
    try {
        const medicine = await medicineModel.find({}).sort({price:req.query.price});
        res.status(statusCodes.OK).json(
            medicine
        )
    } 
       catch (error) {
        res.status(statusCodes.
            INTERNAL_SERVER_ERROR).json({
            massage:"something went wrong"
        })
    }
}

