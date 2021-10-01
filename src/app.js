// Global imports/requires
const express = require("express");
const path = require("path");
const logger = require("morgan");
const methodOverride = require("method-override");

// requerimos el middleware de express-session
var session = require('express-session')

// Initializing app express()
const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, "../public")));
app.use(logger("dev")); // Logs every request in the console
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(session({
  secret: "deCamping",
  resave: false,
  saveUninitialized: true

}))

// Setting EJS as main Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// locals
app.locals.toThousand = (n) =>
  n
    .toString()
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Route system - requires
const mainRoutes = require("./routes/main-routes");
const productRoutes = require("./routes/products-routes");
const adminRoutes = require("./routes/admin-routes");
const usersRoutes = require("./routes/users-routes");


// Route system - use()
app.use("/", mainRoutes);
app.use("/products", productRoutes);
app.use("/admin", adminRoutes);
app.use("/users", usersRoutes);


// Server listening in port 3000
app.listen(3000, () => console.log("Server running smoothly in port 3000"));
