function BookController() {
  const listBooks = function(req, res) {
    res.json("List Books");
  };

  return {
    list: listBooks
  };
}

module.exports = BookController();
