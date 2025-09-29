require("dotenv").config();
const axios = require("axios");

const webhookCreate = async (req, res) => {
    console.log(req.body,"my paylorddd")
  res.status(200).send("Webhook received");
};

module.exports = { webhookCreate };
