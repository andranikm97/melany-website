"use strict";

var router = require("express").Router();

var fs = require("fs");

var path = require("path");

var _ = require("lodash");

var quality = "compressed";
router.get("/", function (req, res) {
  var carousel1Images = [];
  var carousel2Images = [];
  var directoryPath = path.join(__dirname, "public", "assets", "".concat(quality, "-quality"), "first-page-pics");
  fs.readdir(directoryPath, function (err, files) {
    var indexes = [];
    var count = 0;

    while (indexes.length < files.length) {
      indexes.push(count);
      count++;
    }

    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    var imagesCar1 = [];

    _.shuffle(indexes).forEach(function (index) {
      if (files[index] !== ".DS_Store") {
        imagesCar1.push("/assets/".concat(quality, "-quality/first-page-pics/") + files[index]);
      }
    });

    var imagesCar2 = [];

    _.shuffle(indexes).forEach(function (index) {
      if (files[index] !== ".DS_Store") {
        imagesCar2.push("/assets/".concat(quality, "-quality/first-page-pics/") + files[index]);
      }
    });

    console.log("");
    res.render("home", {
      imagesCar1Active: imagesCar1.shift(),
      imagesCar1: imagesCar1,
      imagesCar2Active: imagesCar2.shift(),
      imagesCar2: imagesCar2
    });
  });
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
  var directoryPath = path.join(__dirname, "public", "assets", "".concat(quality, "-quality"), catRoute);
  fs.readdir(directoryPath, function (err, files) {
    var images = [];

    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    files.forEach(function (file) {
      if (file !== ".DS_Store") {
        images.push("/assets/".concat(quality, "-quality/").concat(catRoute, "/").concat(file));
      }
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