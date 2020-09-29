const express = require("express");
const exphbs = require("express-handlebars");
const _ = require("lodash");
const bodyParser = require("body-parser");
const router = require("./router");
const path = require('path');

const app = express();
app.engine("handlebars", exphbs({
  partialsDir: path.join(__dirname, 'views/layouts'),
}));

app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(router);

const usePort = process.env.PORT ? process.env.PORT : 3000;
app.listen(usePort, function () {
  console.log("Up and running on port " + usePort + " 😎");
});