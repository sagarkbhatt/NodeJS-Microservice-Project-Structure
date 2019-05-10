const express = require("express");
const router = express.Router();
const BookController = require("./../controller/BookController");

router.get("/list", BookController.list);
router.post("/add", BookController.add);
router.delete("/delete", BookController.delete);

module.exports = router;
