const express = require("express");
const app = express();
const path = require('path');
const rootPath = require('./helper/path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
app.use(express.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootPath, 'views', 'error.html'));
});
app.listen(3000);