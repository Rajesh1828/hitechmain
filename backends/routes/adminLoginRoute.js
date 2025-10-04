import express from "express";
import { adminLogins } from "../controllers/adminControllers.js";

const adminLoginRouter = express.Router();

adminLoginRouter.post("/login", adminLogins);

export default adminLoginRouter;
