import moongose from "mongoose";

const ProductSchema = new moongose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
},
{ timestamps: true }
);

const Product = moongose.model("Product", ProductSchema);

export default Product;
