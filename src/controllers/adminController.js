import bcrypt from "bcrypt";
import statusCodes from "http-status-codes";
import jwt from "jsonwebtoken"
import "dotenv/config"
import { adminModel } from "../models/adminModel.js";


export const save = async(req,res) => {
    try {
        const encryptPassword = bcrypt.hashSync(req.body.password,12);
        req.body.password = encryptPassword;
        const admin = await adminModel(req.body);
        const savedAdmin =await admin.save();
        res.status(statusCodes.CREATED).json(savedAdmin);
    } catch (error) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            massage:"something went wrong"
        })
    }
}


export const login = async(req,res) => {
    try {
          const admin = await adminModel.findOne({phone:req.body.phone});
          
          if (!admin) {
            res.status(statusCodes.UNAUTHORIZED).json({
                massage:"password or phone is incorrect"
            })  
          }
          else{
            let password =admin.password;
          let password2 = req.body.password;
            if(bcrypt.compareSync(password2,password )){
                const token = jwt.sign({id: admin._id},process.env.ADMIN_SECRET_KEY);
                res.status(statusCodes.OK).json({
                    token: token})
            }else{
                res.status(statusCodes.UNAUTHORIZED).json({
                    massage:"Password or phone is incorrect"
                })

            }
          }
        } catch (error) {
            res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
                massage:"something went wrong"
            })

}
}