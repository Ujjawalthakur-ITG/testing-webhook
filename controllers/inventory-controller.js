require("dotenv").config();
const axios = require("axios");

// Express handler for webhook POST request
const webhookCreate = async (req, res) => {
  try {
     const order = req.body;
        orderData = JSON.stringify(order, null, 2);
        conso.log(" New Order Rleeceived from Miva");
        console.log(orderData);
 
    // You can do further processing here, e.g., call axios, etc.

    res.status(200).send("Webhook received");
  } catch (error) {
    console.error("Error handling webhook:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { webhookCreate };
