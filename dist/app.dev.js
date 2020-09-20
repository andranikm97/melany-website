"use strict";

var express = require("express");

var exphbs = require("express-handlebars");

var _ = require("lodash");

var bodyParser = require("body-parser");

var router = require("./router");

var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express["static"]("public"));
app.use(router);
var PORT = 3000;
app.listen(PORT, function () {
  console.log("Server started at localhost:".concat(PORT, "\uD83D\uDE0E"));
});