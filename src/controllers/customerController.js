import { customerModel } from "../models/customerModel.js"
import bcrypt from "bcrypt";
import statusCodes from "http-status-codes";
import jwt from "jsonwebtoken"
import "dotenv/config"


export const save = async(req,res) => {
    try {
        const encryptPassword = bcrypt.hashSync(req.body.password,12);
        req.body.password = encryptPassword;
        const customer = await customerModel(req.body);
        const savedCustomer =await customer.save();
        res.status(statusCodes.CREATED).json(savedCustomer);
    } catch (error) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            massage:"something went wrong"
        })
    }
}


export const login = async(req,res) => {
    try {
          const customer = await customerModel.findOne({phone:req.body.phone});
          
          if (!customer) {
            res.status(statusCodes.UNAUTHORIZED).json({
                massage:"password or phone is incorrect"
            })  
          }
          else{
            let password =customer.password;
          let password2 = req.body.password;
            if(bcrypt.compareSync(password2,password )){
                const token = jwt.sign({id: customer._id},process.env.CUSTOMER_SECRET_KEY);
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