const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/restaurants", (req, res) => {
  const filePath = path.join(__dirname, "data", "restaurants.json");
  const restaurantsData = JSON.parse(fs.readFileSync(filePath));
  res.render("restaurants", { restaurants: restaurantsData });
});

app.get("/restaurants/:id", (req, res) => {
  const restaurantId = req.params.id;
  res.render("restaurant-detail", { rid: restaurantId });
});

app.get("/recommend", (req, res) => {
  res.render("recommend");
});

app.post("/recommend", (req, res) => {
  const restaurant = req.body;
  const filePath = path.join(__dirname, "data", "restaurants.json");
  const restaurantsData = JSON.parse(fs.readFileSync(filePath));

  restaurantsData.push(restaurant);
  fs.writeFileSync(filePath, JSON.stringify(restaurantsData));

  res.redirect("/confirm");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/confirm", (req, res) => {
  res.render("confirm");
});

app.listen(3000);
