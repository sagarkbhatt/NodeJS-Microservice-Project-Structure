const express = require("express");
const router = express.Router();
const BookController = require("./../controller/BookController");

router.get("/list", BookController.list);

module.exports = router;
