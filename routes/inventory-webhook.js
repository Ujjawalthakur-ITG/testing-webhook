const express = require("express");
const {webhookCreate } = require("../controllers/inventory-controller")
const router = express.Router();
router.post("/",webhookCreate)
module.exports = router;