const mongoose = require("mongoose");

const serverURI = process.env.DATABASE_URL || "mongodb://mongodb/book";

class Database {
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

module.exports = new Database();
