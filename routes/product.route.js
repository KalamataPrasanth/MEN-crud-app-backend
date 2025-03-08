const express = require('express');
// const Product = require('../models/product.model.js');
const router = express.Router();
const { getProducts, getSpecificProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');

//get product
router.get('/', getProducts);
router.get('/:id', getSpecificProduct);

//save a product
router.post('/', createProduct);

//update a product
router.put('/:id', updateProduct);

//delete a product
router.delete('/:id', deleteProduct);

module.exports = router