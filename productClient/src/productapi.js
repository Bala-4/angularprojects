// productapi.js
const express = require("express");
const router = express.Router();

// Example endpoints
router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Sample Product", price: 100 }]);
});

router.post("/", (req, res) => {
  res.json({ message: "Product created successfully" });
});

router.put("/:id", (req, res) => {
  res.json({ message: `Product ${req.params.id} updated successfully` });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `Product ${req.params.id} deleted successfully` });
});

module.exports = router;
