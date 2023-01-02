import exprss from "express";
import "dotenv/config"
import { configureDb } from "./config/dbConnect.js";
import customerRouter from "./src/routers/customerRouter.js";
import adminRouter from "./src/routers/adminRouter.js";
import medicineRouter from "./src/routers/medicineRouter.js";
import orderRouter from "./src/routers/orderRoutes.js";
const app = exprss();

app.use(exprss.json());

app.use(customerRouter);
app.use(adminRouter);
app.use(medicineRouter);
app.use(orderRouter);

configureDb();

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`server is running at ${process.env.SERVER_PORT}`);
})