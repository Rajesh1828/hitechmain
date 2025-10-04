
import mongoose from "mongoose";


const productsSchema = new mongoose.Schema({

    name : {type: String, required: true},
    description : {type: String, required: true},
    price : {type: Number, required: true},
    sizes : {type: [String], required: true},
    material : {type: String, required: true},
    mrp : {type: Number, required: true},
    images : {type: [String], required: true},
    model : {type: String, required: true},
    category : {type: String, required: true},
    brand : {type: String, required: true},
    features : {type: String, required: true},
    date : {type: Date, default: Date.now}

},{timestamps: true});


const productsModel = mongoose.models.products || mongoose.model("products", productsSchema);

export default productsModel;