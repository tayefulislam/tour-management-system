const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = require("./app");
const uri = process.env.URI;

// console.log(uri);

mongoose.connect(uri, () => {
  console.log("data base connect successful");
});

app.listen(port, () => {
  console.log("server is runnig at", port);
});
