const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
});

const Products = new mongoose.model("products", ProductSchema);

module.exports = Products;
