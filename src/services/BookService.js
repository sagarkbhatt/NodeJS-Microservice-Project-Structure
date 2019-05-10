const Book = require("../models/Book");

function BookService() {
  return {
    list: () => Book.find(),
    add: data => new Book(data).save(),
    delete: id => Book.findByIdAndRemove(id)
  };
}

module.exports = BookService();
