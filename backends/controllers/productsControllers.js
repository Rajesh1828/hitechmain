import { v2 as cloudinary } from 'cloudinary';
import productsModel from '../models/productsModel.js';



//adding products
const addingProducts = async (req, res) => {
    try {
        const { name, description, price, sizes, material, mrp, model, category, brand, features } = req.body;
        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);
        if (!name || !description || !price || !sizes || !material || !mrp || !model || !category || !brand || !features) {
            return res.status(400).json({ success: false, message: "All fields except MRP are required" });
        }

        if (!images || images.length === 0) {
            return res.status(400).json({ success: false, message: "At least one image is required" });
        }

        const imagesData = await Promise.all(
            images.map(async (item) => {
                const result = await cloudinary.uploader.upload(item.path);
                return result.secure_url;
            })
        );



        let parsedSizes;
        try {
            parsedSizes = JSON.parse(sizes);
        } catch (err) {
            return res.status(400).json({ success: false, message: "Invalid sizes format" });
        }

        const productsData = {
            name,
            description,
            price: Number(price),
            sizes: Array.isArray(sizes) ? sizes : JSON.parse(sizes),
            material,
            mrp,
            model,
            category,
            brand,
            features,
            images: imagesData
        };

        const newProduct = await productsModel.create(productsData);
        res.json({ success: true, message: "Product added successfully", products: newProduct });


    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" })
    }
}


//get all products
const getAllAddedProducts = async (req, res) => {
    try {
        const products = await productsModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}


//get single product
const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await productsModel.findById(id);
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}


//deleting product
const deletingProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await productsModel.findByIdAndDelete(id);
        res.json({ success: true, products });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export { addingProducts, getAllAddedProducts, getSingleProduct, deletingProduct };