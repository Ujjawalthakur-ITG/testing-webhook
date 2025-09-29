require("dotenv").config();
const axios = require("axios");

// Express handler for webhook POST request
const webhookCreate = async (req, res) => {
  try {
    console.log(req.body, "my payload");
    // You can do further processing here, e.g., call axios, etc.

    res.status(200).send("Webhook received");
  } catch (error) {
    console.error("Error handling webhook:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { webhookCreate };
