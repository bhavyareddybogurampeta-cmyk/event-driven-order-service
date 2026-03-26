const express = require("express");

const app = express();
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "order-service" });
});

// Create order
app.post("/orders", (req, res) => {
  const { item, quantity } = req.body;

  if (!item || !quantity) {
    return res.status(400).json({ message: "Invalid order data" });
  }

  const order = {
    id: Date.now(),
    item,
    quantity,
    status: "CREATED"
  };

  console.log("Order created:", order);

  // Simulate event publish
  console.log("Publishing event: ORDER_CREATED");

  res.status(201).json(order);
});

module.exports = app;
