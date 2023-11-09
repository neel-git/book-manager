const express = require("express");
const router = express.Router();

const {
  viewAllBooks,
  addNewBook,
  viewBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

router.route("/").get(viewAllBooks).post(addNewBook);
router.route("/:id").get(viewBook).patch(updateBook).delete(deleteBook);

module.exports = router;
