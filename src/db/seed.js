const ListingsModel = require("../models/Listings");
const Listings = require("../listings.json");

ListingsModel.deleteMany().then(() => {
  ListingsModel.create(Listings).then(r => console.log(r));
});
