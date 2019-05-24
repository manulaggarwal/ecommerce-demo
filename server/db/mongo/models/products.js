import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
    product_id: String,
    max_price: Number,
    min_price: Number,
    availability: String,
    condition: String,
    currency: String,
    isSale: String,
    merchant: String,
    merchant_sourceURLs: String,
    asins: String,
    brand: String,
    categories: Array,
    ean: String,
    imageURLs: Array,
    keys: Array,
    manufacturer: String,
    manufacturerNumber: String,
    name: String,
    primaryCategory: String,
    upc: String,
    weight: String,
    product_description: String
});

export default mongoose.model("products", ProductSchema);