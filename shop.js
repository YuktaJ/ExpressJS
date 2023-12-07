const express = require('express');
const rootPath = require('../helper/path');
const path = require('path');
const routes = express.Router();

routes.get("/", (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'shop.html'));
});

module.exports = routes;