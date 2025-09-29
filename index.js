import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// Shopify sends JSON payload
app.use(bodyParser.json());

// Webhook endpoint
app.post("/webhook/inventory-update", (req, res) => {
    const data = req.body;

    console.log("Inventory Item Updated:", data);  // ✅ yaha aap data dekh sakte ho

    // Shopify requires 200 OK response
    res.status(200).send("Received");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
