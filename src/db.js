const mongoose = require("mongoose");

const server = process.env.DATABASE_URL || "mongodb://mongo:27017";
const database = "book";

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`, { useNewUrlParser: true })
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
