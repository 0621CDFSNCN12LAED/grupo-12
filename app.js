const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => console.log('Server running smoothly in port 3000'));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/home.html"));
});


app.get("/productCart", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/productCart.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
});

app.get("/productDetail", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/productDetail.html"));
});

app.get("/fullpage", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/fullpage.html"));
});

