const express = require('express');
const path = require('path');
const rootPath = require('../helper/path');
const route = express.Router();

route.get("/add-product", (req, res, next) => {
    // res.send(`<form action= "/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button>
    // </form>`);
    res.sendFile(path.join(rootPath, 'views', 'add-product.html'));
});

route.post("/add-product", (req, res, next) => {
    console.log(req.body.title);
    res.redirect('/');
});

module.exports = route;