const express = require('express');
const router = express.Router();

let products = [];

// GET all products
router.get('/', (req, res) => {
    res.json(products);
});

// POST add a product
router.post('/', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

// DELETE all products
router.delete('/', (req, res) => {
    products = [];
    res.status(204).send();
});

module.exports = router;
