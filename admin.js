const express = require("express");
const router = express.Router();



router.get("/admin", (req, res, next) => {
    res.send('<form action= "/page1" method ="POST"><input type="text"  name="Title"><button type="submit">Submit</button></form>');
})
router.post("/page1", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
})
module.exports = router;
