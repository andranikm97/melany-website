const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const quality = "compressed";

router.get("/", (req, res) => {
  const carousel1Images = [];
  const carousel2Images = [];

  const directoryPath = path.join(
    __dirname,
    "public",
    "assets",
    `${quality}-quality`,
    "first-page-pics"
  );

  fs.readdir(directoryPath, function (err, files) {
    const indexes = [];
    let count = 0;

    while (indexes.length < files.length) {
      indexes.push(count);
      count++;
    }

    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    const imagesCar1 = [];
    _.shuffle(indexes).forEach((index) => {
      if (files[index] !== ".DS_Store") {
        imagesCar1.push(
          `/assets/${quality}-quality/first-page-pics/` + files[index]
        );
      }
    });

    const imagesCar2 = [];
    _.shuffle(indexes).forEach((index) => {
      if (files[index] !== ".DS_Store") {
        imagesCar2.push(
          `/assets/${quality}-quality/first-page-pics/` + files[index]
        );
      }
    });
    console.log("");
    res.render("home", {
      imagesCar1Active: imagesCar1.shift(),
      imagesCar1: imagesCar1,
      imagesCar2Active: imagesCar2.shift(),
      imagesCar2: imagesCar2,
    });
  });
});

router.get("/home", (req, res) => {
  res.redirect("/");
});
router.get("/projects", (req, res) => {
  res.render("projects");
});

router.get("/projects/:project", (req, res) => {
  const requestedRoute = req.params.project;
  const catRoute = requestedRoute === "B&W" ? "BW" : requestedRoute;
  const directoryPath = path.join(
    __dirname,
    "public",
    "assets",
    `${quality}-quality`,
    catRoute
  );

  fs.readdir(directoryPath, function (err, files) {
    const images = [];
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files.forEach(function (file) {
      if (file !== ".DS_Store") {
        images.push(`/assets/${quality}-quality/${catRoute}/${file}`);
      }
    });

    res.render("project", {
      title: requestedRoute,
      data: images,
    });
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;