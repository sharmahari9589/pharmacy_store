
import expres from "express";
import { login, save } from "../controllers/customerController.js";

const customerRouter = expres.Router();

customerRouter.post('/customers',save);

customerRouter.post('/customers/login',login);




export default customerRouter;