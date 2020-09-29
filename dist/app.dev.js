"use strict";

var express = require("express");

var exphbs = require("express-handlebars");

var _ = require("lodash");

var bodyParser = require("body-parser");

var router = require("./router");

var path = require('path');

var app = express();
app.engine("handlebars", exphbs({
  partialsDir: path.join(__dirname, 'views/layouts')
}));
app.set("view engine", "handlebars");
app.use(express["static"]("public"));
app.use(router);
var usePort = process.env.PORT ? process.env.PORT : 3000;
app.listen(usePort, function () {
  console.log("Up and running on port " + usePort + " 😎");
});