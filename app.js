const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
    console.log("Hi 1");
    next();
})

app.use("/", (req, res, next) => {
    res.send("<h1>Hello Second Time</h1>");
})

app.listen(3000);