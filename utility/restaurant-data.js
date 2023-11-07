const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "restaurants.json");

function getStoredRestaurant() {
  const restaurantsData = JSON.parse(fs.readFileSync(filePath));

  return restaurantsData;
}

function saveRestaurants(restaurants) {
  fs.writeFileSync(filePath, JSON.stringify(restaurants));
}

module.exports = {
  getStoredRestaurant: getStoredRestaurant,
  saveRestaurants: saveRestaurants,
};
