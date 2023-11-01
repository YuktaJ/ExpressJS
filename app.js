const express = require("express");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const BodyParser = require("body-parser"); //npm install --save body-parser

app.use(BodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.statusCode = 404;
    res.send("<h1>Page Not Found</h1>");
})

app.listen(3000);
