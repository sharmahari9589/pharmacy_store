import express from "express";
import { deleteById, getById, getByName, save, sortMedicine } from "../controllers/medicineController.js";

const medicineRouter = express.Router();

medicineRouter.post("/medicine",save);

medicineRouter.get("/medicine",getByName);


medicineRouter.get("/medicine/sort",sortMedicine)



medicineRouter.get("/medicine/:id",getById);




medicineRouter.delete("/medicine/:id",deleteById)



export default medicineRouter;