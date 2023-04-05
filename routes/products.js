const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

//Product Routes
//Since linked from server js treat each path as:
//products/createProduct
router.post("/createProduct", productsController.createProduct);

module.exports = router;