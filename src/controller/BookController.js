const Book = require("./../services/BookService");
function BookController() {
  const listBooks = function(req, res) {
    Book.list().then(data => res.json(data));
  };

  const addBooks = function(req, res) {
    Book.add(req.body).then(data => res.json(data));
  };

  const deleteBooks = function(req, res) {
    Book.delete(req.param.id).then(data => res.json(data));
  };

  return {
    list: listBooks,
    add: addBooks,
    delete: deleteBooks
  };
}

module.exports = BookController();
