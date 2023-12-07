const express = require('express');
const path = require('path');
const rootPath = require('../helper/path');
const route = express.Router();

route.get('/contactUs', (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'contact.html'));
})
route.post('/contactUs', (req,res,next)=>{
    console.log(req.body)
    res.redirect('/success');
})
route.get('/success',(req,res,next)=>{
    res.sendFile(path.join(rootPath,'views','success.html'));
})
module.exports = route;