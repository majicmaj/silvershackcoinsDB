const express = require("express");
const router = express.Router();
const listingsController = require("../controllers/listings");

router.get("/", listingsController.index);
router.get("/id/:id", listingsController.show);
router.post("/", listingsController.create);
router.put("/:id", listingsController.edit);
router.delete("/:id", listingsController.delete);

module.exports = router;
