// Global imports/requires
const express = require("express");
const path = require("path");

// Initializing express app
const app = express();

// Requiring routes modules
const mainRoutes = require("./routes/main-routes");
const productRoutes = require("./routes/products-routes");

// Activating server in port 3000
app.listen(3000, () => console.log("Server running smoothly in port 3000"));

app.use(express.static(path.join(__dirname, "../public")));

// Declaring routes
app.use("/", mainRoutes);
app.use("/products", productRoutes);
