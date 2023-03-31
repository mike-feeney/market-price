const express = require("express");
const router = express.router();
const productsController = require("../controllers/products");
const { ensureAuth } = require("../middlware/auth");

//Product Routes
//Since linked from server js treat each path as:
//products/createProduct
router.post("/createProduct", productsController.createProduct);

module.exports = router;