const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    product: String,
    price: Number,
    status: { type: String, default: "Pending" }
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);