const express = require("express");
const app = express();
const BodyParser = require("body-parser");

app.use(BodyParser.urlencoded({ extended: false }));
app.use("/add-product", (req, res, next) => {
    res.send('<form action = "/nextpage" method="POST"><input type ="text" name = "Title"><input type="number" name ="size" required><button type="submit"> Submit</button></form>')
})
app.use("/nextpage", (req, res, next) => {
    console.log(req.body.Title, req.body.size);
    res.redirect("/add-product");
})
app.listen(3000);