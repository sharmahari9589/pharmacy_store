import express from "express";
import { pleceOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/order/save",pleceOrder)

export default orderRouter;