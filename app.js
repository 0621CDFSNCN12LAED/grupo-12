const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => console.log('Server running smoothly in port 3000'));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/home.html"));
});

app.get("/producto-1", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/producto-1.html"));
});

app.get("/productCart", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/productCart.html"));
});

