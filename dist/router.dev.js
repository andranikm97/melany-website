"use strict";

var router = require("express").Router();

var fs = require("fs");

var path = require("path");

router.get("/", function (req, res) {
  res.render("home");
});
router.get("/home", function (req, res) {
  res.redirect("/");
});
router.get("/projects", function (req, res) {
  res.render("projects");
});
router.get("/projects/:project", function (req, res) {
  var requestedRoute = req.params.project;
  var catRoute = requestedRoute === "B&W" ? "BW" : requestedRoute;
  var directoryPath = path.join(__dirname, "public", "assets", catRoute);
  fs.readdir(directoryPath, function (err, files) {
    files.shift(); // remove .DS-store reference

    var images = [];

    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    files.forEach(function (file) {
      images.push("/assets/".concat(catRoute, "/").concat(file));
    });
    res.render("project", {
      title: requestedRoute,
      data: images
    });
  });
});
router.get("/about", function (req, res) {
  res.render("about");
});
module.exports = router;