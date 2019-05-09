const express = require("express");
const app = express();
const BookRoutes = require("./routes/BookRoutes");

app.use("/api/book", BookRoutes);

module.exports = app;
