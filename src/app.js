const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const BookRoutes = require("./routes/BookRoutes");

// parse application/json
app.use(BodyParser.json());

app.use("/api/book", BookRoutes);

module.exports = app;
