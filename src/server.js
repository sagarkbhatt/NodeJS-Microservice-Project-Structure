const app = require("./app");
const db = require("./db/DBConnection");

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log("Express server started and running!");
});
