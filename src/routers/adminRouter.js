import express from "express";
import { login, save } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post('/admin',save);

adminRouter.post('/admin/login',login);



export default adminRouter;