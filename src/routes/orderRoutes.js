const express = require("express");
const {showOrder,createOrder} = require('../controllers/OrderControllers');
const router = express.Router();



router.post("/createOrder",createOrder);


router.get("/", showOrder)

module.exports = router;
