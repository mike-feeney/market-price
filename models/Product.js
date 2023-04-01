const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    upc: {
        type: String,
        require: true,
    },
    locations: [LocationSchema],
    createdAt: {
    type: Date,
    default: Date.now,
    },
});

const LocationSchema = new mongoose.Schema({
    locationName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    prices: [PriceSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const PriceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Product", ProductSchema);