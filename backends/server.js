import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectionDB from "./config/db.js"
import connectionCloudinary from "./config/cloudinary.js"
import adminLoginRouter from "./routes/adminLoginRoute.js"
import productsRouter from "./routes/productsRoute.js"





dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB & Cloudinary


connectionDB();
connectionCloudinary()
// Routes
 app.use("/api/admin",adminLoginRouter)
 app.use("/api/products",productsRouter)


//test
app.get("/", (req,res)=>{
    res.send("Hello from server")
})


app.listen(PORT ,()=>{
    console.log(`server is running on port ${PORT}`);
})