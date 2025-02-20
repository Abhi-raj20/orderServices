const Order = require('../models/OrderModels');
const axios = require("axios");

exports.createOrder = async (req, res) => {
    const {product,price,status} =req.body
    try {
        const order = new Order({product,price,status});
        await order.save();

      
        await axios.post(`${process.env.PAYMENT_SERVICE_URL}/createPayment`, { orderId: order._id, amount: order.price });

        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



exports.showOrder = async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
}