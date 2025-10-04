import express from "express"
import { addingProducts, getAllAddedProducts, getSingleProduct, deletingProduct } from "../controllers/productsControllers.js"
import upload from "../middleware/multers.js";
import { adminsAuth } from "../middleware/adminsAuth.js";



const productsRouter = express.Router();

productsRouter.post("/add",adminsAuth, upload.fields([{"name":"image1","maxCount":1},{"name":"image2","maxCount":1},{"name":"image3","maxCount":1},{"name":"image4","maxCount":1}]), addingProducts);
productsRouter.get("/list", getAllAddedProducts);
productsRouter.get("/getSingleProduct/:id", getSingleProduct);
productsRouter.delete("/delete/:id",adminsAuth, deletingProduct);

export default productsRouter