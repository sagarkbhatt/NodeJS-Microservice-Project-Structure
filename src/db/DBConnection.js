const mongoose = require("mongoose");

console.log('====================');
console.log(process.env.DATABASE_URL);
console.log('====================');

const serverURI = process.env.DATABASE_URL || "mongodb://mongo/book";

class DBConnection {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(serverURI, { useNewUrlParser: true })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch(err => {
        console.error("Database connection error");
        console.log( err);
      });
  }
}

module.exports = new DBConnection();
