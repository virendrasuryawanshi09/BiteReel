const express = require('express');
const foodPartnerController = require("../controllers/foodPartnerController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


/* /api/food-partner/:id */
router.get("/:id",
    authMiddleware.authUserMiddleware,
    foodPartnerController.getFoodPartnerById)

module.exports = router;