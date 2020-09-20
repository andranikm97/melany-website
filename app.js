const express = require("express");
const exphbs = require("express-handlebars");
const _ = require("lodash");
const bodyParser = require("body-parser");
const router = require("./router");

const app = express();
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(router);

const usePort = process.env.PORT ? process.env.PORT : 3000;
app.listen(usePort, function () {
  console.log("Up and running on port " + usePort + " 😎");
});
