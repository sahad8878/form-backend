import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import employeeRoutes from './routes/employeeRoutes.js'
dotenv.config();


import "./config/connectDB.js";
const app = express();
app.use(express.json());

app.use(cors());
app.use("/", employeeRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));