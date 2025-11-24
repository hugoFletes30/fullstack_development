const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" })); // allow image base64

// GET all products
app.get("/products", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM products");
  res.json(rows);
});

// GET product by ID
app.get("/products/:id", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [req.params.id]);
  res.json(rows[0]);
});

// POST add product
app.post("/products", async (req, res) => {
  const { name, price, description, category, image } = req.body;

  await db.query(
    "INSERT INTO products (name, price, description, category, image) VALUES (?, ?, ?, ?, ?)",
    [name, price, description, category, image]
  );

  res.json({ message: "Product added!" });
});

app.listen(4000, () => console.log("API running on http://localhost:4000"));

app.get("/", (req, res) => {
  res.send("API is running...");
});
