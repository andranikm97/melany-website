const router = require("express").Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  res.render("home");
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
  const directoryPath = path.join(__dirname, "public", "assets", catRoute);

  fs.readdir(directoryPath, function (err, files) {
    files.shift(); // remove .DS-store reference
    const images = [];
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files.forEach(function (file) {
      images.push(`/assets/${catRoute}/${file}`);
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